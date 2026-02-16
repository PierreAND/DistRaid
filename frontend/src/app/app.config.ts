import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { USER_REPOSITORY_PROVIDER } from './domain/Implement/user.provider';
import { routes } from './app.routes';
import { CLASS_REPOSITORY_PROVIDER } from './domain/Implement/classe.provider';
import { RAID_REPOSITORY_PROVIDER } from './domain/Implement/raid.provider';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './infrastructure/services/auth.interceptor';
import { BOSS_REPOSITORY_PROVIDER } from './domain/Implement/boss.provider';
import { LOOT_REPOSITORY_PROVIDER } from './domain/Implement/loot.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    USER_REPOSITORY_PROVIDER,
    CLASS_REPOSITORY_PROVIDER,
    RAID_REPOSITORY_PROVIDER,
    BOSS_REPOSITORY_PROVIDER,
    LOOT_REPOSITORY_PROVIDER
  ]
};
