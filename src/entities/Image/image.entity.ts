import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ad } from '../Ad/ad.entity';

@Entity()
export class Image {
	@PrimaryGeneratedColumn('uuid')
	readonly id: string;

	@Column({ type: 'text' })
	url: string;

	@ManyToOne((type) => Ad, (ad) => ad.images, {
		onDelete: 'CASCADE',
	})
	ad: Ad;

	constructor(url: string, ad: Ad) {
		this.url = url;
		this.ad = ad;
	}
}
