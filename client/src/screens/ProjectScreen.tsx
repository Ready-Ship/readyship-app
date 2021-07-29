import React from 'react';

// Components Import
import UserGrid from '../components/UserGrid';
import AddMember from '../components/AddMember';
import AssignProject from '../components/AssignProject';
import AssignMemberDrawer from '../components/AssignMemberDrawer';
import MemberTile from '../components/MemberTile';

import '../stylesheets/screens/ProjectScreen.css'

const ProjectScreen = () => {
  
  return (
    <>
    <AssignMemberDrawer />
    <div className="project-screen">
      <div className="project-screen__container">

        <div className="project-details-container">
          <h4 className="project__section-heading">Project Details</h4>
          <div className="details-columns">
            <div className="project__details">
              <h3>Clap Articles</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea, nostrum eaque fugiat ad, unde beatae veritatis molestiae, harum amet ipsum! Vero voluptatibus quia esse reprehenderit quibusdam voluptate pariatur consequuntur!</p>
            </div>
            
            <form className="project__update-form">
              <div className="proj__title proj-form-ctrl-grp">
                <label htmlFor="proj__title-input">Update Title</label>
                <input id="proj__title-input" type="text" required/>
              </div>

              <div className="title-input proj-form-ctrl-grp">
                <label htmlFor="proj__desc-input">Update Description</label>
                <textarea id="proj__desc-input" name="" cols={30} rows={10}></textarea>
              </div>
              <button type="submit">Update Project</button>
            </form>
          </div>
        </div>

        <div className="project__team-container">
          <h4 className="project__section-heading">Team Members</h4>
          <div className="project__team-grid-container">
            <UserGrid>
              <AddMember />
            </UserGrid>
          </div>
        </div>

        <div className="project__assign-container">
          <h4 className="project__section-heading">Assign Project</h4>
          <div className="project__team-grid-container">
            <UserGrid>
              <AssignProject />
              <MemberTile />
            </UserGrid>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProjectScreen
