
# ⚡ Interface

Interface have zero runtime Js impact. There is a lot of power in Typscript interfaces to declare the structure of variables.

#### Example
The following two are equivalent declarations, the frist uses an inline annotation, the second uses an interface:

```typescript
// Sample A
declare var myPoint: {x: number; y:number;};

// Sample B
interface Point{
    x:number;
    y:number;
}

declare var myPoint:Point;
```

> However, the beauty of sample B is that if someone authors a library that build on the ```myPoint``` library to add new members, they can easily add to the existing declaration of ```myPoint:```

```javascript

// Lib a.d.ts
interface Point{
    x:number; y:number;
}

declare var myPoint:Point;

// Lib b.d.ts
interface Point{
    z:number
}

// Your code
var myPoint.z; // Allowed!

```

This is because **interface in Typescript are open ended.** This is a vital tenet of Typescript that it allow you to mimic the extensibility of Javascript using interfaces.

### Classes can implement interfaces

if you want to use classes that must follow an object strucure that someone declared for you in an interface you can use the ```implements``` keyword to ensure compatibility:


```javascript

interface Point{
    x:number; y:number
}

class MyPoint implements Point{
x:number; y:number; // same as Point
}

```

Basically in the presence of that ```implements```, any changes in that external ```Point``` interface will result in a compile error in your code base so you can easily keep it in sync:

```javascript

interface Point{
    x:number; y:number;
    z:number; // New Member
}


class MyPoint implements Point{  // Error: missing membar `z`
    x:number; y:number
}

```

> NOTE: that ```implements``` restricts the structure of the class instances i.e.:

```javascript
var foo:Point = new MyPoint();
```

and stuff like ```foo: Point = MyPoint``` is not the same thing.


## 💡 TIPs

### Not every interface is implementable easily

Interfaces are designed to declare any arbitrarily crazy strucure that might be present in JavaScript.

```javascript

interface Crazy{
    new ():{
        hello: number
    };
}
   ```

   you would essentially have something like

   ```javascript
class CrazyClass implements Crazy{
    constructor(){
        return {hello: 123};
    }
}

// Because
const crazy = new CrazyClass(); // Crazy would be {hello: 123}
   ```
You can declare all the crazy JS out there with interfaces and even use them safely from TypeScript. Doesn't mean you can use TypeScript classes to implement them.

