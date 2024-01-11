# Reactive Services Exercise

## Exercise 1: Math Quiz App
In this exercise you will create an application that will allow the user to practice math problems in an infinite quiz where the user scores points for every correct answer

### Targets
- Using Observables
- Using Subjects
- Consuming state wrapped in subjects
- Using the async pipe

### Requirements
- The applications will present the "next question" to the user
- Each question is a multiplication between 2 numbers between 5 and 20. (17 * 10 = ?)
- The user types the answer in a number input and then clicks "submit"
- The app then moves on to the next question which it randomizes
- The app also accumulates scores. Your current score is the number of correct answers divided by the total number of questions, so if you have answered correctly 15 out of 30 times, your current score is 50%

- In the application, present 2 areas:
    1. The question area: Where the next question is presented and the user can fill in the answer and click "submit"
    2. The summary area where the application presents:
        - The number of questions you have answered
        - The number of corrent answers
        - The score (based on the previous 2)

### Extra Challange
- The app also hold a "current rank" as following
    - If your score is below 50% or you have not yet answered 5 questions, you are 'Beginner'
    - If your score is between 50 and 75% and you have answered at least 10 questions, you are 'Advanced'
    - If your score is above 75% and you have answered more than 15 questions, you are 'Pro'
- Add the current rank to the summary area

## Guidelines
1. You should use a service to hold the state
2. The service should expose all pieces of data as observables (use the correct kind of subject)
3. Maintain service encapsulation. Make sure you only expose observables, not subjects.
4. The components should use `async` pipe to present the data.
5. The components should all be configured to `Change Detection Strategy: Push`

## Exercise 2: RGB Color Guessing Game

### Targets
- Using Behavior Subjects
- Using async pipe and fully reactive paradigm

### Overview
In the **RGB** system, each color is comprised of 3 numeric values between 0 and 255 (inclusive). In this application, the app will draw a color by random, and the user will try to construct the color by setting the correct R, G, B values.

Guessing the exact rgb values, is quite humanly challanging. There are more than 16 million possible colors and the human eye can hardly distingwish between two "very close" colors. We will therefore consider the guess correct if the distance between the colors is less then **50**. The distance between two colors is defined as follows:

```
distance(clr1, clr2) = 
    Math.abs(clr1.r - clr2.r) 
    + Math.abs(clr1.g - clr2.g)
    + Math.abs(clr1.b - clr2.b)
```

So the distance between two colors is the some of the distances of each component: R, G and B.

### Description
Create an application that presents 2 squares one next to each other. In the left square, there will be a random color. In the right square there will be a color that the user constructs. The game ends, and the user wins, when the two colors are within distance of 50 from one another.

The user constructs the color by changing the values of R, G, B. Each of these is a number between 0 and 255. The user has 3 sets of +/- buttons, each set affects the value of one of R, G, and B.

### Step 1: Model
- Define a `Color` model, an interface that holds 3 values: 
``` typescript
interface Color {
    readonly r: number;
    readonly g: number;
    readonly b: number;
}
```
### Step 2: The service
- Create the service that manages the state of the application
    - The service will hold R, G, B values that the app randomizes
    - The service will hold R, G, B values that the user can control
    - Create 6 methods, `incRed`, `incGreen`, `incBlue`, `decRed`, `decGreen`, `decBlue`. These methods increase or decrease one of the R, G or B values that the user controls
    - The service will expose a `computerColor$: Observable<Color>`. This will be an observable that yields values of type `Color`. It combines the RGB values of the computer color into an object of type `Color`
    - The service will also expose a `userColor$: Observable<Color>`. This will yield the color of the user.
    - The service will also expose a `distance$: Observable<number>`. This is an observable of the distance between the two colors. It, of course, has to be modified every time each of the colors change

### Step 3: The Components
- Create a `ColorComponent`
    - Receive input of type `Color`
    - Presents a square `<div>` element, with background color of the input color. Note that you have to convert the input into a CSS string in the format `rgb(10, 20, 30)`

- Create the `GameComponent`
    - Will present the computer color and the user color
    - Will present 6 buttons that increase and decrease the RGB values of the user color. 
    - Will present the distance.
    - If the distance is less than 50, will present a "user wins" message



