import { ClasseRepository } from "../repositories/Classe.repository";
import { ClasseRepositoryImp } from "../../infrastructure/repositories/Classe.repositoryImp";
import { Provider } from "@angular/core";


export const CLASS_REPOSITORY_PROVIDER: Provider = {
    provide: ClasseRepository,
    useClass: ClasseRepositoryImp
}