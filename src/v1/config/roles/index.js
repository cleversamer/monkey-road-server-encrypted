function _0x3383() {
  const _0x38de46 = [
    "./admin",
    "accesscontrol",
    "103448JclVkZ",
    "338KAeUvx",
    "333myYHMF",
    "./office",
    "3378605TfFjZx",
    "4784899PnBbCR",
    "8997tHLexA",
    "4057908eneebz",
    "2057552wJSJBl",
    "161735LbWdEQ",
  ];
  _0x3383 = function () {
    return _0x38de46;
  };
  return _0x3383();
}
function _0x39ca(_0x567ca0, _0x174f62) {
  const _0x3383c1 = _0x3383();
  return (
    (_0x39ca = function (_0x39ca6e, _0x53f9d6) {
      _0x39ca6e = _0x39ca6e - 0x14f;
      let _0x3adc99 = _0x3383c1[_0x39ca6e];
      return _0x3adc99;
    }),
    _0x39ca(_0x567ca0, _0x174f62)
  );
}
const _0x2f8f72 = _0x39ca;
(function (_0x3cb69e, _0x38df29) {
  const _0x4d565c = _0x39ca,
    _0x5c2e11 = _0x3cb69e();
  while (!![]) {
    try {
      const _0x51487d =
        parseInt(_0x4d565c(0x156)) / 0x1 +
        (parseInt(_0x4d565c(0x15a)) / 0x2) *
          (-parseInt(_0x4d565c(0x153)) / 0x3) +
        parseInt(_0x4d565c(0x155)) / 0x4 +
        parseInt(_0x4d565c(0x151)) / 0x5 +
        parseInt(_0x4d565c(0x154)) / 0x6 +
        -parseInt(_0x4d565c(0x152)) / 0x7 +
        (-parseInt(_0x4d565c(0x159)) / 0x8) *
          (parseInt(_0x4d565c(0x14f)) / 0x9);
      if (_0x51487d === _0x38df29) break;
      else _0x5c2e11["push"](_0x5c2e11["shift"]());
    } catch (_0x4d88df) {
      _0x5c2e11["push"](_0x5c2e11["shift"]());
    }
  }
})(_0x3383, 0x57b9f);
const AccessControl = require(_0x2f8f72(0x158)),
  user = require("./user"),
  office = require(_0x2f8f72(0x150)),
  secretary = require("./secretary"),
  admin = require(_0x2f8f72(0x157)),
  roles = new AccessControl({
    user: user,
    office: office,
    secretary: secretary,
    admin: admin,
  });
module["exports"] = roles;
