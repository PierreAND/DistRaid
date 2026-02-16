import { LootRepository } from "../repositories/Loot.repository";
import { LootRepositoryImpl } from "../../infrastructure/repositories/Loot.repositoryImp";
import { Provider } from "@angular/core";

export const LOOT_REPOSITORY_PROVIDER: Provider = {
      provide: LootRepository,
    useClass : LootRepositoryImpl

}

