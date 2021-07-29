import React, { FC, MouseEvent } from 'react';

import '../stylesheets/components/NewProjectDrawer.css';

interface NewProjectProps {
  open: boolean;
  click: (event: MouseEvent) => void;
}

const NewProjectDrawer:FC<NewProjectProps> = ({ open, click }) => {

  const newProjectSubmitHandler = () => {
    
  }
  
  return (
    <div className={open ? "new-proj-drawer open" : "new-proj-drawer"}>
      <h1>Create New Project</h1>
      <form className="new-proj__container">
        <div className="title-input form-control-group">
          <label htmlFor="new-proj__title">Project Title</label>
          <input id="new-proj__title" type="text" required/>
        </div>

        <div className="title-input form-control-group">
          <label htmlFor="new-proj__desc">Project Description</label>
          <textarea id="new-proj__desc" name="" cols={30} rows={10}></textarea>
        </div>
        <button type="submit">Create Project</button>
      </form>
      <button id="new-proj__cancel" onClick={click}>Cancel</button>
    </div>
  )
}

export default NewProjectDrawer;
