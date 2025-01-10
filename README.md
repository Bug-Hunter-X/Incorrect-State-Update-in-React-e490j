# Incorrect State Update in React

This example demonstrates a common mistake in React: directly modifying a state variable instead of using the `setState` function (or its functional equivalent).  Directly mutating state does not cause a re-render, leading to unexpected behavior and silent errors.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides the correct implementation.