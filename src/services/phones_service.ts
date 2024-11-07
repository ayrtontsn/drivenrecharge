import { cpf_error } from "../errors/errors"
import { Register } from "../protocols/types"
import phones_repository from "../repositories/phones_repository"

export async function post_phone_service(register: Register){
    
    const conflict = await phones_repository.search_phones(register.phone)
    
    if(conflict.rowCount>0) throw cpf_error("cliente","cpf");

    const check_cpf = await phones_repository.search_phones_by_cpf(register.cpf)
    await phones_repository.resgister_phone(register, check_cpf.rows) 
     
    return 
}

export async function get_phone_service(document: string){
    const phones_full = await phones_repository.search_phones_by_cpf(document)
    const phones = phones_full.rows.map(phone => [phone.phone_id, phone.phone])

    return phones
}