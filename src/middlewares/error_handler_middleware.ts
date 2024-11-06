import { Errback, NextFunction, Request, Response } from "express";

export default function error_handling_middleware(error, req: Request, res: Response, next: NextFunction) {
    console.log(error.message)
    console.log(error)
    if (error.type === "CONFLICT") return res.status(409).send(error.message);
    return res.status(500).send(error.message)
}