import React, { FC } from 'react';
import { Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../stylesheets/components/ProjectTile.css';

interface ProjectTileProps {
  role?: string
  id?: number,
  title?: string
}

const ProjectTile:FC<ProjectTileProps> = ({ role, id, title }) => {
  return (
    <Link to={`/dashboard/${id}?role=${role}`} className="project-tile-container">
      <div className="project-tile">
        <span><i className="fas fa-tasks"></i></span>
      </div>
      <h4>{title}</h4>
    </Link>
  );
};
    
    
    
export default ProjectTile;
