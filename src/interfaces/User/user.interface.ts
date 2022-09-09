import { User } from '../../entities/User';

export type IUserCreation = Omit<User, 'id' | 'createdAt' | 'vehicle'>;

export type IUserLogin = Pick<User, 'email' | 'password'>;

export interface IDataToken {
	id: string;
	iat: number;
	exp: number;
}

export interface IUserUpdate {
	id: string;
	name: string;
	email: string;
	password: string;
	cpf: string;
	phone: string;
	birthDate: string;
	description: string;
	account_type: string;
}
