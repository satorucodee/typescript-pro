// Declaration spaces
// there are two declaration spaces in typescript:
// the variabal declaration space.
// the type declaration space.

//? Type Declaration space
// the type declartion space contain stuff that can be used as a type annotation.

class Foo {}
interface Bar {}
type Baz = {};

// this means that you can use Foo, Bar, Baz, etc. as a type annotation

var foo: Foo;
var bar: Bar;
var bas: Baz;

// Notice that even though you have interface Bar,
// you can't use it as a variable because it doesn't
// contribute to the variable declaration space.

bar = Bar;

// The reason why it says cannot find name is because
// the name Bar is not defined in the variable declaration space


//? Variable Declaration space
// the variable declaration space contain stuff that you can use as a variabale
// we saw that having class Foo contributes a type Foo to the type declration space.
// Guess what? It also contributes a variable Foo to the variable declarion space.

class Fooo {};
var someVar = Foo;
var someOtherVar = 123;


// This is a great as sometimes you want to pass classes around as variables. Remembar that.

// NOTE: we couldn't use something like an interface that is only in the type declration space a variable.

// Similarly something that you declare with var,
// is only in the variable declaration space and
// cannot be used as a type annotation:

var someFoo = 123;
var Foooo: someFoo;


// The reason why it says "cannot find name" is because the name foo is not
// defined in type declaration space.

const strin = "dsfsdf asds"
