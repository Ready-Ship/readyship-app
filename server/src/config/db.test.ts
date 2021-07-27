import { DBDataSource } from './db';

describe('DBDataSource', () => {
  const db = DBDataSource.instance;

  beforeAll(async () => {
    await db.connect();
  });

  afterAll(async () => {
    return db.close();
  });

  it('should create', async () => {
    return db.create();
  });

  it('should seed', async () => {
    return db.seed();
  });

  it('should drop', async () => {
    return db.drop();
  });
});
