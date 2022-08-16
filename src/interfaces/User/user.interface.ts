import { User } from '../../entities/User';

export type UserCreation = Omit<User, 'id'| "createdAt">;

export type userLogin = Pick<User, 'email' | 'password' >
