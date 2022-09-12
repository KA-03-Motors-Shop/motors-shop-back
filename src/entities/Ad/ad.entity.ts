import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Image } from '../Image/image.entity';
import { User } from '../User/user.entity';

@Entity()
export class Ad {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column({ nullable: false, length: 128 })
	advertisement_type: string;

	@Column({ nullable: false, length: 128 })
	title: string;

	@Column({ nullable: false, length: 4 })
	fabrication_year: string;

	@Column({ nullable: false, length: 8 })
	mileage: string;

	@Column({ nullable: false, length: 16 })
	price: string;

	@Column({ nullable: false, type: 'text' })
	description: string;

	@Column({ nullable: false, length: 16 })
	vehicle_type: string;

	@Column({ nullable: false, default: true })
	is_active: boolean;

	@ManyToOne((type) => User, (user) => user.ads, { onDelete: 'CASCADE' })
	user: User;

	@OneToMany((type) => Image, (images) => images.ad, {
		eager: true,
		cascade: true,
	})
	images: Image;

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
