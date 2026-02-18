import { DkpRepository } from "../repositories/Dkp.repository";
import { DkpRepositoryImpl } from "../../infrastructure/repositories/Dkp.repositoryImp";
import { Provider } from "@angular/core";

export const DKP_PROVIDER_REPOSITORY: Provider = {
    provide: DkpRepository,
    useClass: DkpRepositoryImpl
}