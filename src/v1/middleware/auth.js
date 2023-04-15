const _0x34f62f = _0x35e5;
(function (_0x566831, _0x2ee91c) {
  const _0x55b022 = _0x35e5,
    _0x111e30 = _0x566831();
  while (!![]) {
    try {
      const _0xac2990 =
        -parseInt(_0x55b022(0xc9)) / 0x1 +
        (parseInt(_0x55b022(0xc8)) / 0x2) * (parseInt(_0x55b022(0xd3)) / 0x3) +
        (-parseInt(_0x55b022(0xc6)) / 0x4) * (parseInt(_0x55b022(0xbc)) / 0x5) +
        parseInt(_0x55b022(0xcc)) / 0x6 +
        -parseInt(_0x55b022(0xd4)) / 0x7 +
        -parseInt(_0x55b022(0xbe)) / 0x8 +
        parseInt(_0x55b022(0xce)) / 0x9;
      if (_0xac2990 === _0x2ee91c) break;
      else _0x111e30["push"](_0x111e30["shift"]());
    } catch (_0x425525) {
      _0x111e30["push"](_0x111e30["shift"]());
    }
  }
})(_0xace2, 0xe058a);
function _0x35e5(_0x367d1c, _0x31a0c1) {
  const _0xace2dd = _0xace2();
  return (
    (_0x35e5 = function (_0x35e599, _0x470ef6) {
      _0x35e599 = _0x35e599 - 0xba;
      let _0x529a3c = _0xace2dd[_0x35e599];
      return _0x529a3c;
    }),
    _0x35e5(_0x367d1c, _0x31a0c1)
  );
}
function _0xace2() {
  const _0x2cfda9 = [
    "5137867ggLAyw",
    "passport",
    "role",
    "auth",
    "./apiError",
    "user",
    "5POyUyT",
    "hasNoRights",
    "6607664ZCyGAW",
    "jwt",
    "verified",
    "permission",
    "then",
    "email",
    "granted",
    "../config/errors",
    "4505132fqZZqh",
    "catch",
    "14bLhgRH",
    "919745Xcvzls",
    "can",
    "FORBIDDEN",
    "8231460BIRmMA",
    "length",
    "16726788HmjnFu",
    "../config/roles",
    "UNAUTHORIZED",
    "locals",
    "emailNotVerified",
    "554763gYwzyS",
  ];
  _0xace2 = function () {
    return _0x2cfda9;
  };
  return _0xace2();
}
const passport = require(_0x34f62f(0xd5)),
  { ApiError } = require(_0x34f62f(0xba)),
  httpStatus = require("http-status"),
  errors = require(_0x34f62f(0xc5)),
  roles = require(_0x34f62f(0xcf)),
  verify =
    (_0x2b4ac4, _0x552d05, _0x3f7bbb, _0x3bad49, _0x3042fd) =>
    async (_0x928f9, _0x45aecc) => {
      const _0x3ad220 = _0x34f62f;
      if (_0x928f9 || !_0x45aecc) {
        const _0x3a1b9c = httpStatus[_0x3ad220(0xd0)],
          _0x43af73 = errors[_0x3ad220(0xd7)]["invalidToken"];
        return _0x3bad49(new ApiError(_0x3a1b9c, _0x43af73));
      }
      _0x2b4ac4[_0x3ad220(0xbb)] = _0x45aecc;
      const _0x593254 = _0x3042fd[0x2];
      if (!_0x593254 && !_0x45aecc[_0x3ad220(0xc0)][_0x3ad220(0xc3)]) {
        const _0x274d3b = httpStatus[_0x3ad220(0xcb)],
          _0x3818b3 = errors["auth"][_0x3ad220(0xd2)];
        return _0x3bad49(new ApiError(_0x274d3b, _0x3818b3));
      }
      if (_0x3042fd[_0x3ad220(0xcd)]) {
        const _0x408a3b = _0x3042fd[0x0],
          _0x3a8ec4 = _0x3042fd[0x1],
          _0x22b05e = roles[_0x3ad220(0xca)](
            _0x2b4ac4[_0x3ad220(0xbb)][_0x3ad220(0xd6)]
          )[_0x408a3b](_0x3a8ec4);
        if (!_0x22b05e[_0x3ad220(0xc4)]) {
          const _0x163373 = httpStatus[_0x3ad220(0xcb)],
            _0x53c5e0 = errors[_0x3ad220(0xd7)][_0x3ad220(0xbd)];
          return _0x3bad49(new ApiError(_0x163373, _0x53c5e0));
        }
        _0x552d05[_0x3ad220(0xd1)][_0x3ad220(0xc1)] = _0x22b05e;
      }
      _0x3f7bbb();
    },
  auth = (..._0x421256) => {
    return async (_0x1a84de, _0x404925, _0x333a86) => {
      const _0x1ed145 = _0x35e5;
      return new Promise((_0x8fed90, _0x2affba) => {
        const _0x1a4e86 = _0x35e5;
        passport["authenticate"](
          _0x1a4e86(0xbf),
          { session: ![] },
          verify(_0x1a84de, _0x404925, _0x8fed90, _0x2affba, _0x421256)
        )(_0x1a84de, _0x404925, _0x333a86);
      })
        [_0x1ed145(0xc2)](() => _0x333a86())
        [_0x1ed145(0xc7)]((_0x23837a) => _0x333a86(_0x23837a));
    };
  };
module["exports"] = auth;
