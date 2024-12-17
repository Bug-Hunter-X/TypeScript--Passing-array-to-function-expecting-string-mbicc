# TypeScript Bug: Passing Array to String Function

This example demonstrates a common TypeScript error: passing an array to a function that expects a string.  The code attempts to pass an array to the `greeter` function, which expects a single string argument. This results in a runtime error because the '+' operator is not defined for string and array concatenation directly.

**The bug is demonstrated in `bug.ts`.** The solution is shown in `bugSolution.ts`.