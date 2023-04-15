const _0x3f3247 = _0x2044;
(function (_0x4104a2, _0x406ef9) {
  const _0x514e47 = _0x2044,
    _0x48e00c = _0x4104a2();
  while (!![]) {
    try {
      const _0x5cbf67 =
        (parseInt(_0x514e47(0x91)) / 0x1) * (-parseInt(_0x514e47(0x9d)) / 0x2) +
        (parseInt(_0x514e47(0x94)) / 0x3) * (-parseInt(_0x514e47(0x86)) / 0x4) +
        (parseInt(_0x514e47(0x7d)) / 0x5) * (parseInt(_0x514e47(0x9b)) / 0x6) +
        -parseInt(_0x514e47(0x9e)) / 0x7 +
        -parseInt(_0x514e47(0x96)) / 0x8 +
        -parseInt(_0x514e47(0x8e)) / 0x9 +
        parseInt(_0x514e47(0x87)) / 0xa;
      if (_0x5cbf67 === _0x406ef9) break;
      else _0x48e00c["push"](_0x48e00c["shift"]());
    } catch (_0x210dbc) {
      _0x48e00c["push"](_0x48e00c["shift"]());
    }
  }
})(_0x3f28, 0x425df);
function _0x2044(_0x10231d, _0x41c962) {
  const _0x3f28c7 = _0x3f28();
  return (
    (_0x2044 = function (_0x204439, _0x313fde) {
      _0x204439 = _0x204439 - 0x7c;
      let _0x400b27 = _0x3f28c7[_0x204439];
      return _0x400b27;
    }),
    _0x2044(_0x10231d, _0x41c962)
  );
}
const { check } = require(_0x3f3247(0x8a)),
  errors = require(_0x3f3247(0x8f)),
  commonMiddleware = require("../common"),
  loginWithEmailValidator = [
    commonMiddleware[_0x3f3247(0x85)],
    commonMiddleware["checkPassword"],
    commonMiddleware[_0x3f3247(0x8b)],
    commonMiddleware["next"],
  ],
  loginWithGoogleValidator = [
    commonMiddleware["checkDeviceToken"],
    commonMiddleware[_0x3f3247(0x9c)],
  ],
  registerWithEmailValidator = [
    commonMiddleware[_0x3f3247(0x82)],
    commonMiddleware[_0x3f3247(0x84)],
    commonMiddleware[_0x3f3247(0x88)],
    commonMiddleware[_0x3f3247(0x89)],
    commonMiddleware[_0x3f3247(0xa0)],
    commonMiddleware[_0x3f3247(0x7f)],
    commonMiddleware["checkDeviceToken"],
    commonMiddleware["next"],
  ],
  registerWithGoogleValidator = [
    commonMiddleware[_0x3f3247(0x82)],
    commonMiddleware[_0x3f3247(0x89)],
    commonMiddleware[_0x3f3247(0xa0)],
    commonMiddleware[_0x3f3247(0x8b)],
    commonMiddleware["next"],
  ],
  changePasswordValidator = [
    commonMiddleware[_0x3f3247(0x92)],
    commonMiddleware[_0x3f3247(0x7e)],
    commonMiddleware[_0x3f3247(0x9c)],
  ],
  forgotPasswordValidator = [
    commonMiddleware[_0x3f3247(0x85)],
    commonMiddleware[_0x3f3247(0x7e)],
    commonMiddleware[_0x3f3247(0x93)],
    commonMiddleware[_0x3f3247(0x9c)],
  ],
  getForgotPasswordCode = [
    (_0x194c5f, _0x7ca506, _0x2ad33a) => {
      const _0x22096e = _0x3f3247;
      (_0x194c5f[_0x22096e(0x80)]["emailOrPhone"] =
        _0x194c5f[_0x22096e(0x80)]?.[_0x22096e(0x99)]?.[_0x22096e(0x83)]()),
        (_0x194c5f[_0x22096e(0x80)][_0x22096e(0x9f)] =
          _0x194c5f[_0x22096e(0x80)]?.[_0x22096e(0x9f)]?.[_0x22096e(0x83)]()),
        (_0x194c5f["query"]["sendTo"] =
          _0x194c5f[_0x22096e(0x80)]?.[_0x22096e(0x8c)]?.[_0x22096e(0x83)]()),
        (_0x194c5f[_0x22096e(0x95)][_0x22096e(0x99)] =
          _0x194c5f[_0x22096e(0x80)][_0x22096e(0x99)]),
        (_0x194c5f[_0x22096e(0x95)]["lang"] =
          _0x194c5f[_0x22096e(0x80)][_0x22096e(0x9f)]),
        (_0x194c5f["body"]["sendTo"] =
          _0x194c5f[_0x22096e(0x80)][_0x22096e(0x8c)]),
        _0x2ad33a();
    },
    commonMiddleware[_0x3f3247(0x85)],
    commonMiddleware[_0x3f3247(0x82)],
    check(_0x3f3247(0x8c))
      [_0x3f3247(0x90)]([_0x3f3247(0x8d), _0x3f3247(0x7c)])
      [_0x3f3247(0x97)](errors[_0x3f3247(0x9a)][_0x3f3247(0x81)]),
    commonMiddleware[_0x3f3247(0x9c)],
  ],
  emailValidator = [
    commonMiddleware["checkEmail"],
    commonMiddleware[_0x3f3247(0x9c)],
  ],
  codeValidator = [
    commonMiddleware[_0x3f3247(0x93)],
    commonMiddleware[_0x3f3247(0x9c)],
  ];
module[_0x3f3247(0x98)] = {
  loginWithEmailValidator: loginWithEmailValidator,
  loginWithGoogleValidator: loginWithGoogleValidator,
  registerWithEmailValidator: registerWithEmailValidator,
  registerWithGoogleValidator: registerWithGoogleValidator,
  changePasswordValidator: changePasswordValidator,
  forgotPasswordValidator: forgotPasswordValidator,
  emailValidator: emailValidator,
  getForgotPasswordCode: getForgotPasswordCode,
  codeValidator: codeValidator,
};
function _0x3f28() {
  const _0x248711 = [
    "query",
    "unsupportedReceiverType",
    "checkLanguage",
    "toLowerCase",
    "checkName",
    "checkEmailOrPhone",
    "627796VzfRYl",
    "11546640YCRgYQ",
    "checkEmail",
    "checkPhoneICC",
    "express-validator",
    "checkDeviceToken",
    "sendTo",
    "email",
    "1571931qNGBKU",
    "../../../config/errors",
    "isIn",
    "5IQgZzO",
    "checkOldPassword",
    "checkCode",
    "9zRryCt",
    "body",
    "579928rhSJHs",
    "withMessage",
    "exports",
    "emailOrPhone",
    "user",
    "5418KIAxPD",
    "next",
    "40914AjQOaS",
    "836024MDsVqx",
    "lang",
    "checkPhoneNSN",
    "phone",
    "315btybeQ",
    "checkNewPassword",
    "checkPassword",
  ];
  _0x3f28 = function () {
    return _0x248711;
  };
  return _0x3f28();
}
