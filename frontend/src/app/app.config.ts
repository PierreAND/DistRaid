import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { USER_REPOSITORY_PROVIDER } from './domain/Implement/user.provider';
import { routes } from './app.routes';
import { CLASS_REPOSITORY_PROVIDER } from './domain/Implement/classe.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    USER_REPOSITORY_PROVIDER,
    CLASS_REPOSITORY_PROVIDER
  ]
};
