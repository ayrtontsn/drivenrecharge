import { Request, Response } from "express";
import { get_recharge_service, post_recharge_service } from "../services/recharges_service";



export async function post_recharges(req: Request,res: Response){
    const info = req.body
    const recharge = await post_recharge_service(info)
    res.status(201).send(recharge.rows[0])
}

export async function get_recharges(req: Request,res: Response){
    const {phone} = req.params
    const recharge = await get_recharge_service(phone)
    res.status(200).send(recharge.rows)
}