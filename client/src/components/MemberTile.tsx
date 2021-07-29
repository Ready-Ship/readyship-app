import React, { FC, MouseEvent } from 'react';

import '../stylesheets/components/MemberTile.css';

interface MemberTileProps {
  open?: boolean;
  click?: (event: MouseEvent) => void;
}

const MemberTile:FC<MemberTileProps> = () => {
  return (
    <div className="member-card">
      <div className="member-card__checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
      </div>
      <div className="member-card__name member-name__truncate">
        <p className="">Umair Baig</p>
      </div>
    </div>
  )
}

export default MemberTile;
