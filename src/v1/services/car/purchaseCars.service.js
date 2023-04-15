const _0x317931 = _0x101e;
(function (_0x4fb18e, _0x10d393) {
  const _0x54a88b = _0x101e,
    _0xf73393 = _0x4fb18e();
  while (!![]) {
    try {
      const _0x5ec494 =
        parseInt(_0x54a88b(0x169)) / 0x1 +
        (parseInt(_0x54a88b(0x180)) / 0x2) *
          (parseInt(_0x54a88b(0x189)) / 0x3) +
        (parseInt(_0x54a88b(0x185)) / 0x4) *
          (parseInt(_0x54a88b(0x177)) / 0x5) +
        (parseInt(_0x54a88b(0x181)) / 0x6) *
          (-parseInt(_0x54a88b(0x17e)) / 0x7) +
        (parseInt(_0x54a88b(0x15b)) / 0x8) *
          (-parseInt(_0x54a88b(0x15a)) / 0x9) +
        (-parseInt(_0x54a88b(0x186)) / 0xa) *
          (-parseInt(_0x54a88b(0x14f)) / 0xb) +
        -parseInt(_0x54a88b(0x18f)) / 0xc;
      if (_0x5ec494 === _0x10d393) break;
      else _0xf73393["push"](_0xf73393["shift"]());
    } catch (_0x3f6054) {
      _0xf73393["push"](_0xf73393["shift"]());
    }
  }
})(_0x3478, 0xa2b5f);
function _0x3478() {
  const _0x173110 = [
    "color.en",
    "../../config/errors",
    "noCars",
    "isPaid",
    "uploadFile",
    "getRecentlyArrivedPurchaseCars",
    "length",
    "notFound",
    "notPaid",
    "phoneNumber",
    "NOT_FOUND",
    "storeFile",
    "596522CWafNf",
    "noFavorites",
    "sold",
    "markPurchaseCarAsSold",
    "find",
    "getPurchaseCarsStatus",
    "markAsSold",
    "count",
    "../../models/car/purchaseCar.model",
    "getBestSellerPurchaseCars",
    "noPostedCars",
    "year",
    "_id",
    "path",
    "201820QzToIX",
    "noSearchCars",
    "deleteFile",
    "exports",
    "aggregate",
    "FORBIDDEN",
    "isArray",
    "490ybAXXd",
    "push",
    "1508602JltGtX",
    "24168YFTiXo",
    "deleteUserPurchaseCars",
    "addPurchaseCar",
    "user",
    "36pZnBBN",
    "20ApPIAa",
    "isSold",
    "../../middleware/apiError",
    "3YxJrOQ",
    "name",
    "ceil",
    "save",
    "purchase",
    "noOfCars",
    "10936116dmbMkf",
    "brand.ref",
    "photos",
    "sort",
    "BAD_REQUEST",
    "2565354jZpJRZ",
    "textScore",
    "searchPurchaseCars",
    "map",
    "_doc",
    "getPurchaseCarDetails",
    "purchaseCar",
    "limit",
    "http-status",
    "favorites",
    "findById",
    "2886849xidovE",
    "8rPsiPX",
    "skip",
  ];
  _0x3478 = function () {
    return _0x173110;
  };
  return _0x3478();
}
function _0x101e(_0x4867f2, _0x226e65) {
  const _0x3478ee = _0x3478();
  return (
    (_0x101e = function (_0x101eff, _0x2cfb2a) {
      _0x101eff = _0x101eff - 0x14c;
      let _0x3dc64a = _0x3478ee[_0x101eff];
      return _0x3dc64a;
    }),
    _0x101e(_0x4867f2, _0x226e65)
  );
}
const { PurchaseCar } = require(_0x317931(0x171)),
  brandsService = require("./brands.service"),
  localStorage = require("../storage/localStorage.service"),
  cloudStorage = require("../cloud/cloudStorage.service"),
  { ApiError } = require(_0x317931(0x188)),
  httpStatus = require(_0x317931(0x157)),
  errors = require(_0x317931(0x15e));
(module[_0x317931(0x17a)]["findPurchaseCarById"] = async (_0x5a8103) => {
  const _0x3eebc0 = _0x317931;
  try {
    const _0x2c42af = await PurchaseCar[_0x3eebc0(0x159)](_0x5a8103);
    if (!_0x2c42af) {
      const _0x4af85c = httpStatus[_0x3eebc0(0x167)],
        _0x3f9c37 = errors["purchaseCar"][_0x3eebc0(0x164)];
      throw new ApiError(_0x4af85c, _0x3f9c37);
    }
    return _0x2c42af;
  } catch (_0x134c2a) {
    throw _0x134c2a;
  }
}),
  (module["exports"]["deletePurchaseCar"] = async (_0x266fe9) => {
    try {
      await PurchaseCar["findByIdAndDelete"](_0x266fe9);
    } catch (_0x24313f) {
      throw _0x24313f;
    }
  }),
  (module[_0x317931(0x17a)][_0x317931(0x182)] = async (_0x330b1d) => {
    try {
      await PurchaseCar["deleteMany"]({ "owner.ref": _0x330b1d });
    } catch (_0x3a27ae) {
      throw _0x3a27ae;
    }
  }),
  (module["exports"]["getMyFavorites"] = async (
    _0x5e701b,
    _0x54b9e1,
    _0x57b1de
  ) => {
    const _0x19e796 = _0x317931;
    try {
      (_0x54b9e1 = parseInt(_0x54b9e1)), (_0x57b1de = parseInt(_0x57b1de));
      if (
        !_0x5e701b["favorites"] ||
        !_0x5e701b[_0x19e796(0x158)][_0x19e796(0x163)]
      ) {
        const _0x3dc18b = httpStatus["NOT_FOUND"],
          _0x359201 = errors[_0x19e796(0x184)][_0x19e796(0x16a)];
        throw new ApiError(_0x3dc18b, _0x359201);
      }
      const _0x41507a = await PurchaseCar[_0x19e796(0x16d)]({
        _id: { $in: _0x5e701b[_0x19e796(0x158)] },
      })
        [_0x19e796(0x15c)]((_0x54b9e1 - 0x1) * _0x57b1de)
        ["limit"](_0x57b1de);
      if (!_0x41507a || !_0x41507a[_0x19e796(0x163)]) {
        const _0x160055 = httpStatus[_0x19e796(0x167)],
          _0x4b28b4 = errors["user"][_0x19e796(0x16a)];
        throw new ApiError(_0x160055, _0x4b28b4);
      }
      const _0x1fbfea = await PurchaseCar[_0x19e796(0x170)]({
        _id: { $in: _0x5e701b[_0x19e796(0x158)] },
      });
      return {
        purchaseCars: _0x41507a,
        currentPage: _0x54b9e1,
        totalPages: Math[_0x19e796(0x18b)](_0x1fbfea / _0x57b1de),
      };
    } catch (_0x3720cb) {
      throw _0x3720cb;
    }
  }),
  (module[_0x317931(0x17a)][_0x317931(0x16e)] = async () => {
    const _0x6f113f = _0x317931;
    try {
      const _0x44c0f0 = await PurchaseCar[_0x6f113f(0x170)]({ paid: !![] });
      return { total: _0x44c0f0 };
    } catch (_0x568239) {
      throw _0x568239;
    }
  }),
  (module[_0x317931(0x17a)][_0x317931(0x154)] = async (_0x58f423) => {
    const _0x397e1e = _0x317931;
    try {
      const _0x3c2902 = await PurchaseCar["findById"](_0x58f423);
      if (!_0x3c2902) {
        const _0x50669f = httpStatus[_0x397e1e(0x167)],
          _0x2e6ed0 = errors[_0x397e1e(0x155)][_0x397e1e(0x164)];
        throw new ApiError(_0x50669f, _0x2e6ed0);
      }
      if (!_0x3c2902[_0x397e1e(0x160)]()) {
        const _0x2e866d = httpStatus[_0x397e1e(0x17c)],
          _0x3f783f = errors["purchaseCar"][_0x397e1e(0x165)];
        throw new ApiError(_0x2e866d, _0x3f783f);
      }
      return (
        _0x3c2902[_0x397e1e(0x187)]() && (_0x3c2902[_0x397e1e(0x166)] = ""),
        _0x3c2902
      );
    } catch (_0x190fbe) {
      throw _0x190fbe;
    }
  }),
  (module[_0x317931(0x17a)][_0x317931(0x162)] = async (
    _0xcf0252,
    _0x2fd335
  ) => {
    const _0x139813 = _0x317931;
    try {
      (_0xcf0252 = parseInt(_0xcf0252)), (_0x2fd335 = parseInt(_0x2fd335));
      let _0x20113e = await PurchaseCar[_0x139813(0x16d)]({ paid: !![] })
        [_0x139813(0x14d)]({ _id: -0x1 })
        [_0x139813(0x15c)]((_0xcf0252 - 0x1) * _0x2fd335)
        [_0x139813(0x156)](_0x2fd335);
      if (!_0x20113e || !_0x20113e["length"]) {
        const _0x558b65 = httpStatus[_0x139813(0x167)],
          _0x3abaf5 = errors["purchaseCar"][_0x139813(0x15f)];
        throw new ApiError(_0x558b65, _0x3abaf5);
      }
      const _0x5079b9 = await PurchaseCar[_0x139813(0x170)]({});
      return (
        (_0x20113e = _0x20113e[_0x139813(0x152)]((_0x28c6d2) => ({
          ..._0x28c6d2[_0x139813(0x153)],
          phoneNumber: _0x28c6d2[_0x139813(0x16b)]
            ? ""
            : _0x28c6d2[_0x139813(0x166)],
        }))),
        {
          purchaseCars: _0x20113e,
          currentPage: _0xcf0252,
          totalPages: Math["ceil"](_0x5079b9 / _0x2fd335),
        }
      );
    } catch (_0x43a5d7) {
      throw _0x43a5d7;
    }
  }),
  (module[_0x317931(0x17a)]["getLatestModelsPurchaseCars"] = async (
    _0x575527,
    _0x3bd8ff
  ) => {
    const _0x406458 = _0x317931;
    try {
      (_0x575527 = parseInt(_0x575527)), (_0x3bd8ff = parseInt(_0x3bd8ff));
      let _0x281469 = await PurchaseCar[_0x406458(0x16d)]({ paid: !![] })
        [_0x406458(0x15c)]((_0x575527 - 0x1) * _0x3bd8ff)
        [_0x406458(0x156)](_0x3bd8ff);
      if (!_0x281469 || !_0x281469[_0x406458(0x163)]) {
        const _0x384613 = httpStatus[_0x406458(0x167)],
          _0x1b0f6d = errors[_0x406458(0x155)][_0x406458(0x15f)];
        throw new ApiError(_0x384613, _0x1b0f6d);
      }
      const _0x4e90c7 = await PurchaseCar[_0x406458(0x170)]({});
      return (
        (_0x281469 = _0x281469["map"]((_0x1b90ef) => ({
          ..._0x1b90ef[_0x406458(0x153)],
          phoneNumber: _0x1b90ef[_0x406458(0x16b)]
            ? ""
            : _0x1b90ef["phoneNumber"],
        }))),
        {
          purchaseCars: _0x281469,
          currentPage: _0x575527,
          totalPages: Math[_0x406458(0x18b)](_0x4e90c7 / _0x3bd8ff),
        }
      );
    } catch (_0x217ded) {
      throw _0x217ded;
    }
  }),
  (module[_0x317931(0x17a)][_0x317931(0x172)] = async (
    _0x54e231,
    _0x3b880c
  ) => {
    const _0x18adcd = _0x317931;
    try {
      (_0x54e231 = parseInt(_0x54e231)), (_0x3b880c = parseInt(_0x3b880c));
      let _0xa583fd = await PurchaseCar[_0x18adcd(0x16d)]({ paid: !![] })
        [_0x18adcd(0x14d)]({ model: 0x1 })
        [_0x18adcd(0x15c)]((_0x54e231 - 0x1) * _0x3b880c)
        [_0x18adcd(0x156)](_0x3b880c);
      if (!_0xa583fd || !_0xa583fd[_0x18adcd(0x163)]) {
        const _0x481562 = httpStatus[_0x18adcd(0x167)],
          _0x3a1902 = errors[_0x18adcd(0x155)][_0x18adcd(0x15f)];
        throw new ApiError(_0x481562, _0x3a1902);
      }
      const _0x53eb87 = await PurchaseCar[_0x18adcd(0x170)]({});
      return (
        (_0xa583fd = _0xa583fd["map"]((_0x249872) => ({
          ..._0x249872["_doc"],
          phoneNumber: _0x249872[_0x18adcd(0x16b)]
            ? ""
            : _0x249872[_0x18adcd(0x166)],
        }))),
        {
          purchaseCars: _0xa583fd,
          currentPage: _0x54e231,
          totalPages: Math[_0x18adcd(0x18b)](_0x53eb87 / _0x3b880c),
        }
      );
    } catch (_0x530965) {
      throw _0x530965;
    }
  }),
  (module[_0x317931(0x17a)][_0x317931(0x151)] = async (
    _0xe255a7,
    _0x3c9211,
    _0x4651ed,
    _0x2f0e48,
    _0x454962,
    _0x5c9440,
    _0x3fb90d,
    _0x2b9a6c
  ) => {
    const _0x43db56 = _0x317931;
    try {
      (_0x3c9211 = parseInt(_0x3c9211)), (_0x4651ed = parseInt(_0x4651ed));
      const _0x5069d8 = { $text: { $search: _0xe255a7 }, paid: { $eq: !![] } };
      Array[_0x43db56(0x17d)](_0x5c9440) &&
        _0x5c9440[_0x43db56(0x163)] &&
        (_0x5069d8[_0x43db56(0x190)] = { $in: _0x5c9440 });
      Array[_0x43db56(0x17d)](_0x3fb90d) &&
        _0x3fb90d[_0x43db56(0x163)] &&
        (_0x5069d8[_0x43db56(0x15d)] = { $in: _0x3fb90d });
      Array["isArray"](_0x2b9a6c) &&
        _0x2b9a6c[_0x43db56(0x163)] &&
        (_0x5069d8[_0x43db56(0x174)] = { $in: _0x2b9a6c });
      let _0x264c8d = await PurchaseCar[_0x43db56(0x17b)]([
        { $match: _0x5069d8 },
        { $sort: { score: { $meta: _0x43db56(0x150) } } },
        { $skip: (_0x3c9211 - 0x1) * _0x4651ed },
        { $limit: _0x4651ed },
      ]);
      if (!_0x264c8d || !_0x264c8d[_0x43db56(0x163)]) {
        const _0x450a0f = httpStatus[_0x43db56(0x167)],
          _0x363c86 = errors[_0x43db56(0x155)][_0x43db56(0x178)];
        throw new ApiError(_0x450a0f, _0x363c86);
      }
      const _0x4f7ded = await PurchaseCar["aggregate"]([{ $match: _0x5069d8 }]),
        _0x11db9b = _0x4f7ded[_0x43db56(0x163)];
      return (
        (_0x264c8d = _0x264c8d[_0x43db56(0x152)]((_0x2a70ae) => ({
          ..._0x2a70ae,
          phoneNumber: _0x2a70ae[_0x43db56(0x16b)]
            ? ""
            : _0x2a70ae[_0x43db56(0x166)],
        }))),
        {
          purchaseCars: _0x264c8d,
          currentPage: _0x3c9211,
          totalPages: Math[_0x43db56(0x18b)](_0x11db9b / _0x4651ed),
        }
      );
    } catch (_0x50ff54) {
      throw _0x50ff54;
    }
  }),
  (module[_0x317931(0x17a)]["getMyPurchaseCars"] = async (
    _0x33f051,
    _0x516a00,
    _0x3716f6
  ) => {
    const _0x2cba49 = _0x317931;
    try {
      (_0x516a00 = parseInt(_0x516a00)), (_0x3716f6 = parseInt(_0x3716f6));
      const _0x5a2265 = await PurchaseCar[_0x2cba49(0x16d)]({
        "owner.ref": _0x33f051["_id"],
      })
        [_0x2cba49(0x14d)]({ _id: -0x1 })
        [_0x2cba49(0x15c)]((_0x516a00 - 0x1) * _0x3716f6)
        [_0x2cba49(0x156)](_0x3716f6);
      if (!_0x5a2265 || !_0x5a2265[_0x2cba49(0x163)]) {
        const _0x4e04c2 = httpStatus[_0x2cba49(0x167)],
          _0x3c292f = errors[_0x2cba49(0x155)][_0x2cba49(0x173)];
        throw new ApiError(_0x4e04c2, _0x3c292f);
      }
      const _0x287ea9 = await PurchaseCar[_0x2cba49(0x170)]({
        "owner.ref": _0x33f051[_0x2cba49(0x175)],
      });
      return {
        purchaseCars: _0x5a2265,
        currentPage: _0x516a00,
        totalPages: Math[_0x2cba49(0x18b)](_0x287ea9 / _0x3716f6),
      };
    } catch (_0x28ab47) {
      throw _0x28ab47;
    }
  }),
  (module[_0x317931(0x17a)][_0x317931(0x183)] = async (
    _0x46564a,
    _0x4a1be3,
    _0x10274f,
    _0x8c57b4,
    _0x247f6b,
    _0x3d32f1,
    _0x2e96bf,
    _0x509abf,
    _0x1b5279,
    _0x5d2ed4,
    _0xae5273,
    _0xfeccef,
    _0x1bdc5b,
    _0x122dfc,
    _0xe8e9d4,
    _0x23ce0e,
    _0x2fe657,
    _0x20f653,
    _0x20c4c3,
    _0x569f82,
    _0x36c000,
    _0x193e65,
    _0x4592fb,
    _0x55d559,
    _0xd33c65
  ) => {
    const _0x1e6c59 = _0x317931;
    try {
      const _0x24ea25 = await brandsService["getBrand"](_0x247f6b),
        _0x478ebd = new PurchaseCar({
          owner: {
            name: _0x46564a[_0x1e6c59(0x18a)],
            ref: _0x46564a[_0x1e6c59(0x175)],
          },
          name: _0x4a1be3,
          vin: _0x10274f,
          model: _0x8c57b4,
          brand: {
            name: {
              en: _0x24ea25[_0x1e6c59(0x18a)]["en"],
              ar: _0x24ea25[_0x1e6c59(0x18a)]["ar"],
            },
            ref: _0x24ea25["_id"],
          },
          year: _0x3d32f1,
          color: { en: _0x2e96bf, ar: _0x509abf },
          trimLevel: _0x1b5279,
          vehicleType: { en: _0x5d2ed4, ar: _0xae5273 },
          fuelType: { en: _0xfeccef, ar: _0x1bdc5b },
          noOfSeats: _0x122dfc,
          kiloPerHour: _0xe8e9d4,
          price: _0x23ce0e,
          phoneNumber: "" + _0x2fe657 + _0x20f653,
          description: _0x20c4c3,
        });
      if (_0x569f82) {
        const _0x1953d2 = await localStorage[_0x1e6c59(0x168)](_0x569f82),
          _0x58434c = await cloudStorage["uploadFile"](_0x1953d2);
        await localStorage[_0x1e6c59(0x179)](_0x1953d2[_0x1e6c59(0x176)]),
          _0x478ebd["photos"]["push"](_0x58434c);
      }
      if (_0x36c000) {
        const _0x24432e = await localStorage[_0x1e6c59(0x168)](_0x36c000),
          _0xc06534 = await cloudStorage[_0x1e6c59(0x161)](_0x24432e);
        await localStorage[_0x1e6c59(0x179)](_0x24432e["path"]),
          _0x478ebd[_0x1e6c59(0x14c)][_0x1e6c59(0x17f)](_0xc06534);
      }
      if (_0x193e65) {
        const _0x199ee4 = await localStorage[_0x1e6c59(0x168)](_0x193e65),
          _0x198777 = await cloudStorage[_0x1e6c59(0x161)](_0x199ee4);
        await localStorage[_0x1e6c59(0x179)](_0x199ee4["path"]),
          _0x478ebd[_0x1e6c59(0x14c)]["push"](_0x198777);
      }
      if (_0x4592fb) {
        const _0x38dbb8 = await localStorage[_0x1e6c59(0x168)](_0x4592fb),
          _0x14d0f8 = await cloudStorage[_0x1e6c59(0x161)](_0x38dbb8);
        await localStorage[_0x1e6c59(0x179)](_0x38dbb8[_0x1e6c59(0x176)]),
          _0x478ebd[_0x1e6c59(0x14c)][_0x1e6c59(0x17f)](_0x14d0f8);
      }
      if (_0x55d559) {
        const _0x2515f9 = await localStorage[_0x1e6c59(0x168)](_0x55d559),
          _0x1d5f30 = await cloudStorage[_0x1e6c59(0x161)](_0x2515f9);
        await localStorage[_0x1e6c59(0x179)](_0x2515f9[_0x1e6c59(0x176)]),
          _0x478ebd[_0x1e6c59(0x14c)][_0x1e6c59(0x17f)](_0x1d5f30);
      }
      if (_0xd33c65) {
        const _0xd956f6 = await localStorage["storeFile"](_0xd33c65),
          _0x489aed = await cloudStorage[_0x1e6c59(0x161)](_0xd956f6);
        await localStorage[_0x1e6c59(0x179)](_0xd956f6[_0x1e6c59(0x176)]),
          _0x478ebd[_0x1e6c59(0x14c)][_0x1e6c59(0x17f)](_0x489aed);
      }
      return (
        await _0x478ebd["save"](),
        (_0x24ea25[_0x1e6c59(0x18e)][_0x1e6c59(0x18d)] =
          _0x24ea25[_0x1e6c59(0x18e)][_0x1e6c59(0x18d)] + 0x1),
        await _0x24ea25[_0x1e6c59(0x18c)](),
        _0x478ebd
      );
    } catch (_0x1790e2) {
      throw _0x1790e2;
    }
  }),
  (module[_0x317931(0x17a)][_0x317931(0x16c)] = async (_0x17ffed) => {
    const _0x53fe1f = _0x317931;
    try {
      const _0x1c5743 = await PurchaseCar[_0x53fe1f(0x159)](_0x17ffed);
      if (!_0x1c5743) {
        const _0x206bc9 = httpStatus[_0x53fe1f(0x167)],
          _0x281af5 = errors[_0x53fe1f(0x155)]["notFound"];
        throw new ApiError(_0x206bc9, _0x281af5);
      }
      if (!_0x1c5743[_0x53fe1f(0x160)]()) {
        const _0x231c75 = httpStatus[_0x53fe1f(0x17c)],
          _0x4f137b = errors[_0x53fe1f(0x155)][_0x53fe1f(0x165)];
        throw new ApiError(_0x231c75, _0x4f137b);
      }
      if (_0x1c5743[_0x53fe1f(0x187)]()) {
        const _0x47eb38 = httpStatus[_0x53fe1f(0x14e)],
          _0x45b1f4 = errors[_0x53fe1f(0x155)]["alreadySold"];
        throw new ApiError(_0x47eb38, _0x45b1f4);
      }
      return (
        _0x1c5743[_0x53fe1f(0x16f)](),
        await _0x1c5743[_0x53fe1f(0x18c)](),
        _0x1c5743
      );
    } catch (_0x201983) {
      throw _0x201983;
    }
  });
