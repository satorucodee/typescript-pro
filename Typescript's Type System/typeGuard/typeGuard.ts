// Type Guard

// typeof =>
function doSomething(x: number | string) {
	if (typeof x === "string") {
		console.log(x.substr(1));
		console.log(x.substring(1));
	}
	x.substr(1);
}

class Foo {
	foo = 123;
	common = "123";
}

class Bar {
	bar = 123;
	common: "123";
}

// instaceof =>
function doStuff(arg: Foo | Bar) {
	if (arg instanceof Foo) {
		console.log(arg.foo); // Ok
		console.log(arg.bar); // Error!
	} else {
		console.log(arg.foo); // Error
		console.log(arg.bar); // Ok
	}
}

doStuff(new Foo());
doStuff(new Bar());

// in =>
interface A {
	x: number;
}

interface B {
	y: string;
}
function doStuffIn(q: A | B) {
	if ("x" in q) {
		// q: A
	} else {
		// q: B
	}
}

// Literal Type Guard
type TriState = "yes" | "no" | "unkown";

function logOutState(state: TriState) {
	if (state == "yes") {
		console.log("User selected yes");
	} else if (state == "no") {
		console.log("User selected no");
	} else {
		console.log("User has not makde a selection yet");
	}
}

type FooType = {
	kind: "foo"; // Literal Type
	foo: number;
};

type BarType = {
	kind: "foo"; // Literal Type
	bar: string;
};

// null and undefined with strictNullCheck
function fooo(a?: number | null) {
	if (a == null) return;

	// a is number now
}

// User Defined Type Guards =>

interface FOO {
	foo: number;
	common: string;
}
interface BAR {
	bar: number;
	common: string;
}

function isFoo(arg: any): arg is FOO {
	return arg.foo !== undefined;
}

function doStuff3(arg:FOO | BAR){
	if(isFoo(arg)){
		console.log(arg.foo) // Ok
		console.log(arg.bar) // Error!
	}
	else{
		console.log(arg.foo) // Error
		console.log(arg.bar) // Ok
	}
}


doStuff({foo: 123, common: '123'})
doStuff({bar: 123, common: '123'})


// Type Guards and Callbacks

declare var foo:{bar?: {baz: string}};
function immediate(callback: () => void){
	callback();
}

if (foo.bar){
	console.log(foo.bar.baz) // Okay
	functionDoingSomeStuff(() => {
		console.log(foo.bar?.baz) // Ts error: Object is possible 'undefined'
	})
}
