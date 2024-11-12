import { Info_recharge } from "../protocols/types";
import { db } from "../config/database";

async function recharge_phone(info: Info_recharge) {
    const recharge = await db.query<Info_recharge>(`INSERT INTO recharges (value,id_phone)
                        VALUES ($1,$2)
                        RETURNING *;`, [info.value_recharge, info.id_phone]);

    return recharge
}

async function all_recharges_phone(phone: string) {
    const recharges_phone = await db.query<Info_recharge>(`SELECT recharges.*
                                        FROM recharges
                                        JOIN phones ON recharges.id_phone = phones.id                                        
                                        WHERE phones.phone = $1;`, [phone]);                              
    return recharges_phone
}


const recharge_repository = {
    recharge_phone,
    all_recharges_phone
}

export default recharge_repository