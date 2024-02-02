import { NextFunction, Request, Response } from "express";

export const pagination = (req: Request, res: Response, next: NextFunction): void => {
    
    const queryPage: number = Number(req.query.page)
    const queryPerPage: number = Number(req.query.page)

    const page: number = queryPage && queryPage > 1 ? queryPage : 1

    const perPage: number = queryPerPage && queryPerPage <= 5 && queryPage > 0 ? queryPerPage : 5

    return next()
}