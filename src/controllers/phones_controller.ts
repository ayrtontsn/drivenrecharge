import { Request, Response } from "express"
import { post_phone_service } from "../services/phones_service"


export function post_phones(req: Request,res: Response){
    const register = req.body
    post_phone_service(register)

    return res.sendStatus(200)
}