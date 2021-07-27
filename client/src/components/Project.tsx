// // import React, { useState } from 'react';
// import { Link} from 'react-router-dom';
// // import '../stylesheets/componentStyles/projectTile.css';
// import { connect, useDispatch } from 'react-redux';

// import { deleteProject } from '../redux/actions/projectActions';

// const mapStateToProps = (
//     state: {
//         user: { email: any; };
//     }) => ({
//     email: state.user.email
//   });
  
// const ProjectTile = (props: { email: any; name: any; }) => {
//     const dispatch = useDispatch();
//     const deleteProjectHandler = () => {
//         deleteProject({ email: props.email, project: props.name }, dispatch);
//     };
//     // const [projectId, setProjectId] = useState('');
//     return (
//         <div className="project-tile">
//           <div className="project-tile__header">
//             <h2>
//               <Link to={`dashboard/project/${props.name}`}>{props.name}</Link>
//             </h2>
//           </div>
//           <div className="project-tile__content-container">
//             <div className="project-tile__title">
//               <h4>Title</h4>
//               <p>{props.title}</p>
//             </div>
//             <div className="project-tile__teams">
//               <span>
//                 <h4>Add Team</h4> 
//                 <span>{props.teams}</span>
//               </span>
//                 </div>
//                 <div className="project-members">
//               <span>
//                 <h4>Assign to members</h4> 
//                 <span>{props.members}</span>
//               </span>
//                 </div>
//                 <div className="project-description">
//               <span>
//                 <h4>Description</h4> 
//                 <span>{props.description}</span>
//               </span>
//                 </div>
    
//               <Link to={`dashboard/project/${props.name}`} id="project__create-btn" name={props.buttonId} onClick={(e) => {
//                 console.log('target name: ', e.target.name);
//                 dispatch({ type: 'SET_project_INDEX', payload: parseInt(e.target.name)})}}>
//                 <i className="create"></i>
//               </Link>
    
//               <button id="project__create-btn" onClick={deleteProjectHandler}>
//                 <i className="create"></i>
//               </button>
//             </div>
//           </div>
//       );
//     };
    
    
    
//     export default connect(mapStateToProps, null)(ProjectTile);
export {};
