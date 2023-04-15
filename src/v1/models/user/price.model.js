const _0x4d84bb = _0x3795;
(function (_0x4fb1f6, _0x36b9c3) {
  const _0x36de73 = _0x3795,
    _0x427830 = _0x4fb1f6();
  while (!![]) {
    try {
      const _0x26c488 =
        (parseInt(_0x36de73(0x18a)) / 0x1) *
          (parseInt(_0x36de73(0x17d)) / 0x2) +
        (-parseInt(_0x36de73(0x180)) / 0x3) *
          (parseInt(_0x36de73(0x182)) / 0x4) +
        parseInt(_0x36de73(0x18c)) / 0x5 +
        -parseInt(_0x36de73(0x189)) / 0x6 +
        (-parseInt(_0x36de73(0x194)) / 0x7) *
          (-parseInt(_0x36de73(0x191)) / 0x8) +
        parseInt(_0x36de73(0x18f)) / 0x9 +
        -parseInt(_0x36de73(0x190)) / 0xa;
      if (_0x26c488 === _0x36b9c3) break;
      else _0x427830["push"](_0x427830["shift"]());
    } catch (_0x495357) {
      _0x427830["push"](_0x427830["shift"]());
    }
  }
})(_0x5020, 0xaba24);
const { Schema, model } = require(_0x4d84bb(0x193)),
  { price: validation } = require(_0x4d84bb(0x17e)),
  CLIENT_SCHEMA = [
    _0x4d84bb(0x17f),
    _0x4d84bb(0x181),
    "priceFor",
    _0x4d84bb(0x183),
  ],
  priceSchema = new Schema(
    {
      active: { type: Boolean, default: !![] },
      priceFor: {
        type: String,
        required: !![],
        trim: !![],
        minLength: validation[_0x4d84bb(0x185)][_0x4d84bb(0x192)],
        maxLength: validation[_0x4d84bb(0x185)][_0x4d84bb(0x184)],
      },
      coupon: {
        type: String,
        required: !![],
        trim: !![],
        minLength: validation[_0x4d84bb(0x18e)][_0x4d84bb(0x192)],
        maxLength: validation[_0x4d84bb(0x18e)][_0x4d84bb(0x184)],
      },
      value: {
        type: Number,
        required: !![],
        min: validation[_0x4d84bb(0x183)]["min"],
        max: validation["value"][_0x4d84bb(0x18b)],
        default: validation["value"][_0x4d84bb(0x186)],
      },
      expireAt: { type: Date, default: null },
    },
    { minimize: ![], timestamps: !![] }
  );
function _0x3795(_0x8810c1, _0xa1b94e) {
  const _0x5020a9 = _0x5020();
  return (
    (_0x3795 = function (_0x379533, _0x2e7f89) {
      _0x379533 = _0x379533 - 0x17d;
      let _0x5241c1 = _0x5020a9[_0x379533];
      return _0x5241c1;
    }),
    _0x3795(_0x8810c1, _0xa1b94e)
  );
}
priceSchema["methods"][_0x4d84bb(0x187)] = function (_0x129f83) {
  const _0x4d0444 = _0x4d84bb;
  try {
    if (!_0x129f83) {
      this[_0x4d0444(0x188)] = null;
      return;
    }
    const _0xc3694 = parseInt(_0x129f83) * 0x3c * 0x3c * 0x3e8,
      _0x16ff98 = new Date() + _0xc3694;
    this[_0x4d0444(0x188)] = _0x16ff98;
  } catch (_0x5c8b6e) {
    throw _0x5c8b6e;
  }
};
function _0x5020() {
  const _0x37de40 = [
    "4131340EWLart",
    "142080mznszQ",
    "minLength",
    "mongoose",
    "511IHwksV",
    "exports",
    "2124106ZTNIOi",
    "../../config/models",
    "_id",
    "72jKsTNQ",
    "active",
    "131696iimtUW",
    "value",
    "maxLength",
    "priceFor",
    "default",
    "setExpiryDate",
    "expireAt",
    "6692964JJIgnM",
    "1ypJHGL",
    "max",
    "1143490QCgkCs",
    "Price",
    "coupon",
    "3911265FFvWIV",
  ];
  _0x5020 = function () {
    return _0x37de40;
  };
  return _0x5020();
}
const Price = model(_0x4d84bb(0x18d), priceSchema);
module[_0x4d84bb(0x195)] = { Price: Price, CLIENT_SCHEMA: CLIENT_SCHEMA };
