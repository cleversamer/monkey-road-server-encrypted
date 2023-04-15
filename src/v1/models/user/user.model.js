const _0x3e6c0d = _0x5e98;
(function (_0x4093a9, _0x41b0a7) {
  const _0x2dec3d = _0x5e98,
    _0x52f028 = _0x4093a9();
  while (!![]) {
    try {
      const _0x45c975 =
        parseInt(_0x2dec3d(0x1e9)) / 0x1 +
        (-parseInt(_0x2dec3d(0x1a7)) / 0x2) *
          (parseInt(_0x2dec3d(0x1cb)) / 0x3) +
        parseInt(_0x2dec3d(0x1db)) / 0x4 +
        (-parseInt(_0x2dec3d(0x1b0)) / 0x5) *
          (parseInt(_0x2dec3d(0x1f0)) / 0x6) +
        -parseInt(_0x2dec3d(0x1e4)) / 0x7 +
        parseInt(_0x2dec3d(0x1d0)) / 0x8 +
        (parseInt(_0x2dec3d(0x1be)) / 0x9) * (parseInt(_0x2dec3d(0x1ae)) / 0xa);
      if (_0x45c975 === _0x41b0a7) break;
      else _0x52f028["push"](_0x52f028["shift"]());
    } catch (_0x32cc70) {
      _0x52f028["push"](_0x52f028["shift"]());
    }
  }
})(_0x1b9b, 0xa427c);
const { Schema, model, Types, isValidObjectId } = require(_0x3e6c0d(0x1c6)),
  jwt = require("jsonwebtoken"),
  bcrypt = require(_0x3e6c0d(0x1de)),
  { server } = require(_0x3e6c0d(0x1e5)),
  { user: validation } = require(_0x3e6c0d(0x1f5)),
  countriesData = require(_0x3e6c0d(0x1cc)),
  CLIENT_SCHEMA = [
    _0x3e6c0d(0x1ad),
    "authType",
    "avatarURL",
    _0x3e6c0d(0x1da),
    _0x3e6c0d(0x1b1),
    _0x3e6c0d(0x1cd),
    _0x3e6c0d(0x1a5),
    "favorites",
    _0x3e6c0d(0x1a6),
    _0x3e6c0d(0x1b7),
    _0x3e6c0d(0x1ab),
    "notifications",
    _0x3e6c0d(0x1e8),
  ],
  verification = {
    email: {
      expiryInMins: 0xa,
      codeLength: validation["verificationCode"][_0x3e6c0d(0x1c0)],
    },
    phone: {
      expiryInMins: 0xa,
      codeLength: validation["verificationCode"][_0x3e6c0d(0x1c0)],
    },
    password: {
      expiryInMins: 0xa,
      codeLength: validation["verificationCode"]["exactLength"],
    },
  },
  MAX_NOTIFICATIONS_COUNT = 0x1e,
  userSchema = new Schema(
    {
      authType: {
        type: String,
        required: !![],
        trim: !![],
        enum: validation[_0x3e6c0d(0x1c2)],
        default: validation[_0x3e6c0d(0x1c2)][0x0],
      },
      avatarURL: { type: String, default: "" },
      name: { type: String, trim: !![], required: !![] },
      email: {
        type: String,
        required: !![],
        unique: !![],
        trim: !![],
        lowercase: !![],
        minLength: validation[_0x3e6c0d(0x1b1)][_0x3e6c0d(0x1d4)],
        maxLength: validation[_0x3e6c0d(0x1b1)][_0x3e6c0d(0x1ca)],
      },
      phone: {
        full: {
          type: String,
          required: !![],
          unique: !![],
          trim: !![],
          minlength: countriesData[_0x3e6c0d(0x1d1)],
          maxlength: countriesData[_0x3e6c0d(0x1d8)],
        },
        icc: {
          type: String,
          required: !![],
          trim: !![],
          enum: countriesData[_0x3e6c0d(0x1aa)][_0x3e6c0d(0x1d3)](
            (_0x3b5201) => _0x3b5201[_0x3e6c0d(0x1b3)]
          ),
          minlength: countriesData[_0x3e6c0d(0x1c7)],
          maxlength: countriesData[_0x3e6c0d(0x1cf)],
        },
        nsn: {
          type: String,
          required: !![],
          trim: !![],
          minLength: countriesData["minNSN"],
          maxLength: countriesData["maxNSN"],
        },
      },
      password: { type: String, trim: !![], default: "" },
      balance: {
        type: Number,
        default: 0x0,
        min: validation[_0x3e6c0d(0x1a5)][_0x3e6c0d(0x1ac)],
        max: validation[_0x3e6c0d(0x1a5)][_0x3e6c0d(0x1b6)],
      },
      role: {
        type: String,
        enum: validation[_0x3e6c0d(0x1ce)],
        default: validation["roles"][0x0],
      },
      favLang: {
        type: String,
        enum: validation[_0x3e6c0d(0x1d6)],
        default: validation[_0x3e6c0d(0x1d6)][0x0],
      },
      verified: {
        email: { type: Boolean, default: ![] },
        phone: { type: Boolean, default: ![] },
      },
      notifications: { type: Array, default: [] },
      favorites: { type: Array, default: [] },
      deviceToken: {
        type: String,
        minLength: validation[_0x3e6c0d(0x1e0)][_0x3e6c0d(0x1d4)],
        maxLength: validation[_0x3e6c0d(0x1e0)]["maxLength"],
      },
      lastLogin: { type: Date, default: new Date() },
      verification: {
        email: {
          code: { type: String, default: "" },
          expiryDate: { type: Date, default: "" },
        },
        phone: {
          code: { type: String, default: "" },
          expiryDate: { type: Date, default: "" },
        },
        password: {
          code: { type: String, default: "" },
          expiryDate: { type: Date, default: "" },
        },
      },
    },
    { minimize: ![], timestamps: !![] }
  );
function _0x5e98(_0x13da89, _0x45ed84) {
  const _0x1b9b56 = _0x1b9b();
  return (
    (_0x5e98 = function (_0x5e9802, _0x2900bb) {
      _0x5e9802 = _0x5e9802 - 0x1a5;
      let _0xa0f4a5 = _0x1b9b56[_0x5e9802];
      return _0xa0f4a5;
    }),
    _0x5e98(_0x13da89, _0x45ed84)
  );
}
(userSchema["methods"]["genAuthToken"] = function () {
  const _0x113756 = _0x3e6c0d;
  try {
    const _0x5726c1 = {
      sub: this["_id"][_0x113756(0x1bd)](),
      email: this[_0x113756(0x1b1)],
      phone: this["phone"][_0x113756(0x1ba)],
      password: this[_0x113756(0x1ea)] + server[_0x113756(0x1c3)],
    };
    return jwt["sign"](_0x5726c1, process[_0x113756(0x1ec)][_0x113756(0x1bc)]);
  } catch (_0x505194) {
    return _0x113756(0x1d9);
  }
}),
  (userSchema[_0x3e6c0d(0x1dd)]["switchLanguage"] = function () {
    const _0x5d72ae = _0x3e6c0d;
    try {
      this[_0x5d72ae(0x1ab)] = this["favLang"] === "en" ? "ar" : "en";
    } catch (_0xc3e96f) {}
  }),
  (userSchema["methods"]["addBalance"] = function (_0x1053e1) {
    try {
      this["balance"] += _0x1053e1;
    } catch (_0x529aa6) {}
  }),
  (userSchema["methods"]["takeBalance"] = function (_0x3b1488) {
    const _0x3add41 = _0x3e6c0d;
    try {
      if (_0x3b1488 > this[_0x3add41(0x1a5)]) return ![];
      return (this["balance"] -= _0x3b1488), !![];
    } catch (_0x12a3e3) {}
  }),
  (userSchema[_0x3e6c0d(0x1dd)][_0x3e6c0d(0x1b2)] = function () {
    const _0x458955 = _0x3e6c0d;
    this[_0x458955(0x1e8)] = new Date();
  }),
  (userSchema[_0x3e6c0d(0x1dd)][_0x3e6c0d(0x1b5)] = function (_0x5ecedf = 0x4) {
    const _0x14754b = _0x3e6c0d;
    try {
      const _0x50868a = Math["pow"](0xa, _0x5ecedf - 0x1);
      return Math["floor"](
        _0x50868a + Math[_0x14754b(0x1df)]() * 0x9 * _0x50868a
      );
    } catch (_0x2cd05a) {}
  }),
  (userSchema["methods"]["updateCode"] = function (_0x8fc09e) {
    const _0x545282 = _0x3e6c0d;
    try {
      const { codeLength: _0x28b29a, expiryInMins: _0x3ce062 } =
          verification[_0x8fc09e],
        _0x2965b0 = this[_0x545282(0x1b5)](_0x28b29a),
        _0x2edb1f = _0x3ce062 * 0x3c * 0x3e8,
        _0x553a4e = new Date() + _0x2edb1f;
      this[_0x545282(0x1d2)][_0x8fc09e] = {
        code: _0x2965b0,
        expiryDate: _0x553a4e,
      };
    } catch (_0x4f3904) {}
  }),
  (userSchema[_0x3e6c0d(0x1dd)][_0x3e6c0d(0x1bb)] = function (
    _0x3ec279,
    _0x2273fb
  ) {
    const _0x3b181e = _0x3e6c0d;
    try {
      return this[_0x3b181e(0x1d2)][_0x3ec279][_0x3b181e(0x1bf)] == _0x2273fb;
    } catch (_0x2f4860) {
      return ![];
    }
  }),
  (userSchema[_0x3e6c0d(0x1dd)]["isValidCode"] = function (_0x3fdcac) {
    const _0x25a98b = _0x3e6c0d;
    try {
      const { expiryDate: _0x12a70d } = this[_0x25a98b(0x1d2)][_0x3fdcac],
        { expiryInMins: _0xfbb25f } = verification[_0x3fdcac],
        _0x46e9a9 = new Date() - new Date(_0x12a70d),
        _0x5cb31f = _0xfbb25f * 0x3c * 0x3e8;
      return _0x46e9a9 <= _0x5cb31f;
    } catch (_0x319f07) {
      return ![];
    }
  }),
  (userSchema[_0x3e6c0d(0x1dd)][_0x3e6c0d(0x1e1)] = function () {
    const _0x4f1cac = _0x3e6c0d;
    return this[_0x4f1cac(0x1b7)]["email"];
  }),
  (userSchema["methods"][_0x3e6c0d(0x1f1)] = function () {
    const _0x32897d = _0x3e6c0d;
    this[_0x32897d(0x1b7)][_0x32897d(0x1b1)] = !![];
  }),
  (userSchema[_0x3e6c0d(0x1dd)]["isPhoneVerified"] = function () {
    const _0x13cac2 = _0x3e6c0d;
    return this[_0x13cac2(0x1b7)]["phone"];
  }),
  (userSchema[_0x3e6c0d(0x1dd)][_0x3e6c0d(0x1e7)] = function () {
    const _0x352f46 = _0x3e6c0d;
    this["verified"][_0x352f46(0x1cd)] = !![];
  }),
  (userSchema[_0x3e6c0d(0x1dd)][_0x3e6c0d(0x1ee)] = async function (_0x356923) {
    const _0xdf0fee = _0x3e6c0d;
    try {
      return await bcrypt["compare"](_0x356923, this[_0xdf0fee(0x1ea)]);
    } catch (_0x5074f5) {
      return ![];
    }
  }),
  (userSchema["methods"]["updatePassword"] = async function (_0x9b0330) {
    const _0xed228f = _0x3e6c0d;
    try {
      const _0x597569 = await bcrypt[_0xed228f(0x1ed)](0xa),
        _0x39bf7c = await bcrypt[_0xed228f(0x1c4)](_0x9b0330, _0x597569);
      this[_0xed228f(0x1ea)] = _0x39bf7c;
    } catch (_0x3b8d11) {}
  }),
  (userSchema[_0x3e6c0d(0x1dd)][_0x3e6c0d(0x1dc)] = function (_0x58573c) {
    const _0x69cfd1 = _0x3e6c0d;
    try {
      isValidObjectId(_0x58573c) &&
        (_0x58573c = Types[_0x69cfd1(0x1f4)](_0x58573c)),
        this[_0x69cfd1(0x1d5)]["unshift"](_0x58573c);
    } catch (_0x2b2883) {}
  }),
  (userSchema[_0x3e6c0d(0x1dd)][_0x3e6c0d(0x1d7)] = function (_0x4f2a7c) {
    const _0x3494c6 = _0x3e6c0d;
    try {
      this[_0x3494c6(0x1d5)] = this[_0x3494c6(0x1d5)][_0x3494c6(0x1eb)](
        (_0x3f57e3) => _0x3f57e3["toString"]() !== _0x4f2a7c[_0x3494c6(0x1b8)]()
      );
    } catch (_0x1a2fa2) {}
  }),
  (userSchema["methods"]["addPaypalCard"] = function (
    _0x5c2b3c,
    _0x3e7d3a,
    _0x598f2d,
    _0x361dab,
    _0x32db6f,
    _0x36bd7a,
    _0x12faa4,
    _0x46ecb2
  ) {
    const _0xea950f = _0x3e6c0d;
    try {
      const _0x4ac990 = {
        type: _0xea950f(0x1c8),
        status: _0xea950f(0x1af),
        visa: null,
        paypal: {
          firstname: _0x5c2b3c,
          lastname: _0x3e7d3a,
          address: { line1: _0x598f2d, line2: _0x361dab },
          city: _0x32db6f,
          region: _0x36bd7a,
          country: _0x12faa4,
          postalCode: _0x46ecb2,
        },
      };
      this[_0xea950f(0x1ef)][_0xea950f(0x1e3)](_0x4ac990);
    } catch (_0x3adfbc) {}
  }),
  (userSchema[_0x3e6c0d(0x1dd)]["addVisaCard"] = function (
    _0x5d5589,
    _0x2099c1,
    _0x4a628a,
    _0x2ab038,
    _0x2f8595
  ) {
    const _0x11270b = _0x3e6c0d;
    try {
      const _0x55062a = {
        type: _0x11270b(0x1f3),
        status: _0x11270b(0x1af),
        paypal: null,
        visa: {
          nameOnCard: _0x5d5589,
          cardNumber: _0x2099c1,
          cvc: _0x4a628a,
          expiryDate: _0x2ab038,
          postalCode: _0x2f8595,
        },
      };
      this[_0x11270b(0x1ef)][_0x11270b(0x1e3)](_0x55062a);
    } catch (_0x2e982b) {}
  }),
  (userSchema[_0x3e6c0d(0x1dd)][_0x3e6c0d(0x1f2)] = function (_0x585487) {
    const _0x31ef0d = _0x3e6c0d;
    try {
      (this[_0x31ef0d(0x1c5)] = this[_0x31ef0d(0x1c5)][_0x31ef0d(0x1e6)](
        0x0,
        MAX_NOTIFICATIONS_COUNT
      )),
        this["notifications"][_0x31ef0d(0x1c9)] === MAX_NOTIFICATIONS_COUNT &&
          this[_0x31ef0d(0x1c5)][_0x31ef0d(0x1c1)](),
        this[_0x31ef0d(0x1c5)]["unshift"](_0x585487);
    } catch (_0x34c44b) {}
  }),
  (userSchema[_0x3e6c0d(0x1dd)][_0x3e6c0d(0x1a8)] = function () {
    const _0x523a35 = _0x3e6c0d;
    try {
      if (!this["notifications"][_0x523a35(0x1c9)]) return !![];
      const _0x18207d = [...this[_0x523a35(0x1c5)]];
      let _0x35e85c = !![];
      return (
        (this[_0x523a35(0x1c5)] = this[_0x523a35(0x1c5)][_0x523a35(0x1d3)](
          (_0x3d68b9) => {
            const _0x12ec05 = _0x523a35;
            return (
              (_0x35e85c = _0x35e85c && _0x3d68b9[_0x12ec05(0x1e2)]),
              { ..._0x3d68b9, seen: !![] }
            );
          }
        )),
        { isAllSeen: _0x35e85c, list: _0x18207d }
      );
    } catch (_0x52b05c) {
      return ![];
    }
  }),
  (userSchema[_0x3e6c0d(0x1dd)][_0x3e6c0d(0x1a9)] = function () {
    const _0x1d32d2 = _0x3e6c0d;
    try {
      const _0x3184e9 = !this[_0x1d32d2(0x1c5)][_0x1d32d2(0x1c9)];
      return (this[_0x1d32d2(0x1c5)] = []), _0x3184e9;
    } catch (_0x7636c8) {
      return ![];
    }
  }),
  (userSchema[_0x3e6c0d(0x1dd)][_0x3e6c0d(0x1b9)] = function (_0x165a1a) {
    const _0x546638 = _0x3e6c0d;
    try {
      if (!_0x165a1a) return;
      this[_0x546638(0x1e0)] = _0x165a1a;
    } catch (_0x4c5392) {}
  });
const User = model(_0x3e6c0d(0x1b4), userSchema);
function _0x1b9b() {
  const _0x112eb6 = [
    "roles",
    "maxICC",
    "10244808dGDkUN",
    "minPhone",
    "verification",
    "map",
    "minLength",
    "favorites",
    "favLanguages",
    "removeFromFavorites",
    "maxPhone",
    "auth-token-error",
    "name",
    "1879948FOoXtt",
    "addToFavorites",
    "methods",
    "bcrypt",
    "random",
    "deviceToken",
    "isEmailVerified",
    "seen",
    "unshift",
    "8738331LjuQwX",
    "../../config/system",
    "slice",
    "verifyPhone",
    "lastLogin",
    "496301cexPnI",
    "password",
    "filter",
    "env",
    "genSalt",
    "comparePassword",
    "paymentCards",
    "132QQSSlH",
    "verifyEmail",
    "addNotification",
    "visa",
    "ObjectId",
    "../../config/models",
    "balance",
    "role",
    "6yeFCHZ",
    "seeNotifications",
    "clearNotifications",
    "countries",
    "favLang",
    "min",
    "_id",
    "10qxpGdU",
    "active",
    "195340ZKYhNh",
    "email",
    "updateLastLogin",
    "icc",
    "User",
    "genCode",
    "max",
    "verified",
    "toString",
    "updateDeviceToken",
    "full",
    "isMatchingCode",
    "JWT_PRIVATE_KEY",
    "toHexString",
    "12740661BaFGSK",
    "code",
    "exactLength",
    "pop",
    "authTypes",
    "PASSWORD_SALT",
    "hash",
    "notifications",
    "mongoose",
    "minICC",
    "paypal",
    "length",
    "maxLength",
    "882309umneWc",
    "../../data/countries",
    "phone",
  ];
  _0x1b9b = function () {
    return _0x112eb6;
  };
  return _0x1b9b();
}
module["exports"] = { User: User, CLIENT_SCHEMA: CLIENT_SCHEMA };
