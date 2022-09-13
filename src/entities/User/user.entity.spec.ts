import { User } from './user.entity';

describe('Test user entity', () => {
	const name = 'Rafael';
	const email = 'email@email.com';
	const cpf = '12345678912';
	const phone = '12345678912';
	const birthDate = new Date('01/01/2000');
	const description = '';
	const cep = '12345678';
	const state = 'SP';
	const city = 'São Paulo';
	const street = 'Rua da Paz';
	const address_number = '1';
	const complement = '';
	const account_type = 'Seller';
	const password = '1234';
	const color = 'var(--randon4)';
	test('should be able to create a user', () => {
		const user = new User(
			name,
			email,
			cpf,
			phone,
			birthDate,
			description,
			cep,
			state,
			city,
			street,
			address_number,
			complement,
			account_type,
			password,
			color
		);

		expect(user).toBeInstanceOf(User);
	});
});
