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

  afterEach(() => {
    return Account.deleteMany();
  });

  it('should create and find', async () => {
    const data = {
      name: 'mr. test',
      email: 'test@test.com',
      password: 'test',
    };
    const account = await Account.create(data);

    for (const key in data) {
      expect(account[key]).toBe((data as any)[key]);
    }
  });

  it('should findById', async () => {
    const data = {
      name: 'mr. test',
      email: 'test@test.com',
      password: 'test',
    };
    await Account.create(data);

    const account = await Account.findById((await Account.find())[0].id);
    for (const key in data) {
      expect(account[key]).toBe((data as any)[key]);
    }
  });

  it('should findByEmail', async () => {
    const data = {
      name: 'mr. test',
      email: 'test@test.com',
      password: 'test',
    };
    await Account.create(data);

    const account = await Account.findByEmail(data.email);
    for (const key in data) {
      expect(account[key]).toBe((data as any)[key]);
    }
  });
});
