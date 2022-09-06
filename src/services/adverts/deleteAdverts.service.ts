import { DeleteResult } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

interface ProductDataParams {
    id: string;
}

class DeleteAdvertsService {
    async execute({ id }: ProductDataParams): Promise<DeleteResult> {
        const productRepository = AppDataSource.getRepository(id);

        const adverts = await productRepository.findOne({
            where: {
                id,
            },
        });

        if (!adverts) {
            throw new AppError(404, "Not found any product with this id");
        }

        return await productRepository.delete(id);
    }
}

export default DeleteAdvertsService;
