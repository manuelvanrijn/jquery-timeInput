/*! TimeInput - v0.1.0 - 2013-03-20
* https://github.com/manuelvanrijn/jquery-timeInput
* Copyright (c) 2013 Manuel van Rijn; Licensed MIT */
;(function( $, window, document, undefined ) {

  var TimeInput = function( elem, options ) {
    this.elem = elem;
    this.$elem = $(elem);
    this.options = options;
  };

  TimeInput.prototype = {
    init: function() {
      // set instance variable
      var _instance = this;

      _instance.options = $.extend({}, $.fn.timeInput.defaults, _instance.options);

      // bind the keypress event
      _instance.$elem.on('keydown', function(e) {
        var value = _instance.$elem.val();
        if(_instance.isNumericOrSeperatingValue(e.which) === false) {
          e.preventDefault();
        }
        switch(e.which) {
          case 188:  // ,
          case 190:  // .
          case 186:  // :
            if(value.split(':').length !== 2) {
              value = value += ':';
              _instance.$elem.val(value);
            }
            break;
        }
      }).on('blur', function() {
        var value = _instance.$elem.val().replace(/[^0-9.,:]/g, "");
        value = _instance.parseInput(value);
        _instance.$elem.val(value);
      });

      return _instance;
    },
    isNumericOrSeperatingValue: function(input) {
      switch(input) {
        case 188:    // ,
        case 190:    // .
        case 186:    // :
        case 48:     // 0
        case 49:     // 1
        case 50:     // 2
        case 51:     // 3
        case 52:     // 4
        case 53:     // 5
        case 54:     // 6
        case 55:     // 7
        case 56:     // 8
        case 57:     // 9
        case 0 :     // browser specific special key
        case 8 :     // backspace
        case 9 :     // tab
        case 35 :    // end
        case 36 :    // home
        case 37 :    // left
        case 39 :    // right
        case 144 :   // num lock
        case 91:     // cmd
        case 17:     // ctrl
          return true;
        default:
          return false;
      }
    },
    padNumber: function(value, width, padchar) {
      while (value.toString().length < width) {
        value += padchar;
      }
      return value;
    },
    parseInput: function(value) {
      var hours, minutes, number;
      if(value.split(':').length === 1) {
        number = parseInt(value, 10);
        // just minutes or hours + minutes
        // 1 t/m 9 === * hour
        if(number < 10) {
          value = this.timeToString(number, 0);
        }
        // 10 t/m 59 === * minutes
        else if(number >= 10 && number < 60) {
          value = this.timeToString(0, number);
        }
        // 100 t/m 2359 === hour + minutes
        else if(number >= 100 && number < 2360) {
          hours = parseInt(number/100, 10);
          minutes = number - (hours*100);
          value = this.timeToString(hours, minutes);
        }
        // thread number as minutes
        else {
          value = this.timeToString(0, number);
        }
      }
      else {
        hours = value.split(':')[0];
        minutes = value.split(':')[1];
        if(hours === '') {
          hours = 0;
        }
        if(minutes === '') {
          minutes = 0;
        }
        value = this.timeToString(hours, minutes);
      }
      return value;
    },
    timeToString: function(hours, minutes) {
      var extraHours = 0;

      if(isNaN(parseInt(minutes, 10)) === true) {
        minutes = 0;
      }

      if(parseInt(minutes, 10) >= 60) {
        extraHours = parseInt(minutes/60, 10);
        minutes = minutes-(extraHours*60);
      }
      hours = parseInt(hours, 10) + extraHours;
      return hours + ":" + this.padNumber(minutes, 2, '0');
    }
  };

  $.fn.timeInput = function ( options ) {
    return this.each(function () {
      if ( !$.data(this, 'timeInput') ) {
        $.data( this, 'timeInput', new TimeInput(this, options).init() );
      }
    });
  };

  $.fn.timeInput.defaults = {};

}( jQuery, window, document ));
