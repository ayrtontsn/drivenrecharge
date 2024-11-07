import joi from "joi"
import { Info_recharge } from "../protocols/types"

export const recharge_schema = joi.object<Info_recharge>({
    id_phone: joi.number().required(),
    value_recharge: joi.number().min(10).max(1000).required()
})