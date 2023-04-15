const _0x33fb8c = _0x45d2;
(function (_0x298728, _0xbf2ddc) {
  const _0x279a1d = _0x45d2,
    _0x44042a = _0x298728();
  while (!![]) {
    try {
      const _0x206ba4 =
        (parseInt(_0x279a1d(0xf0)) / 0x1) * (parseInt(_0x279a1d(0xea)) / 0x2) +
        -parseInt(_0x279a1d(0xe6)) / 0x3 +
        (parseInt(_0x279a1d(0xdc)) / 0x4) * (-parseInt(_0x279a1d(0xe2)) / 0x5) +
        -parseInt(_0x279a1d(0xee)) / 0x6 +
        (parseInt(_0x279a1d(0xef)) / 0x7) * (parseInt(_0x279a1d(0xdb)) / 0x8) +
        parseInt(_0x279a1d(0xe8)) / 0x9 +
        parseInt(_0x279a1d(0xde)) / 0xa;
      if (_0x206ba4 === _0xbf2ddc) break;
      else _0x44042a["push"](_0x44042a["shift"]());
    } catch (_0x4cc8c9) {
      _0x44042a["push"](_0x44042a["shift"]());
    }
  }
})(_0x1443, 0xac53e);
const fs = require("fs"),
  crypto = require(_0x33fb8c(0xe4)),
  httpStatus = require(_0x33fb8c(0xe5)),
  { ApiError } = require(_0x33fb8c(0xf2)),
  errors = require(_0x33fb8c(0xf4));
function _0x45d2(_0x46f901, _0x19c2c0) {
  const _0x1443b3 = _0x1443();
  return (
    (_0x45d2 = function (_0x45d2e0, _0x554978) {
      _0x45d2e0 = _0x45d2e0 - 0xd7;
      let _0x1c634d = _0x1443b3[_0x45d2e0];
      return _0x1c634d;
    }),
    _0x45d2(_0x46f901, _0x19c2c0)
  );
}
function _0x1443() {
  const _0x125cb6 = [
    "randomUUID",
    "utf8",
    "system",
    "120fVlvem",
    "exports",
    "crypto",
    "http-status",
    "395127jmQAdq",
    "toLocaleString",
    "5460120pkbsXx",
    "fileUploadError",
    "2aboqoC",
    "./uploads",
    "slice",
    "unlink",
    "255462QgeVQm",
    "567VEgZic",
    "226581QETTtu",
    "split",
    "../../middleware/apiError",
    "BAD_REQUEST",
    "../../config/errors",
    "from",
    "data",
    "join",
    "name",
    "1208xJbpFq",
    "84956NLolRp",
    "deleteFile",
    "5443840fKsYrT",
  ];
  _0x1443 = function () {
    return _0x125cb6;
  };
  return _0x1443();
}
(module[_0x33fb8c(0xe3)]["storeFile"] = async (_0x590412, _0x48d3aa = "") => {
  const _0xca9fc9 = _0x33fb8c;
  try {
    const _0xd7318f = Buffer[_0xca9fc9(0xd7)](
        _0x590412[_0xca9fc9(0xd8)],
        "base64"
      ),
      _0x1801f1 = _0x48d3aa
        ? _0x48d3aa + "_" + getCurrentDate()
        : crypto[_0xca9fc9(0xdf)](),
      _0x323d30 = _0x590412["name"]["split"]("."),
      _0xe6aa72 = _0x323d30[_0x323d30["length"] - 0x1],
      _0x2b7cad = _0x1801f1 + "." + _0xe6aa72,
      _0x7c4d79 = "/" + _0x2b7cad;
    return (
      fs["writeFileSync"](
        _0xca9fc9(0xeb) + _0x7c4d79,
        _0xd7318f,
        _0xca9fc9(0xe0)
      ),
      {
        originalName: _0x590412[_0xca9fc9(0xda)],
        name: _0x2b7cad,
        path: _0x7c4d79,
      }
    );
  } catch (_0xe06b00) {
    const _0x5156e7 = httpStatus[_0xca9fc9(0xf3)],
      _0xbddd66 = errors[_0xca9fc9(0xe1)][_0xca9fc9(0xe9)];
    throw new ApiError(_0x5156e7, _0xbddd66);
  }
}),
  (module[_0x33fb8c(0xe3)][_0x33fb8c(0xdd)] = async (_0x68ebcb) => {
    const _0xce70f3 = _0x33fb8c;
    try {
      return (
        fs[_0xce70f3(0xed)](_0xce70f3(0xeb) + _0x68ebcb, (_0x56fc10) => {}),
        !![]
      );
    } catch (_0x4f198f) {
      if (!(_0x4f198f instanceof ApiError)) {
        const _0x47fdc3 = httpStatus[_0xce70f3(0xf3)],
          _0x43d7a9 = errors[_0xce70f3(0xe1)]["fileUploadError"];
        _0x4f198f = new ApiError(_0x47fdc3, _0x43d7a9);
      }
      throw _0x4f198f;
    }
  });
const getCurrentDate = () => {
  const _0x2a7483 = _0x33fb8c;
  let _0x2af1f3 = new Date()[_0x2a7483(0xe7)]();
  _0x2af1f3 = _0x2af1f3[_0x2a7483(0xf1)](",\x20");
  let _0x3819f6 = _0x2af1f3[0x0],
    _0x3d90de = _0x2af1f3[0x1][_0x2a7483(0xf1)]("\x20"),
    _0x38628e = _0x3d90de[0x0]
      [_0x2a7483(0xf1)](":")
      [_0x2a7483(0xec)](0x0, 0x2)
      [_0x2a7483(0xd9)](":"),
    _0x587372 = _0x3d90de[0x1];
  return _0x3819f6 + "_" + _0x38628e + "_" + _0x587372;
};
