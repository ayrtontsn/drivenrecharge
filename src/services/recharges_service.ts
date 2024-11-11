import recharge_repository from "../repositories/recharges_repository";
import { Info_recharge } from "../protocols/types";
import phones_repository from "../repositories/phones_repository";
import { id_phone_error } from "../errors/errors";

export async function post_recharge_service(info: Info_recharge){
    const phone = await phones_repository.search_phones_by_phoneId(info.id_phone)

    if(phone.rowCount === 0) throw id_phone_error(info.id_phone)

    const recharge = await recharge_repository.recharge_phone(info)
    return recharge
}

export async function get_recharge_service(phone: string){
    const recharge_phone = await recharge_repository.all_recharges_phone(phone)
    return recharge_phone
}