
# Freshness
* Freshness
* Allowing extra properties
* Use Case: React

## Freshness

TypeScript provides a concept of Freshness (also called strict object ilteral checking) to make it easier to type check object iterals that would ottherwise be structually type compatible.

Structural typing is extremely convenient. Consider the following piece of code. This allow you to very conveniently upgrade your JavaScript to TypeScript while still preserving a level of type Safety.

```ts
function logName(something: { name: string }) {
	console.log(something.name);
}

var person = { name: "matt", job: "being awesome" };
var animal = { name: "cow", color: "white" };
var random = { note: "I don't have a name property" };

logName(person)
logName(animal);
logName(random) // Error: property `name` is missing
```

However, structural typing has a weakness in that it allows you to misleadingly think that something accepts more data than it actually does. This is demonstrated in the following code which TypeScript will error on as shown:

																			
```ts
function logName(something: { name: string }) {
	console.log(something.name);
}

logName({name: "matt"}) // okay
logName({name: "matt", job: "being awesome"})  // Error: object literals must only specify known properties. `job` is excessive here.
```

Note that this error only happens on object literals. Without this error one might look at the call ```logName({name: "matt", job: "being awesome"})``` and this that logName would do something useful with ```job``` where as in reality it will completely ignore it.

Another bug use case is with interfaces that have optional members, without such onject literal checking, a typo would type check just fine. This is deomnstrated below.

```ts
function logIfHasName(something: { name?: string }) {
	if (something.name) {
		console.log(something.name);
	}
}

var person = { name: "matt", job: "being awesome" };
var animal = { name: "dog", color: "black" };

logIfHasName(person); // okay
logIfHasName(animal); // okay
logIfHasName({ neme: "I just misspelled name to neme" }); // Error: object literals must only specify known properties. `neme` is excessive here.

```
The reason why only object literals are type checked this way is because in this case additional properties that aren't actually used is almost always a typo or a misunderstanding of the API.

## Allowing extra properties
 A type can include an index signature to explicitly indicate that excess properties are permitted:

 ```ts
var x: {foo: number, [x: string]: unknown};
x = {foo:1, baz:2} // ok baz, matched by index
 ```
