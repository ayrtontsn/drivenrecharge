import { Phone, Phones_user, Register, User } from "../protocols/types";
import { db } from "../config/database";

async function resgister_user(cpf: string, name: string){
    const result_user = await db.query<User>(`INSERT INTO users (cpf, name)
                        VALUES ($1, $2)
                        RETURNING *;`,[cpf, name])
    return result_user
}

async function resgister_phone(register: Register, check_cpf: Phones_user[]){
    let user_id = 0
    if(check_cpf.length===0){
        const user = await resgister_user(register.cpf, register.name)
        user_id = user.rows[0].id
    }else{user_id = check_cpf[0].id}

    console.log(register.phone,register.description,register.carriers_id,user_id)
    
    const result_phone = await db.query<Phone>(`INSERT INTO phones (phone, description,carriers_id,user_id)
                        VALUES ($1, $2, $3, $4)
                        RETURNING *;`,[register.phone, register.description, register.carriers_id, user_id])

    return result_phone
}

async function search_phones(phone: string){
    const result_phone = await db.query<Phones_user>(`SELECT users.id, users.cpf, users.name, 
                        phones.phone, carriers.name FROM phones 
                        JOIN users ON phones.user_id = users.id
                        JOIN carriers ON carriers.id = phones.carriers_id
                        WHERE phones.phone = $1;`,[phone])

    return result_phone
    }

async function search_phones_by_cpf(cpf: string){
    const result_user = await db.query<Phones_user>(`SELECT users.id, users.cpf, users.name, 
                        phones.phone, carriers.name FROM phones 
                        JOIN users ON phones.user_id = users.id
                        JOIN carriers ON carriers.id = phones.carriers_id
                        WHERE users.cpf = $1;`,[cpf])
    return result_user
}






const phones_repository = {
    resgister_user,
    resgister_phone,
    search_phones,
    search_phones_by_cpf
}


export default phones_repository