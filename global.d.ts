/*
if you have beginner TypeScript developers you can give
 them a global.d.ts file to put interfaces / types
in the global namespace to make it easy to have
some types just magically available for consumption in all your
TypeScript code.
*/


/*
Another use case for a global.d.ts file is to
declare compile-time constants that are being
injected into the source code by Webpack via the
standard DefinePlugin plugin.
*/


declare const BUILD_MODE_PRODUCTION: boolean; // can be used for conditional compiling
declare const BUILD_VERSION: string;
