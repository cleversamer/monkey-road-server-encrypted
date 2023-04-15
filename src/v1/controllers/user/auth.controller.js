function _0xa34e() {
  const _0x2b60ce = [
    "CREATED",
    "body",
    "4832cSdQco",
    "loginWithEmail",
    "3236037JgYvkc",
    "json",
    "../../services",
    "registerWithEmail",
    "status",
    "exports",
    "pick",
    "323150ZjCAyn",
    "385857EiUvPU",
    "699gXPQuY",
    "registerEmail",
    "loginWithGoogle",
    "http-status",
    "6zYTddJ",
    "130ghEdNT",
    "3277832MeZbLI",
    "54794efrvNE",
    "420818TtHkPJ",
    "genAuthToken",
    "registerWithGoogle",
  ];
  _0xa34e = function () {
    return _0x2b60ce;
  };
  return _0xa34e();
}
function _0x2a17(_0x55a2d7, _0x2636bf) {
  const _0xa34eed = _0xa34e();
  return (
    (_0x2a17 = function (_0x2a1729, _0x24f6ee) {
      _0x2a1729 = _0x2a1729 - 0x17c;
      let _0x322c63 = _0xa34eed[_0x2a1729];
      return _0x322c63;
    }),
    _0x2a17(_0x55a2d7, _0x2636bf)
  );
}
const _0x4984ff = _0x2a17;
(function (_0x257edd, _0x44c47a) {
  const _0x25e952 = _0x2a17,
    _0x48bf96 = _0x257edd();
  while (!![]) {
    try {
      const _0x43209f =
        -parseInt(_0x25e952(0x181)) / 0x1 +
        parseInt(_0x25e952(0x180)) / 0x2 +
        (parseInt(_0x25e952(0x191)) / 0x3) *
          (parseInt(_0x25e952(0x186)) / 0x4) +
        parseInt(_0x25e952(0x18f)) / 0x5 +
        (-parseInt(_0x25e952(0x17d)) / 0x6) *
          (-parseInt(_0x25e952(0x188)) / 0x7) +
        parseInt(_0x25e952(0x17f)) / 0x8 +
        (-parseInt(_0x25e952(0x190)) / 0x9) *
          (parseInt(_0x25e952(0x17e)) / 0xa);
      if (_0x43209f === _0x44c47a) break;
      else _0x48bf96["push"](_0x48bf96["shift"]());
    } catch (_0x288295) {
      _0x48bf96["push"](_0x48bf96["shift"]());
    }
  }
})(_0xa34e, 0x41450);
const { authService, emailService } = require(_0x4984ff(0x18a)),
  httpStatus = require(_0x4984ff(0x17c)),
  { CLIENT_SCHEMA } = require("../../models/user/user.model"),
  _ = require("lodash");
(module[_0x4984ff(0x18d)][_0x4984ff(0x18b)] = async (
  _0x2cee03,
  _0x317938,
  _0x4ba94a
) => {
  const _0x3c351f = _0x4984ff;
  try {
    const {
        lang: _0x252152,
        name: _0x5d8d23,
        email: _0x13e25a,
        phoneICC: _0x14d467,
        phoneNSN: _0x1f9c34,
        password: _0x3fc130,
        deviceToken: _0x1727c6,
      } = _0x2cee03[_0x3c351f(0x185)],
      _0x34be66 = await authService[_0x3c351f(0x18b)](
        _0x13e25a,
        _0x3fc130,
        _0x5d8d23,
        _0x14d467,
        _0x1f9c34,
        _0x1727c6,
        _0x252152
      );
    await emailService[_0x3c351f(0x192)](_0x252152, _0x13e25a, _0x34be66);
    const _0xad136b = {
      user: _[_0x3c351f(0x18e)](_0x34be66, CLIENT_SCHEMA),
      token: _0x34be66[_0x3c351f(0x182)](),
    };
    _0x317938[_0x3c351f(0x18c)](httpStatus["CREATED"])[_0x3c351f(0x189)](
      _0xad136b
    );
  } catch (_0x4b6e03) {
    _0x4ba94a(_0x4b6e03);
  }
}),
  (module[_0x4984ff(0x18d)][_0x4984ff(0x183)] = async (
    _0x33d105,
    _0x273d93,
    _0x1bb80a
  ) => {
    const _0x5e9020 = _0x4984ff;
    try {
      const {
          lang: _0x2c2afb,
          googleToken: _0x404be3,
          phoneICC: _0x1319dc,
          phoneNSN: _0x46f4e8,
          deviceToken: _0x4b5d84,
        } = _0x33d105[_0x5e9020(0x185)],
        _0x2168a7 = await authService[_0x5e9020(0x183)](
          _0x404be3,
          _0x1319dc,
          _0x46f4e8,
          _0x4b5d84,
          _0x2c2afb
        ),
        _0x4642e7 = {
          user: _[_0x5e9020(0x18e)](_0x2168a7, CLIENT_SCHEMA),
          token: _0x2168a7["genAuthToken"](),
        };
      _0x273d93["status"](httpStatus[_0x5e9020(0x184)])[_0x5e9020(0x189)](
        _0x4642e7
      );
    } catch (_0x5ca784) {
      _0x1bb80a(_0x5ca784);
    }
  }),
  (module[_0x4984ff(0x18d)][_0x4984ff(0x187)] = async (
    _0x1bf17c,
    _0x9a928c,
    _0x4c48ba
  ) => {
    const _0x5a1ef9 = _0x4984ff;
    try {
      const {
          emailOrPhone: _0x40e3b9,
          password: _0x1c1ba0,
          deviceToken: _0x485d15,
        } = _0x1bf17c[_0x5a1ef9(0x185)],
        _0x2bad1b = await authService[_0x5a1ef9(0x187)](
          _0x40e3b9,
          _0x1c1ba0,
          _0x485d15
        ),
        _0x620299 = {
          user: _[_0x5a1ef9(0x18e)](_0x2bad1b, CLIENT_SCHEMA),
          token: _0x2bad1b[_0x5a1ef9(0x182)](),
        };
      _0x9a928c[_0x5a1ef9(0x18c)](httpStatus["OK"])[_0x5a1ef9(0x189)](
        _0x620299
      );
    } catch (_0x34d5e9) {
      _0x4c48ba(_0x34d5e9);
    }
  }),
  (module[_0x4984ff(0x18d)][_0x4984ff(0x193)] = async (
    _0x110156,
    _0x4ab29d,
    _0x437d62
  ) => {
    const _0x176d36 = _0x4984ff;
    try {
      const { googleToken: _0x4c0a18, deviceToken: _0xe247d9 } =
          _0x110156[_0x176d36(0x185)],
        _0x402f62 = await authService["loginWithGoogle"](_0x4c0a18, _0xe247d9),
        _0x5030f3 = {
          user: _[_0x176d36(0x18e)](_0x402f62, CLIENT_SCHEMA),
          token: _0x402f62[_0x176d36(0x182)](),
        };
      _0x4ab29d[_0x176d36(0x18c)](httpStatus["OK"])[_0x176d36(0x189)](
        _0x5030f3
      );
    } catch (_0x22bd1f) {
      _0x437d62(_0x22bd1f);
    }
  });
