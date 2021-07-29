import React, { PropsWithChildren, FC } from 'react';
import '../stylesheets/components/UserGrid.css';

// interface UserGridProps<T> {
//   data: T[],
//   render: (element:T) => React.ReactNode
// }

// const UserGrid = <T extends any>({ data , render, children }:PropsWithChildren<UserGridProps<T>>) => {
//   return (
//     <div className="user-grid">
//       {children}
//       {data.map(render)}
//     </div>
//   )
// }

const UserGrid:FC = ({ children }) => {
  return (
    <div className="user-grid">
      {children}
    </div>
  )
}

export default UserGrid;