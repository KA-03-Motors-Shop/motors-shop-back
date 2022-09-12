import { AppDataSource } from '../data-source';
import { Image } from '../entities/Image/image.entity';

const imageRepository = AppDataSource.getRepository(Image);

export default imageRepository;
