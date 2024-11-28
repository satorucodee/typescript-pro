// Namespaces provide you with convenient syntax around a common
// pattern used in Javascript

let something;

(function (something) {
  something = 123;
})(something || (something = {}))(
  // Basicaly `something || (something = {})` allow an anonymouse function
  // `function(something){}` to add stuff to an existing object (the something || portion)
  // or start a new object then add stuff to the object (the || something = {}) portion.
  // this means that you can have two such blocks split by some execution boundary.

  function (something) {
    something.foo = 123;
  }
)(something || (something = {}));

console.log(something); // {foo:123}

(function (something) {
  something.bar = 456;
})(something || (something = {}));

console.log(something); // {foo:123, bar:456}

// This is commonly used in the Javascript land for making sure that stuff doesn't
// leak into the global namespace. with file based modules you don't need to worry about this,
// but the pattern is still usedful for logical grouping of a bunch of fucntion.
// Therefore typescript provides the namespace keyword to group these

namespace Utility {
  export function log(msg) {
    console.log(msg);
  }
  export function error(msg) {
    console.error(msg);
  }
}

// usage
Utility.error("Call Me")
Utility.error("maybe!")
// the namespace keyword generates the same javascript that we saw earlier.

  function (Utility) {
    Add stuff to Utility
  }
)(Utility || (Utility = {}));

/*
One thing to note is that namespaces can be nested so
you can do stuff like namespace Utility.Messaging to nest
a Messaging namespace under Utility.

For most projects we recommend using external modules and using
namespace for quick demos and porting old JavaScript code.
*/
