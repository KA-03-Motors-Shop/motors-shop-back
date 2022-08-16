import { AppDataSource } from '../data-source';
import { Vehicle } from '../entities/Vehicles';

const vehicleRepository = AppDataSource.getRepository(Vehicle);

export default vehicleRepository;
