function _0x9ca4(_0x1d1b02, _0x1e165f) {
  const _0x49908c = _0x4990();
  return (
    (_0x9ca4 = function (_0x9ca448, _0x43c24e) {
      _0x9ca448 = _0x9ca448 - 0x1d7;
      let _0x53129d = _0x49908c[_0x9ca448];
      return _0x53129d;
    }),
    _0x9ca4(_0x1d1b02, _0x1e165f)
  );
}
const _0x1ece6e = _0x9ca4;
function _0x4990() {
  const _0xc0a5e8 = [
    "765401MOhmft",
    "exports",
    "notifyUsersWithIncompleteTransactions",
    "1475170ZXnJny",
    "../services",
    "5ouoCai",
    "357186HZvXbM",
    "475402eKvowK",
    "108054fFUlmv",
    "9GIhjwA",
    "439196rnethY",
    "scheduleDailyEvent",
    "3UObNMb",
    "398976FvctKm",
  ];
  _0x4990 = function () {
    return _0xc0a5e8;
  };
  return _0x4990();
}
(function (_0x21e8f2, _0x3d381d) {
  const _0x5ebf60 = _0x9ca4,
    _0x937d0b = _0x21e8f2();
  while (!![]) {
    try {
      const _0x1f6f49 =
        parseInt(_0x5ebf60(0x1d9)) / 0x1 +
        -parseInt(_0x5ebf60(0x1d8)) / 0x2 +
        (-parseInt(_0x5ebf60(0x1dd)) / 0x3) *
          (parseInt(_0x5ebf60(0x1db)) / 0x4) +
        (parseInt(_0x5ebf60(0x1e4)) / 0x5) *
          (parseInt(_0x5ebf60(0x1d7)) / 0x6) +
        parseInt(_0x5ebf60(0x1df)) / 0x7 +
        parseInt(_0x5ebf60(0x1de)) / 0x8 +
        (-parseInt(_0x5ebf60(0x1da)) / 0x9) *
          (-parseInt(_0x5ebf60(0x1e2)) / 0xa);
      if (_0x1f6f49 === _0x3d381d) break;
      else _0x937d0b["push"](_0x937d0b["shift"]());
    } catch (_0x40efbb) {
      _0x937d0b["push"](_0x937d0b["shift"]());
    }
  }
})(_0x4990, 0x1ef61);
const { usersService, scheduleService } = require(_0x1ece6e(0x1e3));
module[_0x1ece6e(0x1e0)] = () => {
  const _0xc09324 = _0x1ece6e;
  scheduleService[_0xc09324(0x1dc)](async () => {
    const _0x417235 = _0xc09324;
    await usersService[_0x417235(0x1e1)]();
  });
};
