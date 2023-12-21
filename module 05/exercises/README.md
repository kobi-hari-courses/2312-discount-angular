# Angular Dependency Injection in Angular

## Exercise 1: Diner Menu
In this exercise we will practice Dependency Injection in angular. Specifically we will practice:
1. Creating services and using the `@Injectable` decorator
2. Injecting services into components
3. Providing the services in root
4. Providing the services in component

### Step 1: Define the `MenuService`
The menu service holds a set of dishes. For each dish there is an image, title and price. You can use the following interface:
```typescript
export interface Dish {
    readonly title: string;
    readonly imageUrl: string;
    readonly price: number;
}
```

The menu service will provide the following methods:
- `GetAllDishTitles(): string[]` returns a list of the titles of all meals
- `GetDish(title: string): Dish` returns one meal by the provided title

### Step 2: Define the `MealService`
A meal is simply a list of dishes. The `MealService` defines one meal. It has the following properties:
- `dishes: Dish[]` the list of dishes in the meal
- `price: number` the total price of the meal

It should provide the following method:
- `addDish(dish: Dish)` Adds one dish to the meal, and updates the total price accordingly

### Step 3: Dish Component
The dish component is a presentational component that presents the dish. It shows the title, the image and the price. Create the component:
- It should receive one input: `dish: Dish`
- It should present all the properties
- Style it nicely with CSS

### Step 4: Meal component
Meal component uses `MealService` and `MenuService`. It presents the menu and and allows you to select a dish from the menu. Every dish you select is added to the meal.
It also presents the meal, and the total price of the meal. 

### Step 5: Putting it all together.
The main component should hold 2 instances of the meal component. One for lunch and one for dinner. The user should be able to modify each meal on its own. 

**HINTS**
- The Menu service should be provided in root - so there is one singleton.
- The Meal service should be provided per meal component.