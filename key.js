(function() {

  var keyState = [];
  for (var i = 0; i < 255; ++i) keyState[i] = false;

  var unused = [];
  for (var i = 0; i < 255; ++i) unused[i] = true;

  key = function(k) {
    unused[k] = false;
    if (keyState[k])
      return true;
  }

  window.onkeydown = function(e) {
    keyState[e.which] = true;
    return unused[e.which];
  }
  window.onkeyup = function(e) {
    keyState[e.which] = false;
    return unused[e.which];
  }

  keys = {
    cancel: 3,
    backspace: 8,
    tab: 9,
    enter: 14,
    shift: 16,
    control: 17,
    alt: 18,
    pause: 19,
    capsLock: 20,
    escape: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    printscreen: 44,
    insert: 45,
    del: 46,
    number0: 48,
    number1: 49,
    number2: 50,
    number3: 51,
    number4: 52,
    number5: 53,
    number6: 54,
    number7: 55,
    number8: 56,
    number9: 57,
    semicolon: 59,
    equals: 61,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    contextMenu: 93,
    numpad0: 96,
    numpad1: 97,
    numpad2: 98,
    numpad3: 99,
    numpad4: 100,
    numpad5: 101,
    numpad6: 102,
    numpad7: 103,
    numpad8: 104,
    numpad9: 105,
    multiply: 106,
    add: 107,
    separator: 108,
    subtract: 109,
    decimal: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    f13: 124,
    f14: 125,
    f15: 126,
    f16: 127,
    f17: 128,
    f18: 129,
    f19: 130,
    f20: 131,
    f21: 132,
    f22: 133,
    f23: 134,
    f24: 135,
    num_lock: 144,
    scroll_lock: 145,
    comma: 188,
    period: 190,
    slash: 191,
    back_quote: 192,
    open_bracket: 219,
    back_slash: 220,
    close_bracket: 221,
    quote: 222,
    meta: 224
  };

})();