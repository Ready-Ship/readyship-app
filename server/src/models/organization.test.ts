import { DBDataSource } from '../config';
import { OrganizationModel } from './organization';

describe('OrganizationModel', () => {
  const db = DBDataSource.instance;
  const client = db.client;

  beforeAll(async () => {
    await db.connect();
    await db.drop();
    await db.create();
    return db.seed();
  });

  afterAll(async () => {
    // await db.drop();
    return db.close();
  });

  let Organization: OrganizationModel;

  beforeEach(() => {
    Organization = new OrganizationModel();
  });

  it('should get and create', async () => {
    const userId = (await client.query('SELECT id FROM account LIMIT 1'))
      .rows[0].id;

    await Organization.create({ creatorid: userId, name: 'my org' });

    const result = await Organization.find();

    expect(result).toHaveLength(2);

    await client.query('DELETE FROM organization WHERE name = $1', ['my org']);
  });

  it('should findById', async () => {
    const want = (await client.query('SELECT * from organization LIMIT 1'))
      .rows[0];

    const got = await Organization.findById(want.id);

    expect(got).toEqual(got);
  });

  it('should findByUserId', async () => {
    const userId = (await client.query('SELECT id FROM account LIMIT 1'))
      .rows[0].id;

    const organizations = await Organization.findByUserId(userId);

    expect(organizations).toHaveLength(1);
  });

  it('should findByOrganizationIdAndUserId', async () => {
    const userId = (await client.query('SELECT id FROM account LIMIT 1'))
      .rows[0].id;
    const want = (await client.query('SELECT * FROM organization LIMIT 1'))
      .rows[0];

    const got = await Organization.findByOrganizationIdAndUserId(
      want.id,
      userId
    );

    expect(got).toEqual(want);
  });

  it('should join and leave', async () => {
    const userId = (await client.query('SELECT id FROM account LIMIT 1'))
      .rows[0].id;

    await Organization.create({ creatorid: userId, name: 'my org' });

    const organization = (
      await client.query(
        'SELECT id FROM organization WHERE name = $1 LIMIT 1',
        ['my org']
      )
    ).rows[0];

    await Organization.joinOrganization(organization.id, userId);
    let result = await client.query(
      'SELECT * from organization_has_member WHERE organizationid = $1 AND userid = $2',
      [organization.id, userId]
    );
    expect(result.rows).toHaveLength(1);

    await Organization.leaveOrganization(organization.id, userId);
    result = await client.query(
      'SELECT * from organization_has_member WHERE organizationid = $1 AND userid = $2',
      [organization.id, userId]
    );
    expect(result.rows).toHaveLength(0);
  });

  it('should join multiple users to an organization', async () => {
    await client.query(
      'INSERT INTO account (email, password, name) VALUES ($1, $2, $3)',
      ['a@b.com', 'pass', 'hello']
    );
    const userId = (await client.query('SELECT id FROM account LIMIT 1'))
      .rows[0].id;
    await Organization.create({ creatorid: userId, name: 'join multiple' });
    const organization = (
      await client.query(
        'SELECT id FROM organization WHERE name = $1 LIMIT 1',
        ['join multiple']
      )
    ).rows[0];

    const users = (await client.query('SELECT * FROM account')).rows;

    await Organization.joinOrganizationMultiple(
      organization.id,
      users.map(({ id }) => id)
    );

    const members = await Organization.getUserIdsByOrganizationId(
      organization.id
    );

    expect(members).toHaveLength(users.length);
  });
});
