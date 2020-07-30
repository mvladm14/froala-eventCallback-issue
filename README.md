## React froala event callback issue

Problem: all callbacks passed to froala via configuration events ignore the parent's state.

## Proof:

Run the project.

Whenever the froala content changes, the callback should print to console the parent's state array. However, even if that state array is not empty, when the content changes again, an empty array is printed to the console.

This makes the entire froala callback mechanism pretty much useless.
