import Axios from 'axios';
import {
    CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, CREATE_PROJECT_FAIL,
    UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_FAIL,
    DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAIL,
    USER_PROJECTS_REQUEST, USER_PROJECTS_SUCCESS, USER_PROJECTS_FAIL,
    ASSIGNED_PROJECTS_REQUEST, ASSIGNED_PROJECTS_SUCCESS, ASSIGNED_PROJECTS_FAIL,
    ASSIGNER_SINGLE_PROJECT_REQUEST, ASSIGNER_SINGLE_PROJECT_SUCCESS, ASSIGNER_SINGLE_PROJECT_FAIL,
    ASSIGNEE_SINGLE_PROJECT_REQUEST, ASSIGNEE_SINGLE_PROJECT_SUCCESS, ASSIGNEE_SINGLE_PROJECT_FAIL
} from '../constants/projectConstants';


const createProject = async ( projects: any, dispatch: (arg0: { type: string; payload: any; }) => void ) => {
    dispatch({ type: CREATE_PROJECT_REQUEST, payload: { projects } });
    const projectsCopy = projects;
    try {
      const { data } = await Axios.post('/project/addProject', projectsCopy);
      const PROJECT = data.updatedDoc.PROJECT;
      dispatch({ type: CREATE_PROJECT_SUCCESS, payload: PROJECT });
    } catch (error) {
      dispatch({ type: CREATE_PROJECT_FAIL, payload: error.message });
    }
  };

  const updateProject = async ( project: any, dispatch: (arg0: { type: string; payload?: any; }) => void ) => {
    dispatch({ type: UPDATE_PROJECT_REQUEST});
    const projectCopy = project;
    try {
      const { data } = await Axios.post('/project/editproject', projectCopy);
      const actionPayload = data.updatedDoc.project;
      dispatch({ type: UPDATE_PROJECT_SUCCESS, payload: actionPayload });
    } catch (error) {
      dispatch({ type: UPDATE_PROJECT_FAIL, payload: error.message });
    }
  };
  

  const deleteProject = async ( project: any, dispatch: (arg0: { type: any; payload?: any; }) => void ) => {
    const projectCopy = project;
    dispatch({ type: DELETE_PROJECT_REQUEST });
    try {
      const { data } = await Axios.post('/project/removeproject',  projectCopy );
      const actionPayload = data.updatedDoc.project;
      dispatch({ type: DELETE_PROJECT_SUCCESS, payload: actionPayload });
    } catch (error) {
      dispatch({ type: DELETE_PROJECT_FAIL, payload: error.message });
    }
  };
  

// user projects

const userProjects = async ( projects: any, dispatch: (arg0: { type: string; payload: any; }) => void ) => {
  dispatch({ type: USER_PROJECTS_REQUEST, payload: { projects } });
  const projectsCopy = projects.id; //change it later
  try {
    const { data } = await Axios.post('/project/userProjects', projectsCopy);
    const PROJECT = data.updatedDoc.PROJECT;
    dispatch({ type: USER_PROJECTS_SUCCESS, payload: PROJECT });
  } catch (error) {
    dispatch({ type: USER_PROJECTS_FAIL, payload: error.message });
  }
};


// user assigned projects

const userAssignedProjects = async ( projects: any, dispatch: (arg0: { type: string; payload: any; }) => void ) => {
  dispatch({ type: ASSIGNED_PROJECTS_REQUEST, payload: { projects } });
  const projectsCopy = projects.id; //change it later
  try {
    const { data } = await Axios.post('/project/userAssignedProjects', projectsCopy);
    const PROJECT = data.updatedDoc.PROJECT;
    dispatch({ type: ASSIGNED_PROJECTS_SUCCESS, payload: PROJECT });
  } catch (error) {
    dispatch({ type: ASSIGNED_PROJECTS_FAIL, payload: error.message });
  }
};


//   ASSIGNER

const createAssigner = async ( projects: any, dispatch: (arg0: { type: string; payload: any; }) => void ) => {
    dispatch({ type: ASSIGNER_SINGLE_PROJECT_REQUEST, payload: { projects } });
    const projectsCopy = projects.id; //change it later
    try {
      const { data } = await Axios.post('/project/addAssigner', projectsCopy);
      const PROJECT = data.updatedDoc.PROJECT;
      dispatch({ type: ASSIGNER_SINGLE_PROJECT_SUCCESS, payload: PROJECT });
    } catch (error) {
      dispatch({ type: ASSIGNER_SINGLE_PROJECT_FAIL, payload: error.message });
    }
};
  
// ASSIGNEE

const createAssignee = async ( projects: any, dispatch: (arg0: { type: string; payload: any; }) => void ) => {
    dispatch({ type: ASSIGNEE_SINGLE_PROJECT_REQUEST, payload: { projects } });
    const projectsCopy = projects.id;//change it later
    try {
      const { data } = await Axios.post('/project/addAssignee', projectsCopy);
      const PROJECT = data.updatedDoc.PROJECT;
      dispatch({ type: ASSIGNEE_SINGLE_PROJECT_SUCCESS, payload: PROJECT });
    } catch (error) {
      dispatch({ type: ASSIGNEE_SINGLE_PROJECT_FAIL, payload: error.message });
    }
};

  export { createProject, updateProject, deleteProject , userProjects, userAssignedProjects, createAssigner, createAssignee};