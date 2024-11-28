# Typescript Enums Part - II

In `Typescript`, enums, or enumerated types, are data structures of constant length that hold a set of constant values. Each of these constant values is know as a member of the enum.

Whereas most features of Typescript are useful for throwing errors during compilation, enums are also useful as data structures that can hold constants for you code. Typescript translate enums into `Javascript objects` in the final code emitted by the compiler. Because of this, you can use enums to make a codebase more readable, as you can have multiple constant values grouped in the same data structure, while also making the code more type-safe than just having different `const` variable laying around.


## Creating Enums in Typescript


```typescript
enum CardinalDirection {
  North = 1,
  East,
  South,
  West,
}
```

You used the number `1` as the value of the first member of your `CardinalDirection` enum. This assigns the number `1` to be the value of `North`. However, you did not assign values to the other members. This is because TypeScript automatically sets the remaining members to the value of the previous member plus one. `CardinalDirection.East` would have the value `2`, `CardinalDirection.South` would have the value `3`, and `CardinalDirection.West` would have the value `4`.

> This behavior only works with numeric enums that have only number values for each member.

You can also completely ignore setting the value of the enum members:

```typescript
enum CardinalDirection {
  North,
  East,
  South,
  West,
}
```

In this case, typescript is going to set the first member to `0`, and then set the other ones automatically based on that one, incrementing each by one. This will result in code identical to the following:

```typescript
enum CardinalDirection {
  North = 0,
  East = 1,
  South = 2,
  West = 3,
}
```

The Typescript compiler defaults to assigning numbers to enums members, but you can override this to make a string enum. These are enums that have string values for each member; these are useful when the value needs to carry a certain human-readable meaning, such as if you'll need to read the value in a log or error message later on.

```typescript
enum CardinalDirection {
  North = "N",
  East = "E",
  South = "S",
  West = "W",
}
```

With the declaration syntax coverd, you can now check out the underlying JavaScript to learn more about how enums behave, including the bi-directional nature of the key/value pairs.


## Bi-directional Enums Members


Upon Typescript compilation, enums are translated into JavaScript objects. However, there are a few features of enums that differentiate them from objects. They offer a more stable data structure for storing contant members than traditional JavaScript objects, and also offer bi-directional referencing for enum members. To show how this works, this section will show you how typescript complies enums in your final code.

```typescript
enum CardinalDirection {
  North = "N",
  East = "E",
  South = "S",
  West = "W",
}
```

This becomes the following code when compiled to JavaScript using the Typescript compiler:

```javascript
"use strict";
var CardinalDirection;
(function (CardinalDirection) {
  CardinalDirection["North"] = "N";
  CardinalDirection["East"] = "E";
  CardinalDirection["South"] = "S";
  CardinalDirection["West"] = "W";
})(CardinalDirection || (CardinalDirection = {}));
```

In this code, the "use strict" string starts `strict mode`, a more restrictive version of JavaScript. After that, TypeScript creates a variable `CardinalDirection` with no value. The code then contains an `immediately invoked function expression (IIFE)` that takes the CardinalDirection variable as an argument, while also setting its value to an empty object (`{}`) if it has not already been set.

Inside the function, once `CardinalDirection` is set as an empty object, the code then assign multiple properties to that object:

```javascript
"use strict";
var CardinalDirection;
(function (CardinalDirection) {
  CardinalDirection["North"] = "N";
  CardinalDirection["East"] = "E";
  CardinalDirection["South"] = "S";
  CardinalDirection["West"] = "W";
})(CardinalDirection || (CardinalDirection = {}));
```

Notice that each property is one member of your original enum, with the values set to the enum's member value.

> But next you will try the same thing with the numeric enum from the last block:

```typescript
enum CardinalDirection {
  North = 1,
  East,
  South,
  West,
}
```

This will result in the following code

```javascript
"use strict";
var CardinalDirection;
(function (CardinalDirection) {
  CardinalDirection[(CardinalDirection["North"] = 1)] = "North";
  CardinalDirection[(CardinalDirection["East"] = 2)] = "East";
  CardinalDirection[(CardinalDirection["South"] = 3)] = "South";
  CardinalDirection[(CardinalDirection["West"] = 4)] = "West";
})(CardinalDirection || (CardinalDirection = {}));
```

In addition to each member of the enum becoming a property of the object ```(CardinalDirection["North"] = 1])```, the enum also creates a key for each number and assigns the string as the value. In the case of ```North```, ```CardinalDirection["North"] = 1``` returns the value 1, and ```CardinalDirection[1] = "North"``` assigns the value ```"North"``` to the key ```"1"```.

This allows for a bi-directional relationship between the names of the numeric members and their values. To test this out, log the following:


## Extracting the Object Type of Enums


```typescript

enum CardinalDirection {
  North = 'N',
  East = 'E',
  South = 'S',
  West = 'W',
};

```

Try to create an object that matches your enum, like the following:

```typescript
enum CardinalDirection {
  North = 'N',
  East = 'E',
  South = 'S',
  West = 'W',
};

const test1: CardinalDirection = {
  North: CardinalDirection.North,
  East: CardinalDirection.East,
  South: CardinalDirection.South,
  West: CardinalDirection.West,
}
```

In this code, ```test1``` is an object with type ```CardinalDirection```, and the object value includes all the members of the enum. However, the TypeScript compiler is going to show the error ```2322```:

```ts
// Output
Type '{ North: CardinalDirection; East: CardinalDirection; South: CardinalDirection; West: CardinalDirection; }' is not assignable to type 'CardinalDirection'.
```

The reason for this error is that the ```CardinalDirection``` type represents a union type of all the enum members, not the type of the enum object ```itself```. You can extract the object type by using ```typeof``` before the name of the enum. Check the highlighted code below:

```ts
enum CardinalDirection {
  North = 'N',
  East = 'E',
  South = 'S',
  West = 'W',
};

const test1: typeof CardinalDirection = {
  North: CardinalDirection.North,
  East: CardinalDirection.East,
  South: CardinalDirection.South,
  West: CardinalDirection.West,
}
```
