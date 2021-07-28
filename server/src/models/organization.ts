import { DBDataSource } from '../config';

export interface CreateOrganizationParams {
  creatorid: number;
  name: string;
}

export class OrganizationModel {
  client = DBDataSource.instance.client;

  async create(params: CreateOrganizationParams) {
    const { creatorid, name } = params;
    const query = 'INSERT INTO organization (creatorid, name) VALUES ($1, $2)';
    return this.client.query(query, [creatorid, name]);
  }

  async find() {
    const query = 'SELECT * FROM organization';
    const result = await this.client.query(query);
    return result.rows;
  }

  async findById(id: string) {
    const query = 'SELECT * FROM organization WHERE id = $1';
    const result = await this.client.query(query, [id]);
    return result.rows[0];
  }

  async findByUserId(userId: string) {
    const query =
      'SELECT o.* FROM organization AS o JOIN organization_has_member AS ohm ON o.id = ohm.organizationid where ohm.userid = $1';
    const result = await this.client.query(query, [userId]);
    return result.rows;
  }

  async findByOrganizationIdAndUserId(organizationId: string, userId: string) {
    const query =
      'SELECT o.* FROM organization AS o JOIN organization_has_member AS ohm ON o.id = ohm.organizationid where o.id = $1 AND ohm.userid = $2';
    const result = await this.client.query(query, [organizationId, userId]);
    return result.rows[0];
  }

  async joinOrganization(organizationId: string, userId: string) {
    const query =
      'INSERT INTO organization_has_member (organizationid, userid) VALUES ($1, $2)';
    return this.client.query(query, [organizationId, userId]);
  }

  async leaveOrganization(organizationid: string, userId: string) {
    const query =
      'DELETE FROM organization_has_member WHERE organizationid = $1 AND userid = $2';
    return this.client.query(query, [organizationid, userId]);
  }

  async deleteMany() {
    const query = 'DELETE FROM organization';
    return this.client.query(query);
  }
}

export const Organization = new OrganizationModel();
