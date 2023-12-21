import { Component, Inject } from '@angular/core';
import { AdditionService } from '../../services/addition.service';
import { AddingService } from '../../services/adding-service.interface';
import { URL_TOKEN } from '../../tokens/url.token';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css', 
  providers: [
     
  ]

})
export class CalcComponent {
  constructor(
      protected additionService: AdditionService, 
      @Inject(URL_TOKEN) private url: string){

        console.log('CalcComponent received the url', url);
      }

  result: number = 0;

  calc(a: number, b: number) {
    this.result = this.additionService.add(a, b);
  }

}
