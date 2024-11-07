export function cpf_error(classify: string,user: string){
    return {
            name: "CONFLICT",
            message: `Um ${classify} com esse ${user} já existe!` 
        }
}

export function id_phone_error(id: number){
    return {
            name: "NOT FOUND",
            message: `Não existe telefone com esse ID: ${id}` 
        }
}