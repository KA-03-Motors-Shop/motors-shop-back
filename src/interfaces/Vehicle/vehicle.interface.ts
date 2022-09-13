import { Vehicle } from '../../entities/Ad/ad.entity';

export type VehicleCreation = Omit<Vehicle, 'id' | 'user' | 'images'>;
