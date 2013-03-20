# TimeInput

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

Minutes the input will be rounded on 15 minutes. **Example:** `0.10 --> 0.15` and `1:02 --> 1:15`

## Changelog

    | Version | Notes                                                                     |
    |---------+---------------------------------------------------------------------------|
    |   0.1.1 | Added rounding minutes up to step option                                  |
    |   0.1.0 | Initial release                                                           |
