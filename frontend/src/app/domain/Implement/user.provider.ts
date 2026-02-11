import { Provider } from '@angular/core';
import { UserRepository } from '../repositories/User.repository';
import { UserRepositoryImpl } from '../../infrastructure/repositories/User.repositoryImp';

export const USER_REPOSITORY_PROVIDER: Provider = {
  provide: UserRepository,
  useClass: UserRepositoryImpl,
};