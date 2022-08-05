import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export class User {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column({ nullable: false, length: 128 })
	name: string;

	@Column({ nullable: false, unique: true, length: 128 })
	email: string;

	@Column({ nullable: false, length: 20 })
	cpf: string;

	@Column({ nullable: false, length: 20 })
	phone: string;

	@Column({ name: 'birth_date' })
	birthDate: Date;

	@Column({ type: 'text', nullable: false })
	description: string;

	@Column({ length: 20 })
	cep: string;

	@Column({ length: 128 })
	state: string;

	@Column({ length: 128 })
	city: string;

	@Column({ length: 128 })
	street: string;

	@Column({ length: 10 })
	address_number: string;

	@Column({ type: 'text' })
	complement: string;

	@Column({ nullable: false, length: 50 })
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

	constructor(
		name: string,
		email: string,
		cpf: string,
		phone: string,
		birthDate: Date,
		description: string,
		account_type: string
	) {
		this.name = name;
		this.email = email;
		this.cpf = cpf;
		this.phone = phone;
		this.birthDate = new Date(birthDate);
		this.description = description;
		this.account_type = account_type;
	}
}
