// Typescript Enums Part -  I

// Numeric Enums - Default

enum CardinalDirections {
  North,
  East,
  South,
  West,
}

let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);

// throws error as "North" is not a valid enum
currentDirection = "North"; // Error:: "North" is not assignable to type 'cardinalDirections'.

// Numeric Enums - Initialized
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// logs 1
console.log(Direction.Up);
// logs 4
console.log(Direction.Right);

// Numeric Enums -> fully initialized

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


// String Enums

enum AnimationType{
    Bounce = "BOUNCE",
    Drop = 'DROP'
}
