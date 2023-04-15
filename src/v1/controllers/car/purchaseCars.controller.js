function _0x1946(_0x5a7298, _0x5c67e8) {
  const _0x39c83c = _0x39c8();
  return (
    (_0x1946 = function (_0x194676, _0x192b86) {
      _0x194676 = _0x194676 - 0x157;
      let _0x34f89c = _0x39c83c[_0x194676];
      return _0x34f89c;
    }),
    _0x1946(_0x5a7298, _0x5c67e8)
  );
}
const _0x15ccc8 = _0x1946;
(function (_0x36b822, _0x2f0b0a) {
  const _0x17bc7f = _0x1946,
    _0x27ef46 = _0x36b822();
  while (!![]) {
    try {
      const _0x2ad231 =
        -parseInt(_0x17bc7f(0x170)) / 0x1 +
        (parseInt(_0x17bc7f(0x15a)) / 0x2) *
          (-parseInt(_0x17bc7f(0x189)) / 0x3) +
        (parseInt(_0x17bc7f(0x17c)) / 0x4) *
          (parseInt(_0x17bc7f(0x158)) / 0x5) +
        -parseInt(_0x17bc7f(0x15d)) / 0x6 +
        -parseInt(_0x17bc7f(0x185)) / 0x7 +
        -parseInt(_0x17bc7f(0x15b)) / 0x8 +
        (-parseInt(_0x17bc7f(0x18c)) / 0x9) *
          (-parseInt(_0x17bc7f(0x17e)) / 0xa);
      if (_0x2ad231 === _0x2f0b0a) break;
      else _0x27ef46["push"](_0x27ef46["shift"]());
    } catch (_0x185e6e) {
      _0x27ef46["push"](_0x27ef46["shift"]());
    }
  }
})(_0x39c8, 0x7635c);
const { CLIENT_SCHEMA: purchaseCarSchema } = require(_0x15ccc8(0x169)),
  { purchaseCarsService, usersService, fatoraService } = require(_0x15ccc8(
    0x172
  )),
  httpStatus = require("http-status"),
  _ = require(_0x15ccc8(0x183)),
  { errors, success } = require("../../config"),
  { ApiError } = require(_0x15ccc8(0x179)),
  { notifications } = require(_0x15ccc8(0x187));
function _0x39c8() {
  const _0x417f46 = [
    "result",
    "addPurchaseCar",
    "findPurchaseCarById",
    "getRecentlyArrivedPurchaseCars",
    "../../models/car/purchaseCar.model",
    "purchaseCars",
    "files",
    "verifyFatoraTransaction",
    "postAddedForAdmin",
    "purchaseCar",
    "bankTransactionId",
    "378285VuqNiJ",
    "photo6",
    "../../services",
    "pick",
    "json",
    "transaction_id",
    "getBestSellerPurchaseCars",
    "checkout_url",
    "status",
    "../../middleware/apiError",
    "photos",
    "searchPurchaseCars",
    "8fjwCQD",
    "body",
    "160iOkiJg",
    "deletePurchaseCar",
    "photo3",
    "SUCCESS",
    "user",
    "lodash",
    "getMyPurchaseCars",
    "3261104urJGjM",
    "txt/url",
    "../../config",
    "payment_status",
    "57APRoMS",
    "somethingWrong",
    "photo2",
    "1561644AaERmF",
    "notPaid",
    "postCostPaid",
    "photo5",
    "payPurchaseCarPostCost",
    "exports",
    "INTERNAL_SERVER_ERROR",
    "FORBIDDEN",
    "photo4",
    "99895NknMtg",
    "params",
    "62728nyuWdd",
    "3855392pFAFhm",
    "query",
    "2460174YhOccf",
    "save",
    "postAddedForUser",
    "fatora",
    "markPurchaseCarAsSold",
    "map",
    "_id",
    "invoiceURL",
  ];
  _0x39c8 = function () {
    return _0x417f46;
  };
  return _0x39c8();
}
(module[_0x15ccc8(0x191)]["getPurchaseCarDetails"] = async (
  _0x271155,
  _0x1e4fb6,
  _0x26e634
) => {
  const _0x37936c = _0x15ccc8;
  try {
    const { carId: _0x2f028b } = _0x271155["params"],
      _0x54a010 = await purchaseCarsService["getPurchaseCarDetails"](_0x2f028b),
      _0x4b0dba = _["pick"](_0x54a010, purchaseCarSchema);
    _0x1e4fb6[_0x37936c(0x178)](httpStatus["OK"])[_0x37936c(0x174)](_0x4b0dba);
  } catch (_0x565f62) {
    _0x26e634(_0x565f62);
  }
}),
  (module[_0x15ccc8(0x191)][_0x15ccc8(0x168)] = async (
    _0x477058,
    _0x1505eb,
    _0x501b9c
  ) => {
    const _0x41ced6 = _0x15ccc8;
    try {
      const { page: _0x1444c2, limit: _0x115f7a } = _0x477058[_0x41ced6(0x15c)],
        {
          currentPage: _0x5e5ee8,
          totalPages: _0x95e769,
          purchaseCars: _0x185bc2,
        } = await purchaseCarsService["getRecentlyArrivedPurchaseCars"](
          _0x1444c2,
          _0x115f7a
        ),
        _0x12f480 = {
          currentPage: _0x5e5ee8,
          totalPages: _0x95e769,
          purchaseCars: _0x185bc2[_0x41ced6(0x162)]((_0x471b0d) =>
            _[_0x41ced6(0x173)](_0x471b0d, purchaseCarSchema)
          ),
        };
      _0x1505eb["status"](httpStatus["OK"])[_0x41ced6(0x174)](_0x12f480);
    } catch (_0x1d5731) {
      _0x501b9c(_0x1d5731);
    }
  }),
  (module[_0x15ccc8(0x191)]["getLatestModelsPurchaseCars"] = async (
    _0x357dbc,
    _0x3807a0,
    _0x47336a
  ) => {
    const _0x18bd79 = _0x15ccc8;
    try {
      const { page: _0x172d82, limit: _0x21da1b } = _0x357dbc["query"],
        {
          currentPage: _0x4c8401,
          totalPages: _0x535bad,
          purchaseCars: _0x30b836,
        } = await purchaseCarsService["getLatestModelsPurchaseCars"](
          _0x172d82,
          _0x21da1b
        ),
        _0x221337 = {
          currentPage: _0x4c8401,
          totalPages: _0x535bad,
          purchaseCars: _0x30b836[_0x18bd79(0x162)]((_0x5e0883) =>
            _[_0x18bd79(0x173)](_0x5e0883, purchaseCarSchema)
          ),
        };
      _0x3807a0[_0x18bd79(0x178)](httpStatus["OK"])["json"](_0x221337);
    } catch (_0x5e7948) {
      _0x47336a(_0x5e7948);
    }
  }),
  (module["exports"][_0x15ccc8(0x176)] = async (
    _0x2ef27d,
    _0x3748ce,
    _0x398dee
  ) => {
    const _0x27129c = _0x15ccc8;
    try {
      const { page: _0x88e3b1, limit: _0x349745 } = _0x2ef27d[_0x27129c(0x15c)],
        {
          currentPage: _0x5de818,
          totalPages: _0x48b4d5,
          purchaseCars: _0x3e5aec,
        } = await purchaseCarsService["getBestSellerPurchaseCars"](
          _0x88e3b1,
          _0x349745
        ),
        _0x3425e0 = {
          currentPage: _0x5de818,
          totalPages: _0x48b4d5,
          purchaseCars: _0x3e5aec[_0x27129c(0x162)]((_0x2de01c) =>
            _[_0x27129c(0x173)](_0x2de01c, purchaseCarSchema)
          ),
        };
      _0x3748ce[_0x27129c(0x178)](httpStatus["OK"])[_0x27129c(0x174)](
        _0x3425e0
      );
    } catch (_0x5e8a10) {
      _0x398dee(_0x5e8a10);
    }
  }),
  (module["exports"][_0x15ccc8(0x17b)] = async (
    _0x2b0b55,
    _0x136b40,
    _0x231f52
  ) => {
    const _0x50ec6f = _0x15ccc8;
    try {
      const {
          page: _0x412f39,
          limit: _0xb37e72,
          searchTerm: _0x35a73b,
          minPrice: _0x2231e0,
          maxPrice: _0x154d22,
          brands: _0x11ce90,
          colors: _0x1b9bf4,
          years: _0x5652b0,
        } = _0x2b0b55[_0x50ec6f(0x17d)],
        {
          currentPage: _0x1e47c2,
          totalPages: _0x524e4b,
          purchaseCars: _0x35f1e6,
        } = await purchaseCarsService[_0x50ec6f(0x17b)](
          _0x35a73b,
          _0x412f39,
          _0xb37e72,
          _0x2231e0,
          _0x154d22,
          _0x11ce90,
          _0x1b9bf4,
          _0x5652b0
        ),
        _0x22ae8e = {
          currentPage: _0x1e47c2,
          totalPages: _0x524e4b,
          purchaseCars: _0x35f1e6[_0x50ec6f(0x162)]((_0x155c5b) =>
            _[_0x50ec6f(0x173)](_0x155c5b, purchaseCarSchema)
          ),
        };
      _0x136b40["status"](httpStatus["OK"])["json"](_0x22ae8e);
    } catch (_0x55a0b2) {
      _0x231f52(_0x55a0b2);
    }
  }),
  (module[_0x15ccc8(0x191)][_0x15ccc8(0x184)] = async (
    _0x568ad9,
    _0x13ffa9,
    _0x1af598
  ) => {
    const _0x426011 = _0x15ccc8;
    try {
      const _0x394163 = _0x568ad9[_0x426011(0x182)],
        { page: _0x2d4c8a, limit: _0x14882a } = _0x568ad9[_0x426011(0x15c)],
        {
          currentPage: _0x57e818,
          totalPages: _0x1f82a4,
          purchaseCars: _0x3c1be4,
        } = await purchaseCarsService[_0x426011(0x184)](
          _0x394163,
          _0x2d4c8a,
          _0x14882a
        ),
        _0x38442e = {
          currentPage: _0x57e818,
          totalPages: _0x1f82a4,
          purchaseCars: _0x3c1be4[_0x426011(0x162)]((_0x53699b) =>
            _["pick"](_0x53699b, purchaseCarSchema)
          ),
        };
      _0x13ffa9["status"](httpStatus["OK"])[_0x426011(0x174)](_0x38442e);
    } catch (_0x20e16b) {
      _0x1af598(_0x20e16b);
    }
  }),
  (module[_0x15ccc8(0x191)][_0x15ccc8(0x166)] = async (
    _0x505a68,
    _0x4ddda2,
    _0x2bc99f
  ) => {
    const _0x5e4d2d = _0x15ccc8;
    try {
      const _0x512280 = _0x505a68[_0x5e4d2d(0x182)],
        {
          carName: _0x289ad1,
          vin: _0x47dd9f,
          model: _0x12133d,
          brandId: _0x1549d3,
          year: _0x39d0c6,
          colorEN: _0x4c2eb0,
          colorAR: _0x959445,
          trimLevel: _0x3c8fe7,
          vehicleTypeEN: _0x54847b,
          vehicleTypeAR: _0x3abe1f,
          fuelTypeEN: _0x5f542d,
          fuelTypeAR: _0x577532,
          noOfSeats: _0x1ec9a0,
          kiloPerHour: _0x4b3387,
          price: _0x548a01,
          phoneICC: _0x9db353,
          phoneNSN: _0x383e6c,
          description: _0x1a82cd,
        } = _0x505a68[_0x5e4d2d(0x17d)],
        _0x289f01 = _0x505a68?.[_0x5e4d2d(0x16b)]?.["photo1"],
        _0x4056d1 = _0x505a68?.[_0x5e4d2d(0x16b)]?.[_0x5e4d2d(0x18b)],
        _0x4e769a = _0x505a68?.[_0x5e4d2d(0x16b)]?.[_0x5e4d2d(0x180)],
        _0x1f255d = _0x505a68?.["files"]?.[_0x5e4d2d(0x157)],
        _0x3020d6 = _0x505a68?.[_0x5e4d2d(0x16b)]?.[_0x5e4d2d(0x18f)],
        _0x5085b2 = _0x505a68?.[_0x5e4d2d(0x16b)]?.[_0x5e4d2d(0x171)],
        _0x5407a5 = 0x64 * 1.025,
        _0x2683ab = await purchaseCarsService["addPurchaseCar"](
          _0x512280,
          _0x289ad1,
          _0x47dd9f,
          _0x12133d,
          _0x1549d3,
          _0x39d0c6,
          _0x4c2eb0,
          _0x959445,
          _0x3c8fe7,
          _0x54847b,
          _0x3abe1f,
          _0x5f542d,
          _0x577532,
          _0x1ec9a0,
          _0x4b3387,
          _0x548a01,
          _0x9db353,
          _0x383e6c,
          _0x1a82cd,
          _0x289f01,
          _0x4056d1,
          _0x4e769a,
          _0x1f255d,
          _0x3020d6,
          _0x5085b2
        ),
        _0x48cf37 = async (_0x53692c) => {
          const _0x3645cc = _0x5e4d2d;
          try {
            const _0x30c178 = _0x53692c[_0x3645cc(0x165)][_0x3645cc(0x177)];
            (_0x2683ab[_0x3645cc(0x164)] = _0x30c178),
              await _0x2683ab[_0x3645cc(0x15e)]();
            const _0x344c0e = {
              type: _0x3645cc(0x186),
              path: _0x30c178,
              carId: _0x2683ab[_0x3645cc(0x163)],
            };
            _0x4ddda2[_0x3645cc(0x178)](httpStatus["OK"])[_0x3645cc(0x174)](
              _0x344c0e
            );
          } catch (_0x55df73) {
            _0x2bc99f(_0x55df73);
          }
        },
        _0x536e24 = async (_0x2b5906) => {
          const _0x50ba65 = _0x5e4d2d;
          try {
            await purchaseCarsService[_0x50ba65(0x17f)](
              _0x2683ab[_0x50ba65(0x163)]
            );
            const _0x34b845 = httpStatus[_0x50ba65(0x192)],
              _0x32b47c = errors[_0x50ba65(0x160)][_0x50ba65(0x18a)];
            throw new ApiError(_0x34b845, _0x32b47c);
          } catch (_0x143dfc) {
            _0x2bc99f(_0x143dfc);
          }
        };
      fatoraService["addFatoraTransaction"](
        _0x512280,
        _0x5407a5,
        _0x2683ab[_0x5e4d2d(0x163)],
        _0x48cf37,
        _0x536e24
      );
    } catch (_0x292405) {
      _0x2bc99f(_0x292405);
    }
  }),
  (module["exports"][_0x15ccc8(0x190)] = async (
    _0x31b0a9,
    _0x389f2b,
    _0x31f6c7
  ) => {
    const _0x10abeb = _0x15ccc8;
    try {
      const _0x3c0974 = _0x31b0a9["user"],
        { carId: _0x5a6f6d } = _0x31b0a9[_0x10abeb(0x159)],
        _0x503a4f = await purchaseCarsService[_0x10abeb(0x167)](_0x5a6f6d),
        _0x37bc9a = async (_0x5bc203) => {
          const _0x5d1b00 = _0x10abeb;
          try {
            const _0x526a47 = _0x5bc203[_0x5d1b00(0x165)][_0x5d1b00(0x188)],
              _0x29f25d = _0x5bc203["result"][_0x5d1b00(0x175)];
            (_0x503a4f[_0x5d1b00(0x16f)] = _0x29f25d),
              await _0x503a4f["save"]();
            if (_0x526a47 !== _0x5d1b00(0x181)) {
              const _0x15173e = httpStatus[_0x5d1b00(0x193)],
                _0x64727f = errors[_0x5d1b00(0x160)][_0x5d1b00(0x18d)],
                _0x2c260a = new ApiError(_0x15173e, _0x64727f);
              return _0x31f6c7(_0x2c260a);
            }
            _0x503a4f["markAsPaid"](), await _0x503a4f[_0x5d1b00(0x15e)]();
            const _0x1ff74f = notifications[_0x5d1b00(0x16a)][_0x5d1b00(0x16d)](
              _0x503a4f[_0x5d1b00(0x17a)][0x0],
              _0x503a4f[_0x5d1b00(0x163)]
            );
            await usersService["sendNotificationToAdmins"](_0x1ff74f);
            const _0x194177 = notifications[_0x5d1b00(0x16a)][_0x5d1b00(0x15f)](
              _0x503a4f[_0x5d1b00(0x17a)][0x0],
              _0x503a4f[_0x5d1b00(0x163)]
            );
            await usersService["sendNotification"](
              [_0x3c0974[_0x5d1b00(0x163)]],
              _0x194177
            );
            const _0x437751 = success[_0x5d1b00(0x16e)][_0x5d1b00(0x18e)];
            _0x389f2b[_0x5d1b00(0x178)](httpStatus["OK"])[_0x5d1b00(0x174)](
              _0x437751
            );
          } catch (_0xe7e0de) {
            _0x31f6c7(_0xe7e0de);
          }
        },
        _0x323ccb = async (_0x451e8f) => {
          const _0x5b91d0 = _0x10abeb;
          try {
            const _0x1fcc07 = httpStatus["INTERNAL_SERVER_ERROR"],
              _0x3d6ad2 = errors[_0x5b91d0(0x160)][_0x5b91d0(0x18a)];
            throw new ApiError(_0x1fcc07, _0x3d6ad2);
          } catch (_0x2dba64) {
            _0x31f6c7(_0x2dba64);
          }
        };
      fatoraService[_0x10abeb(0x16c)](
        _0x503a4f[_0x10abeb(0x163)],
        _0x503a4f[_0x10abeb(0x16f)],
        _0x37bc9a,
        _0x323ccb
      );
    } catch (_0x1f5c3b) {
      _0x31f6c7(_0x1f5c3b);
    }
  }),
  (module[_0x15ccc8(0x191)][_0x15ccc8(0x161)] = async (
    _0x253632,
    _0x4fcc91,
    _0x1e5b39
  ) => {
    const _0x473799 = _0x15ccc8;
    try {
      const { carId: _0x900444 } = _0x253632[_0x473799(0x159)],
        _0x192c91 = await purchaseCarsService[_0x473799(0x161)](_0x900444),
        _0x5db869 = _["pick"](_0x192c91, purchaseCarSchema);
      _0x4fcc91["status"](httpStatus["OK"])[_0x473799(0x174)](_0x5db869);
    } catch (_0x2a089b) {
      _0x1e5b39(_0x2a089b);
    }
  });
