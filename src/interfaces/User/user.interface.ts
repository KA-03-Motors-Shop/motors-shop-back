import { User } from '../../entities/User';

export type UserCreation = Omit<User, 'id'| "createdAt">;
