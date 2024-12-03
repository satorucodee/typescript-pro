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

