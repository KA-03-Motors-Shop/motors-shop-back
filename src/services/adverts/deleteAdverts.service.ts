import { DeleteResult } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { AppError } from '../../errors';
import { Vehicle } from '../../entities/Vehicles';

interface ProductDataParams {
	id: string;
}

class DeleteAdvertsService {
	async execute({ id }: ProductDataParams): Promise<DeleteResult> {
		const productRepository = AppDataSource.getRepository(Vehicle);

		// const adverts = await productRepository.findOne({
		// 	where: {
		// 		id,
		// 	},
		// });

		const adverts = await productRepository.findOneBy({ id: id });

		if (!adverts) {
			throw new AppError(404, 'Not found any product with this id');
		}

		return await productRepository.delete(adverts);
	}
}

export default DeleteAdvertsService;
