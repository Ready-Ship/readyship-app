import React, {useState, useEffect} from 'react';
import '../stylesheets/screens/DashboardScreen.css';
import { API_URL } from '../config/constants';
import axios from 'axios';

import ProjectGrid from '../components/ProjectGrid';
import NewProjectTile from '../components/NewProjectTile';
import ProjectTile from '../components/ProjectTile';
import NewProjectDrawer from '../components/NewProjectDrawer';
import Overlay from '../components/Overlay';

const DashboardScreen = () => {
  const [newProjToggle, setNewProjToggle] = useState(false);
  const [assingerProjects, setAssignerProjects] = useState([{id: 1, title: 'Test', desc: 'TestDesc'}]);
  const [assingeeProjects, setAssigneeProjects] = useState([{id: 5, title: 'AssignedTest', desc: 'TestDesc'}]);

  useEffect(() => {
    axios.get(`${API_URL}/projects/assigner`)
    .then(res => {
      const assignerProjectsRes = res.data;
      setAssignerProjects(assignerProjectsRes)
    }).catch(e => console.log(e));

    axios.get(`${API_URL}/projects/assignee`)
    .then(res => {
      const assigneeProjectsRes = res.data;
      setAssigneeProjects(assigneeProjectsRes);
    })
    .catch(e => console.log(e));
  }, [])
  
  return (
    <div className="dashboard-screen">
      <Overlay show={newProjToggle} click={() => setNewProjToggle(false)} />
      <NewProjectDrawer open={newProjToggle} click={() => setNewProjToggle(false)}/>
      <div className="dashboard-screen__container">
        <div className="dashboard-screen__projects">
          <h3 className="dashboard-screen__section-title">My Projects</h3>
          <ProjectGrid data={assingerProjects} render={(el) => <ProjectTile id={el.id} title={el.title} />}>
            <NewProjectTile click={() => setNewProjToggle(true)} />
          </ProjectGrid>
        </div>
        <div className="dashboard-screen__assigned-projects">
          <h3 className="dashboard-screen__section-title">Assigned Projects</h3>
          <ProjectGrid data={assingeeProjects} render={(el) => <ProjectTile id={el.id} title={el.title} />}>
            <NewProjectTile click={() => setNewProjToggle(true)} />
          </ProjectGrid>
        </div>
      </div>
    </div>
  )
}

export default DashboardScreen
