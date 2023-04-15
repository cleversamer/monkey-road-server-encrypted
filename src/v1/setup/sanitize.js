const _0x229fcf = _0x5d9a;
function _0x3720() {
  const _0x45f918 = [
    "error",
    "express",
    "3107016HfQhnT",
    "381596MpsmHe",
    "exports",
    "express-mongo-sanitize",
    "express-rate-limit",
    "express-fileupload",
    "PER_MILLISECONDS",
    "850540LcFQom",
    "helmet",
    "96856mFCBeN",
    "use",
    "413LxESac",
    "1628628PVCDex",
    "NUMBER",
    "tempBlocked",
    "../middleware/apiError",
    "urlencoded",
    "TOO_MANY_REQUESTS",
    "../config/system",
    "2pNZIkZ",
    "http-status",
    "MAX_REQUESTS",
    "60xnmHvd",
    "uploads",
    "3178344cCZrer",
    "system",
    "static",
    "MAX_REQ_BODY_SIZE",
    "398056YviHKo",
    "../config/errors",
    "xss-clean",
  ];
  _0x3720 = function () {
    return _0x45f918;
  };
  return _0x3720();
}
function _0x5d9a(_0x5315e2, _0x168df3) {
  const _0x37208e = _0x3720();
  return (
    (_0x5d9a = function (_0x5d9a5f, _0x2758d2) {
      _0x5d9a5f = _0x5d9a5f - 0x8d;
      let _0x235e8c = _0x37208e[_0x5d9a5f];
      return _0x235e8c;
    }),
    _0x5d9a(_0x5315e2, _0x168df3)
  );
}
(function (_0x2da98f, _0x35cde1) {
  const _0xe4cf55 = _0x5d9a,
    _0x4dea32 = _0x2da98f();
  while (!![]) {
    try {
      const _0x498c63 =
        (-parseInt(_0xe4cf55(0x96)) / 0x1) *
          (-parseInt(_0xe4cf55(0xa5)) / 0x2) +
        -parseInt(_0xe4cf55(0x8f)) / 0x3 +
        -parseInt(_0xe4cf55(0x9f)) / 0x4 +
        -parseInt(_0xe4cf55(0xab)) / 0x5 +
        -parseInt(_0xe4cf55(0x9b)) / 0x6 +
        (parseInt(_0xe4cf55(0x8e)) / 0x7) * (-parseInt(_0xe4cf55(0xad)) / 0x8) +
        (-parseInt(_0xe4cf55(0xa4)) / 0x9) * (-parseInt(_0xe4cf55(0x99)) / 0xa);
      if (_0x498c63 === _0x35cde1) break;
      else _0x4dea32["push"](_0x4dea32["shift"]());
    } catch (_0x528ba4) {
      _0x4dea32["push"](_0x4dea32["shift"]());
    }
  }
})(_0x3720, 0x60c75);
const express = require(_0x229fcf(0xa3)),
  xss = require(_0x229fcf(0xa1)),
  mongoSanitize = require(_0x229fcf(0xa7)),
  cors = require("cors"),
  upload = require(_0x229fcf(0xa9)),
  helmet = require(_0x229fcf(0xac)),
  { rateLimit } = require(_0x229fcf(0xa8)),
  { limitHandler } = require(_0x229fcf(0x92)),
  { server } = require(_0x229fcf(0x95)),
  errors = require(_0x229fcf(0xa0)),
  httpStatus = require(_0x229fcf(0x97)),
  limiter = rateLimit({
    windowMs: server[_0x229fcf(0x98)][_0x229fcf(0xaa)],
    max: server[_0x229fcf(0x98)][_0x229fcf(0x90)],
    message: {
      status: _0x229fcf(0xa2),
      statusCode: httpStatus[_0x229fcf(0x94)],
      message: errors[_0x229fcf(0x9c)][_0x229fcf(0x91)],
    },
  });
module[_0x229fcf(0xa6)] = (_0x2e43d9) => {
  const _0x5879ce = _0x229fcf;
  _0x2e43d9["use"](limiter),
    _0x2e43d9[_0x5879ce(0x8d)](
      upload({
        limits: { fileSize: server["MAX_FILE_UPLOAD_SIZE"] * 0x400 * 0x400 },
        abortOnLimit: !![],
        limitHandler: limitHandler,
      })
    ),
    _0x2e43d9[_0x5879ce(0x8d)](
      express["json"]({ limit: server[_0x5879ce(0x9e)] + "kb" })
    ),
    _0x2e43d9[_0x5879ce(0x8d)](express[_0x5879ce(0x93)]({ extended: !![] })),
    _0x2e43d9[_0x5879ce(0x8d)](express[_0x5879ce(0x9d)](_0x5879ce(0x9a))),
    _0x2e43d9[_0x5879ce(0x8d)](helmet()),
    _0x2e43d9[_0x5879ce(0x8d)](cors({ origin: !![] })),
    _0x2e43d9["use"](xss()),
    _0x2e43d9[_0x5879ce(0x8d)](mongoSanitize());
};
