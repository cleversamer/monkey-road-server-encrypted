function _0x2164(_0x1d2785, _0x4a4285) {
  const _0x23dd7c = _0x23dd();
  return (
    (_0x2164 = function (_0x216496, _0x84903c) {
      _0x216496 = _0x216496 - 0xd0;
      let _0x135f88 = _0x23dd7c[_0x216496];
      return _0x135f88;
    }),
    _0x2164(_0x1d2785, _0x4a4285)
  );
}
function _0x23dd() {
  const _0x3d24cf = [
    "1459160QQeRgR",
    "next",
    "91498nZENSC",
    "32374800HgHoBB",
    "1772722giJscT",
    "checkLimit",
    "phoneICC",
    "avatar",
    "checkPaymentDeliveryAmount",
    "checkFile",
    "phoneNSN",
    "name",
    "jpg",
    "634806YhjBVO",
    "conditionalCheck",
    "142550KDbGvl",
    "png",
    "354EMcqlG",
    "24744wMpxaf",
    "checkName",
    "exports",
    "243SLqOnT",
    "20oNIMGB",
    "checkUserId",
    "7BLbfJr",
    "checkNotificationTitleEN",
    "checkEmail",
    "email",
    "checkRole",
    "checkEmailOrPhone",
    "putQueryParamsInBody",
    "jpeg",
    "checkPhoneNSN",
    "checkPhoneICC",
    "1cvyoCM",
  ];
  _0x23dd = function () {
    return _0x3d24cf;
  };
  return _0x23dd();
}
const _0x2fb22f = _0x2164;
(function (_0x20f5fe, _0x3b3e4f) {
  const _0x30a524 = _0x2164,
    _0x1ff595 = _0x20f5fe();
  while (!![]) {
    try {
      const _0x337715 =
        (parseInt(_0x30a524(0xda)) / 0x1) * (-parseInt(_0x30a524(0xdf)) / 0x2) +
        (parseInt(_0x30a524(0xec)) / 0x3) * (-parseInt(_0x30a524(0xed)) / 0x4) +
        (-parseInt(_0x30a524(0xf1)) / 0x5) * (parseInt(_0x30a524(0xe8)) / 0x6) +
        (parseInt(_0x30a524(0xd0)) / 0x7) * (parseInt(_0x30a524(0xdb)) / 0x8) +
        (-parseInt(_0x30a524(0xf0)) / 0x9) * (parseInt(_0x30a524(0xea)) / 0xa) +
        parseInt(_0x30a524(0xdd)) / 0xb +
        parseInt(_0x30a524(0xde)) / 0xc;
      if (_0x337715 === _0x3b3e4f) break;
      else _0x1ff595["push"](_0x1ff595["shift"]());
    } catch (_0x4edbf4) {
      _0x1ff595["push"](_0x1ff595["shift"]());
    }
  }
})(_0x23dd, 0x71557);
const commonMiddleware = require("../common"),
  validateUpdateProfile = [
    commonMiddleware[_0x2fb22f(0xe9)](
      _0x2fb22f(0xe6),
      commonMiddleware[_0x2fb22f(0xee)]
    ),
    commonMiddleware[_0x2fb22f(0xe4)](
      _0x2fb22f(0xe2),
      [_0x2fb22f(0xeb), _0x2fb22f(0xe7), _0x2fb22f(0xd7)],
      ![]
    ),
    commonMiddleware[_0x2fb22f(0xe9)](
      _0x2fb22f(0xd3),
      commonMiddleware[_0x2fb22f(0xd2)]
    ),
    commonMiddleware[_0x2fb22f(0xe9)](
      _0x2fb22f(0xe1),
      commonMiddleware[_0x2fb22f(0xd9)]
    ),
    commonMiddleware[_0x2fb22f(0xe9)](
      _0x2fb22f(0xe5),
      commonMiddleware[_0x2fb22f(0xd8)]
    ),
    commonMiddleware["next"],
  ],
  validateUpdateUserProfile = [
    commonMiddleware[_0x2fb22f(0xd5)],
    ...validateUpdateProfile,
  ],
  validateUpdateUserRole = [
    commonMiddleware["checkEmailOrPhone"],
    commonMiddleware["checkRole"](!![]),
    commonMiddleware[_0x2fb22f(0xdc)],
  ],
  validateVerifyUser = [
    commonMiddleware["checkEmailOrPhone"],
    commonMiddleware["next"],
  ],
  sendNotificationValidator = [
    commonMiddleware["checkUserIds"],
    commonMiddleware[_0x2fb22f(0xd1)],
    commonMiddleware["checkNotificationTitleAR"],
    commonMiddleware["checkNotificationBodyEN"],
    commonMiddleware["checkNotificationBodyAR"],
    commonMiddleware[_0x2fb22f(0xdc)],
  ],
  validateFindUserByEmailOrPhone = [
    commonMiddleware[_0x2fb22f(0xd6)],
    commonMiddleware[_0x2fb22f(0xd5)],
    commonMiddleware[_0x2fb22f(0xd4)](!![]),
    commonMiddleware[_0x2fb22f(0xdc)],
  ],
  addToFavoritesValidator = [
    commonMiddleware["checkPurchaseCarId"],
    commonMiddleware[_0x2fb22f(0xdc)],
  ],
  getMyFavoritesValidator = [
    commonMiddleware[_0x2fb22f(0xd6)],
    commonMiddleware["checkPage"],
    commonMiddleware[_0x2fb22f(0xe0)],
    commonMiddleware["next"],
  ],
  deleteFromFavoritesValidator = [
    commonMiddleware[_0x2fb22f(0xd6)],
    commonMiddleware["checkPurchaseCarId"],
    commonMiddleware["next"],
  ],
  deliverPaymentToOfficeValidator = [
    commonMiddleware["putQueryParamsInBody"],
    commonMiddleware[_0x2fb22f(0xf2)],
    commonMiddleware[_0x2fb22f(0xe3)],
    commonMiddleware["next"],
  ];
module[_0x2fb22f(0xef)] = {
  validateUpdateProfile: validateUpdateProfile,
  validateUpdateUserProfile: validateUpdateUserProfile,
  validateUpdateUserRole: validateUpdateUserRole,
  validateVerifyUser: validateVerifyUser,
  sendNotificationValidator: sendNotificationValidator,
  validateFindUserByEmailOrPhone: validateFindUserByEmailOrPhone,
  addToFavoritesValidator: addToFavoritesValidator,
  getMyFavoritesValidator: getMyFavoritesValidator,
  deleteFromFavoritesValidator: deleteFromFavoritesValidator,
  deliverPaymentToOfficeValidator: deliverPaymentToOfficeValidator,
};
