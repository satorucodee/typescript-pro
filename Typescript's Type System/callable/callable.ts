interface ReturnString {
	(): string;
}

declare const foo: ReturnString;
// const bar = foo(); // bar is inferred as a string

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
const str = overloaded("ANkit");
const num = overloaded(123);

console.log(str);
console.log(123);

// Arrow Syntax
const simple: (foo: number) => string = (foo) => foo.toString();
