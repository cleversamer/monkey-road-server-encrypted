function _0x3e00(_0x4bcd76, _0xd6f1dd) {
  const _0x372d8b = _0x372d();
  return (
    (_0x3e00 = function (_0x3e0053, _0x2a44c1) {
      _0x3e0053 = _0x3e0053 - 0x17e;
      let _0x5b66dd = _0x372d8b[_0x3e0053];
      return _0x5b66dd;
    }),
    _0x3e00(_0x4bcd76, _0xd6f1dd)
  );
}
function _0x372d() {
  const _0x71de39 = [
    "98595YtucfT",
    "372676CHRfeN",
    "10OKSsMk",
    "42xGkrqt",
    "password",
    "save",
    "email",
    "18664uWTmAP",
    "FORBIDDEN",
    "loginWithEmail",
    "loginWithGoogle",
    "updateLastLogin",
    "name",
    "347884dwLByK",
    "duplicateIndexKey",
    "./users.service",
    "incorrectCredentials",
    "NOT_FOUND",
    "auth",
    "http-status",
    "comparePassword",
    "phone",
    "updateCode",
    "phoneUsed",
    "google",
    "604572iGDVpj",
    "updateDeviceToken",
    "length",
    "findUserByEmailOrPhone",
    "code",
    "exports",
    "415215FMkZVK",
    "../../models/user/user.model",
    "UNAUTHORIZED",
    "emailOrPhoneUsed",
    "codes",
    "285970TSkHoS",
    "genSalt",
    "registerWithGoogle",
    "./google.service",
    "1TpweJr",
  ];
  _0x372d = function () {
    return _0x71de39;
  };
  return _0x372d();
}
const _0x517c70 = _0x3e00;
(function (_0x37a0ef, _0x54fe76) {
  const _0x5814f9 = _0x3e00,
    _0x22848d = _0x37a0ef();
  while (!![]) {
    try {
      const _0x5896b4 =
        (-parseInt(_0x5814f9(0x1a6)) / 0x1) *
          (-parseInt(_0x5814f9(0x18b)) / 0x2) +
        parseInt(_0x5814f9(0x17e)) / 0x3 +
        -parseInt(_0x5814f9(0x17f)) / 0x4 +
        parseInt(_0x5814f9(0x1a2)) / 0x5 +
        -parseInt(_0x5814f9(0x197)) / 0x6 +
        (-parseInt(_0x5814f9(0x181)) / 0x7) *
          (parseInt(_0x5814f9(0x185)) / 0x8) +
        (-parseInt(_0x5814f9(0x19d)) / 0x9) *
          (-parseInt(_0x5814f9(0x180)) / 0xa);
      if (_0x5896b4 === _0x54fe76) break;
      else _0x22848d["push"](_0x22848d["shift"]());
    } catch (_0x39b9d9) {
      _0x22848d["push"](_0x22848d["shift"]());
    }
  }
})(_0x372d, 0x18f3f);
const { User } = require(_0x517c70(0x19e)),
  bcrypt = require("bcrypt"),
  { ApiError } = require("../../middleware/apiError"),
  httpStatus = require(_0x517c70(0x191)),
  errors = require("../../config/errors"),
  usersService = require(_0x517c70(0x18d)),
  googleService = require(_0x517c70(0x1a5));
(module[_0x517c70(0x19c)]["registerWithEmail"] = async (
  _0x180abf,
  _0x2b2c1b,
  _0x764e54,
  _0x55e002,
  _0x5e3629,
  _0x5d51b9,
  _0x29ab63
) => {
  const _0x2d013d = _0x517c70;
  try {
    const _0x2dbfb3 = await bcrypt[_0x2d013d(0x1a3)](0xa),
      _0x4da5c0 = await bcrypt["hash"](_0x2b2c1b, _0x2dbfb3),
      _0x2019a2 = new User({
        authType: "email",
        name: _0x764e54,
        email: _0x180abf,
        password: _0x4da5c0,
        favLang: _0x29ab63,
        lastLogin: new Date(),
        phone: {
          full: "" + _0x55e002 + _0x5e3629,
          icc: _0x55e002,
          nsn: _0x5e3629,
        },
      });
    return (
      _0x2019a2[_0x2d013d(0x194)](_0x2d013d(0x184)),
      _0x2019a2[_0x2d013d(0x194)](_0x2d013d(0x193)),
      _0x2019a2[_0x2d013d(0x198)](_0x5d51b9),
      await _0x2019a2[_0x2d013d(0x183)]()
    );
  } catch (_0x18f29d) {
    if (
      _0x18f29d[_0x2d013d(0x19b)] === errors[_0x2d013d(0x1a1)][_0x2d013d(0x18c)]
    ) {
      const _0x2c86fc = httpStatus[_0x2d013d(0x186)],
        _0x4d562e = errors[_0x2d013d(0x190)][_0x2d013d(0x1a0)];
      throw new ApiError(_0x2c86fc, _0x4d562e);
    }
    throw _0x18f29d;
  }
}),
  (module[_0x517c70(0x19c)][_0x517c70(0x1a4)] = async (
    _0x493714,
    _0x165758,
    _0x631cc1,
    _0x5322b5,
    _0x441d41
  ) => {
    const _0x534ca1 = _0x517c70;
    try {
      const _0x253e8e = await googleService["decodeToken"](_0x493714),
        _0x3d2810 = await usersService[_0x534ca1(0x19a)](
          _0x253e8e[_0x534ca1(0x184)]
        );
      if (_0x3d2810) return _0x3d2810;
      const _0x1a9398 = new User({
        authType: _0x534ca1(0x196),
        email: _0x253e8e["email"],
        name: _0x253e8e[_0x534ca1(0x18a)],
        favLang: _0x441d41,
        lastLogin: new Date(),
        phone: {
          full: "" + _0x165758 + _0x631cc1,
          icc: _0x165758,
          nsn: _0x631cc1,
        },
        verified: { email: !![], phone: ![] },
      });
      return (
        _0x1a9398["updateCode"](_0x534ca1(0x184)),
        _0x1a9398[_0x534ca1(0x194)](_0x534ca1(0x193)),
        _0x1a9398[_0x534ca1(0x198)](_0x5322b5),
        await _0x1a9398[_0x534ca1(0x183)]()
      );
    } catch (_0x373ddd) {
      if (_0x373ddd[_0x534ca1(0x19b)] === errors["codes"][_0x534ca1(0x18c)]) {
        const _0x5c94bd = httpStatus["FORBIDDEN"],
          _0x2023d6 = errors["auth"][_0x534ca1(0x195)];
        throw new ApiError(_0x5c94bd, _0x2023d6);
      }
      throw _0x373ddd;
    }
  }),
  (module[_0x517c70(0x19c)][_0x517c70(0x187)] = async (
    _0x57a61e,
    _0x356ad4,
    _0x39aa85
  ) => {
    const _0x96adcc = _0x517c70;
    try {
      const _0x5c5bd4 = await usersService[_0x96adcc(0x19a)](_0x57a61e);
      if (!_0x5c5bd4) {
        const _0x1f4a87 = httpStatus[_0x96adcc(0x18f)],
          _0x1cc3a3 = errors[_0x96adcc(0x190)][_0x96adcc(0x18e)];
        throw new ApiError(_0x1f4a87, _0x1cc3a3);
      }
      if (!_0x5c5bd4[_0x96adcc(0x182)][_0x96adcc(0x199)]) {
        const _0xb8f30 = httpStatus[_0x96adcc(0x19f)],
          _0x560a73 = errors["auth"]["hasNoPassword"];
        throw new ApiError(_0xb8f30, _0x560a73);
      }
      if (!(await _0x5c5bd4[_0x96adcc(0x192)](_0x356ad4))) {
        const _0x2b4bef = httpStatus[_0x96adcc(0x19f)],
          _0x9a2f6f = errors[_0x96adcc(0x190)][_0x96adcc(0x18e)];
        throw new ApiError(_0x2b4bef, _0x9a2f6f);
      }
      return (
        _0x5c5bd4[_0x96adcc(0x189)](),
        _0x5c5bd4[_0x96adcc(0x198)](_0x39aa85),
        await _0x5c5bd4[_0x96adcc(0x183)]()
      );
    } catch (_0xdaa399) {
      throw _0xdaa399;
    }
  }),
  (module["exports"][_0x517c70(0x188)] = async (_0x50e344, _0x5367bb) => {
    const _0x316603 = _0x517c70;
    try {
      const _0x45462f = await googleService["decodeToken"](_0x50e344),
        _0x1138b8 = await usersService[_0x316603(0x19a)](
          _0x45462f[_0x316603(0x184)]
        );
      if (!_0x1138b8) {
        const _0x198263 = httpStatus["NOT_FOUND"],
          _0x5de90d = errors[_0x316603(0x190)]["googleAccNotRegistered"];
        throw new ApiError(_0x198263, _0x5de90d);
      }
      return (
        _0x1138b8[_0x316603(0x189)](),
        _0x1138b8[_0x316603(0x198)](_0x5367bb),
        await _0x1138b8[_0x316603(0x183)](),
        _0x1138b8
      );
    } catch (_0x2f31ef) {
      throw _0x2f31ef;
    }
  });
