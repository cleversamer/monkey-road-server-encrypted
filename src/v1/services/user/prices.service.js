const _0x121a8c = _0x3cc6;
function _0x13c4() {
  const _0x1ebffc = [
    "30msLEGh",
    "4595OerOhv",
    "exports",
    "setExpiryDate",
    "find",
    "length",
    "2862895zHNvic",
    "price",
    "http-status",
    "8fmZcKL",
    "1218DgwaWp",
    "4756iINeOj",
    "save",
    "9755955lYROnQ",
    "addPrice",
    "../../models/user/price.model",
    "../../middleware/apiError",
    "1152345TzHBBo",
    "1539144AkbnlO",
    "143631dVRPQY",
    "26ZujYAg",
  ];
  _0x13c4 = function () {
    return _0x1ebffc;
  };
  return _0x13c4();
}
(function (_0x314657, _0x553f6a) {
  const _0x5ec182 = _0x3cc6,
    _0x477c85 = _0x314657();
  while (!![]) {
    try {
      const _0x595cc8 =
        (-parseInt(_0x5ec182(0x107)) / 0x1) *
          (parseInt(_0x5ec182(0x113)) / 0x2) +
        -parseInt(_0x5ec182(0x104)) / 0x3 +
        parseInt(_0x5ec182(0x105)) / 0x4 +
        (parseInt(_0x5ec182(0x109)) / 0x5) *
          (-parseInt(_0x5ec182(0x112)) / 0x6) +
        (parseInt(_0x5ec182(0x10e)) / 0x7) *
          (-parseInt(_0x5ec182(0x111)) / 0x8) +
        (parseInt(_0x5ec182(0x106)) / 0x9) *
          (parseInt(_0x5ec182(0x108)) / 0xa) +
        parseInt(_0x5ec182(0x100)) / 0xb;
      if (_0x595cc8 === _0x553f6a) break;
      else _0x477c85["push"](_0x477c85["shift"]());
    } catch (_0x20f9e4) {
      _0x477c85["push"](_0x477c85["shift"]());
    }
  }
})(_0x13c4, 0x43e43);
const { Price } = require(_0x121a8c(0x102)),
  { ApiError } = require(_0x121a8c(0x103)),
  httpStatus = require(_0x121a8c(0x110)),
  errors = require("../../config/errors");
function _0x3cc6(_0x760f9e, _0x50004f) {
  const _0x13c442 = _0x13c4();
  return (
    (_0x3cc6 = function (_0x3cc685, _0x23b3d4) {
      _0x3cc685 = _0x3cc685 - 0x100;
      let _0x45a9c9 = _0x13c442[_0x3cc685];
      return _0x45a9c9;
    }),
    _0x3cc6(_0x760f9e, _0x50004f)
  );
}
(module["exports"]["getCouponPrices"] = async (_0x30c568, _0x28858e) => {
  const _0x1c828f = _0x121a8c;
  try {
    const _0x16df25 = await Price[_0x1c828f(0x10c)]({
      priceFor: _0x30c568,
      coupon: _0x28858e,
      active: !![],
    });
    if (!_0x16df25 || !_0x16df25[_0x1c828f(0x10d)]) {
      const _0xb0596b = httpStatus["NOT_FOUND"],
        _0x1a2258 = errors[_0x1c828f(0x10f)]["noCouponPrices"];
      throw new ApiError(_0xb0596b, _0x1a2258);
    }
    return _0x16df25;
  } catch (_0x11d736) {
    throw _0x11d736;
  }
}),
  (module[_0x121a8c(0x10a)][_0x121a8c(0x101)] = async (
    _0x2b0904,
    _0x32e3d7,
    _0xbbf50f,
    _0xe25660
  ) => {
    const _0x5ccf23 = _0x121a8c;
    try {
      const _0x18e447 = new Price({
        priceFor: _0x2b0904,
        coupon: _0x32e3d7,
        value: _0xbbf50f,
      });
      return (
        _0x18e447[_0x5ccf23(0x10b)](_0xe25660),
        await _0x18e447[_0x5ccf23(0x114)](),
        _0x18e447
      );
    } catch (_0x46abbe) {
      throw _0x46abbe;
    }
  });
