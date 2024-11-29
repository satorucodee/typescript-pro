//? lib.d.ts

/* INFO:
A special declaration file lib.d.ts ships with every installation of typescript.
This file contains the ambient declaration for various common JavaScript constructs
present in JavScript runtimes and the DOM.

- The file is automatically included in the compilation context of a Typescript project.
- The objective of the file is to make is easy for you to start writing type checked JavaScript code.

You can exclude this file from the compilation context by specifying the --noLib compiler
commmand line flag (or "noLib"L true in tsconfig.json).
 */

// HACK: Example Usage

// var foo = 123;
// var bar = foo.toString();

// This code type checks fine because the toString function is defined in lib.d.ts
// for all JavaScript objects.

// WARNING:If you use the same sample code with the noLib option you get a type check error:

//* lib.d.ts -> Inside look

/* INFO:
The contents of lib.d.ts are primarily a bunch of variable declarations e.g. Window, document, math
and a bunch of similar interface declarations e.g. `Window, Document, Math`.

The simplest way to read the documentation and type annotations of global stuff is to type in
code that you know works e.g. Math.floor and then F12(go to defination) using you IDE.

Let's look at a sample variable declaration e.g. Window is defined as:
*/

declare var windowExample: Window;

/*
That is just a simple `declare var` followed by the variable name (here window) and
an interface for type annotation (here the Window interface). These variable generally point
to some global interface e.g. here is small sample of the (actually quite massive) Window
interface:
*/

interface Window
	extends EventTarget,
		WindowTimers,
		WindowSessionStorage,
		WindowLocalStorage,
		WindowConsole,
		GlobalEventHandlers,
		IDBEnvironment,
		WindowBase64 {
	animationStartTime: number;
	applicationCache: ApplicationCache;
	clientInformation: Navigator;
	closed: boolean;
	crypto: Crypto;
	// so on and so forth...
}

/*
You can see that therre is a lot of type information in these interfaces. In the absence of Typescript
you would need to keep this in your head. Now you can offload that knowledge on the compiler with easy
access to it using things like intellisense.
*/

//* Modifying Native Types

/*
Since an interface in Typescipt is open ended this means that you can just add members
to the interfaces declared in lib.d.ts and Typescript will pick up on the additions. Not that you
need to make these changes in a global module for these interface to be associated with lib.d.ts.
We even recommend creating a special file called global.d.ts for this purpose.
*/

// HACK: Example window
// Just add stuff to the Window interface

interface Window {
	helloWorld(): void;
}

// This will allow you to use it in a type safe manner:

// Add it at runtime
window.helloWorld = () => console.log("hello, world");
// call it
window.helloWorld();
// Misuse it and you get an ERROR:
window.helloWorld("gracius"); // Error: Supplied parameters do not match the

//* Using your own custom lib.d.ts
/*
As we mentioned earlier, using the --noLib boolean compiler flag causes TypeScript to
exclude the automatic inclusion of lib.d.ts. There are various reasons why this is a useful feature.
Here are a few of the common ones:

You are running in a custom JavaScript environment that differs significantly
from the standard browser based runtime environment.

You like to have strict control over the globals available in your code.
E.g. lib.d.ts defines item as a global variable and you don't want this to leak into your code.

Once you have excluded the default lib.d.ts you can include a similarly
named file into your compilation context and TypeScript will pick it up
for type checking.

Note: be careful with --noLib. Once you are in noLib land, if you choose
to share your project with others, they will be forced into noLib land
(or rather your lib land). Even worse, if you bring their code into your
project you might need to port it to your lib based code.
*/

//* Compiler target effect on lib.d.ts

/*
Setting the compiler target to es6 causes the lib.d.ts to include additional ambient declarations for more modern (es6) stuff like Promise. This magical
effect of the compiler target changing the ambience of the code is
desirable for some people and for others it's problematic as it
conflates code generation with code ambience.

However, if you want finer grained control of your environment, you should
 use the --lib option which we discuss next.
*/


//* lib option

/*
Sometimes (many times) you want to decouple the relationship between
the compile target (the generated JavaScript version) and the ambient
library support. A common example is Promise, e.g. today (in June 2016)
 you most likely want to --target es5 but still use the latest features
like Promise. To support this you can take explicit control of lib
using the lib compiler option.

NOTE: using --lib decuples any lib magic from --traget giving you better control.

You can provide this option on the cli or in tsconfig.json (recommended):
*/

// Command line
// HACK: tsc --target es5 --lib dom,es6

// tsconfig.json
// HACK: "complilerOptions": {
//           "lib": ["dom", "es6"]
//  }


/*
NOTE: the --lib option provides extremely fine tuned control.
So you most likely want to pick an item from the bulk + environment
categories. If --lib is not specified a default library is injected:

For --target es5 => es5, dom, scripthost

For --target es6 => es6, dom, dom.iterable, scripthost
*/
