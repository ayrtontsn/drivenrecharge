import joi from "joi"
import { Register } from "../protocols/types"

export const phone_schema = joi.object<Register>({
    phone: joi.string().pattern(new RegExp('^[0-9]{10,11}$')).required(),
    description: joi.string().min(3).required(),
    cpf: joi.string().pattern(new RegExp('^[0-9]{11}$')).required(),
    user_name: joi.string().min(3).required(),
    carriers_id: joi.number().required()
})