function _0x1568(_0x107269, _0x41d214) {
  const _0x2766e6 = _0x2766();
  return (
    (_0x1568 = function (_0x156898, _0x3619f3) {
      _0x156898 = _0x156898 - 0xc3;
      let _0x1fb399 = _0x2766e6[_0x156898];
      return _0x1fb399;
    }),
    _0x1568(_0x107269, _0x41d214)
  );
}
const _0x2138d2 = _0x1568;
(function (_0x4dd473, _0x5a1b06) {
  const _0x3d5e4b = _0x1568,
    _0x241132 = _0x4dd473();
  while (!![]) {
    try {
      const _0x543e03 =
        parseInt(_0x3d5e4b(0xdc)) / 0x1 +
        -parseInt(_0x3d5e4b(0xe1)) / 0x2 +
        parseInt(_0x3d5e4b(0xde)) / 0x3 +
        -parseInt(_0x3d5e4b(0xd2)) / 0x4 +
        -parseInt(_0x3d5e4b(0xdf)) / 0x5 +
        (-parseInt(_0x3d5e4b(0xd9)) / 0x6) *
          (-parseInt(_0x3d5e4b(0xdb)) / 0x7) +
        (-parseInt(_0x3d5e4b(0xce)) / 0x8) * (-parseInt(_0x3d5e4b(0xca)) / 0x9);
      if (_0x543e03 === _0x5a1b06) break;
      else _0x241132["push"](_0x241132["shift"]());
    } catch (_0x5b104f) {
      _0x241132["push"](_0x241132["shift"]());
    }
  }
})(_0x2766, 0x70f76);
const { Schema, model, Types } = require(_0x2138d2(0xc3)),
  { transaction: validation } = require("../../config/models"),
  CLIENT_SCHEMA = [
    _0x2138d2(0xd7),
    _0x2138d2(0xcc),
    _0x2138d2(0xcf),
    _0x2138d2(0xc9),
    _0x2138d2(0xcb),
    _0x2138d2(0xd6),
    "status",
    _0x2138d2(0xd0),
    _0x2138d2(0xd4),
  ],
  transactionSchema = new Schema(
    {
      photoURL: { type: String, required: !![], trim: !![] },
      author: { type: Types[_0x2138d2(0xd1)], ref: "User", required: !![] },
      receiver: {
        type: Types[_0x2138d2(0xd1)],
        ref: _0x2138d2(0xc5),
        required: !![],
      },
      order: {
        type: Types[_0x2138d2(0xd1)],
        ref: _0x2138d2(0xcd),
        required: !![],
        unique: !![],
      },
      title: {
        en: {
          type: String,
          required: !![],
          trim: !![],
          minLength: validation["title"]["minLength"],
          maxLength: validation[_0x2138d2(0xd6)]["maxLength"],
        },
        ar: {
          type: String,
          required: !![],
          trim: !![],
          minLength: validation[_0x2138d2(0xd6)][_0x2138d2(0xe0)],
          maxLength: validation[_0x2138d2(0xd6)][_0x2138d2(0xc6)],
        },
      },
      status: {
        type: String,
        required: !![],
        trim: !![],
        enum: validation[_0x2138d2(0xdd)],
        default: validation[_0x2138d2(0xdd)][0x0],
      },
      amount: {
        type: Number,
        required: !![],
        min: validation["amount"][_0x2138d2(0xc4)],
        max: validation[_0x2138d2(0xd0)][_0x2138d2(0xd8)],
      },
      date: { type: Date, required: !![], trim: !![], default: new Date() },
    },
    { minimize: ![], timestamps: !![] }
  );
transactionSchema[_0x2138d2(0xc8)]({ author: 0x1 }),
  transactionSchema[_0x2138d2(0xc8)]({ receiver: 0x1 }),
  transactionSchema["index"]({ status: 0x1 }),
  (transactionSchema["methods"][_0x2138d2(0xda)] = function () {
    const _0xf1d9fe = _0x2138d2;
    try {
      this[_0xf1d9fe(0xc7)] = _0xf1d9fe(0xda);
    } catch (_0x1a1805) {}
  });
const Transaction = model(_0x2138d2(0xd5), transactionSchema);
module[_0x2138d2(0xd3)] = {
  Transaction: Transaction,
  CLIENT_SCHEMA: CLIENT_SCHEMA,
};
function _0x2766() {
  const _0x19af4d = [
    "2694552jibxVz",
    "exports",
    "date",
    "Transaction",
    "title",
    "_id",
    "max",
    "6OTGKWe",
    "complete",
    "5309227xSNgCw",
    "207395gIdgWh",
    "statuses",
    "344535UFsZog",
    "1318940ijsKyA",
    "minLength",
    "1605552VrcIxs",
    "mongoose",
    "min",
    "User",
    "maxLength",
    "status",
    "index",
    "receiver",
    "246339TrhIVu",
    "order",
    "photoURL",
    "RentOrder",
    "328TwUuPU",
    "author",
    "amount",
    "ObjectId",
  ];
  _0x2766 = function () {
    return _0x19af4d;
  };
  return _0x2766();
}
