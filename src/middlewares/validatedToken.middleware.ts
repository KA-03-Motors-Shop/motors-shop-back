import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors';

export const validatedToken = (
	req: Request,
	_: Response,
	next: NextFunction
) => {
	const token = req.headers.authorization;

	if (!token) {
		throw new AppError(401, 'Unauthorized');
	}

	next();
};
