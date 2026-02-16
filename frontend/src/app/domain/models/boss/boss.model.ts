import { User } from "../users/user.model";


export interface Boss {
    id: number
    name: string
    loots: Loot []
}

export interface Loot {
    id: number
    name: string
    url: string
    boss: Boss
    users: User[]
    
}

