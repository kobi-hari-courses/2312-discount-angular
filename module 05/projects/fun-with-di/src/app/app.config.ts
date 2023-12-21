import { ApplicationConfig } from '@angular/core';

import { AdditionService } from './services/addition.service';
import { WrongAdditionService } from './services/wrong-addition.service';
import { URL_TOKEN } from './tokens/url.token';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: AdditionService, 
      useClass: WrongAdditionService
    },
    {
      provide: URL_TOKEN, 
      useValue: 'http://www.google.com'
    } 
  ]
};
