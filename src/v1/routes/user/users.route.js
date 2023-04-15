const _0x38d822 = _0xf78e;
function _0xf78e(_0xd77381, _0x104ca6) {
  const _0x5342c7 = _0x5342();
  return (
    (_0xf78e = function (_0xf78ed3, _0x872872) {
      _0xf78ed3 = _0xf78ed3 - 0x6e;
      let _0x53a4f4 = _0x5342c7[_0xf78ed3];
      return _0x53a4f4;
    }),
    _0xf78e(_0xd77381, _0x104ca6)
  );
}
(function (_0x59d0d7, _0x112e8c) {
  const _0xfe429a = _0xf78e,
    _0x3a1ede = _0x59d0d7();
  while (!![]) {
    try {
      const _0x2ca750 =
        parseInt(_0xfe429a(0x9a)) / 0x1 +
        (-parseInt(_0xfe429a(0x7f)) / 0x2) *
          (-parseInt(_0xfe429a(0xb5)) / 0x3) +
        -parseInt(_0xfe429a(0x7c)) / 0x4 +
        (parseInt(_0xfe429a(0x86)) / 0x5) * (parseInt(_0xfe429a(0x85)) / 0x6) +
        (-parseInt(_0xfe429a(0xaf)) / 0x7) * (parseInt(_0xfe429a(0xa1)) / 0x8) +
        (-parseInt(_0xfe429a(0x73)) / 0x9) * (parseInt(_0xfe429a(0x88)) / 0xa) +
        parseInt(_0xfe429a(0x75)) / 0xb;
      if (_0x2ca750 === _0x112e8c) break;
      else _0x3a1ede["push"](_0x3a1ede["shift"]());
    } catch (_0x3f7935) {
      _0x3a1ede["push"](_0x3a1ede["shift"]());
    }
  }
})(_0x5342, 0x5c2e5);
function _0x5342() {
  const _0x255100 = [
    "../../middleware/validation",
    "isAuth",
    "deleteOwn",
    "route",
    "validateVerifyUser",
    "/admin/profile/find",
    "/admin/profile/verify",
    "2010dRNwPJ",
    "/password/forgot",
    "/admin/cars/status",
    "addToFavoritesValidator",
    "password",
    "/admin/office/:userId/deliver-payment",
    "/isauth",
    "2982856DrAFnN",
    "readAny",
    "sendForgotPasswordCode",
    "updateUserProfile",
    "delete",
    "updateProfile",
    "sendNotificationValidator",
    "car",
    "deleteFromFavoritesValidator",
    "deliverPaymentToOffice",
    "createOwn",
    "updateOwn",
    "validateUpdateUserProfile",
    "switchLanguage",
    "7StmOQb",
    "findUserByEmailOrPhone",
    "notification",
    "sendNotification",
    "favorites",
    "readOwn",
    "6yUIGlA",
    "../../controllers",
    "updateAny",
    "express",
    "post",
    "user",
    "/favorites/add",
    "/notifications/clear",
    "../../middleware/auth",
    "getForgotPasswordCode",
    "addToFavorites",
    "getMyFavoritesValidator",
    "9gqUIGm",
    "exportUsersToExcel",
    "13644620UDSXMh",
    "clearNotifications",
    "codeValidator",
    "/export",
    "/language/switch",
    "emailVerificationCode",
    "patch",
    "1362464TwZsrm",
    "deliverPaymentToOfficeValidator",
    "resendEmailOrPhoneVerificationCode",
    "95402usnlLA",
    "/verify/email",
    "changePassword",
    "validateUpdateProfile",
    "exports",
    "validateFindUserByEmailOrPhone",
    "917754Tbtziu",
    "15PrpzyX",
    "/password/change",
    "7056630KeQMeF",
    "seeNotifications",
    "email",
    "phoneVerificationCode",
    "get",
    "/admin/profile/update",
    "verifyEmailOrPhone",
    "/notifications/see",
    "phone",
    "/profile/update",
    "/favorites/delete",
  ];
  _0x5342 = function () {
    return _0x255100;
  };
  return _0x5342();
}
const router = require(_0x38d822(0xb8))["Router"](),
  { usersController } = require(_0x38d822(0xb6)),
  { authValidator, userValidator } = require(_0x38d822(0x93)),
  auth = require(_0x38d822(0x6f));
router["get"](
  _0x38d822(0xa0),
  auth(_0x38d822(0xb4), _0x38d822(0xba), !![]),
  usersController[_0x38d822(0x94)]
),
  router[_0x38d822(0x96)](_0x38d822(0x80))
    [_0x38d822(0x8c)](
      auth(_0x38d822(0xb4), "emailVerificationCode", !![]),
      usersController["resendEmailOrPhoneVerificationCode"](_0x38d822(0x8a))
    )
    ["post"](
      authValidator[_0x38d822(0x77)],
      auth(_0x38d822(0xac), _0x38d822(0x7a), !![]),
      usersController[_0x38d822(0x8e)](_0x38d822(0x8a))
    ),
  router[_0x38d822(0x96)]("/verify/phone")
    [_0x38d822(0x8c)](
      auth("readOwn", _0x38d822(0x8b), !![]),
      usersController[_0x38d822(0x7e)](_0x38d822(0x90))
    )
    ["post"](
      authValidator[_0x38d822(0x77)],
      auth(_0x38d822(0xac), _0x38d822(0x8b), !![]),
      usersController[_0x38d822(0x8e)](_0x38d822(0x90))
    ),
  router[_0x38d822(0x96)](_0x38d822(0x9b))
    [_0x38d822(0x8c)](
      authValidator[_0x38d822(0x70)],
      usersController[_0x38d822(0xa3)]
    )
    [_0x38d822(0xb9)](
      authValidator["forgotPasswordValidator"],
      usersController["handleForgotPassword"]
    ),
  router[_0x38d822(0x7b)](
    _0x38d822(0x87),
    authValidator["changePasswordValidator"],
    auth(_0x38d822(0xac), _0x38d822(0x9e)),
    usersController[_0x38d822(0x81)]
  ),
  router[_0x38d822(0x7b)](
    _0x38d822(0x91),
    userValidator[_0x38d822(0x82)],
    auth(_0x38d822(0xac), "user"),
    usersController[_0x38d822(0xa6)]
  ),
  router[_0x38d822(0x7b)](
    _0x38d822(0x79),
    auth("updateOwn", _0x38d822(0xba)),
    usersController[_0x38d822(0xae)]
  ),
  router[_0x38d822(0x8c)](
    _0x38d822(0x8f),
    auth(_0x38d822(0xb4), "notification", !![]),
    usersController[_0x38d822(0x89)]
  ),
  router[_0x38d822(0xa5)](
    _0x38d822(0x6e),
    auth(_0x38d822(0x95), _0x38d822(0xb1)),
    usersController[_0x38d822(0x76)]
  ),
  router[_0x38d822(0xb9)](
    _0x38d822(0xbb),
    userValidator[_0x38d822(0x9d)],
    auth(_0x38d822(0xab), _0x38d822(0xb3)),
    usersController[_0x38d822(0x71)]
  ),
  router[_0x38d822(0x8c)](
    "/favorites/my",
    userValidator[_0x38d822(0x72)],
    auth(_0x38d822(0xb4), _0x38d822(0xb3)),
    usersController["getMyFavorites"]
  ),
  router[_0x38d822(0xa5)](
    _0x38d822(0x92),
    userValidator[_0x38d822(0xa9)],
    auth("deleteOwn", _0x38d822(0xb3)),
    usersController["deleteFromFavorites"]
  ),
  router[_0x38d822(0xa5)](
    "/delete",
    auth(_0x38d822(0x95), _0x38d822(0xba)),
    usersController["deleteMyAccount"]
  ),
  router[_0x38d822(0x7b)](
    _0x38d822(0x8d),
    userValidator[_0x38d822(0xad)],
    auth(_0x38d822(0xb7), "user"),
    usersController[_0x38d822(0xa4)]
  ),
  router[_0x38d822(0x7b)](
    "/admin/profile/update-role",
    userValidator["validateUpdateUserRole"],
    auth(_0x38d822(0xb7), _0x38d822(0xba)),
    usersController["changeUserRole"]
  ),
  router["get"](
    _0x38d822(0x98),
    userValidator[_0x38d822(0x84)],
    auth(_0x38d822(0xa2), _0x38d822(0xba)),
    usersController[_0x38d822(0xb0)]
  ),
  router[_0x38d822(0x7b)](
    _0x38d822(0x99),
    userValidator[_0x38d822(0x97)],
    auth("updateAny", _0x38d822(0xba)),
    usersController["verifyUser"]
  ),
  router["post"](
    "/admin/notification/send",
    userValidator[_0x38d822(0xa7)],
    auth("createAny", _0x38d822(0xb1)),
    usersController[_0x38d822(0xb2)]
  ),
  router[_0x38d822(0x8c)](
    _0x38d822(0x9c),
    auth("readAny", _0x38d822(0xa8)),
    usersController["getCarsStatus"]
  ),
  router[_0x38d822(0x8c)](
    _0x38d822(0x78),
    auth(_0x38d822(0xa2), "user"),
    usersController[_0x38d822(0x74)]
  ),
  router[_0x38d822(0xb9)](
    _0x38d822(0x9f),
    userValidator[_0x38d822(0x7d)],
    auth(_0x38d822(0xb7), _0x38d822(0xba)),
    usersController[_0x38d822(0xaa)]
  ),
  (module[_0x38d822(0x83)] = router);
