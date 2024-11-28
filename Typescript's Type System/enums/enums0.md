
# 📦 Typescript Enums

An enums is a special "class" that represents a group of contants (unchangeable variables).

or In **Typescript**, enums, or enumerated types, and data structures of constant length that hold a set of constant values. Each of these constant values is known as a member of the enum.

Enums come in two flavors ```string``` and ```numeric```.


## Numeric Enums - Default
By default, enums will intialize the first value to ```0``` and add ```1``` to each additional value:

```typescript

enum CardinalDirections{
    North,
    East,
    South,
    West
}


let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection)

// throws error as "North" is not a valid enum
currentDirection = "North" // Error:: "North" is not assignable to type 'cardinalDirections'.

```

### Numeric Enums - Initailized
You can set the value of the first numeric enum and have it auto increment from that:

```typescript

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// logs 1
console.log(Direction.Up)
// logs 4
console.log(Direction.Right)

```


## Numeric Enums - Fully Initailized
You can assign unique number values for each enum value. Then the values will not incremented automatically:

```typescript
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

// logs 404
console.log(StatusCodes.NotFound)
// logs 200
console.log(StatusCodes.Success)

```


## String Enums
Enums can also contain ```string```. This is more common than numeric enums, because of their readability and intent.


```typescript
enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
```
