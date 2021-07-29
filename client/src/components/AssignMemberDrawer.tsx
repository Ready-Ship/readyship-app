import React, { FC, MouseEvent } from 'react';

// Components Import
import UserSelector from './UserSelector';

import '../stylesheets/components/AssignMemberDrawer.css';

interface AssignMemberDrawerProps {
  open?: boolean;
  click?: (event: MouseEvent) => void;
}

const AssignMemberDrawer:FC<AssignMemberDrawerProps> = ({ open, click }) => {
  
  return (
    <div className={open ? "assign-member-drawer open" : "assign-member-drawer"}>
      <h1>Assign Project To User(s)</h1>
      <UserSelector />
    </div>
  )
}

export default AssignMemberDrawer;
