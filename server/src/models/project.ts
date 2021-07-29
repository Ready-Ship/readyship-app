import { DBDataSource } from '../config';

export interface CreateProjectParams { //do we need the "export" here?
  title: string;
  description: string;
  creatorid: number;
}

export class ProjectModel {
  client = DBDataSource.instance.client;

  //create proj
  async createProject(params: CreateProjectParams) {
    const { title, description, creatorid } = params; 
    const query = 'INSERT INTO project (title, description, creatorid) VALUES ($1, $2, $3) RETURNING *';
    const result = await this.client.query(query, [title, description, creatorid]);
    return result.rows[0]
  }

  //delete proj
  async deleteProject(projectId: number) {
    const query = 'DELETE FROM project WHERE projectid = $1';
    return this.client.query(query, [projectId]);
  }

  // //delete many projs
  // async deleteManyProjects(projectIds: string[]) {
  //   const query = 'DELETE FROM project WHERE projectid = $1';
  //   return this.client.query(query, [projectIds]);
  // }

  //find proj
  async findById(id: number) {
    const query = 'SELECT * FROM project WHERE id = $1';
    const result = await this.client.query(query, [id]);
    return result.rows[0];
  }

  // find projs assigned to user
  async findByUserId(userId: number) {
    const query =
      'SELECT p.* FROM project AS p JOIN project_has_assignee AS pha ON p.projectid = pha.projectid WHERE pha.userid = $1';
    const result = await this.client.query(query, [userId]);
    return result.rows;
  }
  
  // get project by projectid and userid
  async findByProjectIdAndUserId(projectId: number, userId: number) {
    const query =
      'SELECT p.* FROM project AS p JOIN project_has_assignee AS pha ON p.id = pha.projectid WHERE p.id = $1 AND pha.userid = $2';
    const result = await this.client.query(query, [projectId, userId]);
    return result.rows[0];
  }

  // get all users from project id
  async getUserIdsByProjectId(projectId: number) {
    const query = 'SELECT * from project_has_assignee WHERE projectid = $1';
    const result = await this.client.query(query, [projectId]);
    return result.rows;
  }

  // get all available users 
  async getAllAvailableUsers(projectId: number) {
    const query = 'SELECT u.* FROM account AS u WHERE u.id NOT IN (SELECT pha.userid FROM project_has_assignee AS pha WHERE pha.projectid = $1)';
    const result = await this.client.query(query, [projectId]);
    return result.rows;
  }

  //assign user to project
  async assignUser(projectId: number, userId: number) {
    const query =
      'INSERT INTO project_has_assignee (projectid, userid) VALUES ($1, $2)';
    return this.client.query(query, [projectId, userId]);
  }

  //assign multiple users to project
  async assignMultipleUsers(projectId: number, userIds: number[]) {
    if (userIds.length === 0) {
      throw Error('must select at least one user for assignment');
    }

    let query =
      'INSERT INTO project_has_assignee (projectid, userid) VALUES ' +
      userIds.map((_, i) => `($1, $${i + 2}), `).join('');
    query = query.slice(0, query.length - 2);
    return this.client.query(query, [projectId, ...userIds]);
  }

  // unassign user from project
  async unassignUser(projectId: number, userId: number) {
    const query =
      'DELETE FROM project_has_assignee WHERE projectid = $1 AND userid = $2';
    return this.client.query(query, [projectId, userId]);
  }

  // unassign many users from project
//   async unassignManyUsers() {
//     const query = 'DELETE FROM project_has_assignee (projectid, userid) VALUES ' + 
//     ;
//     return this.client.query(query);
//   }



}

export const Project = new ProjectModel();
