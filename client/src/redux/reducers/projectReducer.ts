// import { Action } from 'redux';
import * as types from "../constants/projectConstants";

export interface Action {
  type: any;
  payload: {
    projects: any;
  };
}
export interface projectState {
  title: string;
  addTeam: string;
  assignToMembers: string;
  description: string;
}
const initialState: projectState = {
  title: "",
  addTeam: "",
  assignToMembers: "",
  description: "",
};

const projectReducer = (state: projectState = initialState, action: Action) => {
  switch (action.type) {
    case types.CREATE_PROJECT_REQUEST:
      return {
        ...state,
        projects: [action.payload],
      };
      case types.UPDATE_PROJECT_REQUEST:
        return {
          ...state,
          projects: [action.payload],
        };
        case types.DELETE_PROJECT_REQUEST:
            return {
              ...state,
              projects: [action.payload],
            };
            case types.USER_PROJECTS_REQUEST:
                return {
                  ...state,
                  id: [action.payload],
                };
                case types.ASSIGNED_PROJECTS_REQUEST:
                  return {
                    ...state,
                    id: [action.payload],
                  };
            case types.ASSIGNER_SINGLE_PROJECT_REQUEST:
                return {
                  ...state,
                  id: [action.payload],
                };
                case types.ASSIGNEE_SINGLE_PROJECT_REQUEST:
                    return {
                      ...state,
                      id: [action.payload],
                    };
      
    default: {
      return state;
    }
  }
};

export default projectReducer;
