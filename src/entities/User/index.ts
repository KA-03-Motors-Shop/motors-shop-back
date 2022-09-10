import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Vehicle } from '../Vehicles';

@Entity()
export class User {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column({ nullable: false, length: 128 })
	name: string;

	@Column({ nullable: false, unique: true, length: 128 })
	email: string;

	@Column({ nullable: false, length: 16 })
	cpf: string;

	@Column({ nullable: false, length: 16 })
	phone: string;

	@Column({ name: 'birth_date' })
	birthDate: Date;

	@Column({ type: 'text', nullable: true })
	description: string;

	@Column({ length: 16 })
	cep: string;

	@Column({ length: 32 })
	state: string;

	@Column({ length: 32 })
	city: string;

	@Column({ length: 128 })
	street: string;

	@Column({ length: 8 })
	address_number: string;

	@Column({ type: 'text', nullable: true })
	complement: string;

	@Column({ nullable: false, length: 32 })
	account_type: string;

	@CreateDateColumn({
		name: 'created_at',
	})
	createdAt: Date;

	@CreateDateColumn({
		name: 'updated_at',
	})
	updatedAt: Date;

	@Column({ nullable: false, length: 128 })
	password: string;

	@OneToMany((type) => Vehicle, (vehicle) => vehicle.user, {
		eager: true,
		cascade: true,
	})
	vehicles: Vehicle[];

	@Column({ nullable: false, length: 32, default: 'var(--random1)' })
	color: string;

	constructor(
		name: string,
		email: string,
		cpf: string,
		phone: string,
		birthDate: Date,
		description: string,
		cep: string,
		state: string,
		city: string,
		street: string,
		address_number: string,
		complement: string,
		account_type: string,
		password: string,
		color: string
	) {
		this.name = name;
		this.email = email;
		this.cpf = cpf;
		this.phone = phone;
		this.birthDate = new Date(birthDate);
		this.description = description;
		this.account_type = account_type;
		this.cep = cep;
		this.state = state;
		this.city = city;
		this.street = street;
		this.address_number = address_number;
		this.complement = complement;
		this.password = password;
		this.color = color;
	}
}
