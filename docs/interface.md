- can be implemented by class
- As function type, below is an example of an interface for a function that adds two numbers:

```typescript
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn = function (a, b) {
  return a + b;
};
```
