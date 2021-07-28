import React, { FC, useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { User } from '../types';

const fetchUsers = async (): Promise<User[]> => {
  return new Array(10).fill(null).map((_, i) => ({
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
    <div style={{ padding: '.5rem 1rem' }}>
      <p>{user.name}</p>
      <button onClick={() => onSelect(!isSelected)}>
        {isSelected ? 'Unselect' : 'Select'}
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
    <div>
      <div style={{ display: 'flex' }}>
        {selected.map((user) => (
          <div
            key={user.id}
            onClick={() => toggleSelect(user, false)}
            style={{ padding: '.5rem 1rem' }}
          >
            <p>{user.name}</p>
          </div>
        ))}
      </div>
      <hr />
      <div>
        {users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            isSelected={selectedIds.has(user.id)}
            onSelect={(value) => toggleSelect(user, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default UserSelector;
