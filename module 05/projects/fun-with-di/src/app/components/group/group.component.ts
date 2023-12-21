import { Component } from '@angular/core';
import { CalcComponent } from '../calc/calc.component';
import { AdditionService } from '../../services/addition.service';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [CalcComponent],
  templateUrl: './group.component.html',
  styleUrl: './group.component.css', 
  providers: [AdditionService]
})
export class GroupComponent {

}
