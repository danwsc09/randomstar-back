export interface NewUser {
  username: string;
  email: string;
  nickname: string;
  password: string;
}

export interface User {
  username: string;
  email: string;
  nickname: string;
  hashedPassword: string;
  createDate: string;
  permission: string;
}
