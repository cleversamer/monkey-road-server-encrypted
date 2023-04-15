function _0x1ce5(_0x20ce85, _0xde0d96) {
  const _0x1ef8b7 = _0x1ef8();
  return (
    (_0x1ce5 = function (_0x1ce5be, _0x461041) {
      _0x1ce5be = _0x1ce5be - 0x113;
      let _0x3a4728 = _0x1ef8b7[_0x1ce5be];
      return _0x3a4728;
    }),
    _0x1ce5(_0x20ce85, _0xde0d96)
  );
}
const _0x5d15f7 = _0x1ce5;
function _0x1ef8() {
  const _0x3abb78 = [
    "resetPasswordWithCode",
    "user",
    "pick",
    "paymentDeliveredForAdmin",
    "phone",
    "../../config/notifications",
    "verifyEmailOrPhone",
    "changePassword",
    "sendNotification",
    "files",
    "clearNotifications",
    "sendNotificationToAdmins",
    "startsWith",
    "paymentDeliveredToOffice",
    "changes",
    "paymentDeliveredForOffice",
    "deliverPaymentToOffice",
    "CREATED",
    "findUserByEmailOrPhone",
    "http-status",
    "sendForgotPasswordCode",
    "updateUserProfile",
    "getCarsStatus",
    "sort",
    "952343oDUisM",
    "body",
    "email",
    "updateProfile",
    "../../config/success",
    "resendEmailOrPhoneVerificationCode",
    "params",
    "isAuth",
    "includes",
    "passwordResetCodeSentToPhone",
    "json",
    "1150BRQiKk",
    "../../models/user/user.model",
    "_id",
    "2533296bSPDzd",
    "changeUserRole",
    "find",
    "3719880OitltW",
    "status",
    "query",
    "handleForgotPassword",
    "save",
    "avatar",
    "seeNotifications",
    "auth",
    "exportUsersToExcel",
    "5319237NSDesT",
    "../../models/car/purchaseCar.model",
    "verifyUser",
    "deleteFromFavorites",
    "83097OHhJvV",
    "exports",
    "trim",
    "addPaymentCard",
    "400410cKcuhQ",
    "getMyFavorites",
    "newUser",
    "file/xlsx",
    "268190DQcJUM",
    "genAuthToken",
    "deleteMyAccount",
    "55CAuayH",
    "21VYzzni",
  ];
  _0x1ef8 = function () {
    return _0x3abb78;
  };
  return _0x1ef8();
}
(function (_0x516ac5, _0x3106a9) {
  const _0x1ee302 = _0x1ce5,
    _0x497e6b = _0x516ac5();
  while (!![]) {
    try {
      const _0x5dfd19 =
        -parseInt(_0x1ee302(0x144)) / 0x1 +
        (-parseInt(_0x1ee302(0x127)) / 0x2) *
          (parseInt(_0x1ee302(0x12b)) / 0x3) +
        -parseInt(_0x1ee302(0x152)) / 0x4 +
        (-parseInt(_0x1ee302(0x12a)) / 0x5) *
          (-parseInt(_0x1ee302(0x123)) / 0x6) +
        parseInt(_0x1ee302(0x11b)) / 0x7 +
        parseInt(_0x1ee302(0x155)) / 0x8 +
        (parseInt(_0x1ee302(0x11f)) / 0x9) * (parseInt(_0x1ee302(0x14f)) / 0xa);
      if (_0x5dfd19 === _0x3106a9) break;
      else _0x497e6b["push"](_0x497e6b["shift"]());
    } catch (_0x2286a1) {
      _0x497e6b["push"](_0x497e6b["shift"]());
    }
  }
})(_0x1ef8, 0x79328);
const httpStatus = require(_0x5d15f7(0x13f)),
  _ = require("lodash"),
  { User, CLIENT_SCHEMA: userSchema } = require(_0x5d15f7(0x150)),
  { CLIENT_SCHEMA: purchaseCarSchema } = require(_0x5d15f7(0x11c)),
  {
    usersService,
    excelService,
    purchaseCarsService,
  } = require("../../services"),
  success = require(_0x5d15f7(0x148)),
  { Notification, user } = require(_0x5d15f7(0x131));
(module["exports"][_0x5d15f7(0x14b)] = async (
  _0x146045,
  _0x25da9d,
  _0x392497
) => {
  const _0x598353 = _0x5d15f7;
  try {
    _0x146045[_0x598353(0x12d)]["updateLastLogin"]();
    const _0xc085ba = await _0x146045["user"][_0x598353(0x116)]();
    _0x25da9d[_0x598353(0x113)](httpStatus["OK"])[_0x598353(0x14e)](
      _[_0x598353(0x12e)](_0xc085ba, userSchema)
    );
  } catch (_0x10fd1b) {
    _0x392497(_0x10fd1b);
  }
}),
  (module[_0x5d15f7(0x120)]["verifyEmailOrPhone"] =
    (_0x1cb63c) => async (_0x326642, _0x571039, _0x59e989) => {
      const _0x19ac2d = _0x5d15f7;
      try {
        const _0x4ac82a = _0x326642[_0x19ac2d(0x12d)],
          { code: _0x5ebac0 } = _0x326642[_0x19ac2d(0x145)],
          _0x3c0f04 = await usersService[_0x19ac2d(0x132)](
            _0x1cb63c,
            _0x4ac82a,
            _0x5ebac0
          );
        _0x571039["status"](httpStatus["OK"])[_0x19ac2d(0x14e)](
          _[_0x19ac2d(0x12e)](_0x3c0f04, userSchema)
        );
      } catch (_0x58ed0b) {
        _0x59e989(_0x58ed0b);
      }
    }),
  (module[_0x5d15f7(0x120)][_0x5d15f7(0x149)] =
    (_0x3d79f7) => async (_0x55f559, _0x307deb, _0x4e031e) => {
      const _0x16501e = _0x5d15f7;
      try {
        const _0x215ad5 = _0x55f559[_0x16501e(0x12d)];
        await usersService[_0x16501e(0x149)](_0x3d79f7, _0x215ad5);
        const _0x2d7580 = {
          ok: !![],
          message:
            success[_0x16501e(0x119)][_0x3d79f7 + "VerificationCodeSent"],
        };
        _0x307deb[_0x16501e(0x113)](httpStatus["OK"])[_0x16501e(0x14e)](
          _0x2d7580
        );
      } catch (_0x187f75) {
        _0x4e031e(_0x187f75);
      }
    }),
  (module[_0x5d15f7(0x120)][_0x5d15f7(0x133)] = async (
    _0x1af00e,
    _0x9b3ffc,
    _0x550236
  ) => {
    const _0x1f9e13 = _0x5d15f7;
    try {
      const _0x1965da = _0x1af00e["user"],
        { oldPassword: _0x2d8d0e, newPassword: _0x45fefc } =
          _0x1af00e[_0x1f9e13(0x145)];
      await usersService["changePassword"](_0x1965da, _0x2d8d0e, _0x45fefc);
      const _0x42b0b5 = {
        user: _[_0x1f9e13(0x12e)](_0x1965da, userSchema),
        token: _0x1965da["genAuthToken"](),
      };
      _0x9b3ffc[_0x1f9e13(0x113)](httpStatus[_0x1f9e13(0x13d)])[
        _0x1f9e13(0x14e)
      ](_0x42b0b5);
    } catch (_0x59c893) {
      _0x550236(_0x59c893);
    }
  }),
  (module["exports"][_0x5d15f7(0x140)] = async (
    _0x57cbeb,
    _0xf99255,
    _0x13105e
  ) => {
    const _0x1f2818 = _0x5d15f7;
    try {
      let {
        emailOrPhone: _0x31fc64,
        sendTo: _0x18e13b,
        lang: _0x267a60,
      } = _0x57cbeb["query"];
      !_0x31fc64[_0x1f2818(0x14c)]("@") &&
        (_0x31fc64 = "+" + _0x31fc64[_0x1f2818(0x121)]());
      await usersService[_0x1f2818(0x140)](_0x31fc64, _0x18e13b, _0x267a60);
      const _0x309f9f = {
        ok: !![],
        message:
          _0x18e13b === _0x1f2818(0x130)
            ? success[_0x1f2818(0x119)][_0x1f2818(0x14d)]
            : success[_0x1f2818(0x119)]["passwordResetCodeSentToEmail"],
      };
      _0xf99255[_0x1f2818(0x113)](httpStatus["OK"])[_0x1f2818(0x14e)](
        _0x309f9f
      );
    } catch (_0x307a9f) {
      _0x13105e(_0x307a9f);
    }
  }),
  (module[_0x5d15f7(0x120)][_0x5d15f7(0x115)] = async (
    _0x1d28b9,
    _0x3b61f0,
    _0x54f10b
  ) => {
    const _0x304a68 = _0x5d15f7;
    try {
      const {
          emailOrPhone: _0x3f81b4,
          code: _0x568680,
          newPassword: _0x5ca34c,
        } = _0x1d28b9[_0x304a68(0x145)],
        _0x458134 = await usersService[_0x304a68(0x12c)](
          _0x3f81b4,
          _0x568680,
          _0x5ca34c
        ),
        _0x39b9c2 = {
          user: _[_0x304a68(0x12e)](_0x458134, userSchema),
          token: _0x458134[_0x304a68(0x128)](),
        };
      _0x3b61f0[_0x304a68(0x113)](httpStatus["OK"])[_0x304a68(0x14e)](
        _0x39b9c2
      );
    } catch (_0x17e0d9) {
      _0x54f10b(_0x17e0d9);
    }
  }),
  (module[_0x5d15f7(0x120)][_0x5d15f7(0x147)] = async (
    _0x3dd45e,
    _0xe6ff4f,
    _0x41bd3c
  ) => {
    const _0x4020e2 = _0x5d15f7;
    try {
      const _0x4ab733 = _0x3dd45e["user"],
        {
          name: _0x224210,
          email: _0x10e054,
          phoneICC: _0x2c7fd3,
          phoneNSN: _0x3e2eab,
        } = _0x3dd45e[_0x4020e2(0x145)],
        _0x1f2483 = _0x3dd45e?.[_0x4020e2(0x135)]?.[_0x4020e2(0x117)] || null,
        _0x1be5b4 = await usersService["updateProfile"](
          _0x4ab733,
          _0x224210,
          _0x10e054,
          _0x2c7fd3,
          _0x3e2eab,
          _0x1f2483
        ),
        _0x274ee3 = {
          user: _["pick"](_0x1be5b4[_0x4020e2(0x125)], userSchema),
          changes: _0x1be5b4[_0x4020e2(0x13a)],
          token: _0x1be5b4[_0x4020e2(0x125)][_0x4020e2(0x128)](),
        };
      _0xe6ff4f[_0x4020e2(0x113)](httpStatus["CREATED"])[_0x4020e2(0x14e)](
        _0x274ee3
      );
    } catch (_0x560a38) {
      _0x41bd3c(_0x560a38);
    }
  }),
  (module[_0x5d15f7(0x120)]["switchLanguage"] = async (
    _0x368097,
    _0x1ba13a,
    _0x62bafd
  ) => {
    const _0x4dcd21 = _0x5d15f7;
    try {
      const _0x5e9f3e = _0x368097[_0x4dcd21(0x12d)],
        _0x2e0767 = await usersService["switchLanguage"](_0x5e9f3e),
        _0xf2d679 = _[_0x4dcd21(0x12e)](_0x2e0767, userSchema);
      _0x1ba13a[_0x4dcd21(0x113)](httpStatus["OK"])[_0x4dcd21(0x14e)](
        _0xf2d679
      );
    } catch (_0x387dce) {
      _0x62bafd(_0x387dce);
    }
  }),
  (module[_0x5d15f7(0x120)][_0x5d15f7(0x134)] = async (
    _0x5974bc,
    _0x2575a6,
    _0x4ce1c3
  ) => {
    const _0x13dc45 = _0x5d15f7;
    try {
      const {
          userIds: _0x2b999c,
          titleEN: _0x2e946c,
          titleAR: _0x4b1ab2,
          bodyEN: _0x3f698f,
          bodyAR: _0x381ecc,
        } = _0x5974bc[_0x13dc45(0x145)],
        _0x8b7da7 = new Notification(
          _0x2e946c,
          _0x4b1ab2,
          _0x3f698f,
          _0x381ecc
        );
      await usersService["sendNotification"](_0x2b999c, _0x8b7da7),
        _0x2575a6[_0x13dc45(0x113)](httpStatus["OK"])[_0x13dc45(0x14e)](
          _0x8b7da7
        );
    } catch (_0x1961d8) {
      _0x4ce1c3(_0x1961d8);
    }
  }),
  (module["exports"][_0x5d15f7(0x118)] = async (
    _0x43c5c5,
    _0x6fc150,
    _0xba3a63
  ) => {
    const _0x48e49b = _0x5d15f7;
    try {
      const _0x1a4a91 = _0x43c5c5["user"],
        _0x21ff83 = await usersService[_0x48e49b(0x118)](_0x1a4a91);
      _0x6fc150["status"](httpStatus["OK"])[_0x48e49b(0x14e)]({
        notifications: _0x21ff83,
      });
    } catch (_0x1dd00c) {
      _0xba3a63(_0x1dd00c);
    }
  }),
  (module[_0x5d15f7(0x120)][_0x5d15f7(0x136)] = async (
    _0x2821c6,
    _0x2d78fa,
    _0x5f5b1f
  ) => {
    const _0x29c163 = _0x5d15f7;
    try {
      const _0x14577d = _0x2821c6[_0x29c163(0x12d)],
        _0x2a337b = await usersService[_0x29c163(0x136)](_0x14577d);
      _0x2d78fa["status"](httpStatus[_0x29c163(0x13d)])[_0x29c163(0x14e)]({
        notifications: _0x2a337b,
      });
    } catch (_0x247f32) {
      _0x5f5b1f(_0x247f32);
    }
  }),
  (module[_0x5d15f7(0x120)][_0x5d15f7(0x122)] = async (
    _0x58aa06,
    _0x2dd63f,
    _0x2a4008
  ) => {
    const _0x254e95 = _0x5d15f7;
    try {
      const _0x5c6c1c = _0x58aa06[_0x254e95(0x12d)],
        {
          type: _0x28478a,
          postalCode: _0x220800,
          visaNameOnCard: _0xb25578,
          visaCardNumber: _0x3cb33d,
          visaCVC: _0x556299,
          visaExpiryDate: _0x2dffa9,
          paypalFirstName: _0x5161e2,
          paypalLastName: _0x22d1c3,
          paypalAddressLine1: _0x56d1df,
          paypalAddressLine2: _0x274a97,
          paypalCity: _0x2bea36,
          paypalRegion: _0x13c890,
          paypalCountry: _0x214554,
        } = _0x58aa06[_0x254e95(0x145)];
    } catch (_0x44682b) {
      _0x2a4008(_0x44682b);
    }
  }),
  (module[_0x5d15f7(0x120)]["addToFavorites"] = async (
    _0x9dda52,
    _0x68f4eb,
    _0x1e584f
  ) => {
    const _0xc00677 = _0x5d15f7;
    try {
      const _0x376ab0 = _0x9dda52[_0xc00677(0x12d)],
        { purchaseCarId: _0x49bd1a } = _0x9dda52[_0xc00677(0x145)],
        _0x4148d6 = await usersService["addToFavorites"](_0x376ab0, _0x49bd1a),
        _0x13a587 = { favorites: _0x4148d6 };
      _0x68f4eb["status"](httpStatus[_0xc00677(0x13d)])[_0xc00677(0x14e)](
        _0x13a587
      );
    } catch (_0x2feaa4) {
      _0x1e584f(_0x2feaa4);
    }
  }),
  (module[_0x5d15f7(0x120)][_0x5d15f7(0x124)] = async (
    _0x499db9,
    _0x195b16,
    _0x3c769c
  ) => {
    const _0xbbf302 = _0x5d15f7;
    try {
      const _0x3c95d8 = _0x499db9[_0xbbf302(0x12d)],
        { page: _0x547fb0, limit: _0x49612e } = _0x499db9[_0xbbf302(0x114)],
        {
          currentPage: _0x2a54cb,
          totalPages: _0x48349d,
          purchaseCars: _0x3cbdd2,
        } = await purchaseCarsService["getMyFavorites"](
          _0x3c95d8,
          _0x547fb0,
          _0x49612e
        ),
        _0x1111a5 = {
          currentPage: _0x2a54cb,
          totalPages: _0x48349d,
          purchaseCars: _0x3cbdd2["map"]((_0x3c5a52) =>
            _[_0xbbf302(0x12e)](_0x3c5a52, purchaseCarSchema)
          ),
        };
      _0x195b16[_0xbbf302(0x113)](httpStatus["CREATED"])[_0xbbf302(0x14e)](
        _0x1111a5
      );
    } catch (_0x5d307f) {
      _0x3c769c(_0x5d307f);
    }
  }),
  (module[_0x5d15f7(0x120)][_0x5d15f7(0x11e)] = async (
    _0x6d8441,
    _0x17bc7c,
    _0x49d8a3
  ) => {
    const _0x911ea3 = _0x5d15f7;
    try {
      const _0x3d97e5 = _0x6d8441[_0x911ea3(0x12d)],
        { purchaseCarId: _0x6c7de2 } = _0x6d8441[_0x911ea3(0x114)],
        _0x20e2e1 = await usersService[_0x911ea3(0x11e)](_0x3d97e5, _0x6c7de2),
        _0x23264a = { favorites: _0x20e2e1 };
      _0x17bc7c[_0x911ea3(0x113)](httpStatus["CREATED"])[_0x911ea3(0x14e)](
        _0x23264a
      );
    } catch (_0x350053) {
      _0x49d8a3(_0x350053);
    }
  }),
  (module[_0x5d15f7(0x120)][_0x5d15f7(0x129)] = async (
    _0x11ca12,
    _0x25d7fa,
    _0x5657c0
  ) => {
    const _0x115c8 = _0x5d15f7;
    try {
      const _0x4414d6 = _0x11ca12[_0x115c8(0x12d)],
        _0x1c73a7 = await usersService[_0x115c8(0x129)](_0x4414d6),
        _0x4b88ea = { user: _[_0x115c8(0x12e)](_0x1c73a7, userSchema) };
      _0x25d7fa["status"](httpStatus[_0x115c8(0x13d)])[_0x115c8(0x14e)](
        _0x4b88ea
      );
    } catch (_0xd6e12c) {
      _0x5657c0(_0xd6e12c);
    }
  }),
  (module[_0x5d15f7(0x120)][_0x5d15f7(0x141)] = async (
    _0x17b40c,
    _0x3a97ea,
    _0x4cf2c8
  ) => {
    const _0x3d3555 = _0x5d15f7;
    try {
      const {
          emailOrPhone: _0x1cdc66,
          name: _0x1a9d2f,
          email: _0x20abc9,
          phoneICC: _0x15cb00,
          phoneNSN: _0x198b47,
        } = _0x17b40c[_0x3d3555(0x145)],
        _0x25ebff = _0x17b40c?.[_0x3d3555(0x135)]?.[_0x3d3555(0x117)] || null,
        _0x46269c = await usersService[_0x3d3555(0x141)](
          _0x1cdc66,
          _0x1a9d2f,
          _0x20abc9,
          _0x15cb00,
          _0x198b47,
          _0x25ebff
        ),
        _0x580188 = {
          user: _["pick"](_0x46269c[_0x3d3555(0x125)], userSchema),
          changes: _0x46269c[_0x3d3555(0x13a)],
          token: _0x46269c[_0x3d3555(0x125)]["genAuthToken"](),
        };
      _0x3a97ea[_0x3d3555(0x113)](httpStatus[_0x3d3555(0x13d)])[
        _0x3d3555(0x14e)
      ](_0x580188);
    } catch (_0x20017b) {
      _0x4cf2c8(_0x20017b);
    }
  }),
  (module[_0x5d15f7(0x120)][_0x5d15f7(0x11d)] = async (
    _0x436627,
    _0x3945f3,
    _0x18482b
  ) => {
    const _0x4f6270 = _0x5d15f7;
    try {
      const { emailOrPhone: _0x427fc6 } = _0x436627[_0x4f6270(0x145)],
        _0x8960dc = await usersService[_0x4f6270(0x11d)](_0x427fc6);
      _0x3945f3[_0x4f6270(0x113)](httpStatus[_0x4f6270(0x13d)])[
        _0x4f6270(0x14e)
      ](_[_0x4f6270(0x12e)](_0x8960dc, userSchema));
    } catch (_0x32da47) {
      _0x18482b(_0x32da47);
    }
  }),
  (module[_0x5d15f7(0x120)][_0x5d15f7(0x153)] = async (
    _0x294f55,
    _0x21bc96,
    _0x417b6d
  ) => {
    const _0x583e1c = _0x5d15f7;
    try {
      const { emailOrPhone: _0x5207e6, role: _0x496b70 } =
          _0x294f55[_0x583e1c(0x145)],
        _0x2adb01 = await usersService["changeUserRole"](_0x5207e6, _0x496b70);
      _0x21bc96[_0x583e1c(0x113)](httpStatus[_0x583e1c(0x13d)])[
        _0x583e1c(0x14e)
      ](_["pick"](_0x2adb01, userSchema));
    } catch (_0x47e629) {
      _0x417b6d(_0x47e629);
    }
  }),
  (module["exports"][_0x5d15f7(0x13e)] = async (
    _0x240711,
    _0x3a42c0,
    _0x428128
  ) => {
    const _0x38f74a = _0x5d15f7;
    try {
      let { emailOrPhone: _0x32b573, role: _0x4cb99d } = _0x240711["query"];
      !_0x32b573[_0x38f74a(0x14c)]("@") &&
        !_0x32b573[_0x38f74a(0x138)]("+") &&
        (_0x32b573 = "+" + _0x32b573);
      const _0x39c13a = await usersService[_0x38f74a(0x13e)](
        _0x32b573,
        _0x4cb99d,
        !![]
      );
      _0x3a42c0[_0x38f74a(0x113)](httpStatus["OK"])[_0x38f74a(0x14e)](
        _[_0x38f74a(0x12e)](_0x39c13a, userSchema)
      );
    } catch (_0x574298) {
      _0x428128(_0x574298);
    }
  }),
  (module[_0x5d15f7(0x120)][_0x5d15f7(0x142)] = async (
    _0x11428c,
    _0x4bcdda,
    _0x15e47f
  ) => {
    const _0xebe87e = _0x5d15f7;
    try {
      const _0x190cbd = await usersService["getCarsStatus"]();
      _0x4bcdda[_0xebe87e(0x113)](httpStatus["OK"])["json"](_0x190cbd);
    } catch (_0x3a2f76) {
      _0x15e47f(_0x3a2f76);
    }
  }),
  (module[_0x5d15f7(0x120)][_0x5d15f7(0x11a)] = async (
    _0x2e3b96,
    _0xb62f9a,
    _0x31e1cb
  ) => {
    const _0x41d36e = _0x5d15f7;
    try {
      const _0x204b00 = await User[_0x41d36e(0x154)]({})[_0x41d36e(0x143)]({
          _id: -0x1,
        }),
        _0x15abe8 = await excelService["exportUsersToExcelFile"](_0x204b00),
        _0x167260 = { type: _0x41d36e(0x126), path: _0x15abe8 };
      _0xb62f9a["status"](httpStatus[_0x41d36e(0x13d)])["json"](_0x167260);
    } catch (_0x908036) {
      _0x31e1cb(_0x908036);
    }
  }),
  (module[_0x5d15f7(0x120)][_0x5d15f7(0x13c)] = async (
    _0xfd2f84,
    _0x104614,
    _0xf8a2ee
  ) => {
    const _0x543fa5 = _0x5d15f7;
    try {
      const { userId: _0x436fb4 } = _0xfd2f84[_0x543fa5(0x14a)],
        { amount: _0x9ee477 } = _0xfd2f84[_0x543fa5(0x145)],
        _0x459585 = await usersService["deliverPaymentToOffice"](
          _0x436fb4,
          _0x9ee477
        ),
        _0x391581 = user[_0x543fa5(0x12f)](
          _0x9ee477,
          _0x459585[_0x543fa5(0x146)]
        );
      await usersService[_0x543fa5(0x137)](_0x391581);
      const _0x2d324f = user[_0x543fa5(0x13b)](_0x9ee477);
      await usersService[_0x543fa5(0x134)](
        [_0x459585[_0x543fa5(0x151)]],
        _0x2d324f
      );
      const _0xa8503f = success[_0x543fa5(0x12d)][_0x543fa5(0x139)];
      _0x104614["status"](httpStatus["OK"])[_0x543fa5(0x14e)](_0xa8503f);
    } catch (_0x11b793) {
      _0xf8a2ee(_0x11b793);
    }
  });
