export type Register = {
    id: number;
    phone: string;
    description: string;
    cpf: string;
    name: string;
    carriers_id: number;
}

export type Phone = Omit<Register, "cpf" | "name"> & {
    user_id: number
};

export type User = Omit<Register, "phone" | "description" | "carriers_id">;

export type Phones_user = Omit<Register, "description" | "carriers_id"> & {
    carriers: string;
}