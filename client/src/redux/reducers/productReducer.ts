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

    default: {
      return state;
    }
  }
};

export default projectReducer;
