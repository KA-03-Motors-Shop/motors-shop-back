import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Vehicle } from '../Vehicles';

@Entity()
export class Image {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column({ type: 'text' })
	url: string;

	@ManyToOne((type) => Vehicle, (vehicle) => vehicle.images, {
		onDelete: 'CASCADE',
	})
	vehicle: Vehicle;

	constructor(url: string, vehicle: Vehicle) {
		this.url = url;
		this.vehicle = vehicle;
	}
}
