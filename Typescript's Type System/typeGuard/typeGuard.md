# Type Guard

*Type Guard
*User Defined Type Guards

## Type Guard

Type Guards allow you to narrow down the type of an object within a conditional block.

### typeof

TypeScript is aware of the usage of the JavaScript instanceof and typeof operators. If you use these in a conditional block, TypeScript will understand the type of the variable to be different within that conditional block. Here is a quick example where TypeScript realizes that a particular function does not exist on string and points out what was probably a user typo:
