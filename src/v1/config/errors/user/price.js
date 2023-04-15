function _0x1918() {
  const _0x1dd443 = [
    "Price\x20should\x20be\x20",
    "\x20ساعات",
    "994eRfEYG",
    "Item\x27s\x20price\x20title\x20should\x20be\x20",
    "3984ZmbuKF",
    "2854832sjbnIr",
    "maxLength",
    "531081PfRyep",
    "minLength",
    "max",
    "\x20letters",
    "عنوان\x20السعر\x20يجب\x20أن\x20يكون\x20بين\x20",
    "\x20حرفًا",
    "6KPovcB",
    "183130QAaDRv",
    "لا\x20يوجد\x20أسعار\x20لهذا\x20البند",
    "../../models/price",
    "Prices\x20was\x20not\x20found\x20for\x20this\x20item",
    "3986920mYXUpA",
    "freeze",
    "\x20AED",
    "\x20hours",
    "كود\x20الخصم\x20يجب\x20أن\x20يكون\x20بين\x20",
    "2590504hTYjSx",
    "611862YSqEFs",
    "10yXBISE",
    "min",
  ];
  _0x1918 = function () {
    return _0x1dd443;
  };
  return _0x1918();
}
const _0x52689d = _0x5dd5;
(function (_0x3324eb, _0x1d4a75) {
  const _0x40600a = _0x5dd5,
    _0x47f0eb = _0x3324eb();
  while (!![]) {
    try {
      const _0x231588 =
        -parseInt(_0x40600a(0x140)) / 0x1 +
        (parseInt(_0x40600a(0x14a)) / 0x2) *
          (-parseInt(_0x40600a(0x13f)) / 0x3) +
        parseInt(_0x40600a(0x137)) / 0x4 +
        parseInt(_0x40600a(0x144)) / 0x5 +
        (parseInt(_0x40600a(0x151)) / 0x6) *
          (parseInt(_0x40600a(0x14f)) / 0x7) +
        -parseInt(_0x40600a(0x149)) / 0x8 +
        (-parseInt(_0x40600a(0x139)) / 0x9) *
          (parseInt(_0x40600a(0x14b)) / 0xa);
      if (_0x231588 === _0x1d4a75) break;
      else _0x47f0eb["push"](_0x47f0eb["shift"]());
    } catch (_0x255dec) {
      _0x47f0eb["push"](_0x47f0eb["shift"]());
    }
  }
})(_0x1918, 0x6862e);
const { priceFor, coupon, value, validityHours } = require(_0x52689d(0x142));
function _0x5dd5(_0x1fa5d6, _0xc4b87b) {
  const _0x1918cc = _0x1918();
  return (
    (_0x5dd5 = function (_0x5dd543, _0x51aa17) {
      _0x5dd543 = _0x5dd543 - 0x137;
      let _0x3e060d = _0x1918cc[_0x5dd543];
      return _0x3e060d;
    }),
    _0x5dd5(_0x1fa5d6, _0xc4b87b)
  );
}
module["exports"] = Object[_0x52689d(0x145)]({
  noPrices: { en: _0x52689d(0x143), ar: _0x52689d(0x141) },
  invalidPriceFor: {
    en:
      _0x52689d(0x150) +
      priceFor[_0x52689d(0x13a)] +
      "-" +
      priceFor[_0x52689d(0x138)] +
      _0x52689d(0x13c),
    ar:
      _0x52689d(0x13d) +
      priceFor["minLength"] +
      "-" +
      priceFor["maxLength"] +
      _0x52689d(0x13e),
  },
  invalidCoupon: {
    en:
      "Price\x27s\x20coupon\x20should\x20be\x20" +
      coupon["minLength"] +
      "-" +
      coupon[_0x52689d(0x138)] +
      _0x52689d(0x13c),
    ar:
      _0x52689d(0x148) +
      coupon[_0x52689d(0x13a)] +
      "-" +
      coupon[_0x52689d(0x138)] +
      "\x20حرفًا",
  },
  invalidValue: {
    en:
      _0x52689d(0x14d) +
      value[_0x52689d(0x14c)] +
      "-" +
      value[_0x52689d(0x13b)] +
      _0x52689d(0x146),
    ar:
      _0x52689d(0x13d) +
      value[_0x52689d(0x14c)] +
      "-" +
      value["max"] +
      "\x20درهم\x20إماراتي",
  },
  invalidValidityHours: {
    en:
      "Validity\x20hours\x20should\x20be\x20" +
      validityHours[_0x52689d(0x14c)] +
      "-" +
      validityHours[_0x52689d(0x13b)] +
      _0x52689d(0x147),
    ar:
      "مدة\x20الصلاحية\x20يجب\x20أن\x20تكون\x20بين\x20" +
      validityHours[_0x52689d(0x14c)] +
      "-" +
      validityHours[_0x52689d(0x13b)] +
      _0x52689d(0x14e),
  },
});
