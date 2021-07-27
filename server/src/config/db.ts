import { Client } from 'pg';
import fs from 'fs';
import path from 'path';
import * as ENV from './env';

type DBMode = 'test' | 'development' | 'production';

export class DBDataSource {
  static _instance: DBDataSource | null;
  static get instance() {
    if (!DBDataSource._instance) {
      DBDataSource._instance = new DBDataSource(
        (ENV.NODE_ENV as DBMode) || 'development'
      );
    }
    return DBDataSource._instance;
  }

  client: Client;

  constructor(mode: DBMode) {
    if (mode === 'test') {
      this.client = new Client({
        host: ENV.DB_HOST,
        port: ENV.DB_PORT,
        user: ENV.DB_USER,
        password: ENV.DB_PASSWORD,
        database: 'test',
      });
    } else {
      this.client = new Client({
        host: ENV.DB_HOST,
        port: ENV.DB_PORT,
        user: ENV.DB_USER,
        password: ENV.DB_PASSWORD,
      });
    }
  }

  async connect() {
    return this.client.connect();
  }

  async close() {
    return this.client.end();
  }

  async test() {
    return this.client.query('SELECT NOW()');
  }

  async getScript(name: string) {
    const file = path.join(__dirname, `../../db/${name}.sql`);
    const contents = await fs.promises.readFile(file);
    return contents;
  }

  async create() {
    const contents = await this.getScript('create');

    return this.client.query(contents.toString());
  }

  async seed() {
    const contents = await this.getScript('seed');
    return this.client.query(contents.toString());
  }

  async drop() {
    const contents = await this.getScript('drop');
    return this.client.query(contents.toString());
  }
}
