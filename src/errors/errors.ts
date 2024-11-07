export function cpf_error(classify: string,user: string){
    return {
            name: "CONFLICT",
            message: `Um ${classify} com esse ${user} já existe!` 
        }
}