import React, { PropsWithChildren, FC } from 'react';
import '../stylesheets/components/ProjectGrid.css';

// interface ProjectGridProps<T> {
//   data: T[],
//   render: (element:T) => React.ReactNode
// }

// const ProjectGrid = <T extends any>({ data , render, children }:PropsWithChildren<ProjectGridProps<T>>) => {
//   return (
//     <div className="project-grid">
//       {children}
//       {data.map(render)}
//     </div>
//   )
// }

const ProjectGrid:FC = ({ children }) => {
  return (
    <div className="project-grid">
      {children}
    </div>
  )
}

export default ProjectGrid;