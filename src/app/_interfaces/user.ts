export interface ITokenUser{
    id: number,
    nom: string,
    prenom: string,
    email: string,
    iap?: number,
    exp?: number
}

export interface IUser{
    id?: number,
    nom: string,
    prenom: string,
    pseudo: string,
    email: string,
    password: string,
    createdAt?: string
    updatedAt?: string
    deletedAt?: string | null
}

export interface ISingleUser{
    data: IUser
}

export interface IDataUser{
    data: IUser[]
}