Day 05 - Dependency Injection
### Projects
|     |     |
| --- | --- |
| [fun-with-di](./fun-with-di/) | Deep dive into Dependency Injection in angular |

### Introduction to Dependency Injection 
* We talked about the motivation to use a dependency injection infrastructure
* We saw how to create a service - an object encapsulating a bit of logic and perhaps data
* We defined the terms:
    * **Consumer** - the object that requires dependency
    * **Injection request / token** - The item that the consumer asks for, to be provided using dependency in the constructor
    * **Injector** - An object responsible for resolving (providing, injecting) the injection request
    * **Provider** - The algorithm, or logic, used to resolve the injected object
* We saw how to define injecter and provider using the `providers` property of a Module, or Component
* We understood the effect of defining a component as injector, and how to use the component hierarchy as injector hierarchy
* We saw how to define a provider that used another class instead of the requested class
* We saw other types of providers:
  * `useClass` - defines a class provider, essentialy calling `new` to instantiate an object
  * `useValue` - provide an already created value
* We saw examples of 2 additional providers: 
  * `useExisting` - provides the value of a different request / token
  * `useFactory` - calls a function to calculated the provided value
* We saw how to define a service as Injectable so it can also consume dependencies
  * We talked about the **Tree Shaking** Algorithm and how to define "tree shakable" services

### Advanced DI
* The `Injector` is an object that we can create on our own and use it programatically. 
    * We create it using the `Injector.create` factory
    * We can define the injector providers
    * We can define the parent injector (optional, it may be a root injector)
    * We can use it to get instances of objects per token.
* There are other types of "requests" or "token".
    * We can create a new constant of type  `InjectionToken` to serve as alternative token.
    * We can use the `useValue` and `useFactory` providers to set the value of the token
    * We consume the token using the `@Inject` decorator
* Application initialization
    * Angular has a predefined token called `APP_INITIALIZER` which can be used to initialize the application.
    * Before it starts to create the UI, angular uses this token to receive a list of methods to run.
    * We can use providers, in order to provide this token.
    * We can use the `multi` property of providers, to provide it more than once.
    * Angular will execute all the methods, and only then start the application.
    * Methods may return `Promise` objects if they are asynchronous.
    * Angular will `await` all these promises before it starts to create the UI.


