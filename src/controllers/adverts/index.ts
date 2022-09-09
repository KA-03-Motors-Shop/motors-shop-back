import { Request, Response } from "express";
import DeleteAdvertsService from "../../services/adverts/deleteAdverts.service";

class AdvertsController {
    static async delete(request: Request, response: Response) {
        const { advertsID } = request.params;

        const deleteService = new DeleteAdvertsService();

        await deleteService.execute({
            id: advertsID,
        });

        return response.status(204).json();
    }
}

export default AdvertsController;
