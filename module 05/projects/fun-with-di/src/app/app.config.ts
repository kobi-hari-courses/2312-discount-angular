import { ApplicationConfig } from '@angular/core';

import { AdditionService } from './services/addition.service';
import { WrongAdditionService } from './services/wrong-addition.service';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: AdditionService, 
      useClass: WrongAdditionService
    }, 
  ]
};
