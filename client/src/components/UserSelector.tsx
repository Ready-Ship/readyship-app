import React, { FC, useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { User } from '../types';

import '../stylesheets/components/UserSelector.css';

const fetchUsers = async (): Promise<User[]> => {
  return new Array(50).fill(null).map((_, i) => ({
    id: i,
    name: 'user ' + i,
  }));
};

interface UserItemProps {
  user: User;
  isSelected: boolean;
  onSelect: (value: boolean) => any;
}

const UserItem: FC<UserItemProps> = ({ user, isSelected, onSelect }) => {
  return (
    <div className="user-selector__user-item" style={{ padding: '.5rem 1rem' }}>
      <p style={{ color: '#fff' }}>{user.name}</p>
      <button onClick={() => onSelect(!isSelected)}>
        {isSelected ? <i className="fas fa-user-slash"></i> : <i className="fas fa-plus"></i>}
      </button>
    </div>
  );
};

const UserSelector = () => {
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
  }, []);

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

  return (
    <div className="selector-container">
      <div className="users-container">
        {users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            isSelected={selectedIds.has(user.id)}
            onSelect={(value) => toggleSelect(user, value)}
          />
        ))}
      </div>
      {selected.length >= 1 ? <button className="select-submit-btn">Confirm Selection</button> : null}
      {selected.length >= 1 ? <div className="selected-container">
        {selected.map((user) => (
          <div className="selected-user"
            key={user.id}
            onClick={() => toggleSelect(user, false)}
          >
            <p>{user.name}</p>
          </div>
        ))}
      </div> : null}
      <button className="selector__cancel-btn">Cancel</button>
    </div>
  );
};

export default UserSelector;
