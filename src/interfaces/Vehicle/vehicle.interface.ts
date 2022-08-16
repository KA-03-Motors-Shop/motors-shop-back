import { Vehicle } from '../../entities/Vehicles';

export type VehicleCreation = Omit<Vehicle, 'id' | 'user'>;
