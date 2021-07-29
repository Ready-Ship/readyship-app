import React, { FC, MouseEvent } from 'react';

import '../stylesheets/components/MemberTile.css';

interface MemberTileProps {
  open?: boolean;
  click?: (event: MouseEvent) => void;
  name: string;
  onDelete: () => any;
}

const MemberTile: FC<MemberTileProps> = ({ name, onDelete }) => {
  return (
    <div className='member-card'>
      <div className='member-card__checkbox'>
        <input type='checkbox' />
        <span className='checkmark'></span>
      </div>
      <div className='member-card__name member-name__truncate'>
        <p className=''>{name}</p>
      </div>
      <button onClick={onDelete}>X</button>
    </div>
  );
};

export default MemberTile;
