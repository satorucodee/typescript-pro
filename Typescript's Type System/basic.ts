// Day 1

//? Basic Annotations

/*
Types are annotated using :TypeAnnotation syntax. Anything that is available
in the declaration space can be used as a Type Annotation.
*/

var num: number = 123;
function identity(num: number): number {
  return num;
}

function call(){

}

// ## Primitive types
/* The Javascript primitive types are well represented in the typescript type
system. This means string, number, boolean as demonstrated below.*/

var num: number;
var str: string;
var bool: boolean;

num = 123;
num = 123.456;
num = "123"; // Error

str = "123";
str = 123; // Error

bool = true;
bool = false;
bool = "false"; // Error

// ## Array
/* TypeScript provides dedicated type syntax for arrays to make
it easier for you to annotate and document your code.
The syntax is basically postfixing [] to any valid type annotation (e.g. :boolean[]).
It allows you to safely do any array manipulation that you would normally do and
protects you from errors like assigning a member of the wrong type. */

var boolArray: boolean[];

boolArray = [true, false];
console.log(boolArray[0]); // true
console.log(boolArray.length); // 2
boolArray[1] = true;
boolArray = [false, false];

boolArray[0] = "false"; // error
boolArray = "false"; // error
boolArray = [true, "false"]; // error

// ## Interfaces
// Interfaces are the core way in Typescript to compose multiple type annotations
// into a single named annotation.

interface Name {
  first: string;
  last: string;
}

var person: Name;

person = {
  first: "ankit",
  last: "yadav",
};

person = {
  // Error: `second` is missing
  first: "Jhon",
};

person = {
  // Error: `second` is the wrong type
  first: "Jhon",
  second: 1234,
};

// ## Inline Type Annotation
/* Instead of creating a new interface you can annotate anything you want lineline
using :{structure}. */

var person: {
  name: string;
  age: number;
};

person = {
  name: "Bella",
  age: 19,
};

person = {
  // Error: `Second` is missing
  name: "Bella",
};

person = {
  // Error: `Second` is thw wrong type
  name: "Bella",
  age: "19",
};

// # Special Type
// ### These are any, null, undefined, void - special meaning in typescript

// ## any
/* The any type holds a special place in the typescript type system.
It gives an escape hatch from the type system to tell the compiler
to bugger off. any is compatible with any and all types in the type
system. This means that anything can be assigned to it and it can be
assigned to anything. */

var power: any;

// Takes any and all types
power = 123;
power = "String";

// It compatible with all types
var num: number;
power = num;
num = power;

// ## null and undefined
/* How they are treated by the type system depends on the "staticNullCheck" compiler flag.
When in "strictNullCheck:false", the null and undefined Javascript literals
are effectively treated by the type system the same as something of type any.
These literal can be assigned to any other type. */

var num: number;
var str: string;

// These literals can be assigned to anything
num = null;
str: undefined;

// ## ⚡ :void
//### Use :void to signify that a function does not have a return type

function log(message): void {
  console.log(message);
}

// ## Generics
/*
Many algorithms and data structure in computer science do not depend on the
actual type of the object. However, you still want to enforce a constraint between
various variables. A simple toy example is a function that takes a list of
items and returns a reversed list of items. The constraint here is between what is
passed in to the function and what is returned by the function.
*/

function reverse<T>(items: T[]): T[] {
  var toReturn = [];
  for (let i = items.length - 1; i >= 0; i--) {
    toReturn.push(items[i]);
  }

  return toReturn;
}

var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed); // 3,2,1

// Safety!
reversed[0] = "1"; // ERROR
reversed = ["1", "2"]; // ERROR

reversed[0] = 1; // OKAY
reversed = [1, 2]; // OKAY

/* Here you are basically saying that the function reverse takes
 an array (items: T[]) of some type T (notice the type parameter
 in reverse<T>) and returns an array of type T (notice : T[]).
 Because the reverse function returns items of the same type as it
takes, TypeScript knows the reversed variable is also of type
number[] and will give you Type safety. Similarly if you pass
in an array of string[] to the reverse function the returned
result is also an array of string[] and you get similar type
safety as shown below */

var strArr = ["1", "2"];
var reversedStrs = reverse(strArr);

reversedStrs = [1, 2]; // Error

// In feat javascript arrays already have a .reverse function and typescript
// doess indeed use generics to define its structure:

interface Arrya<T> {
  reverse(): T[];
  // ...
}

// This means that you get type safety when calling .reverse on any array

var numArr = [1, 2, 3, 4];
var reversedNums = numArr.reverse();

reversedNums = ["2", "3"]; // Error

// ## Union Type
// ### Quite commonly in Javascript you want to allow a property to be one of multiple types
// e.g. a string or a number. This is where the union type (denoted by | in a type annotation e.g. string | number)
// comes in handy. A common use case is a function that can take a single object or an array
// of the object

function formatCommandLine(command: string[] | string) {
  var line = "";
  if (typeof command === "string") {
    line = command.trim();
  } else {
    line = command.join(" ").trim();
  }

  // do stuff with line: string
}

// ## Intersection Type
// ### extend is a very common pattern in javascript where you take two object
// and create a new one that has features of both these objects. An intersection
// Type allows you to use this pattern in a safe way.

function extend<T, U>(first: T, second: U): T & U {
  return { ...first, ...second };
}

const x = extend({ a: "hello" }, { b: 42 });

// x now has both `a` and `b`
const a = x.a;
const b = x.b;

// ## Tuple Type
/* Javascript doesn't have first class tuple support. People generally just use array as a tuple.
This is exactly what the Typescript type system supports. Tuple can be annotated using
: [typeofmember1, typeofmember2] etc. A tuple can have any number of members. */

var nameNumber: [string, number];

// okay
nameNumber = ["Jenny", 213432423];

// Error
nameNumber = ["Jenny", "2348-234-223"];

// Combine this with the destructuring support in Typescript,
// tuples feel fairly first class despite being array underneath
 const named = "ankit";
var someItems: [boolean, string, number];
someItems = [false, "okay", 404];
var [isTrue, text, code] = someItems;

// ## Type Alias
/*
TypeScript provides convenient syntax for providing names
for type annotations that you would like to use in more than
one place. The aliases are created using the type
SomeName = someValidTypeAnnotation syntax.
 */

type StrOrNum = string | number;

// Usage: just like any other notation
var sample: StrOrNum;
sample = "123";
sample = 123;

// just checking
sample = true; // Error

// Unline an interface you can give a type alias to literally any type annotation
// (useful for stuff like union and intersection types).

type txt = string | { text: string };
type Coordinats = [number, number];
type Callback = (data: string) => void;


/* HACK: If you need to have hierarchies of Type annotations use an interface.
 They can be used with implements and extends

HACK: Use a type alias for simpler object structures (like Coordinates) just to give them a semantic name.
Also when you want to give semantic names to Union or Intersection types,
a Type alias is the way to go. */
