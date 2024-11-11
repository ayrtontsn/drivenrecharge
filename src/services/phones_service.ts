import { phone_cpf_error, phone_error } from "../errors/errors"
import { Register } from "../protocols/types"
import phones_repository from "../repositories/phones_repository"

export async function post_phone_service(register: Register){
    
    const conflict_phone = await phones_repository.search_phones(register.phone)
    const conflict_cpf = await phones_repository.search_phones_by_cpf(register.cpf)
    
    if(conflict_phone.rowCount>0) throw phone_error();
    if (conflict_cpf.rowCount>=3) throw phone_cpf_error()

    const check_cpf = await phones_repository.search_phones_by_cpf(register.cpf)
    await phones_repository.resgister_phone(register, check_cpf.rows) 
     
    return 
}

export async function get_phone_service(document: string){
    const phones_full = await phones_repository.search_phones_by_cpf(document)
    const phones = phones_full.rows.map(phone => {return {phone_id: phone.phone_id, phone: phone.phone}})

    return phones
}