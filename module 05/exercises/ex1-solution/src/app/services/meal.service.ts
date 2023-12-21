import { Injectable } from "@angular/core";
import { Dish } from "../models/dish.model";

@Injectable({providedIn: 'root'})
export class MealService {
    private _dishes: Dish[] = [];
    private _price = 0;

    get dishes(): Dish[] {return this._dishes};
    get price(): number { return this._price};


    addDish(dish: Dish) {
        this._dishes.push(dish);
        this._price += dish.price;
    }
}