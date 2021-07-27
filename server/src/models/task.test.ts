import { DBDataSource } from '../config';
import { TaskModel } from './task';

describe('TaskModel', () => {
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

  let Task: TaskModel;

  beforeEach(() => {
    Task = new TaskModel();
  });

  it('should getByProjectId', async () => {
    const projectId = (await client.query('SELECT id FROM project LIMIT 1'))
      .rows[0].id;

    const results = await Task.getByProjectId(projectId);

    expect(results.rows).toHaveLength(1);

    for (const row of results.rows) {
      expect(row['projectid']).toBe(projectId);
    }
  });

  it('should getByProjectIdAndUserId', async () => {
    const accountId = (await client.query('SELECT id FROM account LIMIT 1'))
      .rows[0].id;
    const projectId = (await client.query('SELECT id FROM project LIMIT 1'))
      .rows[0].id;

    const results = await Task.getByProjectIdAndUserId(projectId, accountId);

    expect(results.rows).toHaveLength(1);

    for (const row of results.rows) {
      expect(row['projectid']).toBe(projectId);
      expect(row['accountid']).toBe(accountId);
    }
  });
});
