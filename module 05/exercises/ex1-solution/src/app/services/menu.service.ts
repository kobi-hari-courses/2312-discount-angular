import { Injectable } from "@angular/core";
import { ALL_DISHES } from "./dishes";
import { Dish } from "../models/dish.model";

@Injectable({providedIn: 'root'})
export class MenuService {
    getAllDishTitles(): string[] {
        return ALL_DISHES.map(d => d.title);
    }

    getDish(title: string): Dish {
        return ALL_DISHES.find(d => d.title === title)!;
    }
}