function _0x4c83() {
  const _0x4089d3 = [
    "isDelivered",
    "6373026EKWhTo",
    "endDate",
    "maxLength",
    "receptionLocation",
    "status",
    "closed",
    "../../config/models",
    "minPhone",
    "deservedAmount",
    "RentCar",
    "office",
    "32435TGEyWk",
    "setEndDate",
    "1184870eSIPyV",
    "isWaitingForDelivery",
    "fullName",
    "ObjectId",
    "calcTotalPrice",
    "_id",
    "rentCar",
    "reasonFor",
    "close",
    "minNSN",
    "minLength",
    "locationTitle",
    "conflictsWith",
    "map",
    "1265248qikTEq",
    "5779976yrWuvF",
    "max",
    "User",
    "469BysRTe",
    "icc",
    "93448RjMNVD",
    "1038UTZRdK",
    "isWaitingForPayment",
    "author",
    "approved",
    "reject",
    "index",
    "pay",
    "totalPrice",
    "RentOrder",
    "noOfDays",
    "addInvoiceURL",
    "delivered",
    "minICC",
    "methods",
    "paid",
    "rejected",
    "pending",
    "3272613WsQFtv",
    "startDate",
    "countries",
    "getTime",
    "deliver",
    "invoiceURL",
    "ceil",
    "min",
    "maxNSN",
    "statuses",
  ];
  _0x4c83 = function () {
    return _0x4089d3;
  };
  return _0x4c83();
}
const _0x28643c = _0xc205;
(function (_0x14f8d6, _0x417625) {
  const _0x4259f7 = _0xc205,
    _0x91d609 = _0x14f8d6();
  while (!![]) {
    try {
      const _0x2c2835 =
        -parseInt(_0x4259f7(0xfe)) / 0x1 +
        parseInt(_0x4259f7(0xf0)) / 0x2 +
        -parseInt(_0x4259f7(0xd8)) / 0x3 +
        parseInt(_0x4259f7(0xff)) / 0x4 +
        (parseInt(_0x4259f7(0xee)) / 0x5) * (parseInt(_0x4259f7(0xc7)) / 0x6) +
        (parseInt(_0x4259f7(0xc4)) / 0x7) * (-parseInt(_0x4259f7(0xc6)) / 0x8) +
        parseInt(_0x4259f7(0xe3)) / 0x9;
      if (_0x2c2835 === _0x417625) break;
      else _0x91d609["push"](_0x91d609["shift"]());
    } catch (_0x32fc7c) {
      _0x91d609["push"](_0x91d609["shift"]());
    }
  }
})(_0x4c83, 0xb1fd8);
function _0xc205(_0x55c101, _0x48e443) {
  const _0x4c83da = _0x4c83();
  return (
    (_0xc205 = function (_0xc20553, _0x8c8581) {
      _0xc20553 = _0xc20553 - 0xc2;
      let _0x620ce7 = _0x4c83da[_0xc20553];
      return _0x620ce7;
    }),
    _0xc205(_0x55c101, _0x48e443)
  );
}
const { Schema, model, Types } = require("mongoose"),
  { rentOrder: validation } = require(_0x28643c(0xe9)),
  countriesData = require("../../data/countries"),
  CLIENT_SCHEMA = [
    _0x28643c(0xf5),
    _0x28643c(0xc9),
    _0x28643c(0xed),
    _0x28643c(0xf6),
    _0x28643c(0xf2),
    "phoneNumber",
    _0x28643c(0xe6),
    _0x28643c(0xce),
    "invoiceURL",
    _0x28643c(0xe7),
    _0x28643c(0xf7),
    _0x28643c(0xd9),
    _0x28643c(0xe4),
    _0x28643c(0xd0),
    "date",
  ],
  rentOrderSchema = new Schema(
    {
      author: {
        type: Types[_0x28643c(0xf3)],
        required: !![],
        ref: _0x28643c(0xc3),
      },
      office: { type: Types["ObjectId"], required: !![], ref: _0x28643c(0xc3) },
      rentCar: {
        type: Types[_0x28643c(0xf3)],
        ref: _0x28643c(0xec),
        required: !![],
      },
      fullName: {
        type: String,
        required: !![],
        trim: !![],
        minLength: validation[_0x28643c(0xf2)][_0x28643c(0xfa)],
        maxLength: validation["fullName"][_0x28643c(0xe5)],
      },
      phoneNumber: {
        full: {
          type: String,
          required: !![],
          trim: !![],
          minlength: countriesData[_0x28643c(0xea)],
          maxlength: countriesData["maxPhone"],
        },
        icc: {
          type: String,
          required: !![],
          trim: !![],
          enum: countriesData[_0x28643c(0xda)][_0x28643c(0xfd)](
            (_0x43be02) => _0x43be02[_0x28643c(0xc5)]
          ),
          minlength: countriesData[_0x28643c(0xd3)],
          maxlength: countriesData["maxICC"],
        },
        nsn: {
          type: String,
          required: !![],
          trim: !![],
          minLength: countriesData[_0x28643c(0xf9)],
          maxLength: countriesData[_0x28643c(0xe0)],
        },
      },
      receptionLocation: {
        title: {
          type: String,
          required: !![],
          trim: !![],
          minLength: validation[_0x28643c(0xfb)][_0x28643c(0xfa)],
          maxLength: validation["locationTitle"]["maxLength"],
        },
        longitude: { type: String, required: !![] },
        latitude: { type: String, required: !![] },
      },
      invoiceURL: { type: String, trim: !![], default: "" },
      bankTransactionId: { type: String, trim: !![], default: "" },
      totalPrice: { type: Number, required: !![], default: 0x0 },
      deservedAmount: {
        forAdmin: { type: Number, default: 0x0 },
        forOffice: { type: Number, default: 0x0 },
      },
      status: {
        type: String,
        required: !![],
        trim: !![],
        default: validation[_0x28643c(0xe1)][0x0],
        enum: validation["statuses"],
      },
      reasonFor: {
        rejection: {
          type: String,
          trim: !![],
          maxLength: validation["reasonForRejection"][_0x28643c(0xe5)],
          default: "",
        },
      },
      startDate: { type: Date, required: !![], trim: !![] },
      endDate: { type: Date, required: !![], trim: !![] },
      noOfDays: {
        type: Number,
        required: !![],
        min: validation["noOfDays"][_0x28643c(0xdf)],
        max: validation[_0x28643c(0xd0)][_0x28643c(0xc2)],
      },
      date: { type: Date, required: !![], trim: !![], default: new Date() },
    },
    { minimize: ![], timestamps: !![] }
  );
rentOrderSchema[_0x28643c(0xcc)]({ author: 0x1 }),
  rentOrderSchema[_0x28643c(0xcc)]({ office: 0x1 }),
  rentOrderSchema[_0x28643c(0xcc)]({ status: 0x1 }),
  (rentOrderSchema[_0x28643c(0xd4)][_0x28643c(0xef)] = function (_0x5b258c) {
    const _0x25afb3 = _0x28643c,
      _0x3445d9 = new Date(this[_0x25afb3(0xd9)]),
      _0xea5db = 0x3e8 * 0x3c * 0x3c * 0x18 * _0x5b258c,
      _0x105050 = new Date(_0x3445d9[_0x25afb3(0xdb)]() + _0xea5db);
    this[_0x25afb3(0xe4)] = _0x105050;
  }),
  (rentOrderSchema[_0x28643c(0xd4)][_0x28643c(0xf4)] = function (
    _0x582eeb,
    _0x2d2fe2
  ) {
    const _0x589944 = _0x28643c;
    try {
      const {
        daily: _0x2722c0,
        weekly: _0x29fcd5,
        monthly: _0x1418dc,
        deposit: _0x49a472,
      } = _0x2d2fe2;
      let _0xe8d8c8 =
        _0x582eeb < 0x7
          ? _0x2722c0
          : _0x582eeb < 0x1e
          ? _0x29fcd5 / 0x7
          : _0x1418dc / 0x1e;
      const _0x28eb5a = Math["ceil"](_0x582eeb * _0xe8d8c8 + _0x49a472);
      this[_0x589944(0xce)] = Math[_0x589944(0xde)](_0x28eb5a * 1.025);
      const _0x3616e6 = Math[_0x589944(0xde)](_0x28eb5a * 0.15),
        _0xbfa93c = _0x28eb5a - _0x3616e6;
      this[_0x589944(0xeb)] = { forAdmin: _0x3616e6, forOffice: _0xbfa93c };
    } catch (_0x38b076) {}
  }),
  (rentOrderSchema[_0x28643c(0xd4)][_0x28643c(0xfc)] = function (_0x3c5852) {
    const _0x4ab287 = _0x28643c;
    try {
      const _0x4062d0 = new Date(this["startDate"]),
        _0xfc48f4 = new Date(this["endDate"]),
        _0x3d5bae = new Date(_0x3c5852[_0x4ab287(0xd9)]),
        _0x30f0eb = new Date(_0x3c5852["endDate"]),
        _0x19cf63 = _0x3d5bae >= _0x4062d0 && _0x3d5bae <= _0xfc48f4,
        _0x1403c9 = _0x30f0eb >= _0x4062d0 && _0x30f0eb <= _0xfc48f4;
      return _0x19cf63 || _0x1403c9;
    } catch (_0x19ca10) {
      return !![];
    }
  }),
  (rentOrderSchema["methods"]["isWaitingForApproval"] = function () {
    const _0x405026 = _0x28643c;
    return this[_0x405026(0xe7)] === _0x405026(0xd7);
  }),
  (rentOrderSchema["methods"][_0x28643c(0xc8)] = function () {
    const _0x1f2d05 = _0x28643c;
    return this[_0x1f2d05(0xe7)] === _0x1f2d05(0xca);
  }),
  (rentOrderSchema[_0x28643c(0xd4)][_0x28643c(0xf1)] = function () {
    return this["status"] === "paid";
  }),
  (rentOrderSchema[_0x28643c(0xd4)][_0x28643c(0xe2)] = function () {
    const _0x19bbd0 = _0x28643c;
    return this[_0x19bbd0(0xe7)] === _0x19bbd0(0xd2);
  }),
  (rentOrderSchema[_0x28643c(0xd4)]["isRejected"] = function () {
    const _0x1492e4 = _0x28643c;
    return this["status"] === _0x1492e4(0xd6);
  }),
  (rentOrderSchema["methods"]["isClosed"] = function () {
    const _0x2079c3 = _0x28643c;
    return this[_0x2079c3(0xe7)] === _0x2079c3(0xe8);
  }),
  (rentOrderSchema["methods"]["approve"] = function () {
    const _0x2eb9be = _0x28643c;
    this[_0x2eb9be(0xe7)] = _0x2eb9be(0xca);
  }),
  (rentOrderSchema[_0x28643c(0xd4)][_0x28643c(0xcd)] = function () {
    const _0xb20d34 = _0x28643c;
    this[_0xb20d34(0xe7)] = _0xb20d34(0xd5);
  }),
  (rentOrderSchema[_0x28643c(0xd4)][_0x28643c(0xdc)] = function () {
    const _0x3b539b = _0x28643c;
    this[_0x3b539b(0xe7)] = _0x3b539b(0xd2);
  }),
  (rentOrderSchema[_0x28643c(0xd4)][_0x28643c(0xcb)] = function () {
    const _0x2893b4 = _0x28643c;
    this[_0x2893b4(0xe7)] = _0x2893b4(0xd6);
  }),
  (rentOrderSchema[_0x28643c(0xd4)][_0x28643c(0xf8)] = function () {
    this["status"] = "closed";
  }),
  (rentOrderSchema["methods"][_0x28643c(0xd1)] = function (_0x34fc29) {
    const _0x421ce8 = _0x28643c;
    this[_0x421ce8(0xdd)] = _0x34fc29;
  });
const RentOrder = model(_0x28643c(0xcf), rentOrderSchema);
module["exports"] = { RentOrder: RentOrder, CLIENT_SCHEMA: CLIENT_SCHEMA };
