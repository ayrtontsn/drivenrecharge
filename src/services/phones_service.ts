import { phone_cpf_error, phone_error } from "../errors/errors"
import { Register } from "../protocols/types"
import phones_repository from "../repositories/phones_repository"

export async function post_phone_service(register: Register){
    
    const conflict_phone = await phones_repository.search_phones(register.phone)
    const check_cpf = await phones_repository.search_phones_by_cpf(register.cpf)
    
    if(conflict_phone.rowCount>0) throw phone_error();
    if (check_cpf.rowCount>=3) throw phone_cpf_error()

    let user_id = 0;
    if(check_cpf.rowCount===0){
        const user = await phones_repository.resgister_user(register.cpf, register.user_name)
        user_id = user.rows[0].id
    }else{user_id = check_cpf.rows[0].user_id}

    const post_phone = await phones_repository.resgister_phone(register, user_id) 
     
    return post_phone.rows
}

export async function get_phone_service(document: string){
    const phones_full = await phones_repository.search_phones_by_cpf(document)
    const phones = phones_full.rows.map(phone => {return {phone_id: phone.id, phone: phone.phone}})

    return phones
}