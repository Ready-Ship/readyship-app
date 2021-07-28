import React, { FC, MouseEvent } from 'react'

import '../stylesheets/components/NewProjectTile.css';

interface NewProjectTileProps {
  click: (event: MouseEvent) => void;
}

const NewProjectTile:FC<NewProjectTileProps> = ({ click }) => {
  return (
    <div className="new-project-tile-container" onClick={click}>
      <div className="new-project-tile">
        <span>+</span>
      </div>
      <h4>New Project</h4>
    </div>
  )
}

export default NewProjectTile;
