# Callable

You can annotate callables as part of a type or an interface as follows

```typescript
interface ReturnString {
	(): string;
}
```
An intance of such an interface would be a function that returns a string e.g.

```typescript
declare const foo: ReturnString;
const bar = foo(); // Bar is inferred as a string
```
