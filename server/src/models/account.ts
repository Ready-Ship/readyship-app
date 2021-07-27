import { DBDataSource } from '../config';

export interface CreateAccountParams {
  email: string;
  password: string;
  name: string;
}

export class AccountModel {
  client = DBDataSource.instance.client;

  async create(params: CreateAccountParams) {
    const { email, password, name } = params;
    const query =
      'INSERT INTO account (email, password, name) VALUES ($1, $2, $3)';
    return this.client.query(query, [email, password, name]);
  }

  async find() {
    const query = 'SELECT * FROM account';
    const result = await this.client.query(query);
    return result.rows;
  }

  async findById(id: string) {
    const query = 'SELECT * FROM account WHERE id = $1';
    const result = await this.client.query(query, [id]);
    if (result.rows.length === 0) {
      throw Error('account not found');
    }
    return result.rows[0];
  }

  async findByEmail(email: string) {
    const query = 'SELECT * FROM account WHERE email = $1';
    const result = await this.client.query(query, [email]);
    if (result.rows.length === 0) {
      throw Error('account not found');
    }
    return result.rows[0];
  }

  async deleteMany() {
    const query = 'DELETE FROM account';
    return this.client.query(query);
  }
}

export const Account = new AccountModel();
