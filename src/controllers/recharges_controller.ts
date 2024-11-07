import { Request, Response } from "express";
import { post_recharge_service } from "../services/recharges_service";



export async function post_recharges(req: Request,res: Response){
    const info = req.body
    const recharge = await post_recharge_service(info)
    res.status(201).send(recharge.rows[0])
}