function _0x495a() {
  const _0x3151e3 = [
    "984353eAXWQx",
    "findById",
    "email",
    "4065819vpCWaD",
    "sub",
    "3455304PkhJHa",
    "2qskjVy",
    "../config/system",
    "2536490kTMFrA",
    "5810668ZfAhHM",
    "../models/user/user.model",
    "full",
    "2163512PMoias",
    "passport-jwt",
    "length",
    "12718224MsaxNH",
    "fromAuthHeaderAsBearerToken",
    "substring",
    "password",
    "7KEQkGA",
  ];
  _0x495a = function () {
    return _0x3151e3;
  };
  return _0x495a();
}
const _0x467b7e = _0x48dd;
(function (_0x54a701, _0x2d9aee) {
  const _0x46af0b = _0x48dd,
    _0x321056 = _0x54a701();
  while (!![]) {
    try {
      const _0x281c4b =
        (parseInt(_0x46af0b(0x1b4)) / 0x1) *
          (-parseInt(_0x46af0b(0x1a6)) / 0x2) +
        -parseInt(_0x46af0b(0x1b7)) / 0x3 +
        parseInt(_0x46af0b(0x1a9)) / 0x4 +
        -parseInt(_0x46af0b(0x1a8)) / 0x5 +
        parseInt(_0x46af0b(0x1a5)) / 0x6 +
        (parseInt(_0x46af0b(0x1b3)) / 0x7) *
          (parseInt(_0x46af0b(0x1ac)) / 0x8) +
        parseInt(_0x46af0b(0x1af)) / 0x9;
      if (_0x281c4b === _0x2d9aee) break;
      else _0x321056["push"](_0x321056["shift"]());
    } catch (_0x2320ff) {
      _0x321056["push"](_0x321056["shift"]());
    }
  }
})(_0x495a, 0xd33b2);
function _0x48dd(_0x2f0d3b, _0x5ecf04) {
  const _0x495a57 = _0x495a();
  return (
    (_0x48dd = function (_0x48ddd7, _0x62bff7) {
      _0x48ddd7 = _0x48ddd7 - 0x1a5;
      let _0x141bee = _0x495a57[_0x48ddd7];
      return _0x141bee;
    }),
    _0x48dd(_0x2f0d3b, _0x5ecf04)
  );
}
const { User } = require(_0x467b7e(0x1aa)),
  { Strategy: JwtStrategy, ExtractJwt } = require(_0x467b7e(0x1ad)),
  { server } = require(_0x467b7e(0x1a7)),
  jwtOptions = {
    secretOrKey: process["env"]["JWT_PRIVATE_KEY"],
    jwtFromRequest: ExtractJwt[_0x467b7e(0x1b0)](),
  },
  jwtVerify = async (_0x1092d9, _0x526350) => {
    const _0x488452 = _0x467b7e;
    try {
      const _0x2f289d = await User[_0x488452(0x1b5)](
          _0x1092d9[_0x488452(0x1b8)]
        ),
        _0x2ea2a4 = _0x1092d9[_0x488452(0x1b2)][_0x488452(0x1b1)](
          0x0,
          _0x2f289d[_0x488452(0x1b2)][_0x488452(0x1ae)]
        ),
        _0x594bf8 = _0x1092d9[_0x488452(0x1b2)][_0x488452(0x1b1)](
          _0x2f289d[_0x488452(0x1b2)][_0x488452(0x1ae)]
        ),
        _0xf03d2a =
          !_0x2f289d ||
          _0x2ea2a4 !== _0x2f289d[_0x488452(0x1b2)] ||
          _0x594bf8 !== server["PASSWORD_SALT"] ||
          _0x1092d9[_0x488452(0x1b6)] !== _0x2f289d["email"] ||
          _0x1092d9["phone"] !== _0x2f289d["phone"][_0x488452(0x1ab)];
      return _0xf03d2a ? _0x526350(null, ![]) : _0x526350(null, _0x2f289d);
    } catch (_0x505166) {
      _0x526350(_0x505166, ![]);
    }
  },
  jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);
module["exports"] = { jwtStrategy: jwtStrategy };
