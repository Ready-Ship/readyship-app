import React, { FC, useState, MouseEvent } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { User } from '../types';

import '../stylesheets/components/UserSelector.css';

interface UserItemProps {
  user: User;
  isSelected: boolean;
  onSelect: (value: boolean) => any;
}

const UserItem: FC<UserItemProps> = ({ user, isSelected, onSelect }) => {
  return (
    <div className='user-selector__user-item' style={{ padding: '.5rem 1rem' }}>
      <p style={{ color: '#fff' }}>{user.name}</p>
      <button onClick={() => onSelect(!isSelected)}>
        {isSelected ? (
          <i className='fas fa-user-slash'></i>
        ) : (
          <i className='fas fa-plus'></i>
        )}
      </button>
    </div>
  );
};

interface UserSelectorProps {
  click?: (event: MouseEvent) => void;
  fetchUsers: () => Promise<User[]>;
  onSubmit: (users: User[]) => any;
}

const UserSelector: FC<UserSelectorProps> = ({
  click,
  fetchUsers,
  onSubmit,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selected, setSelected] = useState<User[]>([]);

  useEffect(() => {
    let isMounted = true;

    fetchUsers().then((fetchedUsers) => {
      if (isMounted) {
        setUsers(fetchedUsers);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [fetchUsers]);

  const selectedIds = useMemo(() => {
    return new Set(selected.map(({ id }) => id));
  }, [selected]);

  const toggleSelect = (user: User, value: boolean) => {
    if (value) {
      setSelected([...selected, user]);
    } else {
      setSelected(selected.filter((exUser) => exUser.id !== user.id));
    }
  };

  if (users.length === 0) {
    return <p style={{ color: 'white' }}>No users available.</p>;
  }

  return (
    <div className='selector-container'>
      <div className='users-container'>
        {users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            isSelected={selectedIds.has(user.id)}
            onSelect={(value) => toggleSelect(user, value)}
          />
        ))}
      </div>
      {selected.length >= 1 ? (
        <button
          className='select-submit-btn'
          onClick={() => onSubmit(selected)}
        >
          Confirm Selection
        </button>
      ) : null}
      {selected.length >= 1 ? (
        <div className='selected-container'>
          {selected.map((user) => (
            <div
              className='selected-user'
              key={user.id}
              onClick={() => toggleSelect(user, false)}
            >
              <p>{user.name}</p>
            </div>
          ))}
        </div>
      ) : null}
      <button className='selector__cancel-btn' onClick={click}>
        <i className='fas fa-chevron-left'></i> Cancel
      </button>
    </div>
  );
};

export default UserSelector;
