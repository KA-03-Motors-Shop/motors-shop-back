import { Ad } from '../../entities/Ad/ad.entity';

export type AdCreation = Omit<Ad, 'id' | 'user' | 'images'>;
