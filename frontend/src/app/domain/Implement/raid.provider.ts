import { Provider } from "@angular/core";
import { RaidRepository } from "../repositories/Raid.repository";
import { RaidRepositoryImp } from "../../infrastructure/repositories/Raid.repositoryImp";


export const RAID_REPOSITORY_PROVIDER: Provider = {
    provide: RaidRepository,
    useClass: RaidRepositoryImp
}