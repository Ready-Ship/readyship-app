import { DBDataSource } from '../config';

export interface CreateAccountParams {
  email: string;
  password: string;
  name: string;
}

export class AccountModel {
  async create(params: CreateAccountParams) {
    const { email, password, name } = params;
    const query =
      'INSERT INTO account (email, password, name) VALUES ($1, $2, $3)';
    return DBDataSource.instance.client.query(query, [email, password, name]);
  }

  async get() {
    const query = 'SELECT * FROM account';
    return DBDataSource.instance.client.query(query);
  }
}
