import React, { FC, MouseEvent } from 'react';

import '../stylesheets/components/AssignProject.css';

interface AssignProjectProps {
  open?: boolean;
  click?: (event: MouseEvent) => void;
}

const AssignProject:FC<AssignProjectProps> = () => {
  return (
    <div className="assign-project__card">
      <div className="assign-project__icon">
        +
      </div>
      <div className="assign-project__text">
        <h4>Assign Project</h4>
      </div>
    </div>
  )
}

export default AssignProject;
