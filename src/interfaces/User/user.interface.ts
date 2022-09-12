import { User } from '../../entities/User/user.entity';

export type IUserCreation = Omit<
	User,
	'id' | 'createdAt' | 'updatedAt' | 'vehicles'
>;

export type IUserLogin = Pick<User, 'email' | 'password'>;

export interface IUserUpdate {
	id: string;
	userEmail: string;
	name?: string;
	email?: string;
	password?: string;
	cpf?: string;
	phone?: string;
	birthDate?: string;
	description?: string;
	account_type?: string;
}
