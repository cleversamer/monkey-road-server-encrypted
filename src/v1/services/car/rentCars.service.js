const _0x84d599 = _0x2d2a;
(function (_0x20b550, _0x3ff1a0) {
  const _0x1b9737 = _0x2d2a,
    _0x53a8f6 = _0x20b550();
  while (!![]) {
    try {
      const _0x1b5944 =
        parseInt(_0x1b9737(0x173)) / 0x1 +
        (-parseInt(_0x1b9737(0x12d)) / 0x2) *
          (-parseInt(_0x1b9737(0x165)) / 0x3) +
        -parseInt(_0x1b9737(0x147)) / 0x4 +
        (-parseInt(_0x1b9737(0x176)) / 0x5) *
          (parseInt(_0x1b9737(0x13d)) / 0x6) +
        parseInt(_0x1b9737(0x174)) / 0x7 +
        -parseInt(_0x1b9737(0x140)) / 0x8 +
        (-parseInt(_0x1b9737(0x15a)) / 0x9) *
          (-parseInt(_0x1b9737(0x124)) / 0xa);
      if (_0x1b5944 === _0x3ff1a0) break;
      else _0x53a8f6["push"](_0x53a8f6["shift"]());
    } catch (_0x5205a9) {
      _0x53a8f6["push"](_0x53a8f6["shift"]());
    }
  }
})(_0x2026, 0x9a228);
const { RentCar } = require(_0x84d599(0x132)),
  { RentOrder } = require(_0x84d599(0x152)),
  brandsService = require("./brands.service"),
  localStorage = require(_0x84d599(0x13a)),
  cloudStorage = require(_0x84d599(0x178)),
  { ApiError } = require(_0x84d599(0x137)),
  httpStatus = require("http-status"),
  errors = require(_0x84d599(0x16d));
function _0x2026() {
  const _0x1f02f5 = [
    "rental",
    "3810552AxdPDl",
    "NOT_FOUND",
    "noNotAcceptedCars",
    "6709112aTJqTE",
    "getSimilarRentCars",
    "getMyRentCars",
    "isDelivered",
    "isArchived",
    "color.en",
    "noSearchCars",
    "4162716msFtPm",
    "requestCarTwice",
    "isAccepted",
    "rentCar",
    "searchRentCars",
    "count",
    "exports",
    "alreadyAccepted",
    "addRentCar",
    "deleteUserRentCars",
    "filter",
    "../../models/car/rentOrder.model",
    "findById",
    "noSimilarCars",
    "office",
    "toString",
    "getAllRentCars",
    "name",
    "notFound",
    "99hXKVJh",
    "requestNotAcceptedCar",
    "requestOwnRentCar",
    "noCars",
    "findByIdAndDelete",
    "accept",
    "BAD_REQUEST",
    "rejectRentCar",
    "price",
    "deleteMany",
    "_id",
    "87bWRrJU",
    "FORBIDDEN",
    "length",
    "limit",
    "isArray",
    "getRentCarsStatus",
    "find",
    "getBrand",
    "../../config/errors",
    "calcTotalPrice",
    "year",
    "photos",
    "deleteAcceptedCar",
    "rejected",
    "593840wURRmF",
    "5434303cvRgLC",
    "conflictsWith",
    "5woJWxq",
    "alreadyArchived",
    "../../services/cloud/cloudStorage.service",
    "uploadFile",
    "archive",
    "requestCarRental",
    "path",
    "save",
    "957680tuYuNw",
    "sort",
    "ref",
    "deleteFile",
    "closed",
    "delivered",
    "brand.ref",
    "textScore",
    "noOfCars",
    "49802pxoQpn",
    "accepted",
    "deleteRentCar",
    "getRentCarDetails",
    "restore",
    "../../models/car/rentCar.model",
    "ceil",
    "findIndex",
    "storeFile",
    "noPostedCars",
    "../../middleware/apiError",
    "requestArchivedCar",
    "aggregate",
    "../../services/storage/localStorage.service",
    "push",
  ];
  _0x2026 = function () {
    return _0x1f02f5;
  };
  return _0x2026();
}
function _0x2d2a(_0x1cc9e9, _0x1b676a) {
  const _0x202673 = _0x2026();
  return (
    (_0x2d2a = function (_0x2d2a15, _0x3ffc2a) {
      _0x2d2a15 = _0x2d2a15 - 0x11f;
      let _0x18426b = _0x202673[_0x2d2a15];
      return _0x18426b;
    }),
    _0x2d2a(_0x1cc9e9, _0x1b676a)
  );
}
(module["exports"][_0x84d599(0x16a)] = async () => {
  const _0x160406 = _0x84d599;
  try {
    const _0x2419b3 = await RentCar[_0x160406(0x14c)]({}),
      _0x2066bf = await RentCar[_0x160406(0x14c)]({ accepted: ![] });
    return { total: _0x2419b3, inactive: _0x2066bf };
  } catch (_0xa5043b) {
    throw _0xa5043b;
  }
}),
  (module[_0x84d599(0x14d)][_0x84d599(0x150)] = async (_0x38f65d) => {
    const _0x5eb3f0 = _0x84d599;
    try {
      await RentCar[_0x5eb3f0(0x163)]({ "office.ref": _0x38f65d });
    } catch (_0x288cc0) {
      throw _0x288cc0;
    }
  }),
  (module[_0x84d599(0x14d)][_0x84d599(0x157)] = async (
    _0x4e214b,
    _0x1a0df4
  ) => {
    const _0x5ba292 = _0x84d599;
    try {
      (_0x4e214b = parseInt(_0x4e214b)), (_0x1a0df4 = parseInt(_0x1a0df4));
      const _0x59d20b = await RentCar["find"]({ accepted: !![], archived: ![] })
        [_0x5ba292(0x125)]({ _id: -0x1 })
        ["skip"]((_0x4e214b - 0x1) * _0x1a0df4)
        [_0x5ba292(0x168)](_0x1a0df4);
      if (!_0x59d20b || !_0x59d20b[_0x5ba292(0x167)]) {
        const _0x40b6aa = httpStatus[_0x5ba292(0x13e)],
          _0x257003 = errors[_0x5ba292(0x14a)][_0x5ba292(0x15d)];
        throw new ApiError(_0x40b6aa, _0x257003);
      }
      const _0x4c8ba8 = await RentCar["count"]({
        accepted: !![],
        archived: ![],
      });
      return {
        rentCars: _0x59d20b,
        currentPage: _0x4e214b,
        totalPages: Math[_0x5ba292(0x133)](_0x4c8ba8 / _0x1a0df4),
      };
    } catch (_0x2803d5) {
      throw _0x2803d5;
    }
  }),
  (module[_0x84d599(0x14d)][_0x84d599(0x130)] = async (_0x172dbc) => {
    const _0x3fbc1c = _0x84d599;
    try {
      const _0x289b97 = await RentCar[_0x3fbc1c(0x153)](_0x172dbc);
      if (!_0x289b97) {
        const _0x5a807c = httpStatus["NOT_FOUND"],
          _0x110016 = errors[_0x3fbc1c(0x14a)]["notFound"];
        throw new ApiError(_0x5a807c, _0x110016);
      }
      return _0x289b97;
    } catch (_0x17777e) {
      throw _0x17777e;
    }
  }),
  (module["exports"][_0x84d599(0x141)] = async (
    _0x564f6b,
    _0x5796c3,
    _0x16b612,
    _0x1f441d,
    _0x2bb70a,
    _0x3850ca,
    _0x1a548f,
    _0x23b8ac,
    _0x3fb425
  ) => {
    const _0x2f03e2 = _0x84d599;
    try {
      const _0xd674cf =
        _0x5796c3 +
        "\x20" +
        _0x16b612 +
        "\x20" +
        _0x1f441d +
        "\x20" +
        _0x2bb70a +
        "\x20" +
        _0x3850ca +
        "\x20" +
        _0x1a548f +
        "\x20" +
        _0x23b8ac +
        "\x20" +
        _0x3fb425;
      let _0x3eb0a2 = await RentCar[_0x2f03e2(0x139)]([
        {
          $match: {
            $text: { $search: _0xd674cf },
            accepted: !![],
            archived: ![],
          },
        },
        { $sort: { score: { $meta: "textScore" } } },
        { $limit: 0xa },
      ]);
      _0x3eb0a2 = _0x3eb0a2[_0x2f03e2(0x151)](
        (_0x5c8b96) =>
          _0x5c8b96[_0x2f03e2(0x164)][_0x2f03e2(0x156)]() !==
          _0x564f6b[_0x2f03e2(0x156)]()
      );
      if (!_0x3eb0a2 || !_0x3eb0a2[_0x2f03e2(0x167)]) {
        const _0x3bdade = httpStatus[_0x2f03e2(0x13e)],
          _0x13b87d = errors[_0x2f03e2(0x14a)][_0x2f03e2(0x154)];
        throw new ApiError(_0x3bdade, _0x13b87d);
      }
      return _0x3eb0a2;
    } catch (_0x1124c1) {
      throw _0x1124c1;
    }
  }),
  (module["exports"][_0x84d599(0x14b)] = async (
    _0x3dab8a,
    _0x1c332e,
    _0x5a166d,
    _0x1d6fb3,
    _0x2e24be,
    _0x13c88a,
    _0x5df356,
    _0x11145b
  ) => {
    const _0x35a80e = _0x84d599;
    try {
      (_0x1c332e = parseInt(_0x1c332e)), (_0x5a166d = parseInt(_0x5a166d));
      const _0x58495b = {
        $text: { $search: _0x3dab8a },
        accepted: !![],
        archived: ![],
      };
      Array["isArray"](_0x13c88a) &&
        _0x13c88a["length"] &&
        (_0x58495b[_0x35a80e(0x12a)] = { $in: _0x13c88a });
      Array[_0x35a80e(0x169)](_0x5df356) &&
        _0x5df356[_0x35a80e(0x167)] &&
        (_0x58495b[_0x35a80e(0x145)] = { $in: _0x5df356 });
      Array[_0x35a80e(0x169)](_0x11145b) &&
        _0x11145b[_0x35a80e(0x167)] &&
        (_0x58495b[_0x35a80e(0x16f)] = { $in: _0x11145b });
      let _0x27edfc = await RentCar[_0x35a80e(0x139)]([
        { $match: _0x58495b },
        { $sort: { score: { $meta: _0x35a80e(0x12b) } } },
        { $skip: (_0x1c332e - 0x1) * _0x5a166d },
        { $limit: _0x5a166d },
      ]);
      if (!_0x27edfc || !_0x27edfc[_0x35a80e(0x167)]) {
        const _0xaf5d80 = httpStatus[_0x35a80e(0x13e)],
          _0x35810f = errors[_0x35a80e(0x14a)][_0x35a80e(0x146)];
        throw new ApiError(_0xaf5d80, _0x35810f);
      }
      const _0x12509e = await RentCar[_0x35a80e(0x139)]([
          { $match: _0x58495b },
        ]),
        _0x5e46d6 = _0x12509e[_0x35a80e(0x167)];
      return {
        rentCars: _0x27edfc,
        currentPage: _0x1c332e,
        totalPages: Math[_0x35a80e(0x133)](_0x5e46d6 / _0x5a166d),
      };
    } catch (_0x4f5792) {
      throw _0x4f5792;
    }
  }),
  (module["exports"][_0x84d599(0x121)] = async (
    _0x4f2292,
    _0x4eb143,
    _0x5a0556,
    _0x1616ee,
    _0x377d8f,
    _0x5a6cdb,
    _0x2bab22,
    _0xb6d0ce,
    _0x5f41b5,
    _0x1a12a0
  ) => {
    const _0x533299 = _0x84d599;
    try {
      const _0x3ea38e = await RentCar["findById"](_0x4eb143);
      if (!_0x3ea38e) {
        const _0x204128 = httpStatus[_0x533299(0x13e)],
          _0x56af3a = errors["rentCar"][_0x533299(0x159)];
        throw new ApiError(_0x204128, _0x56af3a);
      }
      if (
        _0x3ea38e[_0x533299(0x155)][_0x533299(0x126)][_0x533299(0x156)]() ===
        _0x4f2292["_id"][_0x533299(0x156)]()
      ) {
        const _0x1b4314 = httpStatus[_0x533299(0x166)],
          _0x129536 = errors[_0x533299(0x14a)][_0x533299(0x15c)];
        throw new ApiError(_0x1b4314, _0x129536);
      }
      if (!_0x3ea38e["accepted"]) {
        const _0x1e6249 = httpStatus[_0x533299(0x166)],
          _0x1a1cd5 = errors[_0x533299(0x14a)][_0x533299(0x15b)];
        throw new ApiError(_0x1e6249, _0x1a1cd5);
      }
      if (_0x3ea38e[_0x533299(0x144)]()) {
        const _0x2e012b = httpStatus[_0x533299(0x166)],
          _0x311add = errors[_0x533299(0x14a)][_0x533299(0x138)];
        throw new ApiError(_0x2e012b, _0x311add);
      }
      const _0x31fe09 = await RentOrder[_0x533299(0x16b)]({
          author: _0x4f2292[_0x533299(0x164)],
          rentCar: _0x3ea38e[_0x533299(0x164)],
          status: { $not: { $in: ["closed", "rejected"] } },
        }),
        _0x1732f4 =
          _0x31fe09[_0x533299(0x134)](
            (_0xcae23) => !_0xcae23[_0x533299(0x143)]()
          ) >= 0x0;
      if (_0x1732f4) {
        const _0x5db6d7 = httpStatus["FORBIDDEN"],
          _0x53b554 = errors[_0x533299(0x14a)][_0x533299(0x148)];
        throw new ApiError(_0x5db6d7, _0x53b554);
      }
      const _0x121d3a = new RentOrder({
        author: _0x4f2292[_0x533299(0x164)],
        office: _0x3ea38e["office"][_0x533299(0x126)],
        rentCar: _0x3ea38e[_0x533299(0x164)],
        fullName: _0xb6d0ce,
        startDate: _0x5a0556,
        noOfDays: _0x1616ee,
        phoneNumber: {
          full: "" + _0x5f41b5 + _0x1a12a0,
          icc: _0x5f41b5,
          nsn: _0x1a12a0,
        },
        receptionLocation: {
          title: _0x377d8f,
          longitude: _0x5a6cdb,
          latitude: _0x2bab22,
        },
      });
      _0x121d3a[_0x533299(0x16e)](_0x1616ee, _0x3ea38e[_0x533299(0x162)]),
        _0x121d3a["setEndDate"](_0x1616ee);
      const _0x49bbd6 = await RentOrder[_0x533299(0x16b)]({
        rentCar: _0x3ea38e[_0x533299(0x164)],
        status: {
          $not: { $in: [_0x533299(0x172), _0x533299(0x128), _0x533299(0x129)] },
        },
      });
      for (let _0x34c0f1 of _0x49bbd6) {
        if (_0x34c0f1[_0x533299(0x175)](_0x121d3a)) {
          const _0x39de39 = httpStatus[_0x533299(0x166)],
            _0x8c4eed = errors[_0x533299(0x14a)]["orderTimeConflict"];
          throw new ApiError(_0x39de39, _0x8c4eed);
        }
      }
      return (
        await _0x121d3a[_0x533299(0x123)](),
        { order: _0x121d3a, rentCar: _0x3ea38e }
      );
    } catch (_0x41f15c) {
      throw _0x41f15c;
    }
  }),
  (module[_0x84d599(0x14d)][_0x84d599(0x142)] = async (
    _0x8b1512,
    _0x572513,
    _0x151d60
  ) => {
    const _0x328241 = _0x84d599;
    try {
      (_0x572513 = parseInt(_0x572513)), (_0x151d60 = parseInt(_0x151d60));
      const _0x36903d = await RentCar[_0x328241(0x16b)]({
        "office.ref": _0x8b1512[_0x328241(0x164)],
      })
        [_0x328241(0x125)]({ _id: -0x1 })
        ["skip"]((_0x572513 - 0x1) * _0x151d60)
        [_0x328241(0x168)](_0x151d60);
      if (!_0x36903d || !_0x36903d[_0x328241(0x167)]) {
        const _0x44e7f4 = httpStatus[_0x328241(0x13e)],
          _0x5df5bb = errors[_0x328241(0x14a)][_0x328241(0x136)];
        throw new ApiError(_0x44e7f4, _0x5df5bb);
      }
      const _0x156e52 = await RentCar[_0x328241(0x14c)]({
        "office.ref": _0x8b1512["_id"],
      });
      return {
        rentCars: _0x36903d,
        currentPage: _0x572513,
        totalPages: Math[_0x328241(0x133)](_0x156e52 / _0x151d60),
      };
    } catch (_0x4bd00b) {
      throw _0x4bd00b;
    }
  }),
  (module[_0x84d599(0x14d)][_0x84d599(0x14f)] = async (
    _0x4b9d4f,
    _0x2ecf4a,
    _0x14b8a5,
    _0x11a5cf,
    _0x467f0b,
    _0x1d691e,
    _0x5ac76f,
    _0x6d97c3,
    _0x5d46af,
    _0x2b007e,
    _0x1a9342,
    _0x122ac2,
    _0x4beb22,
    _0x23d671,
    _0x266283,
    _0x2fec61,
    _0x1ba3fb,
    _0x4f7d8f
  ) => {
    const _0x1db03e = _0x84d599;
    try {
      const _0x12c254 = await brandsService[_0x1db03e(0x16c)](_0x1d691e),
        _0x3a3016 = new RentCar({
          office: { name: _0x4b9d4f[_0x1db03e(0x158)], ref: _0x4b9d4f["_id"] },
          name: _0x2ecf4a,
          model: _0x14b8a5,
          color: { en: _0x11a5cf, ar: _0x467f0b },
          brand: {
            name: {
              en: _0x12c254[_0x1db03e(0x158)]["en"],
              ar: _0x12c254["name"]["ar"],
            },
            ref: _0x12c254[_0x1db03e(0x164)],
          },
          year: _0x5ac76f,
          price: {
            daily: _0x6d97c3,
            weekly: _0x5d46af,
            monthly: _0x2b007e,
            deposit: _0x1a9342,
          },
          description: _0x122ac2,
        });
      if (_0x4beb22) {
        const _0x53c322 = await localStorage["storeFile"](_0x4beb22),
          _0x4c6332 = await cloudStorage[_0x1db03e(0x11f)](_0x53c322);
        await localStorage[_0x1db03e(0x127)](_0x53c322[_0x1db03e(0x122)]),
          _0x3a3016["photos"][_0x1db03e(0x13b)](_0x4c6332);
      }
      if (_0x23d671) {
        const _0x353c10 = await localStorage["storeFile"](_0x23d671),
          _0x4d3754 = await cloudStorage[_0x1db03e(0x11f)](_0x353c10);
        await localStorage[_0x1db03e(0x127)](_0x353c10["path"]),
          _0x3a3016[_0x1db03e(0x170)][_0x1db03e(0x13b)](_0x4d3754);
      }
      if (_0x266283) {
        const _0x1de0a7 = await localStorage[_0x1db03e(0x135)](_0x266283),
          _0xdf0257 = await cloudStorage[_0x1db03e(0x11f)](_0x1de0a7);
        await localStorage[_0x1db03e(0x127)](_0x1de0a7[_0x1db03e(0x122)]),
          _0x3a3016[_0x1db03e(0x170)]["push"](_0xdf0257);
      }
      if (_0x2fec61) {
        const _0xabfff8 = await localStorage[_0x1db03e(0x135)](_0x2fec61),
          _0x3e241f = await cloudStorage[_0x1db03e(0x11f)](_0xabfff8);
        await localStorage[_0x1db03e(0x127)](_0xabfff8[_0x1db03e(0x122)]),
          _0x3a3016[_0x1db03e(0x170)][_0x1db03e(0x13b)](_0x3e241f);
      }
      if (_0x1ba3fb) {
        const _0x3d0010 = await localStorage[_0x1db03e(0x135)](_0x1ba3fb),
          _0x35fdf9 = await cloudStorage[_0x1db03e(0x11f)](_0x3d0010);
        await localStorage[_0x1db03e(0x127)](_0x3d0010[_0x1db03e(0x122)]),
          _0x3a3016[_0x1db03e(0x170)][_0x1db03e(0x13b)](_0x35fdf9);
      }
      if (_0x4f7d8f) {
        const _0x463054 = await localStorage[_0x1db03e(0x135)](_0x4f7d8f),
          _0x2f776a = await cloudStorage[_0x1db03e(0x11f)](_0x463054);
        await localStorage["deleteFile"](_0x463054[_0x1db03e(0x122)]),
          _0x3a3016[_0x1db03e(0x170)][_0x1db03e(0x13b)](_0x2f776a);
      }
      return (
        await _0x3a3016["save"](),
        (_0x12c254[_0x1db03e(0x12c)][_0x1db03e(0x13c)] =
          _0x12c254[_0x1db03e(0x12c)][_0x1db03e(0x13c)] + 0x1),
        await _0x12c254["save"](),
        _0x3a3016
      );
    } catch (_0x2aeed9) {
      throw _0x2aeed9;
    }
  }),
  (module["exports"]["archiveRentCar"] = async (_0x4fcbdd) => {
    const _0x5f3ace = _0x84d599;
    try {
      const _0x5b820a = await RentCar[_0x5f3ace(0x153)](_0x4fcbdd);
      if (!_0x5b820a) {
        const _0x36c6e0 = httpStatus[_0x5f3ace(0x13e)],
          _0x171947 = errors[_0x5f3ace(0x14a)][_0x5f3ace(0x159)];
        throw new ApiError(_0x36c6e0, _0x171947);
      }
      if (_0x5b820a[_0x5f3ace(0x144)]()) {
        const _0x30fdfb = httpStatus[_0x5f3ace(0x160)],
          _0xac22b9 = errors[_0x5f3ace(0x14a)]["alreadyArchived"];
        throw new ApiError(_0x30fdfb, _0xac22b9);
      }
      return (
        _0x5b820a[_0x5f3ace(0x120)](), await _0x5b820a["save"](), _0x5b820a
      );
    } catch (_0x585015) {
      throw _0x585015;
    }
  }),
  (module[_0x84d599(0x14d)]["restoreRentCar"] = async (_0x14b3ea) => {
    const _0x1f9328 = _0x84d599;
    try {
      const _0x3caf14 = await RentCar[_0x1f9328(0x153)](_0x14b3ea);
      if (!_0x3caf14) {
        const _0x476bb7 = httpStatus[_0x1f9328(0x13e)],
          _0x31bce5 = errors[_0x1f9328(0x14a)][_0x1f9328(0x159)];
        throw new ApiError(_0x476bb7, _0x31bce5);
      }
      if (!_0x3caf14[_0x1f9328(0x144)]()) {
        const _0x20b050 = httpStatus[_0x1f9328(0x160)],
          _0x1ee246 = errors[_0x1f9328(0x14a)][_0x1f9328(0x177)];
        throw new ApiError(_0x20b050, _0x1ee246);
      }
      return (
        _0x3caf14[_0x1f9328(0x131)](),
        await _0x3caf14[_0x1f9328(0x123)](),
        _0x3caf14
      );
    } catch (_0x55446a) {
      throw _0x55446a;
    }
  }),
  (module["exports"][_0x84d599(0x12f)] = async (_0x2b7841) => {
    const _0x4491be = _0x84d599;
    try {
      const _0x27ffc1 = await RentCar[_0x4491be(0x153)](_0x2b7841);
      if (!_0x27ffc1) {
        const _0x3f71cc = httpStatus[_0x4491be(0x13e)],
          _0x3534c4 = errors[_0x4491be(0x14a)][_0x4491be(0x159)];
        throw new ApiError(_0x3f71cc, _0x3534c4);
      }
      if (_0x27ffc1[_0x4491be(0x149)]()) {
        const _0x57c188 = httpStatus[_0x4491be(0x166)],
          _0x4251e1 = errors[_0x4491be(0x14a)][_0x4491be(0x171)];
        throw new ApiError(_0x57c188, _0x4251e1);
      }
      return await _0x27ffc1["delete"](), _0x27ffc1;
    } catch (_0x18911a) {
      throw _0x18911a;
    }
  }),
  (module[_0x84d599(0x14d)]["getNotAcceptedRentCars"] = async (
    _0x255bd0,
    _0x5b0b30
  ) => {
    const _0x40e665 = _0x84d599;
    try {
      (_0x255bd0 = parseInt(_0x255bd0)), (_0x5b0b30 = parseInt(_0x5b0b30));
      const _0x4db822 = await RentCar[_0x40e665(0x16b)]({ accepted: ![] })
        [_0x40e665(0x125)]({ _id: -0x1 })
        ["skip"]((_0x255bd0 - 0x1) * _0x5b0b30)
        [_0x40e665(0x168)](_0x5b0b30);
      if (!_0x4db822 || !_0x4db822[_0x40e665(0x167)]) {
        const _0x55d56a = httpStatus[_0x40e665(0x13e)],
          _0x5117cf = errors[_0x40e665(0x14a)][_0x40e665(0x13f)];
        throw new ApiError(_0x55d56a, _0x5117cf);
      }
      const _0x4dcb18 = await RentCar[_0x40e665(0x14c)]({ accepted: ![] });
      return {
        rentCars: _0x4db822,
        currentPage: _0x255bd0,
        totalPages: Math[_0x40e665(0x133)](_0x4dcb18 / _0x5b0b30),
      };
    } catch (_0x16cd96) {
      throw _0x16cd96;
    }
  }),
  (module[_0x84d599(0x14d)]["acceptRentCar"] = async (_0x13e268) => {
    const _0x468778 = _0x84d599;
    try {
      const _0x2fa6af = await RentCar[_0x468778(0x153)](_0x13e268);
      if (!_0x2fa6af) {
        const _0x127422 = httpStatus[_0x468778(0x13e)],
          _0x335f2d = errors[_0x468778(0x14a)][_0x468778(0x159)];
        throw new ApiError(_0x127422, _0x335f2d);
      }
      if (_0x2fa6af[_0x468778(0x12e)]) {
        const _0x169819 = httpStatus[_0x468778(0x13e)],
          _0x9e257a = errors[_0x468778(0x14a)][_0x468778(0x14e)];
        throw new ApiError(_0x169819, _0x9e257a);
      }
      return (
        _0x2fa6af[_0x468778(0x15f)](),
        await _0x2fa6af[_0x468778(0x123)](),
        _0x2fa6af
      );
    } catch (_0xf8b98c) {
      throw _0xf8b98c;
    }
  }),
  (module[_0x84d599(0x14d)][_0x84d599(0x161)] = async (_0x2f0e3d) => {
    const _0x145777 = _0x84d599;
    try {
      const _0x187118 = await RentCar[_0x145777(0x15e)](_0x2f0e3d);
      if (!_0x187118) {
        const _0x27ad0a = httpStatus[_0x145777(0x13e)],
          _0xc85048 = errors["rentCar"]["notFound"];
        throw new ApiError(_0x27ad0a, _0xc85048);
      }
      return _0x187118;
    } catch (_0x43d186) {
      throw _0x43d186;
    }
  });
