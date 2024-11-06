import { cpf_error } from "../errors/errors"
import { Register } from "../protocols/types"
import phones_repository from "../repositories/phones_repository"

export async function post_phone_service(register: Register){
    const check_cpf = await phones_repository.search_phones_by_cpf(register.cpf)

    const conflict = await phones_repository.search_phones(register.phone)
    if(conflict.rowCount>0) throw cpf_error("cliente","cpf")

    return phones_repository.resgister_phone(register, check_cpf.rows) 
}