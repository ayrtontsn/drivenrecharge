export function cpf_error(classify: string,user: string){
    return {
        type: "CONFLICT",
        message: `Um ${classify} com esse ${user} já existe!`  
    }
}