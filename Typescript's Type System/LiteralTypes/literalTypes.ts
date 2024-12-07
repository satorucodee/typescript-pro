// Literal Types
// Literal are exact values that are JavaScript primitives.

// String literal
let foo: "Hello";
// foo = "Bar" // Error

type CardinalDirection = "North" | "East" | "South" | "West";

function move(distance: number, direction: CardinalDirection) {
	// ...
}

move(1, "North"); // Okay
// move(1, "Nurth") // Error!

// Other Literal types
type OneToFive = 1 | 2 | 3 | 4 | 5;
type Bools = true | false;


