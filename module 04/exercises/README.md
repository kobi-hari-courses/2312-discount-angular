# Angular Component Authoring Exercise

## Exercise 1: Blog Post Management App
In this exercise, you will create a simple blog post management application. It will allow the user to view all the blog posts, and create new ones, or delete existing ones.

### Step 1: Define the `Post` Interface
- Create a `models` folder, and in it create the file: `post.model.ts`
- Create a `Post` interface with the following readonly properties: `id`, `title`, `content`, and `date`. 

### Step 2: Create the `PostComponent`

Create a `PostComponent` that will display an individual post. The component should have a `post` input property, and it should display the `title`, `content`, and `date` of the post. In addition, the component should calculate and display the word count of the `content`.

**HINTS**  
1. The `wordCount` property is computed from other inputs, so you need to calculate it once when the component is created and again every time the `post` inut changes. 
2. You can achieve this either with lifecycle hooks or using a `getter`
3. String has a `split` method which seperates it into parts according to a provided seperator. You can use it to calculate the number of words. 

### Step 3: Create the `PostListComponent`

Create a `PostListComponent` that will display a list of posts. The component should have a **`posts` input** property and a **`deletePost` output event**. The `PostListComponent` should use the `PostComponent` to display each post in the `posts` list. It should also have a button for each post that, when clicked, emits the `deletePost` event.

**Note** The component does not perform the actual deletion. It recieves an array as input but it does not modify it by itself. Instead, it throws an event when the user "asks" to delete a post and allow the parent component to do the actual deleting.

### Step 4: Create the `CreatePostComponent`

Create a `CreatePostComponent` that allows the user to create a new post. The component should have a `newPost` output event. It should include input fields for the `title` and `content` of the post, and it should have a button that, when clicked, creates a new `Post` object with the entered `title` and `content` and the current date, and emits this new post on the `newPost` event.

**Note** again, this component is not doing the actual new post creation. It only collects information from the user and then emits an event. This is yet another example of a **Presentational component**. The parent component is the one performing the logical operations. 

### Step 5: Implement the Parent Component

Implement a parent component that uses the `PostListComponent` and the `CreatePostComponent`. The parent component should contain an array of `Post` objects. It should pass this array as an input to the `PostListComponent`, and it should handle the `deletePost` event from the `PostListComponent` and the `newPost` event from the `CreatePostComponent` to update the array of `Post` objects.



## Exercise 2: Memory Game App

The goal of this exercise is to create a simple memory game. The game will have two players who take turns to find matching pairs of cards. Each player will accumulate the pairs they've found. 

## Solution
You can find the code to this exercise here.
Also, you can find a video demonstrating the solution [here](https://youtu.be/STvDVdZ1XOw)

## Requirements
0. Before you start coding, download some images and store them in the `assets` folder. 
    - Add another image for the back side of the card.  This is the image that will be displayed when the card is flipped
1. Define two interfaces:
    - `Player`: should have properties for `name`, and an array of `collectedPairs`. You can initialize the names to `Player 1` and `Player 2`
    - `Card`: should have properties for `id` and `image`
2. Create four Angular components:
    - `CardComponent`: displays a card. (Presentational)
        - This component should take a `Card` as input and
        - Should take a `flipped: boolean` input
        - It should emit an event when the button is clicked
        - Should present an image according to the card image and flipped inputs. If it is flipped it should present the image of the card. If not, it should present a card background image. Part of the logic of this component is to calculate the correct path to the image source file
    - `PlayerComponent`: displays a player's info (Presentational) 
        - This component should take a `Player` as input.
        - Should display name, the number of pairs they've collected, and the cards of the collected pairs. 
    - `BoardComponent`: displays the board (Presentational) 
        - This component should take the list of `Card | null`s as input.  (the nulls are for cards that were picked by one of the players and are missing from the pile)
        - It should hold a list of "flipped" cards.
            - It should present the cards in a grid
            - It should populate the "flipped" input according to the array of flipped cards (use the `includes` method to check if array contains value)        
        - It should respond to the "flipped" event of the card component by actually flipping it (adding it to the list of flipped ids)
            - When the number of flipped cards is 2, it should "freeze" and not allow to flip any more
            - When it is "frozen" it should present a message, either "match" or "miss" and allow the user to click 'OK'
            - when the user clicks 'OK' it should emit an event according to the flipped cards
            - If they are matched, it should emit a (match) event and pass the array of cards as payload
            - If they are not matched, it should emit a (miss) event;
            - In addition to emitting the event, it should empty the "flipped" array, which will cause all cards to appear face down again.

    - `AppComponent` (Parent Component): displays two `PlayerComponent`s and one `BoardComponent`. It also includes a "New Game" button to reset the game.
        - Respond to the `BoardComponent (miss) and (match)` events by changing the state of the game
        - Send the proper inputs to all the other components

3. Game Logic:
    - The game starts with the first player.
    - When a player flips a pair of matching cards, those cards are added to the player's `collectedPairs`.
    - Players take turns flipping cards. A turn consists of flipping two cards.
    - The game continues until all pairs are found.
    - The "New Game" button should reset the game state.

## Hints

- To generate the list of cards, consider creating a list of images, duplicating that list, and then concatinating them. Each card should be assigned a unique `id`.
- The following function suffles an array
``` javascript
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
```
- To duplicate an array use: 
```javascript
const newArray = [...sourceArray];
```
- To concatinate two arrays use:
```javascript
const resultArray = [...array1, ...array2];
```

