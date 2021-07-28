import { DBDataSource } from '../config';

export class TaskModel {
  async getByProjectIdAndUserId(projectId: number, userId: number) {
    return DBDataSource.instance.client.query(
      'SELECT t.*, aht.* FROM task AS t JOIN account_has_task AS aht ON t.id = aht.taskid WHERE t.projectid = $1 AND aht.userid = $2',
      [projectId, userId]
    );
  }

  async getByProjectId(projectId: number) {
    return DBDataSource.instance.client.query(
      'SELECT * FROM task where projectid = $1',
      [projectId]
    );
  }
}
