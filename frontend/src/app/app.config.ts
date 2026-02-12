import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { USER_REPOSITORY_PROVIDER } from './domain/Implement/user.provider';
import { routes } from './app.routes';
import { CLASS_REPOSITORY_PROVIDER } from './domain/Implement/classe.provider';
import { RAID_REPOSITORY_PROVIDER } from './domain/Implement/raid.provider';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    USER_REPOSITORY_PROVIDER,
    CLASS_REPOSITORY_PROVIDER,
    RAID_REPOSITORY_PROVIDER
  ]
};
