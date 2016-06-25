#[TuringType](http://oxism.com/TuringType)
#### A naïve human typing simulation effect
[Dan Motzenbecker](http://oxism.com), MIT License

[@dcmotz](http://twitter.com/dcmotz)

Written quickly to scratch an itch; not intended to be an accurate algorithm.

Watch the [demo](http://oxism.com/TuringType) to see what it does.

Usage:
```javascript
new TuringType(domElement, 'Just some text.');
```

With some options:
```javascript
new TuringType(domElement, 'Terrible but fast typist.', {
  accuracy: 0.3,
  interval: 20,
  callback: allDone
});
```

You can also clear the input in a natural manner with `.clear()`:

```javascript
var typer = new TuringType(element, "let's season their broth", {
  callback: function() {setTimeout(typer.clear, 1000)}
});
```

`clear()` is automatically bound to instances and accepts an optional integer
indicating the number of characters to remove.

Have fun.
