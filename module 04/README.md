# Module 04 - Angular Component Authoring
### Projects:
|     |     |
| --- | --- |
| [Notepad App](./projects/notepad-app/) | Intermidate Angular application using components, inputs, outputs |
| [Lifecycle Hooks](./projects/fun-with-hooks/) | Example of `OnInit`, `OnChanges` and `OnDestroy` |


### Before we start - Introduction to Grid Layout
* We have seen the Grid layout, and how to use it to create modren responsive UI layout
* We have seen how to declare grid lines using `grid-template-rows` and `grid-template-columns` on the container
* We have seen how to place grid children on a specific row or columns using `grid-row` and `grid-column` properties
* for more information, see the [complete guide to grid on CSS TRICKS](https://css-tricks.com/snippets/css/complete-guide-grid/): 
* Learn Grid by playing a game: [Grid Garden](https://cssgridgarden.com/)

### The notepad app
* We have created a responsive layout using css grid
* We have created a view model holding the lists of colors, fonts and sizes and the selected item in each array
* We have added actions that modify the selected color, font and size
* We have created a list of items in the HTML, and allowed to select color, size and font
* We have used fancy CSS to decorate it and make the app look nice
* We have learned about [class.XXX] and [style.XXX] directives

### Componantization of the notepad component
* We agreed that writing full scale applications in one component is difficult to maintain, which is why angular was built to support multi-component applications
* We created a `title` component that presents a title
* We have used the `@Input` Decorator to add input properties that may be passed through the HTML
* We saw how to feed `@Input` properties with "live" data through Binding and understood the flow of data through the `Input` properties
* We used the `@Output` Directive and the `EventMitter<T>` class to create our own events and raise them in our components
* We used the `(event)="action()"` Syntax to respond to an event in the container component
* We used the `$event` keyword to access event data

### Angular Lifecycle hooks
* We learned about the various lifecycle hooks of angular components:
  * The constructor itself
  * The `OnInit` interface (after the inputs have been initialized)
  * The `OnChanges` interface (after each time an input is updated)
  * The `OnDestroy` interface (right before the component is to be removed from the DOM and destroyed)
* Using getters for calculated properties
