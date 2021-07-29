import React, { FC, MouseEvent } from 'react';

import '../stylesheets/components/AddMember.css';

interface AddMemberProps {
  open?: boolean;
  click?: (event: MouseEvent) => void;
}

const AddMember:FC<AddMemberProps> = () => {
  return (
    <div className="add-member__card">
      <div className="add-member__icon">
        +
      </div>
      <div className="add-member__text">
        <h4>Add Team Member</h4>
      </div>
    </div>
  )
}

export default AddMember;
