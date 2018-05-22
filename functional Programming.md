https://opensource.com/article/17/6/functional-javascript


Immutability is a core tenet of functional programming. It, along with pure functions, makes it easier to reason about and 
debug your programs. 
Replacing procedural loops with functions can increase the readability of your program and make it more elegant.

Pure functions
Just because your program contains functions does not necessarily mean that you are doing functional programming. 
Functional programming distinguishes between pure and impure functions. 
It encourages you to write pure functions. A pure function must satisfy both of the following properties:

1)  Referential transparency: 
    The function always gives the same return value for the same arguments. This means that the function cannot depend on any mutable state.

2) Side-effect free: 
    The function cannot cause any side effects. Side effects may include I/O (e.g., writing to the console or a log file), modifying a mutable object, reassigning a variable, etc.

the multiply function is an example of a pure function. It always returns the same output for the same input, and it causes no side effects.

function multiply(a, b) {
  return a * b;
}

The following are examples of impure functions. The canRide function depends on the captured heightRequirement variable. Captured variables do not necessarily make a function impure, but mutable (or re-assignable) ones do. In this case it was declared using let, which means that it can be reassigned. The multiply function is impure because it causes a side-effect by logging to the console.

let heightRequirement = 46;

// Impure because it relies on a mutable (reassignable) variable.

function canRide(height) {
  return height >= heightRequirement;
}

// Impure because it causes a side-effect by logging to the console.
function multiply(a, b) {
  console.log('Arguments: ', a, b);
  return a * b;
}


