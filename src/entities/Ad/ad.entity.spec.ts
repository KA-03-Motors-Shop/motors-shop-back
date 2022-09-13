import { User } from '../User/user.entity';
import { Ad } from './ad.entity';

describe('Create an ad', () => {
	// User infos
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

	const newUser = new User(
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

	// Ad infos

	const advertisement_type = 'Leilão';
	const title = 'Corsa';
	const fabrication_year = '1997';
	const mileage = '54000';
	const price = '10000';
	const descriptionAd =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel nisi finibus nibh pretium porttitor.';
	const vehicle_type = 'Car';
	const is_active = true;
	const user = newUser;

	test('should be able to create an ad', () => {
		const ad = new Ad(
			advertisement_type,
			title,
			fabrication_year,
			mileage,
			price,
			descriptionAd,
			vehicle_type,
			is_active,
			user
		);

		expect(ad).toBeInstanceOf(Ad);
	});
});
