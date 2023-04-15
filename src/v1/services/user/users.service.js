function _0x4ec9(_0x569202, _0x5be935) {
  const _0x4c2a34 = _0x4c2a();
  return (
    (_0x4ec9 = function (_0x4ec918, _0x1f1337) {
      _0x4ec918 = _0x4ec918 - 0x1c3;
      let _0x233b2f = _0x4c2a34[_0x4ec918];
      return _0x233b2f;
    }),
    _0x4ec9(_0x569202, _0x5be935)
  );
}
const _0x5adf2e = _0x4ec9;
function _0x4c2a() {
  const _0x874a71 = [
    "sendNotificationToAdmins",
    "uploadFile",
    "incorrectCode",
    "value",
    "favorites",
    "sendPushNotification",
    "jsonwebtoken",
    "BAD_REQUEST",
    "2496480NHkKJD",
    "281230cENBZR",
    "secretary",
    "find",
    "notFound",
    "validateToken",
    "expiredCode",
    "push",
    "AlreadyVerified",
    "deleteUserTransactions",
    "password",
    "getCarsStatus",
    "2099881FTHhrQ",
    "alreadyVerified",
    "getMyFavorites",
    "comparePassword",
    "FORBIDDEN",
    "user",
    "nsn",
    "addNotification",
    "4TnVsqP",
    "sendNotification",
    "save",
    "forgotPasswordEmail",
    "noFavorites",
    "findById",
    "deviceToken",
    "resetPasswordWithCode",
    "verifyEmailOrPhone",
    "admin",
    "emailNotUsed",
    "phone",
    "getPurchaseCarDetails",
    "changePassword",
    "./transactions.service",
    "deliveredAmountNotAvailable",
    "emailUsed",
    "phoneUsed",
    "path",
    "incorrectOldPassword",
    "registerEmail",
    "notUpdated",
    "findAdminsAndSecretaries",
    "../cloud/email.service",
    "photoURL",
    "length",
    "storeFile",
    "verifyUser",
    "isValidCode",
    "updateProfile",
    "verifyEmail",
    "http-status",
    "includes",
    "6uXgwGH",
    "role",
    "../../config/notifications",
    "359692PHqtlW",
    "../../middleware/apiError",
    "deliverPaymentToOffice",
    "888822RWeUfz",
    "isPhoneVerified",
    "resendEmailOrPhoneVerificationCode",
    "deleteMyAccount",
    "../../models/user/user.model",
    "deleteUserRentCars",
    "lang",
    "body",
    "icc",
    "../car/purchaseCars.service",
    "JWT_PRIVATE_KEY",
    "getRentOrdersStatus",
    "noNotifications",
    "1802905sQqEqx",
    "UNAUTHORIZED",
    "changeUserRole",
    "email",
    "_id",
    "function",
    "takeBalance",
    "title",
    "map",
    "notOffice",
    "verified",
    "sendForgotPasswordCode",
    "toLowerCase",
    "updateCode",
    "missedIncompleteTransaction",
    "delete",
    "exports",
    "../car/rentOrders.service",
    "findUserByEmailOrPhone",
    "switchLanguage",
    "favLang",
    "findOne",
    "auth",
    "../car/rentCars.service",
    "foundWithInvalidRole",
    "filter",
    "updateUserProfile",
    "clearNotifications",
    "notificationsSeen",
    "deleteUserOrders",
    "updatePassword",
    "deleteUserPurchaseCars",
    "findUserById",
    "../cloud/notifications.service",
    "deleteFile",
    "getRentCarsStatus",
    "removeFromFavorites",
    "verifyPhone",
    "../storage/localStorage.service",
    "../../config/errors",
    "officeNotFound",
    "NOT_FOUND",
    "480405wHGRtb",
    "verify",
    "getPurchaseCarsStatus",
  ];
  _0x4c2a = function () {
    return _0x874a71;
  };
  return _0x4c2a();
}
(function (_0x30b0d3, _0x337ae2) {
  const _0x473e82 = _0x4ec9,
    _0x27e719 = _0x30b0d3();
  while (!![]) {
    try {
      const _0x116e1c =
        parseInt(_0x473e82(0x1e1)) / 0x1 +
        parseInt(_0x473e82(0x227)) / 0x2 +
        (-parseInt(_0x473e82(0x21b)) / 0x3) *
          (parseInt(_0x473e82(0x23a)) / 0x4) +
        (parseInt(_0x473e82(0x1f1)) / 0x5) *
          (parseInt(_0x473e82(0x1de)) / 0x6) +
        -parseInt(_0x473e82(0x232)) / 0x7 +
        -parseInt(_0x473e82(0x226)) / 0x8 +
        parseInt(_0x473e82(0x1e4)) / 0x9;
      if (_0x116e1c === _0x337ae2) break;
      else _0x27e719["push"](_0x27e719["shift"]());
    } catch (_0x5e7732) {
      _0x27e719["push"](_0x27e719["shift"]());
    }
  }
})(_0x4c2a, 0x2dc4c);
const { User } = require(_0x5adf2e(0x1e8)),
  jwt = require(_0x5adf2e(0x224)),
  httpStatus = require(_0x5adf2e(0x1dc)),
  emailService = require(_0x5adf2e(0x1d4)),
  notificationsService = require(_0x5adf2e(0x212)),
  rentCarsService = require(_0x5adf2e(0x208)),
  rentOrdersService = require(_0x5adf2e(0x202)),
  purchaseCarsService = require(_0x5adf2e(0x1ed)),
  transactionsCarsService = require(_0x5adf2e(0x1cb)),
  localStorage = require(_0x5adf2e(0x217)),
  cloudStorage = require("../cloud/cloudStorage.service"),
  { ApiError } = require(_0x5adf2e(0x1e2)),
  errors = require(_0x5adf2e(0x218)),
  { user } = require(_0x5adf2e(0x1e0));
(module["exports"]["notifyUsersWithIncompleteTransactions"] = async () => {
  const _0x2164fe = _0x5adf2e;
  try {
    const _0x3747b9 = await transactionsCarsService[
      "getIncompleteTransactionsAuthorIds"
    ]();
    _0x3747b9 &&
      _0x3747b9["length"] &&
      (await this[_0x2164fe(0x23b)](_0x3747b9, user[_0x2164fe(0x1ff)]()));
  } catch (_0xb7530b) {}
}),
  (module[_0x5adf2e(0x201)][_0x5adf2e(0x203)] = async (
    _0x109b02,
    _0x4e1042 = "",
    _0xd00f33 = ![]
  ) => {
    const _0x48d2d6 = _0x5adf2e;
    try {
      const _0x419f59 = {
        $or: [
          { email: { $eq: _0x109b02 } },
          { "phone.full": { $eq: _0x109b02 } },
        ],
      };
      _0x4e1042 && (_0x419f59["role"] = _0x4e1042);
      const _0x58c57e = await User[_0x48d2d6(0x206)](_0x419f59);
      if (_0xd00f33 && !_0x58c57e) {
        const _0x1449cc = httpStatus[_0x48d2d6(0x21a)],
          _0x34d686 = errors["user"]["notFound"];
        throw new ApiError(_0x1449cc, _0x34d686);
      }
      if (
        _0xd00f33 &&
        _0x58c57e &&
        _0x4e1042 &&
        _0x58c57e[_0x48d2d6(0x1df)] !== _0x4e1042
      ) {
        const _0x5013af = httpStatus[_0x48d2d6(0x21a)],
          _0xb6d024 = errors["user"][_0x48d2d6(0x209)];
        throw new ApiError(_0x5013af, _0xb6d024);
      }
      return _0x58c57e;
    } catch (_0x3b4702) {
      throw _0x3b4702;
    }
  }),
  (module[_0x5adf2e(0x201)][_0x5adf2e(0x211)] = async (_0x2473ab) => {
    const _0x4afaa8 = _0x5adf2e;
    try {
      return await User[_0x4afaa8(0x23f)](_0x2473ab);
    } catch (_0x556442) {
      throw _0x556442;
    }
  }),
  (module[_0x5adf2e(0x201)][_0x5adf2e(0x1d3)] = async () => {
    const _0x22083f = _0x5adf2e;
    try {
      return await User["find"]({
        role: { $in: ["admin", _0x22083f(0x228)] },
        "verified.email": !![],
      });
    } catch (_0x51ef73) {
      throw _0x51ef73;
    }
  }),
  (module[_0x5adf2e(0x201)][_0x5adf2e(0x22b)] = (_0x5593d2) => {
    const _0x91df0a = _0x5adf2e;
    try {
      return jwt[_0x91df0a(0x21c)](_0x5593d2, process["env"][_0x91df0a(0x1ee)]);
    } catch (_0x2a61f3) {
      throw _0x2a61f3;
    }
  }),
  (module[_0x5adf2e(0x201)][_0x5adf2e(0x1c5)] = async (
    _0x2bd683,
    _0x4cb161,
    _0x232fd6
  ) => {
    const _0x41640b = _0x5adf2e;
    try {
      _0x2bd683 = _0x2bd683[_0x41640b(0x1fd)]();
      ![_0x41640b(0x1f4), _0x41640b(0x1c8)][_0x41640b(0x1dd)](_0x2bd683) &&
        (_0x2bd683 = _0x41640b(0x1f4));
      const _0x13f2ce =
        _0x2bd683 === _0x41640b(0x1f4)
          ? _0x4cb161["isEmailVerified"]()
          : _0x4cb161[_0x41640b(0x1e5)]();
      if (_0x13f2ce) {
        const _0x27eb7c = httpStatus[_0x41640b(0x225)],
          _0x51f45a = errors[_0x41640b(0x237)][_0x2bd683 + _0x41640b(0x22e)];
        throw new ApiError(_0x27eb7c, _0x51f45a);
      }
      const _0x4da617 = _0x4cb161["isMatchingCode"](_0x2bd683, _0x232fd6);
      if (!_0x4da617) {
        const _0x3a6217 = httpStatus[_0x41640b(0x225)],
          _0x4dbbf5 = errors[_0x41640b(0x207)][_0x41640b(0x220)];
        throw new ApiError(_0x3a6217, _0x4dbbf5);
      }
      const _0x3a852c = _0x4cb161["isValidCode"](_0x2bd683);
      if (!_0x3a852c) {
        const _0x42d696 = httpStatus[_0x41640b(0x225)],
          _0x5431d6 = errors["auth"]["expiredCode"];
        throw new ApiError(_0x42d696, _0x5431d6);
      }
      return (
        _0x2bd683 === _0x41640b(0x1f4)
          ? _0x4cb161[_0x41640b(0x1db)]()
          : _0x4cb161[_0x41640b(0x216)](),
        await _0x4cb161["save"]()
      );
    } catch (_0x1ccb2d) {
      throw _0x1ccb2d;
    }
  }),
  (module[_0x5adf2e(0x201)][_0x5adf2e(0x1e6)] = async (
    _0x2d4a0d,
    _0x59c52c
  ) => {
    const _0xa9f2d = _0x5adf2e;
    try {
      _0x2d4a0d = _0x2d4a0d["toLowerCase"]();
      !["email", _0xa9f2d(0x1c8)][_0xa9f2d(0x1dd)](_0x2d4a0d) &&
        (_0x2d4a0d = _0xa9f2d(0x1f4));
      const _0xe696e7 =
        _0x2d4a0d === _0xa9f2d(0x1f4)
          ? _0x59c52c["isEmailVerified"]()
          : _0x59c52c[_0xa9f2d(0x1e5)]();
      if (_0xe696e7) {
        const _0x31c440 = httpStatus[_0xa9f2d(0x225)],
          _0x487dee = errors[_0xa9f2d(0x237)][_0x2d4a0d + _0xa9f2d(0x22e)];
        throw new ApiError(_0x31c440, _0x487dee);
      }
      _0x59c52c[_0xa9f2d(0x1fe)](_0x2d4a0d), await _0x59c52c[_0xa9f2d(0x23c)]();
      if (_0x2d4a0d === _0xa9f2d(0x1f4))
        await emailService[_0xa9f2d(0x1d1)](
          _0x59c52c["favLang"],
          _0x59c52c[_0xa9f2d(0x1f4)],
          _0x59c52c
        );
    } catch (_0x39beb2) {
      throw _0x39beb2;
    }
  }),
  (module["exports"][_0x5adf2e(0x1ca)] = async (
    _0x23a23c,
    _0x109486,
    _0x44612a
  ) => {
    const _0x1801ac = _0x5adf2e;
    try {
      if (!(await _0x23a23c[_0x1801ac(0x235)](_0x109486))) {
        const _0x3d5ca7 = httpStatus[_0x1801ac(0x1f2)],
          _0x3618ce = errors[_0x1801ac(0x207)][_0x1801ac(0x1d0)];
        throw new ApiError(_0x3d5ca7, _0x3618ce);
      }
      if (await _0x23a23c["comparePassword"](_0x44612a)) {
        const _0x4a791e = httpStatus["BAD_REQUEST"],
          _0x34a971 = errors[_0x1801ac(0x207)]["oldPasswordMatchNew"];
        throw new ApiError(_0x4a791e, _0x34a971);
      }
      await _0x23a23c[_0x1801ac(0x20f)](_0x44612a),
        await _0x23a23c[_0x1801ac(0x23c)]();
    } catch (_0x6621e8) {
      throw _0x6621e8;
    }
  }),
  (module[_0x5adf2e(0x201)][_0x5adf2e(0x1fc)] = async (
    _0xc2d8a8,
    _0x2f09ca,
    _0x3f3d1c
  ) => {
    const _0x352974 = _0x5adf2e;
    try {
      const _0x43f3a4 = await this[_0x352974(0x203)](_0xc2d8a8);
      if (!_0x43f3a4) {
        const _0x331110 = httpStatus[_0x352974(0x21a)],
          _0x20b92d = errors["auth"]["emailOrPhoneNotUsed"];
        throw new ApiError(_0x331110, _0x20b92d);
      }
      _0x43f3a4[_0x352974(0x1fe)](_0x352974(0x230));
      const _0xa30415 = await _0x43f3a4[_0x352974(0x23c)]();
      if (_0x2f09ca === "phone") {
      } else
        await emailService[_0x352974(0x23d)](
          _0x3f3d1c,
          _0x43f3a4[_0x352974(0x1f4)],
          _0xa30415
        );
    } catch (_0x1a4e2d) {
      throw _0x1a4e2d;
    }
  }),
  (module[_0x5adf2e(0x201)][_0x5adf2e(0x1c4)] = async (
    _0x3cf163,
    _0x112e30,
    _0xed1a93
  ) => {
    const _0x3916f2 = _0x5adf2e;
    try {
      const _0x3888c3 = await this[_0x3916f2(0x203)](_0x3cf163);
      if (!_0x3888c3) {
        const _0x1ff5d6 = httpStatus["NOT_FOUND"],
          _0x559714 = errors["auth"][_0x3916f2(0x1c7)];
        throw new ApiError(_0x1ff5d6, _0x559714);
      }
      const _0x25c699 = _0x3888c3["isMatchingCode"](
        _0x3916f2(0x230),
        _0x112e30
      );
      if (!_0x25c699) {
        const _0x5b8826 = httpStatus[_0x3916f2(0x225)],
          _0x4605df = errors[_0x3916f2(0x207)][_0x3916f2(0x220)];
        throw new ApiError(_0x5b8826, _0x4605df);
      }
      const _0x251166 = _0x3888c3[_0x3916f2(0x1d9)](_0x3916f2(0x230));
      if (!_0x251166) {
        const _0x432c13 = httpStatus[_0x3916f2(0x225)],
          _0x2b2670 = errors[_0x3916f2(0x207)][_0x3916f2(0x22c)];
        throw new ApiError(_0x432c13, _0x2b2670);
      }
      return (
        await _0x3888c3[_0x3916f2(0x20f)](_0xed1a93),
        await _0x3888c3[_0x3916f2(0x23c)]()
      );
    } catch (_0x23116d) {
      throw _0x23116d;
    }
  }),
  (module[_0x5adf2e(0x201)][_0x5adf2e(0x1da)] = async (
    _0x44de40,
    _0x43463b,
    _0x49d3a7,
    _0x306c8c,
    _0x58a372,
    _0x5c1e2a
  ) => {
    try {
      const _0x3fc4f4 = {
        user: _0x44de40,
        name: _0x43463b,
        email: _0x49d3a7,
        phoneICC: _0x306c8c,
        phoneNSN: _0x58a372,
        avatar: _0x5c1e2a,
      };
      return await updateUserProfile(_0x44de40, _0x3fc4f4);
    } catch (_0x233220) {
      throw _0x233220;
    }
  }),
  (module[_0x5adf2e(0x201)][_0x5adf2e(0x204)] = async (_0x1bc52c) => {
    const _0x73debb = _0x5adf2e;
    try {
      return (
        _0x1bc52c["switchLanguage"](),
        await _0x1bc52c[_0x73debb(0x23c)](),
        _0x1bc52c
      );
    } catch (_0x56eaf6) {
      throw _0x56eaf6;
    }
  }),
  (module[_0x5adf2e(0x201)][_0x5adf2e(0x23b)] = async (
    _0x3894c9,
    _0xd3c16,
    _0x2c9567
  ) => {
    const _0x20acd6 = _0x5adf2e;
    try {
      _0x2c9567 = typeof _0x2c9567 === _0x20acd6(0x1f6) ? _0x2c9567 : () => {};
      const _0xcfbb22 = _0x3894c9[_0x20acd6(0x1d6)]
          ? { _id: { $in: _0x3894c9 } }
          : { role: { $not: { $in: [_0x20acd6(0x1c6), _0x20acd6(0x228)] } } },
        _0x5548e6 = await User[_0x20acd6(0x229)](_0xcfbb22);
      if (!_0x5548e6 || !_0x5548e6["length"]) return;
      const _0x914d1c = _0x5548e6["map"]((_0x48ea6a) => {
          const _0x5832a1 = _0x20acd6;
          try {
            return (
              _0x48ea6a[_0x5832a1(0x239)](_0xd3c16),
              _0x48ea6a[_0x5832a1(0x23c)](),
              {
                lang: _0x48ea6a[_0x5832a1(0x205)],
                value: _0x48ea6a[_0x5832a1(0x1c3)],
              }
            );
          } catch (_0x16dedc) {
            return "";
          }
        }),
        _0x4f09d1 = _0x914d1c[_0x20acd6(0x20a)](
          (_0x189acb) => _0x189acb["lang"] === "en"
        )[_0x20acd6(0x1f9)]((_0x317e75) => _0x317e75["value"]),
        _0x4c07a7 = _0x914d1c[_0x20acd6(0x20a)](
          (_0x35e8e0) => _0x35e8e0[_0x20acd6(0x1ea)] === "ar"
        )[_0x20acd6(0x1f9)]((_0xe018f4) => _0xe018f4["value"]);
      return (
        notificationsService[_0x20acd6(0x223)](
          _0xd3c16[_0x20acd6(0x1f8)]["en"],
          _0xd3c16["body"]["en"],
          _0x4f09d1,
          _0x2c9567,
          _0xd3c16[_0x20acd6(0x1d5)]
        ),
        notificationsService[_0x20acd6(0x223)](
          _0xd3c16[_0x20acd6(0x1f8)]["ar"],
          _0xd3c16[_0x20acd6(0x1eb)]["ar"],
          _0x4c07a7,
          _0x2c9567,
          _0xd3c16[_0x20acd6(0x1d5)]
        ),
        !![]
      );
    } catch (_0x52eae7) {
      throw _0x52eae7;
    }
  }),
  (module[_0x5adf2e(0x201)][_0x5adf2e(0x21e)] = async (
    _0x1e0ed7,
    _0x1d297a
  ) => {
    const _0x899a10 = _0x5adf2e;
    try {
      _0x1d297a = typeof _0x1d297a === "function" ? _0x1d297a : () => {};
      const _0x262ca3 = await this[_0x899a10(0x1d3)]();
      if (!_0x262ca3["length"]) return;
      const _0x30b987 = _0x262ca3[_0x899a10(0x1f9)]((_0x41ff83) => {
          const _0x2b45cc = _0x899a10;
          try {
            return (
              _0x41ff83["addNotification"](_0x1e0ed7),
              _0x41ff83[_0x2b45cc(0x23c)](),
              { lang: user["favLang"], value: user[_0x2b45cc(0x1c3)] }
            );
          } catch (_0x2b37bb) {
            return "";
          }
        }),
        _0x3e9286 = _0x30b987[_0x899a10(0x20a)](
          (_0x4b92c3) => _0x4b92c3[_0x899a10(0x1ea)] === "en"
        )[_0x899a10(0x1f9)]((_0x5e0376) => _0x5e0376["value"]),
        _0x596568 = _0x30b987[_0x899a10(0x20a)](
          (_0x1f3f0b) => _0x1f3f0b["lang"] === "ar"
        )[_0x899a10(0x1f9)]((_0x48a072) => _0x48a072[_0x899a10(0x221)]);
      return (
        notificationsService[_0x899a10(0x223)](
          _0x1e0ed7[_0x899a10(0x1f8)]["en"],
          _0x1e0ed7[_0x899a10(0x1eb)]["en"],
          _0x3e9286,
          _0x1d297a,
          _0x1e0ed7["photoURL"]
        ),
        notificationsService["sendPushNotification"](
          _0x1e0ed7[_0x899a10(0x1f8)]["ar"],
          _0x1e0ed7[_0x899a10(0x1eb)]["ar"],
          _0x596568,
          _0x1d297a,
          _0x1e0ed7[_0x899a10(0x1d5)]
        ),
        !![]
      );
    } catch (_0x389767) {
      throw _0x389767;
    }
  }),
  (module[_0x5adf2e(0x201)]["seeNotifications"] = async (_0x37585c) => {
    const _0x344517 = _0x5adf2e;
    try {
      const { isAllSeen: _0x11e150, list: _0x115d24 } =
        _0x37585c["seeNotifications"]();
      if (_0x11e150) {
        const _0x43dc68 = httpStatus[_0x344517(0x225)],
          _0x14c68b = errors[_0x344517(0x237)][_0x344517(0x20d)];
        throw new ApiError(_0x43dc68, _0x14c68b);
      }
      return await _0x37585c[_0x344517(0x23c)](), _0x115d24;
    } catch (_0x3fde19) {
      throw _0x3fde19;
    }
  }),
  (module[_0x5adf2e(0x201)][_0x5adf2e(0x20c)] = async (_0x10811e) => {
    const _0x1af3d5 = _0x5adf2e;
    try {
      const _0x21ed0a = _0x10811e["clearNotifications"]();
      if (_0x21ed0a) {
        const _0x5ce46c = httpStatus[_0x1af3d5(0x225)],
          _0x43c4d5 = errors[_0x1af3d5(0x237)][_0x1af3d5(0x1f0)];
        throw new ApiError(_0x5ce46c, _0x43c4d5);
      }
      return await _0x10811e[_0x1af3d5(0x23c)](), _0x10811e["notifications"];
    } catch (_0x337ddd) {
      throw _0x337ddd;
    }
  }),
  (module["exports"]["addToFavorites"] = async (_0x59cc28, _0x1bb4e) => {
    const _0x254da2 = _0x5adf2e;
    try {
      const _0x4999e4 = await purchaseCarsService[_0x254da2(0x1c9)](_0x1bb4e);
      if (!_0x4999e4) {
        const _0x361cad = httpStatus[_0x254da2(0x21a)],
          _0x2115fb = errors["purchaseCar"][_0x254da2(0x22a)];
        throw new ApiError(_0x361cad, _0x2115fb);
      }
      return (
        _0x59cc28["addToFavorites"](_0x4999e4["_id"]),
        await _0x59cc28[_0x254da2(0x23c)](),
        _0x59cc28["favorites"]
      );
    } catch (_0x3c8af6) {
      throw _0x3c8af6;
    }
  }),
  (module[_0x5adf2e(0x201)][_0x5adf2e(0x234)] = async (
    _0x5e5684,
    _0x61a4f2,
    _0x4462dc
  ) => {
    const _0x490be9 = _0x5adf2e;
    try {
      if (!_0x5e5684["favorites"] || !_0x5e5684["favorites"]["length"]) {
        const _0xb6b599 = httpStatus[_0x490be9(0x21a)],
          _0x28c815 = errors[_0x490be9(0x237)][_0x490be9(0x23e)];
        throw new ApiError(_0xb6b599, _0x28c815);
      }
      const _0x5a35fd = await purchaseCarsService[_0x490be9(0x234)](
        _0x5e5684[_0x490be9(0x222)]
      );
      if (!_0x5a35fd || !_0x5a35fd["length"]) {
        const _0x528a3a = httpStatus[_0x490be9(0x21a)],
          _0x205712 = errors[_0x490be9(0x237)][_0x490be9(0x23e)];
        throw new ApiError(_0x528a3a, _0x205712);
      }
      return _0x5a35fd;
    } catch (_0x3e7220) {
      throw _0x3e7220;
    }
  }),
  (module["exports"]["deleteFromFavorites"] = async (_0x4439f9, _0x183f95) => {
    const _0x3eb3a1 = _0x5adf2e;
    try {
      if (
        !_0x4439f9[_0x3eb3a1(0x222)] ||
        !_0x4439f9[_0x3eb3a1(0x222)]["length"]
      ) {
        const _0x549e0c = httpStatus["NOT_FOUND"],
          _0x37e5cf = errors["user"][_0x3eb3a1(0x23e)];
        throw new ApiError(_0x549e0c, _0x37e5cf);
      }
      return (
        _0x4439f9[_0x3eb3a1(0x215)](_0x183f95),
        await _0x4439f9[_0x3eb3a1(0x23c)](),
        _0x4439f9[_0x3eb3a1(0x222)]
      );
    } catch (_0x55f018) {
      throw _0x55f018;
    }
  }),
  (module[_0x5adf2e(0x201)][_0x5adf2e(0x1e7)] = async (_0x374642) => {
    const _0x1221e = _0x5adf2e;
    try {
      return (
        await transactionsCarsService[_0x1221e(0x22f)](
          _0x374642[_0x1221e(0x1f5)]
        ),
        await rentOrdersService[_0x1221e(0x20e)](_0x374642[_0x1221e(0x1f5)]),
        await purchaseCarsService[_0x1221e(0x210)](_0x374642["_id"]),
        await rentCarsService[_0x1221e(0x1e9)](_0x374642[_0x1221e(0x1f5)]),
        await _0x374642[_0x1221e(0x200)]()
      );
    } catch (_0x497dfc) {
      throw _0x497dfc;
    }
  }),
  (module[_0x5adf2e(0x201)][_0x5adf2e(0x1f3)] = async (
    _0x351ff2,
    _0xe5677e
  ) => {
    const _0x22c2fc = _0x5adf2e;
    try {
      const _0x3748b7 = await this[_0x22c2fc(0x203)](_0x351ff2);
      if (!_0x3748b7) {
        const _0x30c2db = httpStatus["NOT_FOUND"],
          _0x44ece9 = errors[_0x22c2fc(0x237)][_0x22c2fc(0x22a)];
        throw new ApiError(_0x30c2db, _0x44ece9);
      }
      if (_0x3748b7[_0x22c2fc(0x1df)] !== "user") {
        const _0x13a3d4 = httpStatus[_0x22c2fc(0x21a)],
          _0xe61cd5 = errors[_0x22c2fc(0x237)]["updateNotUserRole"];
        throw new ApiError(_0x13a3d4, _0xe61cd5);
      }
      return (
        (_0x3748b7[_0x22c2fc(0x1df)] = _0xe5677e), await _0x3748b7["save"]()
      );
    } catch (_0x507c4e) {
      throw _0x507c4e;
    }
  }),
  (module["exports"][_0x5adf2e(0x1d8)] = async (_0x4c6a62) => {
    const _0x476160 = _0x5adf2e;
    try {
      const _0x281271 = await this[_0x476160(0x203)](_0x4c6a62);
      if (!_0x281271) {
        const _0x369845 = httpStatus[_0x476160(0x21a)],
          _0x210aa9 = errors[_0x476160(0x237)][_0x476160(0x22a)];
        throw new ApiError(_0x369845, _0x210aa9);
      }
      if (
        _0x281271[_0x476160(0x1fb)][_0x476160(0x1f4)] &&
        _0x281271[_0x476160(0x1fb)]["phone"]
      ) {
        const _0x90e14c = httpStatus[_0x476160(0x225)],
          _0x4f1736 = errors[_0x476160(0x237)][_0x476160(0x233)];
        throw new ApiError(_0x90e14c, _0x4f1736);
      }
      return (
        _0x281271[_0x476160(0x1db)](),
        _0x281271[_0x476160(0x216)](),
        await _0x281271[_0x476160(0x23c)]()
      );
    } catch (_0x106a80) {
      throw _0x106a80;
    }
  }),
  (module["exports"][_0x5adf2e(0x20b)] = async (
    _0x10baff,
    _0x125cf5,
    _0x14491a,
    _0x4ec9aa,
    _0x2702b8,
    _0x343dcf
  ) => {
    const _0x837b9c = _0x5adf2e;
    try {
      const _0x2adce5 = await this[_0x837b9c(0x203)](_0x10baff);
      if (!_0x2adce5) {
        const _0x31dc03 = httpStatus[_0x837b9c(0x21a)],
          _0x4b1408 = errors["user"][_0x837b9c(0x22a)];
        throw new ApiError(_0x31dc03, _0x4b1408);
      }
      const _0x4987f1 = {
        emailOrPhone: _0x10baff,
        name: _0x125cf5,
        email: _0x14491a,
        phoneICC: _0x4ec9aa,
        phoneNSN: _0x2702b8,
        avatar: _0x343dcf,
      };
      return await updateUserProfile(_0x2adce5, _0x4987f1);
    } catch (_0x2b01c4) {
      throw _0x2b01c4;
    }
  });
const updateUserProfile = async (_0x1ceead, _0x16c051) => {
  const _0x15f1c3 = _0x5adf2e;
  try {
    const {
        name: _0x5c9fa6,
        email: _0x41a974,
        phoneICC: _0xacd2e9,
        phoneNSN: _0x2dd203,
        avatar: _0x1f7605,
      } = _0x16c051,
      _0x452403 = [];
    _0x5c9fa6 &&
      _0x1ceead["name"] !== _0x5c9fa6 &&
      ((_0x1ceead["name"] = _0x5c9fa6), _0x452403["push"]("name"));
    if (_0x1f7605) {
      const _0x1170ac = await localStorage[_0x15f1c3(0x1d7)](_0x1f7605),
        _0x5aa9eb = await cloudStorage[_0x15f1c3(0x21f)](_0x1170ac);
      await localStorage[_0x15f1c3(0x213)](_0x1170ac[_0x15f1c3(0x1cf)]),
        await cloudStorage[_0x15f1c3(0x213)](_0x1ceead["avatarURL"]),
        (_0x1ceead["avatarURL"] = _0x5aa9eb),
        _0x452403["push"]("avatarURL");
    }
    if (_0x41a974 && _0x1ceead[_0x15f1c3(0x1f4)] !== _0x41a974) {
      const _0x4483bd = await this[_0x15f1c3(0x203)](_0x41a974);
      if (_0x4483bd) {
        const _0x293585 = httpStatus["NOT_FOUND"],
          _0x5ce02f = errors[_0x15f1c3(0x207)][_0x15f1c3(0x1cd)];
        throw new ApiError(_0x293585, _0x5ce02f);
      }
      (_0x1ceead["email"] = _0x41a974),
        (_0x1ceead[_0x15f1c3(0x1fb)][_0x15f1c3(0x1f4)] = ![]),
        _0x452403[_0x15f1c3(0x22d)](_0x15f1c3(0x1f4)),
        _0x1ceead[_0x15f1c3(0x1fe)](_0x15f1c3(0x1f4)),
        await emailService["changeEmail"](
          _0x1ceead["favLang"],
          _0x41a974,
          _0x1ceead
        );
    }
    const _0x238561 =
      _0x1ceead[_0x15f1c3(0x1c8)][_0x15f1c3(0x1ec)] === _0xacd2e9 &&
      _0x1ceead[_0x15f1c3(0x1c8)][_0x15f1c3(0x238)] === _0x2dd203;
    if ((_0xacd2e9 || _0x2dd203) && !_0x238561) {
      const _0x2df7f0 = "" + _0xacd2e9 + _0x2dd203,
        _0x4fe941 = await this["findUserByEmailOrPhone"](_0x2df7f0);
      if (_0x4fe941) {
        const _0x593d0b = httpStatus[_0x15f1c3(0x21a)],
          _0xc04d05 = errors[_0x15f1c3(0x207)][_0x15f1c3(0x1ce)];
        throw new ApiError(_0x593d0b, _0xc04d05);
      }
      (_0x1ceead[_0x15f1c3(0x1c8)] = {
        full: "" + _0xacd2e9 + _0x2dd203,
        icc: _0xacd2e9,
        nsn: _0x2dd203,
      }),
        (_0x1ceead[_0x15f1c3(0x1fb)][_0x15f1c3(0x1c8)] = ![]),
        _0x452403[_0x15f1c3(0x22d)]("phone"),
        _0x1ceead["updateCode"](_0x15f1c3(0x1c8));
    }
    if (!_0x452403[_0x15f1c3(0x1d6)]) {
      const _0x1f3f2c = httpStatus[_0x15f1c3(0x225)],
        _0x454e9e = errors["user"][_0x15f1c3(0x1d2)];
      throw new ApiError(_0x1f3f2c, _0x454e9e);
    }
    return (
      (_0x1ceead = await _0x1ceead[_0x15f1c3(0x23c)]()),
      { newUser: _0x1ceead, changes: _0x452403 }
    );
  } catch (_0x163851) {
    throw _0x163851;
  }
};
(module[_0x5adf2e(0x201)][_0x5adf2e(0x231)] = async () => {
  const _0x4c54fa = _0x5adf2e;
  try {
    const _0x34a542 = await rentCarsService[_0x4c54fa(0x214)](),
      _0x1de3ee = await purchaseCarsService[_0x4c54fa(0x21d)](),
      _0x2ab149 = await rentOrdersService[_0x4c54fa(0x1ef)]();
    return { rent: _0x34a542, purchase: _0x1de3ee, order: _0x2ab149 };
  } catch (_0x12ce8a) {
    throw _0x12ce8a;
  }
}),
  (module[_0x5adf2e(0x201)][_0x5adf2e(0x1e3)] = async (
    _0x3cffc0,
    _0x25fbb4
  ) => {
    const _0x346a5c = _0x5adf2e;
    try {
      const _0x19ea53 = await this[_0x346a5c(0x211)](_0x3cffc0);
      if (!_0x19ea53) {
        const _0x176a50 = httpStatus["NOT_FOUND"],
          _0x8b8bb5 = errors[_0x346a5c(0x237)][_0x346a5c(0x219)];
        throw new ApiError(_0x176a50, _0x8b8bb5);
      }
      if (_0x19ea53[_0x346a5c(0x1df)] !== "office") {
        const _0xb586c4 = httpStatus["BAD_REQUEST"],
          _0x7b9000 = errors[_0x346a5c(0x237)][_0x346a5c(0x1fa)];
        throw new ApiError(_0xb586c4, _0x7b9000);
      }
      const _0x31e6ba = _0x19ea53[_0x346a5c(0x1f7)](_0x25fbb4);
      if (!_0x31e6ba) {
        const _0x5a5bd1 = httpStatus[_0x346a5c(0x236)],
          _0x1dd01c = errors[_0x346a5c(0x237)][_0x346a5c(0x1cc)];
        throw new ApiError(_0x5a5bd1, _0x1dd01c);
      }
      return await _0x19ea53[_0x346a5c(0x23c)](), _0x19ea53;
    } catch (_0x43039b) {
      throw _0x43039b;
    }
  });
