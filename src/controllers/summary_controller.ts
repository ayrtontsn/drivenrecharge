import { Request, Response } from "express";
import { get_summary_service } from "../services/summary_service";

export async function get_summary(req: Request,res: Response){
    const { document } = req.params;
    const summary = await get_summary_service(document)
    res.status(200).send(summary)
}