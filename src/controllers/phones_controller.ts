import { Request, Response } from "express"
import { get_phone_service } from "../services/phones_service"

export function get_phones(req: Request,res: Response){
    const phone = req.body
    get_phone_service()

    res.sendStatus(201)
}