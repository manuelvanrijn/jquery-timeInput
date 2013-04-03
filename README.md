# TimeInput [![Build Status](https://travis-ci.org/manuelvanrijn/jquery-timeInput.png?branch=master)](https://travis-ci.org/manuelvanrijn/jquery-timeInput)

A jQuery plugin for adding time input support inspired by [letsfreckle](www.letsfreckle.com)

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/manuelvanrijn/jquery-timeInput/master/dist/jquery.timeInput.min.js
[max]: https://raw.github.com/manuelvanrijn/jquery-timeInput/master/dist/jquery.timeInput.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.timeInput.min.js"></script>
<input class="timeInput" />
<script>
jQuery(function($) {
  $("input.timeInput").timeInput();
});
</script>
```

## Options

### Round minutes up step

```js
{
  roundMinutesUpStep: 15
}
```

Minutes the input will be rounded on 15 minutes. **Example:** `0.10 --> 0:15` and `1:02 --> 1:15`

```js
{
  onChange: function (value) { }
}
```

Callback that is called after the new value has been set, with the new value as argument.

## Changelog

    | Version | Notes                                                                     |
    |---------+---------------------------------------------------------------------------|
    |   0.1.3 | Added support for numpad input                                            |
    |   0.1.2 | Added the onChange callback                                               |
    |   0.1.1 | Added rounding minutes up to step option                                  |
    |   0.1.0 | Initial release                                                           |
