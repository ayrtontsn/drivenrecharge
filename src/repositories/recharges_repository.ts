import { Info_recharge } from "../protocols/types";
import { db } from "../config/database";

async function recharge_phone (info: Info_recharge) {
	const recharge = await db.query(`INSERT INTO recharges (value,id_phone)
                        VALUES ($1,$2)
                        RETURNING *;`, [info.value_recharge,info.id_phone]);

    return recharge
}


const recharge_repository = {
    recharge_phone
}

export default recharge_repository