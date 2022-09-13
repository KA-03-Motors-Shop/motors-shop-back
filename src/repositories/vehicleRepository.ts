import { AppDataSource } from '../data-source';
import { Vehicle } from '../entities/Ad/ad.entity';

const vehicleRepository = AppDataSource.getRepository(Vehicle);

export default vehicleRepository;
