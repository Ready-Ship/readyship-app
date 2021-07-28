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
    await db.drop();
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
});
