function _0x3681(_0x323116, _0x15f74c) {
  const _0x37ebf5 = _0x37eb();
  return (
    (_0x3681 = function (_0x368105, _0x86d649) {
      _0x368105 = _0x368105 - 0x140;
      let _0x25ddcd = _0x37ebf5[_0x368105];
      return _0x25ddcd;
    }),
    _0x3681(_0x323116, _0x15f74c)
  );
}
const _0x2dd371 = _0x3681;
(function (_0x1a44c4, _0x285494) {
  const _0x3d23e2 = _0x3681,
    _0x4d762f = _0x1a44c4();
  while (!![]) {
    try {
      const _0x49f40d =
        parseInt(_0x3d23e2(0x1ed)) / 0x1 +
        (-parseInt(_0x3d23e2(0x195)) / 0x2) *
          (parseInt(_0x3d23e2(0x185)) / 0x3) +
        (-parseInt(_0x3d23e2(0x155)) / 0x4) *
          (parseInt(_0x3d23e2(0x197)) / 0x5) +
        (parseInt(_0x3d23e2(0x1e3)) / 0x6) *
          (-parseInt(_0x3d23e2(0x1d3)) / 0x7) +
        parseInt(_0x3d23e2(0x1cc)) / 0x8 +
        parseInt(_0x3d23e2(0x169)) / 0x9 +
        (-parseInt(_0x3d23e2(0x1a0)) / 0xa) *
          (-parseInt(_0x3d23e2(0x1af)) / 0xb);
      if (_0x49f40d === _0x285494) break;
      else _0x4d762f["push"](_0x4d762f["shift"]());
    } catch (_0x7eaa41) {
      _0x4d762f["push"](_0x4d762f["shift"]());
    }
  }
})(_0x37eb, 0x7ef6d);
const { check, validationResult } = require(_0x2dd371(0x16b)),
  httpStatus = require(_0x2dd371(0x140)),
  { ApiError } = require("../apiError"),
  errors = require("../../config/errors"),
  { server } = require(_0x2dd371(0x19b)),
  countries = require("../../data/countries.json"),
  carsData = require(_0x2dd371(0x194)),
  {
    isValidObjectId,
    Types: { ObjectId },
  } = require(_0x2dd371(0x165)),
  {
    user: userValidation,
    rentCar: rentCarValidation,
    purchaseCar: purchaseCarValidation,
    brand: brandValidation,
    rentOrder: rentOrderValidation,
    price: priceValidation,
  } = require(_0x2dd371(0x174)),
  putQueryParamsInBody = (_0x16baf2, _0x15f5f9, _0x580cca) => {
    const _0x38ad62 = _0x2dd371;
    (_0x16baf2[_0x38ad62(0x1d9)] = {
      ..._0x16baf2[_0x38ad62(0x1d9)],
      ..._0x16baf2["query"],
    }),
      _0x580cca();
  },
  next = (_0x3874cf, _0x4e6d94, _0xc337a1) => {
    const _0x3d2986 = _0x2dd371,
      _0x2e4bdf = validationResult(_0x3874cf);
    if (!_0x2e4bdf[_0x3d2986(0x1ea)]()) {
      const _0x2d7727 = httpStatus[_0x3d2986(0x1ab)],
        _0x33e1c7 = _0x2e4bdf[_0x3d2986(0x1b5)]()[0x0][_0x3d2986(0x1e5)],
        _0x29d5b0 = new ApiError(_0x2d7727, _0x33e1c7);
      return _0xc337a1(_0x29d5b0);
    }
    _0xc337a1();
  },
  checkDeviceToken = check(_0x2dd371(0x1de))
    [_0x2dd371(0x167)]()
    ["isLength"]({
      min: userValidation[_0x2dd371(0x1de)][_0x2dd371(0x150)],
      max: userValidation[_0x2dd371(0x1de)][_0x2dd371(0x158)],
    })
    ["withMessage"](errors["auth"]["invalidDeviceToken"]),
  checkEmailOrPhone = check(_0x2dd371(0x1bc))
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1ad)]({
      min: Math["min"](
        userValidation["email"][_0x2dd371(0x150)],
        countries[_0x2dd371(0x162)]
      ),
      max: Math[_0x2dd371(0x14d)](
        userValidation[_0x2dd371(0x148)]["maxLength"],
        countries[_0x2dd371(0x1bb)]
      ),
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x146)][_0x2dd371(0x1d2)])
    [_0x2dd371(0x182)](),
  checkEmail = check(_0x2dd371(0x148))
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x144)]()
    [_0x2dd371(0x1ad)]({
      min: userValidation[_0x2dd371(0x148)][_0x2dd371(0x150)],
      max: userValidation[_0x2dd371(0x148)][_0x2dd371(0x158)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x146)]["invalidEmail"])
    ["bail"](),
  checkAuthType = check("authType")
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1cf)](userValidation["authTypes"])
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1b4)]["invalidAuthType"]),
  checkPassword = check(_0x2dd371(0x1ec))
    ["trim"]()
    [_0x2dd371(0x1ad)]({
      min: userValidation[_0x2dd371(0x1ec)][_0x2dd371(0x150)],
      max: userValidation[_0x2dd371(0x1ec)][_0x2dd371(0x158)],
    })
    [_0x2dd371(0x175)](errors["auth"][_0x2dd371(0x17f)]),
  checkOldPassword = check(_0x2dd371(0x142))
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1ad)]({
      min: userValidation["password"][_0x2dd371(0x150)],
      max: userValidation[_0x2dd371(0x1ec)][_0x2dd371(0x158)],
    })
    ["withMessage"](errors[_0x2dd371(0x146)][_0x2dd371(0x17f)]),
  checkNewPassword = check(_0x2dd371(0x198))
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1ad)]({
      min: userValidation[_0x2dd371(0x1ec)]["minLength"],
      max: userValidation[_0x2dd371(0x1ec)][_0x2dd371(0x158)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x146)]["invalidPassword"]),
  checkCode = check(_0x2dd371(0x1e2))
    [_0x2dd371(0x1ad)]({
      min: userValidation["verificationCode"]["exactLength"],
      max: userValidation[_0x2dd371(0x19a)][_0x2dd371(0x192)],
    })
    ["withMessage"](errors["auth"][_0x2dd371(0x1b9)]),
  checkLanguage = check(_0x2dd371(0x188))
    [_0x2dd371(0x167)]()
    ["notEmpty"]()
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1b4)][_0x2dd371(0x14e)])
    ["isIn"](server[_0x2dd371(0x199)])
    [_0x2dd371(0x175)](errors["user"][_0x2dd371(0x1c6)]),
  checkName = check("name")
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1ad)]({
      min: userValidation["name"]["minLength"],
      max: userValidation[_0x2dd371(0x1dc)]["maxLength"],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x146)][_0x2dd371(0x18b)]),
  checkRole = (_0x349290 = ![]) =>
    _0x349290
      ? check(_0x2dd371(0x196))
          [_0x2dd371(0x167)]()
          [_0x2dd371(0x1cf)](
            userValidation[_0x2dd371(0x16d)][_0x2dd371(0x15a)](
              (_0x415c5f) => _0x415c5f !== _0x2dd371(0x16f)
            )
          )
          [_0x2dd371(0x175)](errors[_0x2dd371(0x1b4)][_0x2dd371(0x1ca)])
      : check(_0x2dd371(0x196))
          [_0x2dd371(0x167)]()
          [_0x2dd371(0x1cf)](userValidation[_0x2dd371(0x16d)])
          [_0x2dd371(0x175)](errors[_0x2dd371(0x1b4)][_0x2dd371(0x1ca)]),
  checkRegisterRole = check(_0x2dd371(0x196))
    ["trim"]()
    [_0x2dd371(0x1cf)](userValidation[_0x2dd371(0x191)])
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1b4)][_0x2dd371(0x1ca)]),
  checkPhoneICC = check(_0x2dd371(0x16c))
    [_0x2dd371(0x1cf)](
      countries[_0x2dd371(0x1db)][_0x2dd371(0x179)](
        (_0x26895c) => _0x26895c["icc"]
      )
    )
    [_0x2dd371(0x175)](errors["auth"][_0x2dd371(0x1bd)]),
  checkPhoneNSN = check(_0x2dd371(0x1e6))
    [_0x2dd371(0x164)]()
    [_0x2dd371(0x175)](errors[_0x2dd371(0x146)][_0x2dd371(0x17c)])
    [_0x2dd371(0x1ad)]({
      min: countries[_0x2dd371(0x190)],
      max: countries[_0x2dd371(0x1a4)],
    })
    ["withMessage"](errors[_0x2dd371(0x146)][_0x2dd371(0x17c)]),
  conditionalCheck =
    (_0x39baad, _0x17d887) => (_0x29d266, _0x1f7a5d, _0x4c432a) =>
      _0x29d266[_0x2dd371(0x1d9)][_0x39baad]
        ? _0x17d887(_0x29d266, _0x1f7a5d, _0x4c432a)
        : _0x4c432a(),
  checkFile =
    (_0x1cc8aa, _0x2c95f6, _0x36bc9e = !![]) =>
    (_0x365b2f, _0x9ddbfc, _0x26351e) => {
      const _0x5b03bc = _0x2dd371;
      if (
        !_0x36bc9e &&
        (!_0x365b2f["files"] || !_0x365b2f[_0x5b03bc(0x19c)][_0x1cc8aa])
      )
        return _0x26351e();
      if (
        _0x36bc9e &&
        (!_0x365b2f["files"] || !_0x365b2f[_0x5b03bc(0x19c)][_0x1cc8aa])
      ) {
        const _0xe36138 = httpStatus["BAD_REQUEST"],
          _0x6b8eb7 = errors[_0x5b03bc(0x17b)][_0x5b03bc(0x1a6)],
          _0x351313 = new ApiError(_0xe36138, _0x6b8eb7);
        return _0x26351e(_0x351313);
      }
      const _0x913b33 =
        _0x365b2f[_0x5b03bc(0x19c)][_0x1cc8aa][_0x5b03bc(0x1dc)][
          _0x5b03bc(0x1a1)
        ](".")[0x1];
      if (!_0x2c95f6[_0x5b03bc(0x1da)](_0x913b33)) {
        const _0x3064e0 = httpStatus[_0x5b03bc(0x1ab)],
          _0x4332d8 = errors[_0x5b03bc(0x17b)][_0x5b03bc(0x193)],
          _0x531b76 = new ApiError(_0x3064e0, _0x4332d8);
        return _0x26351e(_0x531b76);
      }
      _0x26351e();
    },
  checkSkip = check(_0x2dd371(0x1bf))
    [_0x2dd371(0x167)]()
    ["isNumeric"]()
    [_0x2dd371(0x175)](errors[_0x2dd371(0x17b)][_0x2dd371(0x180)]),
  checkPage = check("page")
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x164)]()
    [_0x2dd371(0x175)](errors[_0x2dd371(0x17b)][_0x2dd371(0x183)]),
  checkLimit = check(_0x2dd371(0x14f))
    [_0x2dd371(0x167)]()
    ["isNumeric"]()
    [_0x2dd371(0x175)](errors[_0x2dd371(0x17b)][_0x2dd371(0x143)]),
  checkCarId = check(_0x2dd371(0x1c7))
    ["isMongoId"]()
    ["withMessage"](errors["system"]["invalidCarId"]),
  checkOrderId = check(_0x2dd371(0x160))
    [_0x2dd371(0x1b2)]()
    [_0x2dd371(0x175)](errors[_0x2dd371(0x17b)][_0x2dd371(0x187)]),
  checkRejectionReason = check(_0x2dd371(0x189))
    ["isLength"]({
      min: rentOrderValidation[_0x2dd371(0x170)][_0x2dd371(0x150)],
      max: rentOrderValidation[_0x2dd371(0x170)][_0x2dd371(0x158)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1d8)]["invalidRejectionReason"]),
  checkRentCarName = check(_0x2dd371(0x1c1))
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1ad)]({
      min: rentCarValidation[_0x2dd371(0x1dc)]["minLength"],
      max: rentCarValidation[_0x2dd371(0x1dc)]["maxLength"],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1aa)][_0x2dd371(0x18b)]),
  checkRentCarModel = check(_0x2dd371(0x15e))
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1ad)]({
      min: rentCarValidation[_0x2dd371(0x15e)][_0x2dd371(0x150)],
      max: rentCarValidation["model"][_0x2dd371(0x158)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1aa)]["invalidModel"]),
  checkRentCarENColor = check(_0x2dd371(0x159))
    [_0x2dd371(0x167)]()
    ["isIn"](carsData[_0x2dd371(0x153)]["EN"])
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1aa)][_0x2dd371(0x1d7)]),
  checkRentCarARColor = check(_0x2dd371(0x14c))
    ["isIn"](carsData["COLORS"]["AR"])
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1aa)][_0x2dd371(0x149)]),
  checkRentCarENBrand = check("brandEN")
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1ad)]({
      min: brandValidation[_0x2dd371(0x1dc)][_0x2dd371(0x150)],
      max: brandValidation[_0x2dd371(0x1dc)][_0x2dd371(0x158)],
    })
    ["withMessage"](errors[_0x2dd371(0x1aa)][_0x2dd371(0x1eb)]),
  checkRentCarARBrand = check(_0x2dd371(0x18d))
    ["trim"]()
    [_0x2dd371(0x1ad)]({
      min: brandValidation[_0x2dd371(0x1dc)][_0x2dd371(0x150)],
      max: brandValidation[_0x2dd371(0x1dc)]["maxLength"],
    })
    ["withMessage"](errors["rentCar"][_0x2dd371(0x186)]),
  checkRentCarYear = check("year")
    ["trim"]()
    [_0x2dd371(0x1cf)](carsData[_0x2dd371(0x1c4)])
    ["withMessage"](errors[_0x2dd371(0x1aa)][_0x2dd371(0x1d6)]),
  checkRentCarDailyPrice = check(_0x2dd371(0x1a2))
    [_0x2dd371(0x176)]({
      min: rentCarValidation[_0x2dd371(0x181)]["daily"][_0x2dd371(0x156)],
      max: rentCarValidation["price"]["daily"][_0x2dd371(0x14d)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1aa)][_0x2dd371(0x19d)]),
  checkRentCarWeeklyPrice = check(_0x2dd371(0x1a7))
    ["isInt"]({
      min: rentCarValidation[_0x2dd371(0x181)][_0x2dd371(0x1b3)][
        _0x2dd371(0x156)
      ],
      max: rentCarValidation[_0x2dd371(0x181)]["weekly"][_0x2dd371(0x14d)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1aa)][_0x2dd371(0x154)]),
  checkRentCarMonthlyPrice = check("monthlyPrice")
    [_0x2dd371(0x176)]({
      min: rentCarValidation[_0x2dd371(0x181)][_0x2dd371(0x147)][
        _0x2dd371(0x156)
      ],
      max: rentCarValidation[_0x2dd371(0x181)]["monthly"][_0x2dd371(0x14d)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1aa)][_0x2dd371(0x184)]),
  checkRentCarDeposit = check("deposit")
    ["isInt"]({
      min: rentCarValidation[_0x2dd371(0x181)][_0x2dd371(0x1c2)][
        _0x2dd371(0x156)
      ],
      max: rentCarValidation[_0x2dd371(0x181)][_0x2dd371(0x1c2)][
        _0x2dd371(0x14d)
      ],
    })
    ["withMessage"](errors[_0x2dd371(0x1aa)]["invalidDeposit"]),
  checkRentCarDescription = check("description")
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1ad)]({
      min: rentCarValidation[_0x2dd371(0x17e)][_0x2dd371(0x150)],
      max: rentCarValidation[_0x2dd371(0x17e)]["maxLength"],
    })
    [_0x2dd371(0x175)](errors["rentCar"]["invalidDescription"]),
  checkSearchTerm = check(_0x2dd371(0x1cb))
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1ad)]({
      min: rentCarValidation["searchTerm"][_0x2dd371(0x150)],
      max: rentCarValidation["searchTerm"][_0x2dd371(0x158)],
    })
    [_0x2dd371(0x175)](errors["rentCar"][_0x2dd371(0x161)]),
  checkRentCarSearchMinPrice = check(_0x2dd371(0x1e8))
    [_0x2dd371(0x164)]()
    ["withMessage"](errors[_0x2dd371(0x1aa)][_0x2dd371(0x1ac)]),
  checkRentCarSearchMaxPrice = check("maxPrice")
    [_0x2dd371(0x164)]()
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1aa)][_0x2dd371(0x1ac)]),
  checkSearchBrandsList = (_0x91f46b, _0x503b89, _0x32d79d) => {
    const _0x436177 = _0x2dd371;
    let { brands: _0x5bc388 } = _0x91f46b[_0x436177(0x1d9)];
    if (!_0x5bc388) return _0x32d79d();
    const _0x17cc20 = _0x5bc388[_0x436177(0x1a1)](",")
      ["map"]((_0x3df6f9) => {
        const _0x3429ed = _0x436177;
        try {
          return (
            (_0x3df6f9 = new ObjectId(_0x3df6f9[_0x3429ed(0x167)]())), !![]
          );
        } catch (_0x4c7d3c) {
          return ![];
        }
      })
      ["filter"]((_0x3f9a0f) => isValidObjectId(_0x3f9a0f));
    (_0x91f46b["body"][_0x436177(0x1a5)] = _0x17cc20), _0x32d79d();
  },
  checkSearchColors = (_0x34c5e8, _0x27b0e2, _0x4e44ea) => {
    const _0x4d8859 = _0x2dd371;
    let { colors: _0x16331c } = _0x34c5e8[_0x4d8859(0x1d9)];
    if (!_0x16331c) return _0x4e44ea();
    const _0x1ebf6f = _0x16331c[_0x4d8859(0x1a1)](",")
      [_0x4d8859(0x179)]((_0x1501ff) => _0x1501ff[_0x4d8859(0x167)]())
      ["filter"]((_0x43b73b) =>
        carsData[_0x4d8859(0x153)]["EN"][_0x4d8859(0x1da)](_0x43b73b)
      );
    (_0x34c5e8["body"][_0x4d8859(0x166)] = _0x1ebf6f), _0x4e44ea();
  },
  checkSearchYears = (_0x597670, _0x1cbb21, _0x3c22ad) => {
    const _0x564846 = _0x2dd371;
    let { years: _0x298564 } = _0x597670[_0x564846(0x1d9)];
    if (!_0x298564) return _0x3c22ad();
    const _0x1d9ffc = _0x298564[_0x564846(0x1a1)](",")
      [_0x564846(0x179)]((_0x1b92a4) => _0x1b92a4[_0x564846(0x167)]())
      [_0x564846(0x15a)]((_0x42a688) =>
        carsData["YEARS"][_0x564846(0x1da)](_0x42a688)
      );
    (_0x597670["body"][_0x564846(0x178)] = _0x1d9ffc), _0x3c22ad();
  },
  checkPurchaseCarId = check(_0x2dd371(0x173))
    [_0x2dd371(0x1b2)]()
    [_0x2dd371(0x175)](errors["purchaseCar"][_0x2dd371(0x1e1)]),
  checkPurchaseCarName = check(_0x2dd371(0x1c1))
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1ad)]({
      min: purchaseCarValidation[_0x2dd371(0x1dc)][_0x2dd371(0x150)],
      max: purchaseCarValidation["name"][_0x2dd371(0x158)],
    })
    [_0x2dd371(0x175)](errors["purchaseCar"][_0x2dd371(0x18b)]),
  checkPurchaseCarVIN = check(_0x2dd371(0x1c0))
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1ad)]({
      min: purchaseCarValidation["vin"][_0x2dd371(0x192)],
      max: purchaseCarValidation[_0x2dd371(0x1c0)][_0x2dd371(0x192)],
    })
    ["withMessage"](errors[_0x2dd371(0x1ae)][_0x2dd371(0x15d)]),
  checkPurchaseCarModel = check(_0x2dd371(0x15e))
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1ad)]({
      min: purchaseCarValidation["model"][_0x2dd371(0x150)],
      max: purchaseCarValidation[_0x2dd371(0x15e)][_0x2dd371(0x158)],
    })
    ["withMessage"](errors[_0x2dd371(0x1ae)]["invalidModel"]),
  checkBrand = check(_0x2dd371(0x1b8))
    [_0x2dd371(0x167)]()
    ["isMongoId"]()
    [_0x2dd371(0x175)](errors[_0x2dd371(0x17d)][_0x2dd371(0x1e1)]),
  checkPurchaseCarYear = check(_0x2dd371(0x163))
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1cf)](carsData[_0x2dd371(0x1c4)])
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1ae)]["invalidYear"]),
  checkPurchaseCarENColor = check("colorEN")
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1cf)](carsData[_0x2dd371(0x153)]["EN"])
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1ae)]["invalidENColor"]),
  checkPurchaseCarARColor = check("colorAR")
    ["trim"]()
    [_0x2dd371(0x1cf)](carsData["COLORS"]["AR"])
    ["withMessage"](errors[_0x2dd371(0x1ae)][_0x2dd371(0x149)]),
  checkPurchaseCarTrimeLevel = check("trimLevel")
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1cf)](carsData[_0x2dd371(0x18e)])
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1ae)]["invalidTrimLevel"]),
  checkPurchaseCarENVehicleType = check(_0x2dd371(0x1b6))
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1cf)](carsData["VEHICLE_TYPES"]["EN"])
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1ae)]["invalidENVehicleType"]),
  checkPurchaseCarARVehicleType = check(_0x2dd371(0x15f))
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1cf)](carsData[_0x2dd371(0x145)]["AR"])
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1ae)][_0x2dd371(0x1e7)]),
  checkPurchaseCarENFuelType = check(_0x2dd371(0x1d1))
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1cf)](carsData[_0x2dd371(0x1df)]["EN"])
    [_0x2dd371(0x175)](errors["purchaseCar"]["invalidENFuelType"]),
  checkPurchaseCarARFuelType = check(_0x2dd371(0x1a8))
    [_0x2dd371(0x167)]()
    ["isIn"](carsData[_0x2dd371(0x1df)]["AR"])
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1ae)][_0x2dd371(0x16a)]),
  checkPurchaseCarNoOfSeats = check(_0x2dd371(0x171))
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1cf)](carsData[_0x2dd371(0x1b1)])
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1ae)][_0x2dd371(0x1d4)]),
  checkPurchaseCarKiloPerHour = check(_0x2dd371(0x1c9))
    [_0x2dd371(0x176)]({
      min: purchaseCarValidation["kiloPerHour"][_0x2dd371(0x156)],
      max: purchaseCarValidation[_0x2dd371(0x1c9)][_0x2dd371(0x14d)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1ae)][_0x2dd371(0x19f)]),
  checkPurchaseCarPrice = check(_0x2dd371(0x181))
    ["isInt"]({
      min: purchaseCarValidation[_0x2dd371(0x181)][_0x2dd371(0x156)],
      max: purchaseCarValidation[_0x2dd371(0x181)][_0x2dd371(0x14d)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1ae)][_0x2dd371(0x1ac)]),
  checkPurchaseCarPhoneNumber = check(_0x2dd371(0x18a))
    ["trim"]()
    ["isLength"]({
      min: purchaseCarValidation[_0x2dd371(0x18a)][_0x2dd371(0x150)],
      max: purchaseCarValidation["phoneNumber"][_0x2dd371(0x158)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1ae)][_0x2dd371(0x16e)]),
  checkPurchaseCarDescription = check(_0x2dd371(0x17e))
    [_0x2dd371(0x167)]()
    ["isLength"]({
      min: purchaseCarValidation["description"]["minLength"],
      max: purchaseCarValidation[_0x2dd371(0x17e)][_0x2dd371(0x158)],
    })
    ["withMessage"](errors[_0x2dd371(0x1ae)][_0x2dd371(0x1a9)]),
  checkBrandENName = check("nameEN")
    [_0x2dd371(0x167)]()
    ["isLength"]({
      min: brandValidation["name"][_0x2dd371(0x150)],
      max: brandValidation[_0x2dd371(0x1dc)][_0x2dd371(0x158)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x17d)][_0x2dd371(0x18b)]),
  checkBrandARName = check(_0x2dd371(0x1c8))
    [_0x2dd371(0x167)]()
    [_0x2dd371(0x1ad)]({
      min: brandValidation["name"]["minLength"],
      max: brandValidation[_0x2dd371(0x1dc)][_0x2dd371(0x158)],
    })
    [_0x2dd371(0x175)](errors["brand"][_0x2dd371(0x18b)]),
  checkNoOfDays = check("noOfDays")
    [_0x2dd371(0x176)]({
      min: rentOrderValidation[_0x2dd371(0x172)][_0x2dd371(0x156)],
      max: rentOrderValidation[_0x2dd371(0x172)][_0x2dd371(0x14d)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1d8)][_0x2dd371(0x157)]),
  checkStartDate = (_0x481396, _0x40bd8f, _0x35cbec) => {
    const _0x5c8d95 = _0x2dd371;
    try {
      const { startDate: _0x2e7148 } = _0x481396[_0x5c8d95(0x1d9)],
        _0x576f84 = new Date(_0x2e7148),
        _0x1b724c = _0x576f84[_0x5c8d95(0x1a3)]() !== _0x5c8d95(0x1dd);
      if (!_0x1b724c) {
        const _0x853a28 = httpStatus["BAD_REQUEST"],
          _0x4b3bc3 = errors[_0x5c8d95(0x1d8)][_0x5c8d95(0x1e0)];
        throw new ApiError(_0x853a28, _0x4b3bc3);
      }
      if (_0x576f84 < new Date()) {
        const _0x2618bd = httpStatus[_0x5c8d95(0x1ab)],
          _0x47ec16 = errors[_0x5c8d95(0x1d8)][_0x5c8d95(0x152)];
        throw new ApiError(_0x2618bd, _0x47ec16);
      }
      _0x35cbec();
    } catch (_0x5f59a6) {
      _0x35cbec(_0x5f59a6);
    }
  },
  checkLocationTitle = check(_0x2dd371(0x15c))
    [_0x2dd371(0x1ad)]({
      min: rentOrderValidation["locationTitle"][_0x2dd371(0x150)],
      max: rentOrderValidation[_0x2dd371(0x15c)][_0x2dd371(0x158)],
    })
    [_0x2dd371(0x175)](errors["rentOrder"][_0x2dd371(0x177)]),
  checkFullName = check(_0x2dd371(0x1c5))
    [_0x2dd371(0x1ad)]({
      min: rentOrderValidation[_0x2dd371(0x1c5)][_0x2dd371(0x150)],
      max: rentOrderValidation["fullName"][_0x2dd371(0x158)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1d8)][_0x2dd371(0x19e)]),
  checkLongitude = check(_0x2dd371(0x1e4))
    ["isFloat"]({ min: -0xb4, max: 0xb4 })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x17b)][_0x2dd371(0x1ba)]),
  checkLatitude = check("latitude")
    ["isFloat"]({ min: -0x5a, max: 0x5a })
    ["withMessage"](errors[_0x2dd371(0x17b)]["invalidLatitude"]),
  checkUserId = check("userId")
    [_0x2dd371(0x1b2)]()
    ["withMessage"](errors["user"][_0x2dd371(0x1e1)]),
  checkPaymentDeliveryAmount = check("amount")
    [_0x2dd371(0x151)]({
      min: userValidation["paymentDeliveryAmount"][_0x2dd371(0x156)],
      max: userValidation[_0x2dd371(0x18c)][_0x2dd371(0x14d)],
    })
    ["withMessage"](errors[_0x2dd371(0x1b4)]["invalidPaymentDeliveryAmount"]),
  checkUserIds = (_0x15d4cc, _0x4581ef, _0x4e03fe) => {
    const _0x4898fe = _0x2dd371;
    try {
      const { userIds: _0x4b49a7 } = _0x15d4cc[_0x4898fe(0x1d9)];
      if (!_0x4b49a7 || !Array[_0x4898fe(0x141)](_0x4b49a7)) {
        const _0x11cee1 = httpStatus[_0x4898fe(0x1ab)],
          _0x307179 = errors[_0x4898fe(0x1b4)][_0x4898fe(0x1e9)];
        throw new ApiError(_0x11cee1, _0x307179);
      }
      const _0x27d45a = _0x4b49a7[_0x4898fe(0x15a)]((_0xdadb38) =>
        isValidObjectId(_0xdadb38)
      );
      (_0x15d4cc[_0x4898fe(0x1d9)][_0x4898fe(0x18f)] = _0x27d45a), _0x4e03fe();
    } catch (_0x12087b) {
      _0x4e03fe(_0x12087b);
    }
  },
  checkNotificationTitleEN = check("titleEN")
    [_0x2dd371(0x1ad)]({
      min: userValidation[_0x2dd371(0x1d0)][_0x2dd371(0x156)],
      max: userValidation["notificationTitle"][_0x2dd371(0x14d)],
    })
    ["withMessage"](errors["user"][_0x2dd371(0x168)]),
  checkNotificationTitleAR = check(_0x2dd371(0x17a))
    [_0x2dd371(0x1ad)]({
      min: userValidation[_0x2dd371(0x1d0)]["min"],
      max: userValidation[_0x2dd371(0x1d0)][_0x2dd371(0x14d)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1b4)][_0x2dd371(0x168)]),
  checkNotificationBodyEN = check(_0x2dd371(0x14a))
    ["isLength"]({
      min: userValidation[_0x2dd371(0x14b)][_0x2dd371(0x156)],
      max: userValidation[_0x2dd371(0x14b)][_0x2dd371(0x14d)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x1b4)]["invalidNotificationBody"]),
  checkNotificationBodyAR = check("bodyAR")
    [_0x2dd371(0x1ad)]({
      min: userValidation[_0x2dd371(0x14b)][_0x2dd371(0x156)],
      max: userValidation[_0x2dd371(0x14b)][_0x2dd371(0x14d)],
    })
    ["withMessage"](errors[_0x2dd371(0x1b4)][_0x2dd371(0x1b0)]),
  checkPriceFor = check(_0x2dd371(0x1b7))
    ["isLength"]({
      min: priceValidation[_0x2dd371(0x1b7)][_0x2dd371(0x150)],
      max: priceValidation[_0x2dd371(0x1b7)][_0x2dd371(0x158)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x181)][_0x2dd371(0x1d5)]),
  checkPriceCoupon = check(_0x2dd371(0x1c3))
    [_0x2dd371(0x1ad)]({
      min: priceValidation[_0x2dd371(0x1c3)][_0x2dd371(0x150)],
      max: priceValidation[_0x2dd371(0x1c3)][_0x2dd371(0x158)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x181)][_0x2dd371(0x1cd)]),
  checkPriceValue = check(_0x2dd371(0x15b))
    ["isFloat"]({
      min: priceValidation["value"][_0x2dd371(0x156)],
      max: priceValidation[_0x2dd371(0x15b)][_0x2dd371(0x14d)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x181)][_0x2dd371(0x1be)]),
  checkPriceValidityHours = check(_0x2dd371(0x1ce))
    ["isInt"]({
      min: priceValidation["validityHours"]["min"],
      max: priceValidation[_0x2dd371(0x1ce)][_0x2dd371(0x14d)],
    })
    [_0x2dd371(0x175)](errors[_0x2dd371(0x181)]["invalidValidityHours"]);
module["exports"] = {
  next: next,
  putQueryParamsInBody: putQueryParamsInBody,
  conditionalCheck: conditionalCheck,
  checkFile: checkFile,
  checkEmailOrPhone: checkEmailOrPhone,
  checkEmail: checkEmail,
  checkAuthType: checkAuthType,
  checkPassword: checkPassword,
  checkOldPassword: checkOldPassword,
  checkNewPassword: checkNewPassword,
  checkCode: checkCode,
  checkLanguage: checkLanguage,
  checkName: checkName,
  checkRole: checkRole,
  checkRegisterRole: checkRegisterRole,
  checkPhoneICC: checkPhoneICC,
  checkPhoneNSN: checkPhoneNSN,
  checkDeviceToken: checkDeviceToken,
  checkSkip: checkSkip,
  checkPage: checkPage,
  checkLimit: checkLimit,
  checkCarId: checkCarId,
  checkOrderId: checkOrderId,
  checkRejectionReason: checkRejectionReason,
  checkRentCarName: checkRentCarName,
  checkRentCarModel: checkRentCarModel,
  checkRentCarENColor: checkRentCarENColor,
  checkRentCarARColor: checkRentCarARColor,
  checkRentCarENBrand: checkRentCarENBrand,
  checkRentCarARBrand: checkRentCarARBrand,
  checkRentCarYear: checkRentCarYear,
  checkRentCarDescription: checkRentCarDescription,
  checkSearchTerm: checkSearchTerm,
  checkRentCarSearchMinPrice: checkRentCarSearchMinPrice,
  checkRentCarSearchMaxPrice: checkRentCarSearchMaxPrice,
  checkSearchBrandsList: checkSearchBrandsList,
  checkSearchColors: checkSearchColors,
  checkSearchYears: checkSearchYears,
  checkPurchaseCarId: checkPurchaseCarId,
  checkPurchaseCarName: checkPurchaseCarName,
  checkPurchaseCarVIN: checkPurchaseCarVIN,
  checkPurchaseCarModel: checkPurchaseCarModel,
  checkBrand: checkBrand,
  checkPurchaseCarYear: checkPurchaseCarYear,
  checkPurchaseCarENColor: checkPurchaseCarENColor,
  checkPurchaseCarARColor: checkPurchaseCarARColor,
  checkPurchaseCarTrimeLevel: checkPurchaseCarTrimeLevel,
  checkPurchaseCarENVehicleType: checkPurchaseCarENVehicleType,
  checkPurchaseCarARVehicleType: checkPurchaseCarARVehicleType,
  checkPurchaseCarENFuelType: checkPurchaseCarENFuelType,
  checkPurchaseCarARFuelType: checkPurchaseCarARFuelType,
  checkPurchaseCarNoOfSeats: checkPurchaseCarNoOfSeats,
  checkPurchaseCarKiloPerHour: checkPurchaseCarKiloPerHour,
  checkPurchaseCarPrice: checkPurchaseCarPrice,
  checkPurchaseCarPhoneNumber: checkPurchaseCarPhoneNumber,
  checkPurchaseCarDescription: checkPurchaseCarDescription,
  checkRentCarDailyPrice: checkRentCarDailyPrice,
  checkRentCarWeeklyPrice: checkRentCarWeeklyPrice,
  checkRentCarMonthlyPrice: checkRentCarMonthlyPrice,
  checkRentCarDeposit: checkRentCarDeposit,
  checkBrandENName: checkBrandENName,
  checkBrandARName: checkBrandARName,
  checkNoOfDays: checkNoOfDays,
  checkStartDate: checkStartDate,
  checkLocationTitle: checkLocationTitle,
  checkFullName: checkFullName,
  checkLongitude: checkLongitude,
  checkLatitude: checkLatitude,
  checkUserId: checkUserId,
  checkPaymentDeliveryAmount: checkPaymentDeliveryAmount,
  checkUserIds: checkUserIds,
  checkNotificationTitleEN: checkNotificationTitleEN,
  checkNotificationTitleAR: checkNotificationTitleAR,
  checkNotificationBodyEN: checkNotificationBodyEN,
  checkNotificationBodyAR: checkNotificationBodyAR,
  checkPriceFor: checkPriceFor,
  checkPriceCoupon: checkPriceCoupon,
  checkPriceValue: checkPriceValue,
  checkPriceValidityHours: checkPriceValidityHours,
};
function _0x37eb() {
  const _0x475ed0 = [
    "lowerStartDate",
    "COLORS",
    "invalidWeeklyPrice",
    "3524cKeEnd",
    "min",
    "invalidNoOfDays",
    "maxLength",
    "colorEN",
    "filter",
    "value",
    "locationTitle",
    "invalidVIN",
    "model",
    "vehicleTypeAR",
    "orderId",
    "invalidSearchTerm",
    "minPhone",
    "year",
    "isNumeric",
    "mongoose",
    "colors",
    "trim",
    "invalidNotificationTitle",
    "1049211aUSBNO",
    "invalidARFuelType",
    "express-validator",
    "phoneICC",
    "roles",
    "invalidPhoneNumber",
    "admin",
    "reasonForRejection",
    "noOfSeats",
    "noOfDays",
    "purchaseCarId",
    "../../config/models",
    "withMessage",
    "isInt",
    "invalidLocationTitle",
    "years",
    "map",
    "titleAR",
    "system",
    "invalidPhone",
    "brand",
    "description",
    "invalidPassword",
    "invalidSkip",
    "price",
    "bail",
    "invalidPageNumber",
    "invalidMonthlyPrice",
    "57ScpVTL",
    "invalidARBrand",
    "invalidOrderId",
    "lang",
    "rejectionReason",
    "phoneNumber",
    "invalidName",
    "paymentDeliveryAmount",
    "brandEN",
    "TRIM_LEVELS",
    "userIds",
    "minNSN",
    "registerRoles",
    "exactLength",
    "invalidExtension",
    "../../data/cars",
    "106718znaZaX",
    "role",
    "2245haHPGj",
    "newPassword",
    "SUPPORTED_LANGUAGES",
    "verificationCode",
    "../../config/system",
    "files",
    "invalidDailyPrice",
    "invalidFullName",
    "invalidKiloPerHour",
    "2348510XvmzYj",
    "split",
    "dailyPrice",
    "toString",
    "maxNSN",
    "brands",
    "noPhoto",
    "weeklyPrice",
    "fuelTypeAR",
    "invalidDescription",
    "rentCar",
    "BAD_REQUEST",
    "invalidPrice",
    "isLength",
    "purchaseCar",
    "44GMSgqN",
    "invalidNotificationBody",
    "SEATS_NUMBER",
    "isMongoId",
    "weekly",
    "user",
    "array",
    "vehicleTypeEN",
    "priceFor",
    "brandId",
    "invalidCode",
    "invalidLongitude",
    "maxPhone",
    "emailOrPhone",
    "invalidICC",
    "invalidValue",
    "skip",
    "vin",
    "carName",
    "deposit",
    "coupon",
    "YEARS",
    "fullName",
    "unsupportedLanguage",
    "carId",
    "nameAR",
    "kiloPerHour",
    "invalidRole",
    "searchTerm",
    "6448872xWfGgL",
    "invalidCoupon",
    "validityHours",
    "isIn",
    "notificationTitle",
    "fuelTypeEN",
    "invalidEmailOrPhone",
    "6140008bwOiKt",
    "invalidNoOfSeats",
    "invalidPriceFor",
    "invalidYear",
    "invalidENColor",
    "rentOrder",
    "body",
    "includes",
    "list",
    "name",
    "Invalid\x20Date",
    "deviceToken",
    "FUEL_TYPES",
    "invalidStartDate",
    "invalidId",
    "code",
    "6cpnCUv",
    "longitude",
    "msg",
    "phoneNSN",
    "invalidARVehicleType",
    "minPrice",
    "invalidUserIds",
    "isEmpty",
    "invalidENBrand",
    "password",
    "944487eZirqM",
    "http-status",
    "isArray",
    "oldPassword",
    "invalidLimitNumber",
    "isEmail",
    "VEHICLE_TYPES",
    "auth",
    "monthly",
    "email",
    "invalidARColor",
    "bodyEN",
    "notificationBody",
    "colorAR",
    "max",
    "noLanguage",
    "limit",
    "minLength",
    "isFloat",
  ];
  _0x37eb = function () {
    return _0x475ed0;
  };
  return _0x37eb();
}
