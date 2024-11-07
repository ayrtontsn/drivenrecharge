import { NextFunction, Request, Response } from "express";

export default function error_handling_middleware(error: Error, req: Request, res: Response, next: NextFunction) {
    if (error.name === "NOT FOUND") return res.status(404).send(error.message);
    if (error.name === "CONFLICT") return res.status(409).send(error.message);
    if (error.name === "UNPROCESSABLE ENTITY") return res.status(422).send(error.message);
    return res.status(500).send(error.message)
}