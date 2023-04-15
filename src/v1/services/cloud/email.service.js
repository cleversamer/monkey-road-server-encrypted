function _0x352f(_0x3a1ade, _0x21684d) {
  const _0x98283e = _0x9828();
  return (
    (_0x352f = function (_0x352f81, _0x46d010) {
      _0x352f81 = _0x352f81 - 0x1c3;
      let _0x895140 = _0x98283e[_0x352f81];
      return _0x895140;
    }),
    _0x352f(_0x3a1ade, _0x21684d)
  );
}
const _0xe9b949 = _0x352f;
(function (_0x382e2b, _0x281ccf) {
  const _0x5c45e3 = _0x352f,
    _0x559518 = _0x382e2b();
  while (!![]) {
    try {
      const _0x3ece98 =
        (parseInt(_0x5c45e3(0x1e2)) / 0x1) *
          (parseInt(_0x5c45e3(0x1d9)) / 0x2) +
        parseInt(_0x5c45e3(0x1ca)) / 0x3 +
        parseInt(_0x5c45e3(0x1c7)) / 0x4 +
        parseInt(_0x5c45e3(0x1d7)) / 0x5 +
        (parseInt(_0x5c45e3(0x1cd)) / 0x6) *
          (-parseInt(_0x5c45e3(0x1e4)) / 0x7) +
        (-parseInt(_0x5c45e3(0x1d8)) / 0x8) *
          (-parseInt(_0x5c45e3(0x1d0)) / 0x9) +
        (-parseInt(_0x5c45e3(0x1c6)) / 0xa) *
          (parseInt(_0x5c45e3(0x1e3)) / 0xb);
      if (_0x3ece98 === _0x281ccf) break;
      else _0x559518["push"](_0x559518["shift"]());
    } catch (_0x8f6484) {
      _0x559518["push"](_0x559518["shift"]());
    }
  }
})(_0x9828, 0xbb36e);
function _0x9828() {
  const _0x17b5d0 = [
    "28778541OWPcOc",
    "2758wrrIsM",
    "createTransport",
    "getEmailBody",
    "user",
    "10olLoYF",
    "5745380YEQeyv",
    "forgotPassword",
    "registerEmail",
    "1364565ltORKc",
    "INTERNAL_SERVER_ERROR",
    "emailError",
    "7254mzLUAO",
    "http-status",
    "Gmail",
    "153oEzsiQ",
    "password",
    "exports",
    "../../middleware/apiError",
    "nodemailer",
    "getMailGenerator",
    "getMessage",
    "3189130FyBaQh",
    "406704VhnIBZ",
    "3518SxZhcO",
    "changeEmail",
    "types",
    "auth",
    "system",
    "register",
    "../../config/system",
    "sendMail",
    "includes",
    "265FjqzEW",
  ];
  _0x9828 = function () {
    return _0x17b5d0;
  };
  return _0x9828();
}
const nodemailer = require(_0xe9b949(0x1d4)),
  { mail } = require(_0xe9b949(0x1df)),
  httpStatus = require(_0xe9b949(0x1ce)),
  errors = require("../../config/errors"),
  { ApiError } = require(_0xe9b949(0x1d3)),
  transporter = nodemailer[_0xe9b949(0x1c3)]({
    service: _0xe9b949(0x1cf),
    secure: !![],
    auth: {
      user: mail[_0xe9b949(0x1dc)][_0xe9b949(0x1c5)],
      pass: mail[_0xe9b949(0x1dc)][_0xe9b949(0x1d1)],
    },
  });
(module[_0xe9b949(0x1d2)][_0xe9b949(0x1c9)] = async (
  _0x320597,
  _0x129420,
  _0x3b1ed0
) => {
  const _0x328666 = _0xe9b949;
  try {
    !["ar", "en"][_0x328666(0x1e1)](_0x320597) && (_0x320597 = "ar");
    const {
        subject: _0x129ba8,
        emailBody: { title: _0x2d6ed2, greeting: _0x9a3e4b },
      } = mail[_0x328666(0x1db)][_0x328666(0x1de)],
      _0x41e8a9 = mail[_0x328666(0x1d5)](_0x320597),
      _0x613e6a = mail[_0x328666(0x1c4)](
        _0x41e8a9,
        _0x2d6ed2[_0x320597](_0x3b1ed0),
        _0x9a3e4b[_0x320597],
        _0x3b1ed0
      ),
      _0x3c109e = mail[_0x328666(0x1d6)](
        _0x129420,
        _0x613e6a,
        _0x129ba8[_0x320597]
      );
    return await transporter[_0x328666(0x1e0)](_0x3c109e), !![];
  } catch (_0x975064) {
    const _0x8d994 = httpStatus[_0x328666(0x1cb)],
      _0x25b111 = errors[_0x328666(0x1dd)][_0x328666(0x1cc)];
    throw new ApiError(_0x8d994, _0x25b111);
  }
}),
  (module["exports"][_0xe9b949(0x1da)] = async (
    _0x411469,
    _0x380657,
    _0x59a2ab
  ) => {
    const _0x13f151 = _0xe9b949;
    try {
      !["ar", "en"][_0x13f151(0x1e1)](_0x411469) && (_0x411469 = "ar");
      const {
          subject: _0x1cf1d2,
          emailBody: { title: _0x3b637e, greeting: _0x43d1e3 },
        } = mail["types"]["changeEmail"],
        _0x138bd3 = mail[_0x13f151(0x1d5)](_0x411469),
        _0x21f2d1 = mail[_0x13f151(0x1c4)](
          _0x138bd3,
          _0x3b637e[_0x411469](_0x59a2ab),
          _0x43d1e3[_0x411469],
          _0x59a2ab
        ),
        _0x4525f2 = mail["getMessage"](
          _0x380657,
          _0x21f2d1,
          _0x1cf1d2[_0x411469]
        );
      return await transporter[_0x13f151(0x1e0)](_0x4525f2), !![];
    } catch (_0x18faae) {
      const _0x2f6518 = httpStatus[_0x13f151(0x1cb)],
        _0x1f82b3 = errors[_0x13f151(0x1dd)][_0x13f151(0x1cc)];
      throw new ApiError(_0x2f6518, _0x1f82b3);
    }
  }),
  (module[_0xe9b949(0x1d2)]["forgotPasswordEmail"] = async (
    _0x3f73ea,
    _0x397a16,
    _0x3179d9
  ) => {
    const _0x29afb2 = _0xe9b949;
    try {
      !["ar", "en"][_0x29afb2(0x1e1)](_0x3f73ea) && (_0x3f73ea = "ar");
      const {
          subject: _0x2b0d10,
          emailBody: { title: _0xb3a30d, greeting: _0x2c5c8e },
        } = mail["types"][_0x29afb2(0x1c8)],
        _0x329dde = mail[_0x29afb2(0x1d5)](_0x3f73ea),
        _0x37b3a5 = mail[_0x29afb2(0x1c4)](
          _0x329dde,
          _0xb3a30d[_0x3f73ea](_0x3179d9),
          _0x2c5c8e[_0x3f73ea],
          _0x3179d9
        ),
        _0x1f6cae = mail["getMessage"](
          _0x397a16,
          _0x37b3a5,
          _0x2b0d10[_0x3f73ea]
        );
      return await transporter[_0x29afb2(0x1e0)](_0x1f6cae), !![];
    } catch (_0x4b940c) {
      const _0x13499c = httpStatus["INTERNAL_SERVER_ERROR"],
        _0x1aefa8 = errors[_0x29afb2(0x1dd)][_0x29afb2(0x1cc)];
      throw new ApiError(_0x13499c, _0x1aefa8);
    }
  });
