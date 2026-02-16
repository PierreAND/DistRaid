import { BossRepository } from "../repositories/Boss.repository";
import { BossRepositoryImpl } from "../../infrastructure/repositories/Boss.repositoryImp";
import { Provider } from "@angular/core";


export const BOSS_REPOSITORY_PROVIDER: Provider = {
    provide:BossRepository,
    useClass:BossRepositoryImpl,
}