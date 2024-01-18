Module 09 - Http
### Projects
|     |     |
| --- | --- |
| [jokes-server](./jokes-server/) | A restful server for the http demo |
| [fun-with-http](./fun-with-http/) | Introduction to `HttpClient` |

### Introduction to Http in Angular
* We talked about the structure of Http Request - Verb, URL, Header, Body
* We talked about the various types of verbs: 
    * `GET` to query a single or a list of objects
    * `POST` to add a new object
    * `PUT` to update an entire existing object
    * `DELETE` to delete an existing object or list of objects
    * `PATCH` to modify a part of an existing object (several fields only)
* We used `HttpClientModule` to provide our services with the `HttpClient` service
* We used the `HttpClient` Service to create web requests a server we created using `json-server`
* We saw that the `HttpClient` methods all return Observables
* We saw that it is preferable to use the `firstValueFrom` operator, to convert the observable to promise.
* We saw how to use sites like [QuickType](https://app.quicktype.io/) to automatically generate model for json data
* We saw how to ask the http client to give us the entire response (including headers and response code) rather than just the body using `observe: 'response'`





