import React, {useState} from 'react';
import '../stylesheets/screens/DashboardScreen.css';

import CardGrid from '../components/ProjectGrid';
import NewProjectTile from '../components/NewProjectTile';
import ProjectTile from '../components/ProjectTile';
import NewProjectDrawer from '../components/NewProjectDrawer';

const DashboardScreen = () => {
  const [newProjDrawerToggle, setNewProjDrawerToggle] = useState(false);
  
  return (
    <div className="dashboard-screen">
      <NewProjectDrawer/>
      <div className="dashboard-screen__container">
        <div className="dashboard-screen__projects">
          <h3 className="dashboard-screen__section-title">My Projects</h3>
          <CardGrid>
            <NewProjectTile />
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
          </CardGrid>
        </div>
        <div className="dashboard-screen__assigned-projects">
          <h3 className="dashboard-screen__section-title">Assigned Projects</h3>
          <CardGrid>
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
          </CardGrid>
        </div>
      </div>
    </div>
  )
}

export default DashboardScreen
