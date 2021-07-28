import React, { PropsWithChildren, FC } from 'react';
import '../stylesheets/components/ProjectGrid.css';

// interface CardGridProps<T> {
//   data: T[],
//   render: (element:T) => React.ReactNode
// }

// const CardGrid = <T extends any>({ data , render, children }:PropsWithChildren<CardGridProps<T>>) => {
//   return (
//     <div className="project-grid">
//       {children}
//       {data.map(render)}
//     </div>
//   )
// }

const CardGrid:FC = ({ children }) => {
  return (
    <div className="project-grid">
      {children}
    </div>
  )
}

export default CardGrid;