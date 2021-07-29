import React, { useState } from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';

// Components Import
import UserGrid from '../components/UserGrid';
import AddMember from '../components/AddMember';
import AssignProject from '../components/AssignProject';
import AssignMemberDrawer from '../components/AssignMemberDrawer';
import MemberTile from '../components/MemberTile';
import Overlay from '../components/Overlay';

import '../stylesheets/screens/ProjectScreen.css';
import { Project, User } from '../types';
import { useEffect } from 'react';
import axios from 'axios';
import { CONSTANTS } from '../config';
import { useCallback } from 'react';

const fetchProject = async (id: string, role: string) => {
  const result = await axios.get(`${CONSTANTS.API_URL}/project/${id}/${role}`, {
    withCredentials: true,
  });
  return result.data;
};

const fetchNonProjectUsers = async (projectId: string) => {
  const result = await axios.get(
    `${CONSTANTS.API_URL}/project/user?projectId=${projectId}`
  );
  return result.data;
};

const assignUsers = async (projectId: string, userIds: number[]) => {
  const result = await axios.post(
    `${CONSTANTS.API_URL}/project/${projectId}/assign`,
    { userIds },
    { withCredentials: true }
  );
  return result.data;
};

const unassignUser = async (projectId: string, userId: number) => {
  const result = await axios.post(
    `${CONSTANTS.API_URL}/project/${projectId}/unassign`,
    { userId },
    { withCredentials: true }
  );
  return result.data;
};

const ProjectScreen = () => {
  const [assignMemberToggle, setAssignMemberToggle] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [assignees, setAssignees] = useState<User[]>([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const match = useRouteMatch<{ projectId: string }>();
  const projectId = match.params.projectId;
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const role = query.get('role');

  useEffect(() => {
    if (!role) {
      return;
    }

    let isMounted = true;
    const init = async () => {
      const data = await fetchProject(projectId, role);

      if (!isMounted) return;

      setProject(data.project);
      if (data.users) {
        setAssignees(data.users);
      }
      setTitle(data.project.title);
      setDescription(data.project.description);
    };
    init();

    return () => {
      isMounted = false;
    };
  }, [role, projectId]);

  const fetchUsers = useCallback(async () => {
    const data = await fetchNonProjectUsers(projectId);
    return data.users;
  }, [projectId]);

  const handleAddUsers = useCallback(
    async (users: User[]) => {
      await assignUsers(
        projectId,
        users.map(({ id }) => id)
      );
      setAssignees((assignees) => [...assignees, ...users]);
      setAssignMemberToggle(false);
    },
    [projectId]
  );

  if (!['assigner', 'assignee'].includes(role || '')) {
    return <p>invalid role</p>;
  }

  if (!project) {
    return <p>loading...</p>;
  }

  return (
    <>
      <Overlay
        show={assignMemberToggle}
        click={() => setAssignMemberToggle(false)}
      />
      <AssignMemberDrawer
        open={assignMemberToggle}
        click={() => setAssignMemberToggle(false)}
        fetchUsers={fetchUsers}
        onSubmit={handleAddUsers}
      />

      <div className='project-screen'>
        <div className='project-screen__container'>
        <div className='project-navigation-container'>
          <a href="/dashboard" className="proj-screen__back-btn">
            <i className="fas fa-chevron-left"></i>
            Go Back
          </a>
        </div>
          <div className='project-details-container'>
            <h4 className='project__section-heading'>Project Details</h4>
            <div className='details-columns'>
              <div className='project__details'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              {role === 'assigner' && (
                <form className='project__update-form'>
                  <div className='proj__title proj-form-ctrl-grp'>
                    <label htmlFor='proj__title-input'>Update Title</label>
                    <input
                      id='proj__title-input'
                      type='text'
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className='title-input proj-form-ctrl-grp'>
                    <label htmlFor='proj__desc-input'>Update Description</label>
                    <textarea
                      id='proj__desc-input'
                      name=''
                      cols={30}
                      rows={10}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <button type='submit'>Update Project</button>
                </form>
              )}
            </div>
          </div>

          {role === 'assigner' && (
            <React.Fragment>
              <div className='project__team-container'>
                <h4 className='project__section-heading'>Team Members</h4>
                <div className='project__team-grid-container'>
                  <UserGrid>
                    <AddMember />
                  </UserGrid>
                </div>
              </div>

              <div className='project__assign-container'>
                <h4 className='project__section-heading'>Assign Project</h4>
                <div className='project__team-grid-container'>
                  <UserGrid>
                    <AssignProject click={() => setAssignMemberToggle(true)} />
                    {assignees.map((assignee) => (
                      <MemberTile
                        name={assignee.name}
                        onDelete={async () => {
                          unassignUser(projectId, assignee.id).then(() => {
                            setAssignees(
                              assignees.filter(
                                (exAssignee) => exAssignee.id !== assignee.id
                              )
                            );
                          });
                        }}
                      />
                    ))}
                  </UserGrid>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectScreen;
