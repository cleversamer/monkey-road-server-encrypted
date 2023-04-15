const _0x5ac0ad = _0xefca;
(function (_0x476f67, _0x5b5559) {
  const _0xfdf3e = _0xefca,
    _0x39cc19 = _0x476f67();
  while (!![]) {
    try {
      const _0x107f4c =
        (parseInt(_0xfdf3e(0x91)) / 0x1) * (-parseInt(_0xfdf3e(0x9a)) / 0x2) +
        parseInt(_0xfdf3e(0x86)) / 0x3 +
        (parseInt(_0xfdf3e(0x85)) / 0x4) * (-parseInt(_0xfdf3e(0x95)) / 0x5) +
        (parseInt(_0xfdf3e(0x97)) / 0x6) * (parseInt(_0xfdf3e(0x9d)) / 0x7) +
        (-parseInt(_0xfdf3e(0x7f)) / 0x8) * (parseInt(_0xfdf3e(0x90)) / 0x9) +
        -parseInt(_0xfdf3e(0x7c)) / 0xa +
        (parseInt(_0xfdf3e(0xa1)) / 0xb) * (parseInt(_0xfdf3e(0x93)) / 0xc);
      if (_0x107f4c === _0x5b5559) break;
      else _0x39cc19["push"](_0x39cc19["shift"]());
    } catch (_0x54a808) {
      _0x39cc19["push"](_0x39cc19["shift"]());
    }
  }
})(_0x5a3b, 0xb0939);
const { Schema, model, Types } = require("mongoose"),
  CARS = require(_0x5ac0ad(0xa4)),
  { rentCar: validation } = require(_0x5ac0ad(0x98)),
  CLIENT_SCHEMA = [
    _0x5ac0ad(0xa3),
    "office",
    _0x5ac0ad(0x8d),
    _0x5ac0ad(0xa5),
    _0x5ac0ad(0xa2),
    "brand",
    _0x5ac0ad(0xa0),
    _0x5ac0ad(0x7b),
    _0x5ac0ad(0x9f),
    _0x5ac0ad(0x88),
    _0x5ac0ad(0x79),
    _0x5ac0ad(0x8e),
    "creationDate",
  ],
  rentCarSchema = new Schema(
    {
      office: {
        name: { type: String, required: !![] },
        ref: { type: Types["ObjectId"], required: !![], ref: _0x5ac0ad(0x81) },
      },
      name: {
        type: String,
        required: !![],
        trim: !![],
        minLength: validation[_0x5ac0ad(0x8d)][_0x5ac0ad(0x94)],
        maxLength: validation[_0x5ac0ad(0x8d)][_0x5ac0ad(0x7a)],
      },
      model: {
        type: String,
        required: !![],
        trim: !![],
        minLength: validation["model"][_0x5ac0ad(0x94)],
        maxLength: validation[_0x5ac0ad(0xa5)][_0x5ac0ad(0x7a)],
      },
      color: {
        en: {
          type: String,
          required: !![],
          trim: !![],
          enum: CARS[_0x5ac0ad(0x9b)]["EN"],
        },
        ar: {
          type: String,
          required: !![],
          trim: !![],
          enum: CARS["COLORS"]["AR"],
        },
      },
      brand: {
        name: {
          en: { type: String, required: !![] },
          ar: { type: String, required: !![] },
        },
        ref: {
          type: Types[_0x5ac0ad(0x83)],
          required: !![],
          ref: _0x5ac0ad(0x8a),
        },
      },
      year: {
        type: String,
        required: !![],
        trim: !![],
        enum: CARS[_0x5ac0ad(0x87)],
      },
      price: {
        daily: {
          type: Number,
          required: !![],
          default:
            validation[_0x5ac0ad(0x7b)][_0x5ac0ad(0x9e)][_0x5ac0ad(0x99)],
          min: validation["price"][_0x5ac0ad(0x9e)]["min"],
          max: validation[_0x5ac0ad(0x7b)]["daily"][_0x5ac0ad(0x82)],
        },
        weekly: {
          type: Number,
          required: !![],
          min: validation[_0x5ac0ad(0x7b)]["weekly"][_0x5ac0ad(0x99)],
          max: validation[_0x5ac0ad(0x7b)]["weekly"][_0x5ac0ad(0x82)],
        },
        monthly: {
          type: Number,
          required: !![],
          min: validation[_0x5ac0ad(0x7b)][_0x5ac0ad(0x80)]["min"],
          max: validation[_0x5ac0ad(0x7b)][_0x5ac0ad(0x80)][_0x5ac0ad(0x82)],
        },
        deposit: {
          type: Number,
          required: !![],
          default: validation[_0x5ac0ad(0x7b)][_0x5ac0ad(0x8f)]["default"],
          min: validation["price"]["deposit"][_0x5ac0ad(0x99)],
          max: validation[_0x5ac0ad(0x7b)][_0x5ac0ad(0x8f)][_0x5ac0ad(0x82)],
        },
      },
      description: {
        type: String,
        required: ![],
        trim: !![],
        minLength: validation[_0x5ac0ad(0x9f)]["minLength"],
        maxLength: validation[_0x5ac0ad(0x9f)][_0x5ac0ad(0x7a)],
      },
      photos: {
        type: Array,
        required: !![],
        min: validation[_0x5ac0ad(0x88)][_0x5ac0ad(0x99)],
        max: validation["photos"]["max"],
      },
      accepted: { type: Boolean, default: ![] },
      archived: { type: Boolean, default: ![] },
      creationDate: { type: Date, required: !![], default: new Date() },
    },
    { minimize: ![], timestamps: !![] }
  );
rentCarSchema[_0x5ac0ad(0x96)]({ "office.ref": 0x1 }),
  rentCarSchema[_0x5ac0ad(0x96)]({
    name: _0x5ac0ad(0x84),
    "office.name": _0x5ac0ad(0x84),
    model: "text",
    "brand.name.ar": _0x5ac0ad(0x84),
    "color.ar": _0x5ac0ad(0x84),
    year: _0x5ac0ad(0x84),
    description: _0x5ac0ad(0x84),
  }),
  (rentCarSchema[_0x5ac0ad(0x7e)][_0x5ac0ad(0x9c)] = function () {
    const _0x37ab5d = _0x5ac0ad;
    try {
      return this[_0x37ab5d(0x79)];
    } catch (_0x4b4e3d) {}
  }),
  (rentCarSchema["methods"][_0x5ac0ad(0x7d)] = function () {
    const _0x69e233 = _0x5ac0ad;
    try {
      this[_0x69e233(0x8e)] = !![];
    } catch (_0xe5c390) {}
  }),
  (rentCarSchema[_0x5ac0ad(0x7e)]["restore"] = function () {
    const _0x18b1a7 = _0x5ac0ad;
    try {
      this[_0x18b1a7(0x8e)] = ![];
    } catch (_0x590adc) {}
  }),
  (rentCarSchema["methods"][_0x5ac0ad(0x89)] = function () {
    const _0x559c77 = _0x5ac0ad;
    try {
      return this[_0x559c77(0x8e)];
    } catch (_0x12b855) {}
  }),
  (rentCarSchema[_0x5ac0ad(0x7e)][_0x5ac0ad(0x92)] = function () {
    try {
      this["accepted"] = !![];
    } catch (_0x4e0e2a) {}
  });
const RentCar = model(_0x5ac0ad(0x8b), rentCarSchema);
function _0xefca(_0x1e664c, _0xa4412f) {
  const _0x5a3bc8 = _0x5a3b();
  return (
    (_0xefca = function (_0xefca98, _0x129f0a) {
      _0xefca98 = _0xefca98 - 0x79;
      let _0x256a46 = _0x5a3bc8[_0xefca98];
      return _0x256a46;
    }),
    _0xefca(_0x1e664c, _0xa4412f)
  );
}
function _0x5a3b() {
  const _0x431326 = [
    "deposit",
    "9biQZPo",
    "5937HSXyQO",
    "accept",
    "24eWKeZu",
    "minLength",
    "5ParWMI",
    "index",
    "6WbmUCO",
    "../../config/models",
    "min",
    "398dYbjDB",
    "COLORS",
    "isAccepted",
    "195531XVtNFx",
    "daily",
    "description",
    "year",
    "10993257aJGPpj",
    "color",
    "_id",
    "../../data/cars",
    "model",
    "accepted",
    "maxLength",
    "price",
    "3892910psQrEV",
    "archive",
    "methods",
    "605928RxjVpU",
    "monthly",
    "User",
    "max",
    "ObjectId",
    "text",
    "2188496LGeqYk",
    "2670507hGgrTH",
    "YEARS",
    "photos",
    "isArchived",
    "Brand",
    "RentCar",
    "exports",
    "name",
    "archived",
  ];
  _0x5a3b = function () {
    return _0x431326;
  };
  return _0x5a3b();
}
module[_0x5ac0ad(0x8c)] = { RentCar: RentCar, CLIENT_SCHEMA: CLIENT_SCHEMA };
