import { User } from '../../entities/User';

export type UserCreation = Omit<User, 'id' | 'createdAt' | 'vehicle'>;

export type userLogin = Pick<User, 'email' | 'password'>;

export interface dataToken {
	email: string;
	id: string;
	iat: number;
	exp: number;
}
