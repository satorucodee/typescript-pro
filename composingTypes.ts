// ⚡ Union
type Mybool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumberUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
  return obj.length;
}

function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    // do something...
  }

  return obj;
}

// ⚡ Generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface BackPack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backPack: BackPack<string>;
const object = backPack.get();
// backPack.add(23);
