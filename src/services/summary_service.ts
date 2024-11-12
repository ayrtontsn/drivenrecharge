import phones_repository from "../repositories/phones_repository"
import recharge_repository from "../repositories/recharges_repository"

export async function get_summary_service(document: string){
    const phones_full = await phones_repository.search_phones_by_cpf(document)

    const summary = {
        document,
        phones: await Promise.all(phones_full.rows.map(async phone => {return {
            phone,
            carriers:await phones_repository.phone_carrier(phone.user_id),
            recharges: (await recharge_repository.all_recharges_phone(phone.phone)).rows
        }}))
    }

    return summary
}