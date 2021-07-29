import React, { FC, MouseEvent } from 'react';

// Components Import
import UserSelector from './UserSelector';

import '../stylesheets/components/AssignMemberDrawer.css';
import { User } from '../types';

interface AssignMemberDrawerProps {
  open?: boolean;
  click?: (event: MouseEvent) => void;
  fetchUsers: () => Promise<User[]>;
  onSubmit: (users: User[]) => any;
}

const AssignMemberDrawer: FC<AssignMemberDrawerProps> = ({
  open,
  click,
  fetchUsers,
  onSubmit,
}) => {
  return (
    <div
      className={open ? 'assign-member-drawer open' : 'assign-member-drawer'}
    >
      <h1>Assign Project To User(s)</h1>

      <UserSelector
        key={open?.toString()}
        click={click}
        fetchUsers={fetchUsers}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AssignMemberDrawer;
