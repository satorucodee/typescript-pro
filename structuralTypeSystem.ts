interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 34 };
logPoint(point); // '12, 34'

const point2 = { x: 1, y: 3, z: 5 };
logPoint(point2); // '1, 3'

const rect = {
  x: 10,
  y: 20,
  width: 30,
  height: 40,
};
logPoint(rect); // '10, 20'

const color = { hex: "#187ABF" };
// logPoint(color);

// 🍕 There is no difference between how
//  classes and objects conform to shapes:

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newPoint = new VirtualPoint(100, 200);
logPoint(newPoint);  // '100, 200'
