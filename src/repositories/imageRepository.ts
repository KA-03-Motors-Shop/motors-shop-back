import { AppDataSource } from '../data-source';
import { Image } from '../entities/Images';

const imageRepository = AppDataSource.getRepository(Image);

export default imageRepository;
