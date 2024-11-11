export function phone_error(){
    return {
            name: "CONFLICT",
            message: `Esse phone já está cadastrado!` 
        }
}

export function phone_cpf_error(){
    return {
            name: "CONFLICT",
            message: `Existem 3 phones já está cadastrados nesse cpf!` 
        }
}

export function id_phone_error(id: number){
    return {
            name: "NOT FOUND",
            message: `Não existe telefone com esse ID: ${id}` 
        }
}