import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { v4 } from 'uuid';
import { User } from '../User';

@Entity()
export class Vehicle {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column({ nullable: false, length: 128 })
	advertisement_type: string;

	@Column({ nullable: false, length: 128 })
	title: string;

	@Column({ nullable: false, length: 4 })
	fabrication_year: string;

	@Column({ nullable: false, length: 64 })
	mileage: string;

	@Column({ nullable: false, length: 32 })
	price: string;

	@Column({ nullable: false, type: 'text' })
	description: string;

	@Column({ nullable: false, length: 128 })
	vehicle_type: string;

	@Column({ nullable: false })
	is_active: boolean;

	@ManyToOne((type) => User, (user) => user.vehicles, { nullable: true })
	user: User;

	constructor(
		advertisement_type: string,
		title: string,
		fabrication_year: string,
		mileage: string,
		price: string,
		description: string,
		vehicle_type: string,
		is_active: boolean,
		user: User
	) {
		this.id = v4();
		this.advertisement_type = advertisement_type;
		this.title = title;
		this.fabrication_year = fabrication_year;
		this.mileage = mileage;
		this.price = price;
		this.description = description;
		this.vehicle_type = vehicle_type;
		this.is_active = is_active;
		this.user = user;
	}
}
