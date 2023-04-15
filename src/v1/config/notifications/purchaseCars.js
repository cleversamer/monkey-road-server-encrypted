const _0x39e111 = _0x2ce5;
(function (_0x4ebca2, _0x4b6c9a) {
  const _0x153fcf = _0x2ce5,
    _0x196f47 = _0x4ebca2();
  while (!![]) {
    try {
      const _0x4a9dc6 =
        (parseInt(_0x153fcf(0x127)) / 0x1) *
          (parseInt(_0x153fcf(0x121)) / 0x2) +
        (parseInt(_0x153fcf(0x124)) / 0x3) *
          (parseInt(_0x153fcf(0x125)) / 0x4) +
        parseInt(_0x153fcf(0x122)) / 0x5 +
        parseInt(_0x153fcf(0x123)) / 0x6 +
        (-parseInt(_0x153fcf(0x120)) / 0x7) *
          (parseInt(_0x153fcf(0x11f)) / 0x8) +
        (-parseInt(_0x153fcf(0x11e)) / 0x9) *
          (-parseInt(_0x153fcf(0x12d)) / 0xa) +
        (-parseInt(_0x153fcf(0x126)) / 0xb) *
          (parseInt(_0x153fcf(0x11d)) / 0xc);
      if (_0x4a9dc6 === _0x4b6c9a) break;
      else _0x196f47["push"](_0x196f47["shift"]());
    } catch (_0x5108d5) {
      _0x196f47["push"](_0x196f47["shift"]());
    }
  }
})(_0x30d4, 0xf1a6d);
function _0x2ce5(_0x562de0, _0x35b652) {
  const _0x30d495 = _0x30d4();
  return (
    (_0x2ce5 = function (_0x2ce57a, _0x7d7c24) {
      _0x2ce57a = _0x2ce57a - 0x11b;
      let _0x4f0393 = _0x30d495[_0x2ce57a];
      return _0x4f0393;
    }),
    _0x2ce5(_0x562de0, _0x35b652)
  );
}
const Notificatin = require(_0x39e111(0x12b));
function _0x30d4() {
  const _0x4bf8d8 = [
    "تم\x20نشر\x20سيّارة\x20للبيع\x20جديدة\x20الآن",
    "796540DaJAoc",
    "exports",
    "purchaseCarDetails",
    "Your\x20car\x20has\x20been\x20successfully\x20posted\x20and\x20is\x20now\x20offered\x20for\x20sale\x20within\x20the\x20app",
    "12ApDUCc",
    "63TDUYgO",
    "1344168LmcASw",
    "14XrHInE",
    "69070wTkJcb",
    "1767390BQesAu",
    "10486428xtGsua",
    "890013PITeRO",
    "4IEsxGx",
    "24383843tgKBEq",
    "17qMZEXw",
    "New\x20purchase\x20car\x20has\x20been\x20posted\x20to\x20app",
    "Car\x20has\x20been\x20posted\x20successfully",
    "تم\x20نشر\x20السيّارة\x20بنجاح",
    "./Notification",
  ];
  _0x30d4 = function () {
    return _0x4bf8d8;
  };
  return _0x30d4();
}
module[_0x39e111(0x12e)] = {
  postAddedForAdmin: (_0x17278e, _0x51808c) =>
    new Notificatin(
      _0x39e111(0x128),
      _0x39e111(0x12c),
      "There\x20is\x20a\x20new\x20purchase\x20car\x20has\x20been\x20posted\x20to\x20app",
      "يوجد\x20هناك\x20سيّارة\x20للبيع\x20جديدة\x20تم\x20نشرها\x20الآن\x20داخل\x20التطبيق",
      _0x17278e,
      "purchaseCarDetails",
      _0x51808c
    ),
  postAddedForUser: (_0xf3a0d6, _0x317f3a) =>
    new Notificatin(
      _0x39e111(0x129),
      _0x39e111(0x12a),
      _0x39e111(0x11c),
      "تم\x20نشر\x20سيّارتك\x20بنجاح\x20وهي\x20معروضة\x20الآن\x20للبيع\x20داخل\x20التطبيق",
      _0xf3a0d6,
      _0x39e111(0x11b),
      _0x317f3a
    ),
};
