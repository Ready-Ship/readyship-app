export type Mapped<T extends any> = { [key: string]: T };

export interface User {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
}
