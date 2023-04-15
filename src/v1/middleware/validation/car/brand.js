function _0x57cc(_0x4c1476, _0x1028b2) {
  const _0x1df637 = _0x1df6();
  return (
    (_0x57cc = function (_0x57cc21, _0x4fb51f) {
      _0x57cc21 = _0x57cc21 - 0x15f;
      let _0x2ed7c6 = _0x1df637[_0x57cc21];
      return _0x2ed7c6;
    }),
    _0x57cc(_0x4c1476, _0x1028b2)
  );
}
function _0x1df6() {
  const _0x34a581 = [
    "checkBrandARName",
    "351683LxPfUi",
    "70WxqJOU",
    "jpg",
    "873396yZIPit",
    "1318320kLGnbl",
    "65359dFHOPO",
    "exports",
    "../common",
    "putQueryParamsInBody",
    "144595iUnTVK",
    "checkLimit",
    "png",
    "817551rOiSUC",
    "next",
    "photo",
    "3486LmWEns",
    "checkFile",
    "16vvtEBu",
    "414WiArfK",
    "checkPage",
  ];
  _0x1df6 = function () {
    return _0x34a581;
  };
  return _0x1df6();
}
const _0x4d62ea = _0x57cc;
(function (_0x67df33, _0x3a84f6) {
  const _0xfe8579 = _0x57cc,
    _0x5f3911 = _0x67df33();
  while (!![]) {
    try {
      const _0x427b68 =
        -parseInt(_0xfe8579(0x164)) / 0x1 +
        (-parseInt(_0xfe8579(0x161)) / 0x2) *
          (parseInt(_0xfe8579(0x173)) / 0x3) +
        parseInt(_0xfe8579(0x168)) / 0x4 +
        -parseInt(_0xfe8579(0x16d)) / 0x5 +
        -parseInt(_0xfe8579(0x167)) / 0x6 +
        (parseInt(_0xfe8579(0x169)) / 0x7) *
          (-parseInt(_0xfe8579(0x160)) / 0x8) +
        (-parseInt(_0xfe8579(0x170)) / 0x9) *
          (-parseInt(_0xfe8579(0x165)) / 0xa);
      if (_0x427b68 === _0x3a84f6) break;
      else _0x5f3911["push"](_0x5f3911["shift"]());
    } catch (_0x1cd2cd) {
      _0x5f3911["push"](_0x5f3911["shift"]());
    }
  }
})(_0x1df6, 0x2bf6d);
const commonMiddleware = require(_0x4d62ea(0x16b)),
  getPopularBrandsValidator = [
    commonMiddleware[_0x4d62ea(0x16c)],
    commonMiddleware[_0x4d62ea(0x162)],
    commonMiddleware[_0x4d62ea(0x16e)],
    commonMiddleware[_0x4d62ea(0x171)],
  ],
  addBrandValidator = [
    commonMiddleware["checkBrandENName"],
    commonMiddleware[_0x4d62ea(0x163)],
    commonMiddleware[_0x4d62ea(0x15f)](
      _0x4d62ea(0x172),
      [_0x4d62ea(0x16f), _0x4d62ea(0x166), "jpeg"],
      !![]
    ),
    commonMiddleware["next"],
  ];
module[_0x4d62ea(0x16a)] = {
  getPopularBrandsValidator: getPopularBrandsValidator,
  addBrandValidator: addBrandValidator,
};
