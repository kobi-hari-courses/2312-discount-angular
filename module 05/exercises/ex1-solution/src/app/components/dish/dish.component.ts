import { Component, Input } from '@angular/core';
import { Dish } from '../../models/dish.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.css'
})
export class DishComponent {
  @Input({required: true})
  dish!: Dish;

}
