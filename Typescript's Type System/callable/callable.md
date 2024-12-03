# Callable

You can annotate callables as part of a type or an interface as follows

```typescript
interface ReturnString {
	(): string;
}
```

An intance of such an interface would be a function that returns a string e.g.

```typescript
declare const foo: ReturnString;
const bar = foo(); // Bar is inferred as a string
```

## Obvious examples

Of course such a callable annotation can also specify any argument / optional arguments / rest arguments as needed. e.g. here is a complex example

```typescript
interface Complex {
	(foo: string, bar?: number, ...other: boolean[]): number;
}
```

An interface can provide multiple callable annotations to specify function overloading.

```typescript
interface Overloaded {
	(foo: string): string;
	(foo: number): number;
}

// example implementation
function stringOrNumber(foo: number): number;
function stringOrNumber(foo: string): string;
function stringOrNumber(foo: any): any {
	if (typeof foo === "number") {
		return foo * foo;
	} else if (typeof foo === "string") {
		return `hello ${foo}`;
	}
}

const overloaded: Overloaded = stringOrNumber;

// example usage
const str = overloaded(""); // type of 'str' is inferred as string
const num = overloaded(123); // type of 'num' is inferred as number
```

Of course, like the body of any interface, you can use the body of a callable interface as a type annotation for variable.

```typescript
const overloaded: {
	(foo: string): string;
	(foo: number): number;
} = (foo: any) => foo;
```

## Arrow Syntax

To make it easy to specify callable signatures, Typescript also allows simple arrow type annotations.

```typescript
const simple: (foo: number) => string = (foo) => foo.toString();
```

Only limitation of the arrow syntax: You can't specify overloads. For overloads you must use the full bodied {(someArgs): someReturn} syntax.


## Newable

Newable is just a special type of callable type annotation with the prefix ```new```. It simply means that you need to invoke with new e.g.


```typescript
interface CallMeWithNewToGetString{
    new(): string
}

// usage
declare const Foo: CallMeWithNewGetString;
const bar = new Foo(); // bar is inferred to be of type string
```
