function _0x1922(_0x42ea99, _0x3585f3) {
  const _0x2df1fa = _0x2df1();
  return (
    (_0x1922 = function (_0x1922d4, _0x5e833b) {
      _0x1922d4 = _0x1922d4 - 0x113;
      let _0x33cc3c = _0x2df1fa[_0x1922d4];
      return _0x33cc3c;
    }),
    _0x1922(_0x42ea99, _0x3585f3)
  );
}
const _0xb0d1d8 = _0x1922;
(function (_0x3a5e12, _0x29f7d9) {
  const _0x16e62b = _0x1922,
    _0x5dc7a0 = _0x3a5e12();
  while (!![]) {
    try {
      const _0x4edacf =
        (parseInt(_0x16e62b(0x126)) / 0x1) *
          (parseInt(_0x16e62b(0x125)) / 0x2) +
        -parseInt(_0x16e62b(0x11b)) / 0x3 +
        parseInt(_0x16e62b(0x114)) / 0x4 +
        -parseInt(_0x16e62b(0x122)) / 0x5 +
        -parseInt(_0x16e62b(0x11d)) / 0x6 +
        parseInt(_0x16e62b(0x124)) / 0x7 +
        parseInt(_0x16e62b(0x116)) / 0x8;
      if (_0x4edacf === _0x29f7d9) break;
      else _0x5dc7a0["push"](_0x5dc7a0["shift"]());
    } catch (_0x3065cd) {
      _0x5dc7a0["push"](_0x5dc7a0["shift"]());
    }
  }
})(_0x2df1, 0x72124);
const { pricesService } = require(_0xb0d1d8(0x117)),
  httpStatus = require(_0xb0d1d8(0x119)),
  { CLIENT_SCHEMA } = require(_0xb0d1d8(0x11a)),
  _ = require(_0xb0d1d8(0x120));
function _0x2df1() {
  const _0x5c73a6 = [
    "CREATED",
    "4149971eioWao",
    "2rnCpAQ",
    "713599GNfjkZ",
    "map",
    "545912qwhZdC",
    "exports",
    "9666032PHiCcM",
    "../../services",
    "status",
    "http-status",
    "../../models/user/price.model",
    "2282766jsfkpz",
    "getCouponPrices",
    "3680460frbKDj",
    "json",
    "addPrice",
    "lodash",
    "body",
    "4048080gydJGo",
  ];
  _0x2df1 = function () {
    return _0x5c73a6;
  };
  return _0x2df1();
}
(module[_0xb0d1d8(0x115)]["getCouponPrices"] = async (
  _0x4e8b92,
  _0x216816,
  _0x4264b6
) => {
  const _0x1089de = _0xb0d1d8;
  try {
    const { priceFor: _0x11850c, coupon: _0x3a0793 } = _0x4e8b92["query"],
      _0x1e7cd7 = await pricesService[_0x1089de(0x11c)](_0x11850c, _0x3a0793),
      _0xf402e4 = {
        prices: _0x1e7cd7[_0x1089de(0x113)]((_0x42e18e) =>
          _["pick"](_0x42e18e, CLIENT_SCHEMA)
        ),
      };
    _0x216816[_0x1089de(0x118)](httpStatus["OK"])[_0x1089de(0x11e)](_0xf402e4);
  } catch (_0x4ad39f) {
    _0x4264b6(_0x4ad39f);
  }
}),
  (module[_0xb0d1d8(0x115)][_0xb0d1d8(0x11f)] = async (
    _0xad1b65,
    _0x30b978,
    _0x1ad27e
  ) => {
    const _0x17de95 = _0xb0d1d8;
    try {
      const {
          priceFor: _0x490627,
          coupon: _0x1c0db2,
          value: _0x54482d,
          validityHours: _0x336110,
        } = _0xad1b65[_0x17de95(0x121)],
        _0x4ed00f = await pricesService[_0x17de95(0x11f)](
          _0x490627,
          _0x1c0db2,
          _0x54482d,
          _0x336110
        ),
        _0x4aea54 = _["pick"](_0x4ed00f, CLIENT_SCHEMA);
      _0x30b978["status"](httpStatus[_0x17de95(0x123)])["json"](_0x4aea54);
    } catch (_0x319eb3) {
      _0x1ad27e(_0x319eb3);
    }
  });
