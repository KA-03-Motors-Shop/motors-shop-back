import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors';
import jwt from 'jsonwebtoken';

export const authUserMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const token = req.headers.authorization;

		if (!token) {
			throw new AppError(401, 'Invalid Token');
		}

		jwt.verify(
			token as string,
			process.env.TOKEN_KEY as string,
			(err: any, decoded: any) => {
				req.userEmail = decoded.email;
				next();
			}
		);
	} catch (error) {
		if (error instanceof AppError) throw new AppError(401, 'Unauthorized');
	}
};
