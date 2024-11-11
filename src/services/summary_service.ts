import phones_repository from "../repositories/phones_repository"

export async function get_summary_service(document: string){
    const phones_full = await phones_repository.search_phones_by_cpf(document)

    const summary = {
        document,
        phones: phones_full.rows.map(phone => {return{
            phone_id: phone.phone_id,
            phone: phone.phone,
            description: phone.description,
            carriers:{
                carriers_code: phone.carriers_code,
                carriers_name: phone.carriers_name
            }
        }})
    }

    return summary
}