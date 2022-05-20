/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// side effects
const someFunction = () => {
  // fetch cpmplete HTTP-requests
  // HTTP-requests — it's a side effect
  fetch('https://ru.hexlet.io/courses');
};

// non-deterministic functions
const getDate = () => Date.now();

// In computer programming, a pure function is a function that has the following properties:[1][2]

// the function return values are identical for identical arguments (no variation with local static variables, non-local variables, mutable reference arguments or input streams), and
// the function application has no side effects (no mutation of local static variables, non-local variables, mutable reference arguments or input/output streams).
// Thus a pure function is a computational analogue of a mathematical function. Some authors, particularly from the imperative language community, use the term "pure" for all functions that just have the above property 2