const _0x5a6e2e = _0x1f27;
(function (_0x4e79a4, _0x2ef72e) {
  const _0x5a0040 = _0x1f27,
    _0x524690 = _0x4e79a4();
  while (!![]) {
    try {
      const _0x2234a1 =
        (parseInt(_0x5a0040(0xdc)) / 0x1) * (parseInt(_0x5a0040(0xe5)) / 0x2) +
        parseInt(_0x5a0040(0xe1)) / 0x3 +
        parseInt(_0x5a0040(0xe2)) / 0x4 +
        -parseInt(_0x5a0040(0xdf)) / 0x5 +
        (parseInt(_0x5a0040(0xe9)) / 0x6) * (parseInt(_0x5a0040(0xe8)) / 0x7) +
        parseInt(_0x5a0040(0xde)) / 0x8 +
        -parseInt(_0x5a0040(0xda)) / 0x9;
      if (_0x2234a1 === _0x2ef72e) break;
      else _0x524690["push"](_0x524690["shift"]());
    } catch (_0x53240e) {
      _0x524690["push"](_0x524690["shift"]());
    }
  }
})(_0x65b0, 0x21c4b);
const { Schema, model } = require(_0x5a6e2e(0xdd)),
  { brand: validation } = require(_0x5a6e2e(0xe3)),
  CLIENT_SCHEMA = [_0x5a6e2e(0xe6), "name", _0x5a6e2e(0xe4)],
  brandSchema = new Schema(
    {
      name: {
        en: {
          type: String,
          required: !![],
          trim: !![],
          unique: !![],
          minLength: validation[_0x5a6e2e(0xdb)]["minLength"],
          maxLength: validation[_0x5a6e2e(0xdb)][_0x5a6e2e(0xe7)],
        },
        ar: {
          type: String,
          required: !![],
          trim: !![],
          unique: !![],
          minLength: validation[_0x5a6e2e(0xdb)]["minLength"],
          maxLength: validation["name"][_0x5a6e2e(0xe7)],
        },
      },
      noOfCars: {
        rental: { type: Number, default: 0x0 },
        purchase: { type: Number, default: 0x0 },
      },
      photoURL: { type: String, required: !![], trim: !![] },
    },
    { minimize: ![], timestamps: !![] }
  ),
  Brand = model(_0x5a6e2e(0xe0), brandSchema);
function _0x65b0() {
  const _0x5f38db = [
    "Brand",
    "827055TiSdFa",
    "450752dqNOaH",
    "../../config/models",
    "photoURL",
    "2rngPSb",
    "_id",
    "maxLength",
    "14ddiXlF",
    "384816kqIAWW",
    "5699493yjegSL",
    "name",
    "143135wPyNZA",
    "mongoose",
    "1584240UsnZZH",
    "431090cVEmsz",
  ];
  _0x65b0 = function () {
    return _0x5f38db;
  };
  return _0x65b0();
}
function _0x1f27(_0x38ebc6, _0x237f31) {
  const _0x65b093 = _0x65b0();
  return (
    (_0x1f27 = function (_0x1f27b1, _0x5839ea) {
      _0x1f27b1 = _0x1f27b1 - 0xda;
      let _0x408884 = _0x65b093[_0x1f27b1];
      return _0x408884;
    }),
    _0x1f27(_0x38ebc6, _0x237f31)
  );
}
module["exports"] = { Brand: Brand, CLIENT_SCHEMA: CLIENT_SCHEMA };
