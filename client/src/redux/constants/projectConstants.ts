import { UserInfo } from './userConstants';

// create a PROJECT
export const CREATE_PROJECT_REQUEST = 'CREATE_PROJECT_REQUEST';
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
export const CREATE_PROJECT_FAIL = 'CREATE_PROJECT_FAIL';

export type Project = {
  id: number,
  title: string,
  description: string
}

export type ProjectsList = {
  projectsList: Project[]
}

export type ProjectInfo = {
  title: string,
  description: string,
  creatorId?: number,
  assigned?: UserInfo[]
}

export interface CreateProjectRequest {
  type: typeof CREATE_PROJECT_REQUEST;
}

export interface CreateProjectSuccess {
  type: typeof CREATE_PROJECT_SUCCESS;
  payload: {
    projectInfo: ProjectInfo
  };
}

export interface CreateProjectFail {
  type: typeof CREATE_PROJECT_FAIL;
  payload: any
}

// update a PROJECT
export const UPDATE_PROJECT_REQUEST = 'UPDATE_PROJECT_REQUEST';
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS';
export const UPDATE_PROJECT_FAIL = 'UPDATE_PROJECT_FAIL';

export interface UpdateProjectRequest {
  type: typeof UPDATE_PROJECT_REQUEST;
}

export interface UpdateProjectSuccess {
  type: typeof UPDATE_PROJECT_SUCCESS;
  payload: {
    projectInfo: ProjectInfo
  };
}

export interface UpdateProjectFail {
  type: typeof UPDATE_PROJECT_FAIL;
  payload: any
}

// delete a PROJECT
export const DELETE_PROJECT_REQUEST = 'DELETE_PROJECT_REQUEST';
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAIL = 'DELETE_PROJECT_FAIL';

export interface DeleteProjectRequest {
  type: typeof DELETE_PROJECT_REQUEST;
}

export interface DeleteProjectSuccess {
  type: typeof DELETE_PROJECT_SUCCESS;
  payload: any;
}

export interface DeleteProjectFail {
  type: typeof DELETE_PROJECT_FAIL;
  payload: any;
}


// fetch all current user prjects
export const USER_PROJECTS_REQUEST = 'USER_PROJECTS_REQUEST';
export const USER_PROJECTS_SUCCESS = 'USER_PROJECTS_SUCCESS';
export const USER_PROJECTS_FAIL = 'USER_PROJECTS_FAIL';

export interface UserProjectsRequest {
  type: typeof USER_PROJECTS_REQUEST;
}

export interface UserProjectsSuccess {
  type: typeof USER_PROJECTS_SUCCESS;
  payload: {
    projectsList: ProjectsList
  };
}

export interface UserProjectsFail {
  type: typeof USER_PROJECTS_FAIL;
  payload: any;
}

// fetch all current user assigned projects: ASSIGNED_PROJECTS_REQUEST
export const ASSIGNED_PROJECTS_REQUEST = 'ASSIGNED_PROJECTS_REQUEST';
export const ASSIGNED_PROJECTS_SUCCESS = 'ASSIGNED_PROJECTS_SUCCESS';
export const ASSIGNED_PROJECTS_FAIL = 'ASSIGNED_PROJECTS_FAIL';

export interface AssignedProjectsRequest {
  type: typeof ASSIGNED_PROJECTS_REQUEST;
}

export interface AssignedProjectsSuccess {
  type: typeof ASSIGNED_PROJECTS_SUCCESS;
  payload: {
    projectsList: ProjectsList
  };
}

export interface AssignedProjectsFail {
  type: typeof ASSIGNED_PROJECTS_FAIL;
  payload: any;
}

// single project for assigner
export const ASSIGNER_SINGLE_PROJECT_REQUEST = 'ASSIGNER_SINGLE_PROJECT_REQUEST';
export const ASSIGNER_SINGLE_PROJECT_SUCCESS = 'ASSIGNER_SINGLE_PROJECT_SUCCESS';
export const ASSIGNER_SINGLE_PROJECT_FAIL = 'ASSIGNER_SINGLE_PROJECT_FAIL';

export interface AssignerSingleProjectRequest {
  type: typeof ASSIGNER_SINGLE_PROJECT_REQUEST;
}

export interface AssignerSingleProjectSuccess {
  type: typeof ASSIGNER_SINGLE_PROJECT_SUCCESS;
  payload: {
    projectInfo: ProjectInfo
  };
}

export interface AssignerSingleProjectFail {
  type: typeof ASSIGNER_SINGLE_PROJECT_FAIL;
  payload: any;
}

// single project for assignee
export const ASSIGNEE_SINGLE_PROJECT_REQUEST = 'ASSIGNEE_SINGLE_PROJECT_REQUEST';
export const ASSIGNEE_SINGLE_PROJECT_SUCCESS = 'ASSIGNEE_SINGLE_PROJECT_SUCCESS';
export const ASSIGNEE_SINGLE_PROJECT_FAIL = 'ASSIGNEE_SINGLE_PROJECT_FAIL';

export interface AssigneeSingleProjectRequest {
  type: typeof ASSIGNEE_SINGLE_PROJECT_REQUEST;
}

export interface AssigneeSingleProjectSuccess {
  type: typeof ASSIGNEE_SINGLE_PROJECT_SUCCESS;
  payload: {
    projectInfo: ProjectInfo
  };
}

export interface AssigneeSingleProjectFail {
  type: typeof ASSIGNEE_SINGLE_PROJECT_FAIL;
  payload: any
}

export type ProjectsDispatchTypes = 
CreateProjectRequest | CreateProjectSuccess | CreateProjectFail |
UpdateProjectRequest | UpdateProjectSuccess | UpdateProjectFail |
DeleteProjectRequest | DeleteProjectSuccess | DeleteProjectFail |
UserProjectsRequest | UserProjectsSuccess | UserProjectsFail |
AssignedProjectsRequest | AssignedProjectsSuccess | AssignedProjectsFail |
AssignerSingleProjectRequest | AssignerSingleProjectSuccess | AssignerSingleProjectFail |
AssigneeSingleProjectRequest | AssigneeSingleProjectSuccess | AssigneeSingleProjectFail;