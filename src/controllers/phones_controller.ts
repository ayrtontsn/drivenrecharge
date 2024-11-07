import { Request, Response } from "express"
import { get_phone_service, post_phone_service } from "../services/phones_service"


export async function post_phones(req: Request,res: Response){
    const register = req.body
    await post_phone_service(register)
    return res.sendStatus(200)
}

export async function get_phones(req: Request,res: Response){
    const { document } = req.params;
    const phones = await get_phone_service(document)
    console.log(phones)
    return res.status(201).send(phones)
}