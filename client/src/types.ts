export type Mapped<T extends any> = { [key: string]: T };

export interface User {
  id: number;
  name: string;
}
