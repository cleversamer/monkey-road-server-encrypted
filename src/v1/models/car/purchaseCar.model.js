function _0x4e1f(_0x314c29, _0x384eb7) {
  const _0x1df69c = _0x1df6();
  return (
    (_0x4e1f = function (_0x4e1fde, _0x56b309) {
      _0x4e1fde = _0x4e1fde - 0x1a1;
      let _0x5231ec = _0x1df69c[_0x4e1fde];
      return _0x5231ec;
    }),
    _0x4e1f(_0x314c29, _0x384eb7)
  );
}
const _0x410865 = _0x4e1f;
(function (_0x23bb41, _0x5bb8ed) {
  const _0x85328f = _0x4e1f,
    _0x268947 = _0x23bb41();
  while (!![]) {
    try {
      const _0xd15f45 =
        -parseInt(_0x85328f(0x1b4)) / 0x1 +
        (parseInt(_0x85328f(0x1ae)) / 0x2) *
          (parseInt(_0x85328f(0x1b5)) / 0x3) +
        (parseInt(_0x85328f(0x1ba)) / 0x4) *
          (-parseInt(_0x85328f(0x1d3)) / 0x5) +
        -parseInt(_0x85328f(0x1c5)) / 0x6 +
        (parseInt(_0x85328f(0x1c4)) / 0x7) *
          (-parseInt(_0x85328f(0x1c7)) / 0x8) +
        (-parseInt(_0x85328f(0x1a4)) / 0x9) *
          (-parseInt(_0x85328f(0x1ca)) / 0xa) +
        (-parseInt(_0x85328f(0x1cd)) / 0xb) *
          (-parseInt(_0x85328f(0x1a9)) / 0xc);
      if (_0xd15f45 === _0x5bb8ed) break;
      else _0x268947["push"](_0x268947["shift"]());
    } catch (_0x13d9a5) {
      _0x268947["push"](_0x268947["shift"]());
    }
  }
})(_0x1df6, 0xb21c4);
function _0x1df6() {
  const _0xd1cf9c = [
    "vehicleType",
    "photos",
    "586600ixpoKM",
    "7793322KbGagT",
    "methods",
    "120rdQUWN",
    "noOfSeats",
    "PurchaseCar",
    "70zakWeL",
    "trimLevel",
    "paid",
    "45126653AnukZu",
    "kiloPerHour",
    "model",
    "COLORS",
    "_id",
    "YEARS",
    "25645mBysNv",
    "minLength",
    "User",
    "brand",
    "335871cotRKc",
    "../../config/models",
    "sold",
    "exactLength",
    "year",
    "12XgwSqj",
    "name",
    "exports",
    "max",
    "../../data/cars",
    "4518rYpBPu",
    "text",
    "FUEL_TYPES",
    "mongoose",
    "min",
    "ObjectId",
    "1061289DTQYEJ",
    "393HelpjO",
    "description",
    "price",
    "vin",
    "SEATS_NUMBER",
    "244BDVqPk",
    "index",
    "maxLength",
    "phoneNumber",
    "VEHICLE_TYPES",
    "Brand",
    "color",
    "owner",
  ];
  _0x1df6 = function () {
    return _0xd1cf9c;
  };
  return _0x1df6();
}
const { Schema, model, Types } = require(_0x410865(0x1b1)),
  CARS = require(_0x410865(0x1ad)),
  { purchaseCar: validation } = require(_0x410865(0x1a5)),
  CLIENT_SCHEMA = [
    _0x410865(0x1d1),
    _0x410865(0x1c1),
    _0x410865(0x1aa),
    _0x410865(0x1b8),
    _0x410865(0x1cf),
    _0x410865(0x1a3),
    _0x410865(0x1a8),
    _0x410865(0x1c0),
    _0x410865(0x1cb),
    _0x410865(0x1c2),
    "fuelType",
    _0x410865(0x1c8),
    "kiloPerHour",
    _0x410865(0x1b7),
    "invoiceURL",
    _0x410865(0x1bd),
    _0x410865(0x1b6),
    _0x410865(0x1c3),
    _0x410865(0x1a6),
    _0x410865(0x1cc),
    "creationDate",
  ],
  purchaseCarSchema = new Schema(
    {
      owner: {
        name: { type: String, required: !![] },
        ref: {
          type: Types[_0x410865(0x1b3)],
          required: !![],
          ref: _0x410865(0x1a2),
        },
      },
      name: {
        type: String,
        required: !![],
        trim: !![],
        minLength: validation[_0x410865(0x1aa)][_0x410865(0x1a1)],
        maxLength: validation["name"][_0x410865(0x1bc)],
      },
      vin: {
        type: String,
        required: !![],
        trim: !![],
        minLength: validation[_0x410865(0x1b8)][_0x410865(0x1a7)],
        maxLength: validation[_0x410865(0x1b8)][_0x410865(0x1a7)],
      },
      model: {
        type: String,
        required: !![],
        trim: !![],
        minLength: validation[_0x410865(0x1cf)]["minLength"],
        maxLength: validation["model"][_0x410865(0x1bc)],
      },
      brand: {
        name: {
          en: { type: String, required: !![] },
          ar: { type: String, required: !![] },
        },
        ref: {
          type: Types[_0x410865(0x1b3)],
          required: !![],
          ref: _0x410865(0x1bf),
        },
      },
      year: {
        type: String,
        required: !![],
        trim: !![],
        enum: CARS[_0x410865(0x1d2)],
      },
      color: {
        en: {
          type: String,
          required: !![],
          trim: !![],
          enum: CARS[_0x410865(0x1d0)]["EN"],
        },
        ar: {
          type: String,
          required: !![],
          trim: !![],
          enum: CARS["COLORS"]["AR"],
        },
      },
      trimLevel: {
        type: String,
        required: !![],
        trim: !![],
        enum: CARS["TRIM_LEVELS"],
      },
      vehicleType: {
        en: {
          type: String,
          required: !![],
          trim: !![],
          enum: CARS[_0x410865(0x1be)]["EN"],
        },
        ar: {
          type: String,
          required: !![],
          trim: !![],
          enum: CARS[_0x410865(0x1be)]["AR"],
        },
      },
      fuelType: {
        en: {
          type: String,
          required: !![],
          trim: !![],
          enum: CARS[_0x410865(0x1b0)]["EN"],
        },
        ar: {
          type: String,
          required: !![],
          trim: !![],
          enum: CARS[_0x410865(0x1b0)]["AR"],
        },
      },
      noOfSeats: { type: Number, required: !![], enum: CARS[_0x410865(0x1b9)] },
      kiloPerHour: {
        type: Number,
        required: !![],
        min: validation[_0x410865(0x1ce)][_0x410865(0x1b2)],
        max: validation[_0x410865(0x1ce)][_0x410865(0x1ac)],
      },
      price: {
        type: Number,
        required: !![],
        min: validation[_0x410865(0x1b7)][_0x410865(0x1b2)],
        max: validation[_0x410865(0x1b7)][_0x410865(0x1ac)],
      },
      invoiceURL: { type: String, trim: !![], default: "" },
      bankTransactionId: { type: String, trim: !![], default: "" },
      phoneNumber: {
        type: String,
        required: !![],
        trim: !![],
        minLength: validation["phoneNumber"][_0x410865(0x1a1)],
        maxLength: validation[_0x410865(0x1bd)]["maxLength"],
      },
      description: {
        type: String,
        trim: !![],
        minLength: validation[_0x410865(0x1b6)][_0x410865(0x1a1)],
        maxLength: validation[_0x410865(0x1b6)]["maxLength"],
      },
      photos: {
        type: Array,
        required: !![],
        min: validation[_0x410865(0x1c3)][_0x410865(0x1b2)],
        max: validation[_0x410865(0x1c3)]["max"],
      },
      sold: { type: Boolean, default: ![] },
      paid: { type: Boolean, default: ![] },
      creationDate: { type: Date, required: !![], default: new Date() },
    },
    { minimize: ![], timestamps: !![] }
  );
(purchaseCarSchema[_0x410865(0x1c6)]["isSold"] = function () {
  try {
    return this["sold"];
  } catch (_0x2f3ead) {}
}),
  (purchaseCarSchema[_0x410865(0x1c6)]["markAsSold"] = function () {
    const _0xa79fa9 = _0x410865;
    try {
      this[_0xa79fa9(0x1a6)] = !![];
    } catch (_0x5af13e) {}
  }),
  (purchaseCarSchema["methods"]["isPaid"] = function () {
    const _0x131b44 = _0x410865;
    try {
      return this[_0x131b44(0x1cc)];
    } catch (_0x5c8361) {}
  }),
  (purchaseCarSchema[_0x410865(0x1c6)]["markAsPaid"] = function () {
    const _0x52bcad = _0x410865;
    try {
      this[_0x52bcad(0x1cc)] = !![];
    } catch (_0x49e63d) {}
  }),
  purchaseCarSchema["index"]({ "owner.ref": 0x1 }),
  purchaseCarSchema[_0x410865(0x1bb)]({
    name: _0x410865(0x1af),
    "owner.name": _0x410865(0x1af),
    model: "text",
    "brand.name.ar": _0x410865(0x1af),
    "color.ar": "text",
    year: "text",
    description: "text",
  });
const PurchaseCar = model(_0x410865(0x1c9), purchaseCarSchema);
module[_0x410865(0x1ab)] = {
  PurchaseCar: PurchaseCar,
  CLIENT_SCHEMA: CLIENT_SCHEMA,
};
