import { DBDataSource } from '../config';
import { AccountModel } from './account';

describe('AccountModel', () => {
  const db = DBDataSource.instance;

  beforeAll(async () => {
    await db.connect();
    await db.drop();
    return db.create();
  });

  afterAll(async () => {
    await db.drop();
    return db.close();
  });

  let Account: AccountModel;

  beforeEach(() => {
    Account = new AccountModel();
  });

  it('should create', async () => {
    const data = {
      name: 'mr. test',
      email: 'test@test.com',
      password: 'test',
    };
    await Account.create(data);
    const results = await Account.get();

    expect(results.rows).toHaveLength(1);
    for (const key in data) {
      expect(results.rows[0][key]).toBe((data as any)[key]);
    }
  });
});
