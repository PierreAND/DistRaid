import { Provider } from "@angular/core";
import { RaidRepository } from "../repositories/Raid.repository";
import { RaidRepositoryImp } from "../../infrastructure/repositories/Raid.repositoryImp";
import { UserRepositoryImpl } from "../../infrastructure/repositories/User.repositoryImp";

export const RAID_REPOSITORY_PROVIDER: Provider = {
    provide: RaidRepository,
    useClass: RaidRepositoryImp
}