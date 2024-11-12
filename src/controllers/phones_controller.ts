import { Request, Response } from "express"
import { get_phone_service, post_phone_service } from "../services/phones_service"

export async function post_phones(req: Request,res: Response){
    const register = req.body
    const post_phone = await post_phone_service(register)
    res.status(201).send(post_phone)
}

export async function get_phones(req: Request,res: Response){
    const { document } = req.params;
    const phones = await get_phone_service(document)
    res.status(200).send(phones)
}