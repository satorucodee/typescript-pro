// Functions

//* parameter annotations

// variable annotation
var sampleVariable: { bar: number };

// function parameter annotation
function foo(sampleVariable: { bar: number }) {}

//* return type annotation

interface Foo {
	name: string;
}

function bar(sample: Foo): Foo {
	return sample;
}

//* optional parameters

function baz(foo: number, bas?: string): void {
	// do something
}

baz(123);
baz(123, "world");

// HACK: default value as parameter
function some(bar: number, baz: string = "hello") {
	console.log(bar, baz);
}

some(123); // 123, hello
some(123, "world"); // 123, world

//* overloading
// overloads
function padding(all);
function padding(topAndBottom, leftAndRight);
function padding(top, right, bottom, left);
// Actual implementation that is a true representation of all the cases the function body need to handle
function padding(a: number, b?: number, c?: number, d?: any) {
	if (b === undefined && c === undefined && d === undefined) {
		b = c = d = a;
	} else if (c === undefined && d === undefined) {
		c = a;
		d = b;
	}
	return {
		top: a,
		right: b,
		bottom: c,
		left: d,
	};
}

padding(1); // Okay: all
padding(1, 1); // Okay: topAndBottom, leftAndRight
padding(1, 1, 1, 1); // Okay: top, right, bottom, left

// padding(1,1,1) // Error: Not a part of the available overloads

//* Declaring Functions

type LongHand = {
	(a: number): number;
};

type ShortHand = (a: number) => number;

// same but difference exist when you want to add overloads. use LongHand

type LongHandAllowsOverloadDeclaration = {
    (a:number): number;
    (a:string): string;
}
