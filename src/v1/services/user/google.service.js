const _0x1b0a2f = _0x399d;
function _0x399d(_0x2e9a05, _0x450ecd) {
  const _0x335512 = _0x3355();
  return (
    (_0x399d = function (_0x399d55, _0x343e53) {
      _0x399d55 = _0x399d55 - 0x181;
      let _0x1c56d9 = _0x335512[_0x399d55];
      return _0x1c56d9;
    }),
    _0x399d(_0x2e9a05, _0x450ecd)
  );
}
(function (_0x40d63b, _0x16a73e) {
  const _0x4c72ea = _0x399d,
    _0xf52120 = _0x40d63b();
  while (!![]) {
    try {
      const _0x29fd5d =
        -parseInt(_0x4c72ea(0x181)) / 0x1 +
        (parseInt(_0x4c72ea(0x193)) / 0x2) *
          (-parseInt(_0x4c72ea(0x188)) / 0x3) +
        (parseInt(_0x4c72ea(0x191)) / 0x4) *
          (-parseInt(_0x4c72ea(0x18f)) / 0x5) +
        (parseInt(_0x4c72ea(0x18b)) / 0x6) *
          (-parseInt(_0x4c72ea(0x192)) / 0x7) +
        parseInt(_0x4c72ea(0x195)) / 0x8 +
        parseInt(_0x4c72ea(0x183)) / 0x9 +
        parseInt(_0x4c72ea(0x187)) / 0xa;
      if (_0x29fd5d === _0x16a73e) break;
      else _0xf52120["push"](_0xf52120["shift"]());
    } catch (_0x1335b0) {
      _0xf52120["push"](_0xf52120["shift"]());
    }
  }
})(_0x3355, 0x1c239);
function _0x3355() {
  const _0x5d8218 = [
    "exports",
    "../../config/system/service-account.json",
    "98585nXRchM",
    "http-status",
    "951147LsvIVy",
    "invalidGoogleToken",
    "auth",
    "../../middleware/apiError",
    "2078570UFaflW",
    "3tYXszH",
    "credential",
    "firebase-admin",
    "30IVGGXN",
    "UNAUTHORIZED",
    "INTERNAL_SERVER_ERROR",
    "verifyIdToken",
    "1355fYfJNV",
    "../../config/errors",
    "940ufSPll",
    "181265kGRyES",
    "7478IqhXQa",
    "cert",
    "777608gyzjfE",
  ];
  _0x3355 = function () {
    return _0x5d8218;
  };
  return _0x3355();
}
const admin = require(_0x1b0a2f(0x18a)),
  { ApiError } = require(_0x1b0a2f(0x186)),
  httpStatus = require(_0x1b0a2f(0x182)),
  errors = require(_0x1b0a2f(0x190)),
  serviceAccount = require(_0x1b0a2f(0x197));
admin["initializeApp"]({
  credential: admin[_0x1b0a2f(0x189)][_0x1b0a2f(0x194)](serviceAccount),
});
const decodeToken = async (_0x5acf49) => {
  const _0x2956cf = _0x1b0a2f;
  try {
    const _0x4f8bf4 = await admin["auth"]()[_0x2956cf(0x18e)](_0x5acf49);
    if (!_0x4f8bf4) {
      const _0x216e14 = httpStatus[_0x2956cf(0x18c)],
        _0x22cfe1 = errors[_0x2956cf(0x185)][_0x2956cf(0x184)];
      throw new ApiError(_0x216e14, _0x22cfe1);
    }
    return _0x4f8bf4;
  } catch (_0x2b31c0) {
    const _0x55e5bc = httpStatus[_0x2956cf(0x18d)],
      _0x56eaca = errors[_0x2956cf(0x185)]["errorGoogleAuth"];
    throw new ApiError(_0x55e5bc, _0x56eaca);
  }
};
module[_0x1b0a2f(0x196)] = { admin: admin, decodeToken: decodeToken };
