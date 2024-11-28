// Enums - Part II

enum Numbers {
  One = 1,
  Two,
  Three,
  Four,
}

enum AnimationType {
  Bounce = "BOUNCE",
  Drop = "DROP",
}

// enum Direction {  // Typescript enum Before
//   Up = "U",
//   Down = "D",
//   Left = "L",
//   Right = "R",
// }

("use strict"); // Typescript enum after complie into Js
var Direction;
(function (Direction) {
  Direction["Up"] = "U";
  Direction["Down"] = "D";
  Direction["Left"] = "L";
  Direction["Right"] = "R";
})(Direction || (Direction = {}));
// logs
console.log(Direction);

// enum CardinalDirection {  // Typescript Numbers enum Before
//   North = 1,
//   East,
//   South,
//   West,
// }

("use strict");
var CardinalDirection;
(function (CardinalDirection) {
  CardinalDirection[(CardinalDirection["Up"] = 1)] = "Up";
  CardinalDirection[(CardinalDirection["Down"] = 2)] = "Down";
  CardinalDirection[(CardinalDirection["Left"] = 3)] = "Left";
  CardinalDirection[(CardinalDirection["Right"] = 4)] = "Right";
})(CardinalDirection || (CardinalDirection = {}));
// logs
console.log(CardinalDirection);

// Using Enums in Typescript

enum Num {
  One = 1,
  Two,
  Three,
  Four,
}

const two: Num = Num.Two;

// Extracting the object Type of Enums

enum Skill{
    Javascript = 'Js',
    Python = 'Py',
    Dart = 'Dt'
}

const test1: typeof Skill = {
    Javascript: Skill.Javascript,
    Python: Skill.Python,
    Dart: Skill.Dart
}

console.log(test1)
