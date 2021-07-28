import React from 'react';
import '../stylesheets/screens/DashboardScreen.css';

import CardGrid from '../components/ProjectGrid';
import NewProjectTile from '../components/NewProjectTile';


const DashboardScreen = () => {
  return (
    <div className="dashboard-screen">
      <div className="dashboard-screen__container">
        <div className="dashboard-screen__projects">
          <h3 className="dashboard-screen__section-title">My Projects</h3>
          <CardGrid>
            <NewProjectTile />
            <NewProjectTile />
            <NewProjectTile />
            <NewProjectTile />
            <NewProjectTile />
            <NewProjectTile />
            <NewProjectTile />
            <NewProjectTile />
            <NewProjectTile />
            <NewProjectTile />
          </CardGrid>
        </div>
        <div className="dashboard-screen__assigned-projects">
          <h3 className="dashboard-screen__section-title">Assigned Projects</h3>
          <CardGrid>
            <NewProjectTile />
            <NewProjectTile />
            <NewProjectTile />
            <NewProjectTile />
            <NewProjectTile />
            <NewProjectTile />
            <NewProjectTile />
            <NewProjectTile />
            <NewProjectTile />
            <NewProjectTile />
          </CardGrid>
        </div>
      </div>
    </div>
  )
}

export default DashboardScreen
