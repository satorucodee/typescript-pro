# Type Assertion

Typescript allows you to override its inferred and analyzed view of types in any way you want to. This is done by a mechanism called "type assertion". Typescript's type assertion is purely you telling the compiler that you know about the types better than it does, and that is should not second guess you.

A common use case for type assertion is when you are porting over code from JavaScript to TypeScript.

```js
var foo = {};
foo.bar = 123; // Error: property 'bar' does not exist on `{}`
foo.bas = "hello"; // Error: property 'bas' does not exist on `{}`
```

Here the code errors because the inferred type of `foo` is `{}` i.e. an object with zero properties. Therefore you are not allowed to add `bar` or `bas` to it. You can fix this simply by a type assertion `as Foo`:

```ts
interface Foo{
    bar: number;
    bas: string;
}

var foo: {} as Foo;
foo.bar = 123;
foo.bas: "hello"
```

## `as foo` vs. `<foo>`

Originally the syntax that was added was `<foo>`. This is demonstrated below:

```ts
var foo: any;
var bar = <string>foo; // bar is now of type 'string'
```

Therefore it is now recommended that you just use `as foo` for consistency.

## Type Assertion vs. Casting

The reason why it's not called "type casting" is that casting generally implies some sort of runtime support. However, type assertions are purely a compile time construct and a way for you to provide hints to the compiler on how you want your code to be analyzed.

## Double assertion

The type assertion, despite being a bit unsafe as we've shown, is not completely open season. E.g. the following is a very valid use case (e.g. the user thinks the event passed in will be a more specific case of an event) and the type assertion works as expected:

```ts
function handler(event: Event) {
	let mouseEvent = event as MouseEvent;
}
```

However, the following is most likely an error and TypeScript will complain as shown despite the user's type assertion:

```ts
function handler(event: Event) {
	let element = event as HTMLElement; // Error: Neither 'Event' nor type 'HTMLElement' is assignable to the other
}
```

If you still want that Type, you can use a duble assertion, but first asserting to `unknow` (or `any`) which is compatible with all types and therefor the compiler no longer complains:

```ts
function handler(event: Event) {
	let element = event as unknown as HTMLElement; // Okay
}
```

## How Typescript determines if a single assertion is not enough

Basically, the assertion from type ```S``` to ```T``` succeeds if either ```S``` is subtype of ```T``` or ```T``` is a subtype of ```S```.This is to provide extra safety when doing type assertions... completely wild assertions can be very unsafe and you need to use ```unknown``` (or ```any```) to be that unsafe.


## ```as any as``` vs ``` as unknown as```
Both are equally unsafe as far as TypeScript is concerned. Use what makes you happy Considerations:


1.Linters prefer ```unknown``` (with ```no-explicit-any``` rule)
2.```any``` is less characters to type than ```unknown```


