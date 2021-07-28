import { query } from 'express';
import { DBDataSource } from '../config';

interface CreateProjectParams {
  title: string;
  creatorid: string;
}

export class ProjectModel {
  client = DBDataSource.instance.client;

  async create(params: CreateProjectParams) {
    const {title, creatorid} = params;
    return this.client.query('INSERT INTO project (creatorid, title) VALUES ($1, $2)', [creatorid, title]);
  };

  async findById(id: string) {
    const query = 'SELECT * FROM project WHERE id = $1';
    const result = await this.client.query(query, [id]);
    return result.rows[0];
  };

  async findByUserId(userId: string) {
    const query = 'SELECT * FROM project JOIN project_has_assignee AS pha ON project.id = pha.projectid where pha.userid = $1';
    const result = await this.client.query(query, pha.userid);
    return result.rows; //at 0 index?
  }
}

export const Project = new ProjectModel();