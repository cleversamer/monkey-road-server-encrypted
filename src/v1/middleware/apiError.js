const _0x30c167 = _0x4f1f;
(function (_0x327f66, _0x39817c) {
  const _0x50c2c4 = _0x4f1f,
    _0x9a70e9 = _0x327f66();
  while (!![]) {
    try {
      const _0x47bf0e =
        -parseInt(_0x50c2c4(0xaf)) / 0x1 +
        (parseInt(_0x50c2c4(0xb5)) / 0x2) * (-parseInt(_0x50c2c4(0xbe)) / 0x3) +
        -parseInt(_0x50c2c4(0xb7)) / 0x4 +
        parseInt(_0x50c2c4(0xbb)) / 0x5 +
        -parseInt(_0x50c2c4(0xa9)) / 0x6 +
        -parseInt(_0x50c2c4(0xba)) / 0x7 +
        (parseInt(_0x50c2c4(0xb6)) / 0x8) * (parseInt(_0x50c2c4(0xab)) / 0x9);
      if (_0x47bf0e === _0x39817c) break;
      else _0x9a70e9["push"](_0x9a70e9["shift"]());
    } catch (_0x14bf0a) {
      _0x9a70e9["push"](_0x9a70e9["shift"]());
    }
  }
})(_0xe830, 0xb9df7);
function _0x4f1f(_0x509c48, _0x199c39) {
  const _0xe83030 = _0xe830();
  return (
    (_0x4f1f = function (_0x4f1f42, _0x5b85e6) {
      _0x4f1f42 = _0x4f1f42 - 0xa9;
      let _0x4f8023 = _0xe83030[_0x4f1f42];
      return _0x4f8023;
    }),
    _0x4f1f(_0x509c48, _0x199c39)
  );
}
const { Error: MongooseError } = require(_0x30c167(0xad)),
  httpStatus = require(_0x30c167(0xbf)),
  errors = require(_0x30c167(0xb4));
class ApiError extends MongooseError {
  constructor(_0x3b087e, _0x338ffb) {
    const _0x1d8d2d = _0x30c167;
    super(), (this[_0x1d8d2d(0xb2)] = _0x3b087e), (this["message"] = _0x338ffb);
  }
}
const errorHandler = (_0x10a844, _0x2d0ed7, _0x19ce22, _0x35e4f2) => {
    const _0x55ca78 = _0x30c167;
    _0x19ce22[_0x55ca78(0xb9)](_0x10a844[_0x55ca78(0xb2)])[_0x55ca78(0xb8)]({
      status: _0x55ca78(0xac),
      ..._0x10a844,
    });
  },
  errorConverter = (_0x13b2c8, _0x152f99, _0x90fb48, _0x5012d7) => {
    const _0x3d9705 = _0x30c167;
    if (!(_0x13b2c8 instanceof ApiError)) {
      const _0x23eb5c =
          _0x13b2c8[_0x3d9705(0xb2)] || _0x13b2c8 instanceof MongooseError
            ? httpStatus["BAD_REQUEST"]
            : httpStatus[_0x3d9705(0xb3)],
        _0x1e6176 = _0x13b2c8[_0x3d9705(0xb1)]
          ? { en: _0x13b2c8[_0x3d9705(0xb1)], ar: _0x13b2c8[_0x3d9705(0xb1)] }
          : { en: httpStatus[_0x23eb5c], ar: httpStatus[_0x23eb5c] };
      _0x13b2c8 = new ApiError(_0x23eb5c, _0x1e6176);
    }
    _0x5012d7(_0x13b2c8);
  },
  unsupportedRouteHandler = (_0x1fe8b1, _0x2e735c, _0x436730) => {
    const _0x5457a2 = _0x30c167,
      _0x5a3bc2 = httpStatus["BAD_GATEWAY"],
      _0x2651f1 = errors[_0x5457a2(0xae)][_0x5457a2(0xb0)];
    throw new ApiError(_0x5a3bc2, _0x2651f1);
  },
  limitHandler = (_0x3f8c60, _0xa7a800, _0x28011c) => {
    const _0x1b55c8 = _0x30c167,
      _0x5166c3 = httpStatus[_0x1b55c8(0xbd)],
      _0x56e12d = errors[_0x1b55c8(0xae)][_0x1b55c8(0xbc)];
    _0x28011c(new ApiError(_0x5166c3, _0x56e12d));
  };
module[_0x30c167(0xaa)] = {
  ApiError: ApiError,
  errorHandler: errorHandler,
  errorConverter: errorConverter,
  unsupportedRouteHandler: unsupportedRouteHandler,
  limitHandler: limitHandler,
};
function _0xe830() {
  const _0x4c716c = [
    "8948280gTfrBa",
    "exports",
    "22229199MfqUxf",
    "error",
    "mongoose",
    "system",
    "1224183NPhRIh",
    "unsupportedRoute",
    "message",
    "statusCode",
    "INTERNAL_SERVER_ERROR",
    "../config/errors",
    "223318eFCPQQ",
    "16UsfWlu",
    "4349812KfjkVB",
    "json",
    "status",
    "7150241jPpRCy",
    "3788255NzoUCY",
    "largeFile",
    "FORBIDDEN",
    "3NMbItS",
    "http-status",
  ];
  _0xe830 = function () {
    return _0x4c716c;
  };
  return _0xe830();
}
