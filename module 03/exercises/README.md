# Basic Angular Exercises


## Exercise 1: Todo List
### Step 1: Set up the Angular Project
- Install Angular CLI globally if not already installed. (`npm i -g @angular/cli`)
- Create a new Angular project using the CLI command. (`ng new <project-name> --standalone`)
- Navigate to the project directory.
- Start the development server to see the initial application. (`ng serve`)

### Step 2: Update the App Component
- Create a task interface that defines the structure of a task (e.g., `{ name: string, completed: boolean }`).
- Add a property to the `AppComponent` class to hold an array of tasks.
- Initialize the task list property with some sample tasks as an array of task objects.
- Open the `app.component.html` file.
- Add an `<h2>` heading for the task list.
- Use an `<ul>` element to create an unordered list.
- Use `*ngFor` directive to iterate over the tasks array and display each task as an `<li>` element.
- Inside each `<li>`, display the task name and an appropriate button for marking the task as complete.
- Add a form section to allow users to input new tasks.
- Use `#newTaskRef` as a template reference variable for the input field.
- Use appropriate event bindings to handle adding tasks and marking them as complete.

### Step 3: Test the Task List
- Test adding new tasks by entering text into the input field and clicking the "Add Task" button.
- Test marking tasks as complete by clicking the appropriate "Mark Complete" button for each task.

## Exercise 2: Guessing game
## Introduction
In this exercise, you're going to create a simple number guessing game in a single Angular component. The game will generate a random number between 1 and 100 and the player will need to guess it.

### Requirements

1. **Set Up Your Angular Project:** Start by setting up a new Angular project. You can use the Angular CLI for this.

2. **Union Types:** Create a `GameState` type using TypeScript's union type to represent the different states of the game ('playing', 'won', 'lost'). This type will be defined in your component.

3. **Component Class:** In your component class, you'll need to store the secret number, the current game state, and the list of guesses made by the player. Each guess should be an object with the guessed number and whether it was too high, too low, or correct. Think about the best ways to initialize these values in the component's constructor, and how to update them as the game progresses.

4. **Making Guesses:** The player will need a way to make guesses. Create a method that accepts a number, checks it against the secret number, and adds it to the list of guesses with the correct result. You'll need to think about how to update the game state as well.

5. **Component Template:** Your template should have a button for starting a new game, an input and button for making guesses, a message displaying the game state when the game is not in the 'playing' state, and a list of guesses. Use the `*ngIf` directive to conditionally display elements based on the game state and `*ngFor` to display the list of guesses. Each guess should be displayed differently depending on whether it was too high, too low, or correct.

6. **Event Bindings:** The new game button and the guess button should have click events bound to them. The guess input should have a template reference variable so that its value can be passed to the method making the guess. The guess input should also be cleared after a guess is made.

7. **Styling:** Use CSS classes to style your game. Apply the classes to the guesses depending on whether they were too high, too low, or correct.

## Hints

- The game state, the secret number, and the list of guesses should be properties of the component class.
- The `Math.random` function can be used to generate the secret number.
- The `Math.ceil` function can be used to round the number up to the next integer.
- The `Array.push` method can be used to add a new guess to the list of guesses.
- Remember to bind the click event of the guess button to the method that makes a guess and the click event of the new game button to the method that starts a new game.
- Template reference variables can be used to access the value of the guess input.
- The `[class.xxx]` binding can be used to conditionally apply a CSS class to an element.
- The `Number()` function translates a string into number
- 

