// Readonly

// TypeScript type system allows you to mark individual properties on an interface
// as readonly. This allows you to work in a function way (unexpected mutation is bad):

function fooO(config: { readonly bar: number; readonly bas: number }) {
	// do something
}

let config = { bar: 123, bas: 123 };
fooO(config);

// => of course you use realonly in interface and type definition as well

type Foo = {
	readonly bar: number;
	readonly baz: number;
};

// Initaialization is okay
let fooo: Foo = { bar: 123, baz: 453 };

// Mutation is not
fooo.bar = 456; // Error

// => you can even declare a class property as readonly.

class Person {
	readonly bar = 1; // ok
	readonly baz: string;
	constructor() {
		this.baz = "hello"; //ok
	}
}

// =>> Readonly

// There is a type Readonly that takes T and marks all of its properties as readonly
// using mapped types.

type Bar = {
	bar: number;
	baz: number;
};

type BarReadonly = Readonly<Bar>;

let bar: Bar = { bar: 123, baz: 432 };
let barReadonly: BarReadonly = { bar: 123, baz: 124 };

bar.bar = 345; // okay
barReadonly.bar = 3432; // Error
