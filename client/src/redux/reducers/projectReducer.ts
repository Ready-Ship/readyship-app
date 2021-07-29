import {
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAIL,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  USER_PROJECTS_REQUEST,
  USER_PROJECTS_SUCCESS,
  USER_PROJECTS_FAIL,
  ASSIGNED_PROJECTS_REQUEST,
  ASSIGNED_PROJECTS_SUCCESS,
  ASSIGNED_PROJECTS_FAIL,
  ASSIGNER_SINGLE_PROJECT_REQUEST,
  ASSIGNER_SINGLE_PROJECT_SUCCESS,
  ASSIGNER_SINGLE_PROJECT_FAIL,
  ASSIGNEE_SINGLE_PROJECT_REQUEST,
  ASSIGNEE_SINGLE_PROJECT_SUCCESS,
  ASSIGNEE_SINGLE_PROJECT_FAIL,
  ProjectsDispatchTypes,
  Project
} from "../constants/projectConstants";

export interface ProjectState {
  loading: boolean,
  projectList?: Project[],
  assignedProjectList?: Project[]
  error?: string,
  id?: number
}

const initialState: ProjectState = {
  loading: false
};

export const createProjectReducer = (state: ProjectState = initialState, action: ProjectsDispatchTypes) => {
  switch (action.type) {
    case CREATE_PROJECT_REQUEST:
      return { loading: true };
    
      case CREATE_PROJECT_SUCCESS:
      return { loading: false, projects: action.payload };

    case CREATE_PROJECT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
     
export const updateProjectReducer = (state: ProjectState = initialState, action: ProjectsDispatchTypes) => {
  switch (action.type) {
    case UPDATE_PROJECT_REQUEST:
      return { loading: true };
    
      case UPDATE_PROJECT_SUCCESS:
      return { loading: false, projects: action.payload };

    case UPDATE_PROJECT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const deleteProjectReducer = (state: ProjectState = initialState, action: ProjectsDispatchTypes) => {
  switch (action.type) {
    case DELETE_PROJECT_REQUEST:
      return { loading: true };
    
      case DELETE_PROJECT_SUCCESS:
      return { loading: false, projects: action.payload };

    case DELETE_PROJECT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userProjectsReducer = (state: ProjectState = initialState, action: ProjectsDispatchTypes) => {
  switch (action.type) {
    case USER_PROJECTS_REQUEST:
      return { loading: true };
    
      case USER_PROJECTS_SUCCESS:
      return { loading: false, projects: action.payload };

    case USER_PROJECTS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const assignedProjectsReducer = (state: ProjectState = initialState, action: ProjectsDispatchTypes) => {
  switch (action.type) {
    case ASSIGNED_PROJECTS_REQUEST:
      return { loading: true };
    
      case ASSIGNED_PROJECTS_SUCCESS:
      return { loading: false, id: action.payload };

    case ASSIGNED_PROJECTS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const assignerProjectReducer = (state: ProjectState = initialState, action: ProjectsDispatchTypes) => {
  switch (action.type) {
    case ASSIGNER_SINGLE_PROJECT_REQUEST:
      return { loading: true };
    
      case ASSIGNER_SINGLE_PROJECT_SUCCESS:
      return { loading: false, id: action.payload };

    case ASSIGNER_SINGLE_PROJECT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const assigneeProjectReducer = (state: ProjectState = initialState, action: ProjectsDispatchTypes) => {
  switch (action.type) {
    case ASSIGNEE_SINGLE_PROJECT_REQUEST:
      return { loading: true };
    
      case ASSIGNEE_SINGLE_PROJECT_SUCCESS:
      return { loading: false, id: action.payload };

    case ASSIGNEE_SINGLE_PROJECT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

