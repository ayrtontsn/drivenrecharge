export type Register = {
    id: number;
    phone: string;
    description: string;
    cpf: string;
    user_name: string;
    carriers_id: number;
}

export type User = Omit<Register, "phone" | "description" | "carriers_id">;

export type Info_recharge = {
    id_phone: number;
    value_recharge: number;
    date: Date;
}

export type Phones = {
    id: number;
    phone: string;
    description: string;
    user_id: number;
    carriers_id: number;
}

export type Carriers = {
    id: number;
    name: string;
    code: number;
}