import { Loot } from "../boss/boss.model"

export interface User {
    id: number
    email: string
    name: string
    classeId: number
    specialisationId: number
    raidId?: number
    raid?: Raid
    classe: Classe
    loots: Loot[]
    specialisation: Specialisation
    createdAt: Date
}


export interface Classe {
    id: number
    name: string
    specialisation: Specialisation[]
    users: User[]
}


export interface Specialisation {
    id: number
    name: string
    classeId: number
    classe: Classe
    users: User[]
}

export interface Raid {
    id: number
    name: string
    createdById: number
    createdBy: {id: number; name: string ; email: string}
    users: User[]
}


export interface JoinRequest {
  id: number;
  userId: number;
  raidId: number;
  status: 'pending' | 'accepted' | 'rejected';
  user: User;
  createdAt: Date;
}


export interface CreateRaidPayload {
    name: string
}

export interface AuthResponse {
    user: User
    access_token: string
}

export interface RegisterPayload {
    name?: string
    email: string
    password: string
    classeId: number
    specialisationId: number
}

export interface LoginPayload {
    email: string
    password: string
}

export interface UpdateUserPayload {
    name?: string
    email?: string
    classeId?: number
    specialisationId?: number
    raidId?: number | null 
}

export interface UserWishlist {
  id: number;
  name: string;
  email: string;
  classe: Classe;
  specialisation: Specialisation;
  loots: Loot[];
}