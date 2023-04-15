function _0x2bdc(_0x505545, _0x13f131) {
  const _0x70ac09 = _0x70ac();
  return (
    (_0x2bdc = function (_0x2bdce8, _0x1f7366) {
      _0x2bdce8 = _0x2bdce8 - 0xfb;
      let _0x410dc8 = _0x70ac09[_0x2bdce8];
      return _0x410dc8;
    }),
    _0x2bdc(_0x505545, _0x13f131)
  );
}
const _0x49c5ae = _0x2bdc;
function _0x70ac() {
  const _0x2f933b = [
    "socket.io",
    "1YMRbZx",
    "50072VsuQNj",
    "147NVaWIE",
    "POST",
    "1023120GGklax",
    "33rTQdWz",
    "682750EEwgph",
    "send\x20notification\x20to\x20user",
    "3059937ItyeEM",
    "24WSIGOC",
    "join",
    "emit",
    "notification\x20received",
    "473343DpLixY",
    "GET",
    "223235PeyRic",
    "exports",
    "759868tEVZlj",
  ];
  _0x70ac = function () {
    return _0x2f933b;
  };
  return _0x70ac();
}
(function (_0x98027f, _0x476748) {
  const _0x2b916e = _0x2bdc,
    _0x18d2c5 = _0x98027f();
  while (!![]) {
    try {
      const _0xf77b8 =
        (-parseInt(_0x2b916e(0x108)) / 0x1) *
          (-parseInt(_0x2b916e(0x106)) / 0x2) +
        -parseInt(_0x2b916e(0x102)) / 0x3 +
        parseInt(_0x2b916e(0x10c)) / 0x4 +
        (-parseInt(_0x2b916e(0x104)) / 0x5) *
          (-parseInt(_0x2b916e(0xfe)) / 0x6) +
        (-parseInt(_0x2b916e(0x10a)) / 0x7) *
          (-parseInt(_0x2b916e(0x109)) / 0x8) +
        -parseInt(_0x2b916e(0xfd)) / 0x9 +
        (-parseInt(_0x2b916e(0xfb)) / 0xa) * (parseInt(_0x2b916e(0x10d)) / 0xb);
      if (_0xf77b8 === _0x476748) break;
      else _0x18d2c5["push"](_0x18d2c5["shift"]());
    } catch (_0x4786d0) {
      _0x18d2c5["push"](_0x18d2c5["shift"]());
    }
  }
})(_0x70ac, 0x3b5c6);
const socketIo = require(_0x49c5ae(0x107));
module[_0x49c5ae(0x105)] = (_0x48351a) => {
  const _0x4902e8 = _0x49c5ae,
    _0x2b86bd = {
      cors: { origin: "*", methods: [_0x4902e8(0x103), _0x4902e8(0x10b)] },
    },
    _0x56dd3c = socketIo(_0x48351a, _0x2b86bd);
  _0x56dd3c["on"]("connection", (_0x2e705b) => {
    const _0x44bcd3 = _0x4902e8;
    _0x2e705b["on"]("join", (_0x251ee7) => {
      const _0x2c083c = _0x2bdc;
      try {
        _0x2e705b[_0x2c083c(0xff)](_0x251ee7);
      } catch (_0x33b236) {}
    }),
      _0x2e705b["on"]("send\x20notification", (_0x500dce) => {
        const _0x4f093d = _0x2bdc;
        try {
          _0x56dd3c["emit"](_0x4f093d(0x101), _0x500dce);
        } catch (_0x46b79c) {}
      }),
      _0x2e705b["on"](_0x44bcd3(0xfc), (_0x41c0e5, _0x42a68f) => {
        const _0x8f2a30 = _0x44bcd3;
        try {
          _0x2e705b["to"](_0x41c0e5)[_0x8f2a30(0x100)](
            _0x8f2a30(0x101),
            _0x42a68f
          );
        } catch (_0x2ec972) {}
      });
  });
};
