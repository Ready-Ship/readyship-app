import React, { FC, MouseEvent, useState } from 'react';
import axios from 'axios';
import { CONSTANTS } from '../config';
import '../stylesheets/components/NewProjectDrawer.css';

interface NewProjectProps {
  open: boolean;
  onClose: () => void;
}

const NewProjectDrawer: FC<NewProjectProps> = ({ open, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const newProjectSubmitHandler = async () => {
    if (!title || !description) {
      return;
    }

    const result = await axios.post(
      CONSTANTS.API_URL + '/project',
      {
        title,
        description,
      },
      { withCredentials: true }
    );
    console.log(result.data);

    onClose();
  };

  return (
    <div className={open ? 'new-proj-drawer open' : 'new-proj-drawer'}>
      <h1>Create New Project</h1>
      <form className='new-proj__container'>
        <div className='title-input form-control-group'>
          <label htmlFor='new-proj__title'>Project Title</label>
          <input
            id='new-proj__title'
            type='text'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className='title-input form-control-group'>
          <label htmlFor='new-proj__desc'>Project Description</label>
          <textarea
            id='new-proj__desc'
            name=''
            cols={30}
            rows={10}
            value={description}
            onChange={(e) => setDescription(e.target.value || '')}
          ></textarea>
        </div>
        <button type='button' onClick={newProjectSubmitHandler}>
          Create Project
        </button>
      </form>
      <button id='new-proj__cancel' onClick={onClose}>
        Cancel
      </button>
    </div>
  );
};

export default NewProjectDrawer;
