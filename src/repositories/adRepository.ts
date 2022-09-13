import { AppDataSource } from '../data-source';
import { Ad } from '../entities/Ad/ad.entity';

const adRepository = AppDataSource.getRepository(Ad);

export default adRepository;
