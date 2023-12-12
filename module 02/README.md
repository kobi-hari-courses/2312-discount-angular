# Module 02 - Typescript
### Projects:
|     |     |
| --- | --- |
| [fun-with-ts](./projects/fun-with-ts) | Introduction to Typescript | 

## Typescript basics
* We learned about the basic types of typescript
  * The 6 atomic types of javascript: `boolean`, `number`, `string`, `object`, `function` and `undefined`
* Typed arrays: `number[]` and `Array<number>`
* Tuples: `[number, number], [string, boolean, number]`

## Typescript deep dive
* Defining Classes
* Declaring constructors and initializing fields in the constructor signature
* private, public and protected fields
* Defining property getters and setters
* Using interfaces
  * What is special about iterfaces in typescript
* Using the `let` keyword
* the `type` alias
* Fixed object notation: `{x: number, y: boolean}`
* Flexible object notation: `{[key: string]: number}` and the equivilent: `Record<string, number>`
* Function notation: `(x: number, y: string) => boolean` 
* Typescript definition for **Type Safety** as "signature compatible"
* Union Types
* Cross Types
* Mapped types

## Working Environment
* How to create working environment with npm and vscode
* Defining source and dist folders
* We saw how to create the `tsconfig.json` file and configure different aspects of the typescript project
  * What the target version of javascript is
  * Where to locate the source files
  * Where to place the compiled files
  * Libreries to include
  * Adding `map` files to support debugging
  * Running in the compiler in `watch` mode for continous compilation
* We saw how to configure the `VS Code Debugger` for work with our `node.js` project

