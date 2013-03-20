(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery.timeInput', {
    setup: function() {
      this.timeinput = $('#qunit-fixture input').timeInput().data('timeInput');
    }
  });
  test('parse hours', function() {
    var testSuite = [
      {input: '1', result: '1:00'},
      {input: '2', result: '2:00'},
      {input: '3', result: '3:00'},
      {input: '4', result: '4:00'},
      {input: '5', result: '5:00'},
      {input: '6', result: '6:00'},
      {input: '7', result: '7:00'},
      {input: '8', result: '8:00'},
      {input: '9', result: '9:00'}
    ];
    for(var i=0; i<testSuite.length;i++) {
      var test = testSuite[i];
      equal(this.timeinput.parseInput(test.input), test.result, 'parse hour');
    }
  });
  test('parse minutes', function() {
    var testSuite = [
      {input: '10', result: '0:10'},
      {input: '15', result: '0:15'},
      {input: '20', result: '0:20'},
      {input: '25', result: '0:25'},
      {input: '30', result: '0:30'},
      {input: '35', result: '0:35'},
      {input: '40', result: '0:40'},
      {input: '45', result: '0:45'},
      {input: '50', result: '0:50'},
      {input: '55', result: '0:55'},
      {input: '59', result: '0:59'}
    ];
    for(var i=0; i<testSuite.length;i++) {
      var test = testSuite[i];
      equal(this.timeinput.parseInput(test.input), test.result, 'parse minutes');
    }
  });
  test('parse hour minutes', function() {
      var testSuite = [
      {input: '100', result: '1:00'},
      {input: '223', result: '2:23'},
      {input: '230', result: '2:30'},
      {input: '1010', result: '10:10'},
      {input: '1234', result: '12:34'},
      {input: '2359', result: '23:59'},
      {input: '1090', result: '11:30'}
    ];
    for(var i=0; i<testSuite.length;i++) {
      var test = testSuite[i];
      equal(this.timeinput.parseInput(test.input), test.result, 'parse hour minutes');
    }
  });
  test('parse other numbers', function() {
    var testSuite = [
      {input: '', result: '0:00'},
      {input: '3000', result: '50:00'},
      {input: '4000', result: '66:40'},
      {input: '4765', result: '79:25'},
      {input: '2360', result: '39:20'}
    ];
    for(var i=0; i<testSuite.length;i++) {
      var test = testSuite[i];
      equal(this.timeinput.parseInput(test.input), test.result, 'parse large minutes');
    }
  });
  test('parse : values', function() {
    var testSuite = [
      {input: '1:12', result: '1:12'},
      {input: '1:1', result: '1:10'},
      {input: ':1', result: '0:10'},
      {input: ':10', result: '0:10'},
      {input: '1:', result: '1:00'},
      {input: '11:', result: '11:00'},
      {input: '14:23', result: '14:23'},
      {input: '23:23', result: '23:23'},
      {input: '30:10', result: '30:10'},
      {input: '130:15', result: '130:15'}
    ];
    for(var i=0; i<testSuite.length;i++) {
      var test = testSuite[i];
      equal(this.timeinput.parseInput(test.input), test.result, 'parse large minutes');
    }
  });

}(jQuery));
