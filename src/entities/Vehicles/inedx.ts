import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column({ nullable: false, length: 128 })
	advertisement_type: string;

	@Column({ nullable: false, length: 128 })
	title: string;

	@Column({ nullable: false, length: 4 })
	fabrication_year: number;

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

	constructor(
		advertisement_type: string,
		title: string,
		fabrication_year: number,
		mileage: string,
		price: string,
		description: string,
		vehicle_type: string,
		is_active: boolean
	) {
		this.advertisement_type = advertisement_type;
		this.title = title;
		this.fabrication_year = fabrication_year;
		this.mileage = mileage;
		this.price = price;
		this.description = description;
		this.vehicle_type = vehicle_type;
		this.is_active = is_active;
	}
}
