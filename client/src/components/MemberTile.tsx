import React, { FC, MouseEvent, useState } from 'react';

import '../stylesheets/components/MemberTile.css';

interface MemberTileProps {
  open?: boolean;
  click?: (event: MouseEvent) => void;
  name: string;
  onDelete: () => any;
}

const MemberTile: FC<MemberTileProps> = ({ name, onDelete }) => {
  const [activeHover, setActiveHover] = useState(false);

  return (
    <div className='member-card'>
      <div className='member-card__btn'>
        <button 
        onClick={onDelete} 
        onMouseEnter={() => {setActiveHover(true)}}
        onMouseLeave={() => {setActiveHover(false)}}>
          {activeHover ? <i className="fas fa-trash-alt"></i> : name[0]}
        </button>
        
      </div>
      <div className='member-card__name member-name__truncate'>
        <p className=''>{name}</p>
      </div>
      
    </div>
  );
};

export default MemberTile;
