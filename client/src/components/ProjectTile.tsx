// import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../stylesheets/components/ProjectTile.css';

const ProjectTile = () => {
  return (
    <div className="project-tile-container">
      <div className="project-tile">
        <span><i className="fas fa-tasks"></i></span>
      </div>
      <h4>Project Title</h4>
    </div>
  );
};
    
    
    
export default ProjectTile;
