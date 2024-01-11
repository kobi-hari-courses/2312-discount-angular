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

Since guessing the exact rgb values, is quite humanly challanging, since there are more than 16 million possible colors and the human eye can hardly distingwish between two "very close" colors, we will consider the guess correct if the distance 