import { Component, inject } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { MenuService } from '../../services/menu.service';
import { CommonModule } from '@angular/common';
import { DishComponent } from '../dish/dish.component';

@Component({
  selector: 'app-meal',
  standalone: true,
  imports: [CommonModule, DishComponent],
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.css',
  providers: [MealService]
})
export class MealComponent {
  constructor() {}

  public meal = inject(MealService);
  public menu = inject(MenuService);

  titles = this.menu.getAllDishTitles();

  onAdd(title: string) {
    const d = this.menu.getDish(title);
    this.meal.addDish(d);
  }
}
