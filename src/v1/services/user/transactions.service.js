const _0x1b99ca = _0x2a0d;
(function (_0x4b045e, _0x43278b) {
  const _0x3be70f = _0x2a0d,
    _0x5b2bd4 = _0x4b045e();
  while (!![]) {
    try {
      const _0x40558b =
        -parseInt(_0x3be70f(0x18a)) / 0x1 +
        (-parseInt(_0x3be70f(0x19c)) / 0x2) *
          (-parseInt(_0x3be70f(0x192)) / 0x3) +
        parseInt(_0x3be70f(0x19d)) / 0x4 +
        (-parseInt(_0x3be70f(0x1aa)) / 0x5) *
          (-parseInt(_0x3be70f(0x193)) / 0x6) +
        (-parseInt(_0x3be70f(0x19f)) / 0x7) *
          (parseInt(_0x3be70f(0x1b4)) / 0x8) +
        (parseInt(_0x3be70f(0x194)) / 0x9) *
          (parseInt(_0x3be70f(0x19e)) / 0xa) +
        -parseInt(_0x3be70f(0x187)) / 0xb;
      if (_0x40558b === _0x43278b) break;
      else _0x5b2bd4["push"](_0x5b2bd4["shift"]());
    } catch (_0x37dded) {
      _0x5b2bd4["push"](_0x5b2bd4["shift"]());
    }
  }
})(_0x286b, 0xe45d1);
const { Transaction } = require("../../models/user/transaction.model"),
  { ApiError } = require(_0x1b99ca(0x1a4)),
  httpStatus = require(_0x1b99ca(0x189)),
  errors = require(_0x1b99ca(0x190)),
  usersService = require(_0x1b99ca(0x188)),
  excelService = require(_0x1b99ca(0x195)),
  mongoose = require(_0x1b99ca(0x198));
function _0x2a0d(_0x4b7ded, _0x3ea2d0) {
  const _0x286beb = _0x286b();
  return (
    (_0x2a0d = function (_0x2a0d6d, _0x2a81cb) {
      _0x2a0d6d = _0x2a0d6d - 0x184;
      let _0x308878 = _0x286beb[_0x2a0d6d];
      return _0x308878;
    }),
    _0x2a0d(_0x4b7ded, _0x3ea2d0)
  );
}
(module[_0x1b99ca(0x184)][_0x1b99ca(0x18e)] = async (
  _0x213e54,
  _0x143e4c,
  _0x682f2c,
  _0x31ed72,
  _0x2b1753,
  _0x12e33b = ""
) => {
  try {
    const _0x4ba6c4 = new Transaction({
      author: _0x213e54,
      receiver: _0x143e4c,
      order: _0x682f2c,
      title: _0x31ed72,
      amount: _0x2b1753,
      photoURL: _0x12e33b,
      date: new Date(),
    });
    return await _0x4ba6c4["save"](), _0x4ba6c4;
  } catch (_0xa7a54f) {
    throw _0xa7a54f;
  }
}),
  (module[_0x1b99ca(0x184)][_0x1b99ca(0x197)] = async (_0x45ae52) => {
    const _0x381fdd = _0x1b99ca;
    try {
      return await Transaction[_0x381fdd(0x196)]({ order: _0x45ae52 });
    } catch (_0x50ac3f) {
      throw _0x50ac3f;
    }
  }),
  (module[_0x1b99ca(0x184)][_0x1b99ca(0x18f)] = async (_0xb5cf31) => {
    const _0x3a41dd = _0x1b99ca;
    try {
      const _0x520c1c = await Transaction["findOne"]({ order: _0xb5cf31 });
      return (
        _0x520c1c[_0x3a41dd(0x1a8)](),
        await _0x520c1c[_0x3a41dd(0x1b3)](),
        _0x520c1c
      );
    } catch (_0x1ef106) {
      throw _0x1ef106;
    }
  }),
  (module[_0x1b99ca(0x184)][_0x1b99ca(0x1a3)] = async () => {
    const _0x36f354 = _0x1b99ca;
    try {
      const _0x7ebd8f = await Transaction[_0x36f354(0x1a1)]({
          status: _0x36f354(0x1ab),
        }),
        _0x26181d = [
          ...new Set(
            _0x7ebd8f[_0x36f354(0x1a0)]((_0x3ebd7b) =>
              _0x3ebd7b[_0x36f354(0x1b1)][_0x36f354(0x191)]()
            )
          ),
        ];
      return _0x26181d;
    } catch (_0x4a6d84) {}
  }),
  (module[_0x1b99ca(0x184)]["deleteUserTransactions"] = async (_0x1025cf) => {
    const _0x549712 = _0x1b99ca;
    try {
      await Transaction[_0x549712(0x1af)]({ author: _0x1025cf });
    } catch (_0x4307f5) {
      throw _0x4307f5;
    }
  }),
  (module["exports"][_0x1b99ca(0x18c)] = async (
    _0x1b5904,
    _0x61058c,
    _0x3a16f1
  ) => {
    const _0x2f512a = _0x1b99ca;
    try {
      (_0x61058c = parseInt(_0x61058c)), (_0x3a16f1 = parseInt(_0x3a16f1));
      const _0x5a016a = await Transaction[_0x2f512a(0x18d)]([
        { $match: { author: _0x1b5904[_0x2f512a(0x1a9)] } },
        { $sort: { _id: -0x1 } },
        { $skip: (_0x61058c - 0x1) * _0x3a16f1 },
        { $limit: _0x3a16f1 },
        {
          $lookup: {
            from: _0x2f512a(0x1ac),
            localField: _0x2f512a(0x1ad),
            foreignField: _0x2f512a(0x1a9),
            as: _0x2f512a(0x1ad),
          },
        },
        {
          $project: {
            _id: 0x1,
            photoURL: 0x1,
            author: 0x1,
            receiver: { $arrayElemAt: [_0x2f512a(0x185), 0x0] },
            receiver: {
              _id: 0x1,
              avatarURL: 0x1,
              name: 0x1,
              email: 0x1,
              phone: 0x1,
            },
            title: 0x1,
            status: 0x1,
            amount: 0x1,
            date: 0x1,
          },
        },
      ]);
      if (!_0x5a016a || !_0x5a016a[_0x2f512a(0x1a7)]) {
        const _0x3036ce = httpStatus[_0x2f512a(0x186)],
          _0x2e8597 = errors[_0x2f512a(0x1ae)][_0x2f512a(0x1b0)];
        throw new ApiError(_0x3036ce, _0x2e8597);
      }
      const _0x3a539f = await Transaction["aggregate"]([
          { $match: { author: _0x1b5904["_id"] } },
        ]),
        _0x4bb534 = _0x3a539f[_0x2f512a(0x1a7)];
      return {
        transactions: _0x5a016a,
        currentPage: _0x61058c,
        totalPages: Math["ceil"](_0x4bb534 / _0x3a16f1),
      };
    } catch (_0x4f8857) {
      throw _0x4f8857;
    }
  }),
  (module[_0x1b99ca(0x184)][_0x1b99ca(0x19b)] = async (_0x437ca6) => {
    const _0x5f018d = _0x1b99ca;
    try {
      const _0x4f4bb5 = await Transaction[_0x5f018d(0x18d)]([
        { $match: { author: _0x437ca6[_0x5f018d(0x1a9)] } },
        { $sort: { _id: -0x1 } },
        {
          $lookup: {
            from: _0x5f018d(0x1ac),
            localField: _0x5f018d(0x1ad),
            foreignField: "_id",
            as: _0x5f018d(0x1ad),
          },
        },
        {
          $project: {
            _id: 0x1,
            author: 0x1,
            receiver: { $arrayElemAt: [_0x5f018d(0x185), 0x0] },
            receiver: {
              _id: 0x1,
              avatarURL: 0x1,
              name: 0x1,
              email: 0x1,
              phone: 0x1,
            },
            title: 0x1,
            status: 0x1,
            amount: 0x1,
            date: 0x1,
          },
        },
      ]);
      if (!_0x4f4bb5 || !_0x4f4bb5[_0x5f018d(0x1a7)]) {
        const _0x2d608d = httpStatus[_0x5f018d(0x186)],
          _0x43e215 = errors[_0x5f018d(0x1ae)][_0x5f018d(0x1b0)];
        throw new ApiError(_0x2d608d, _0x43e215);
      }
      const _0x358e06 = await excelService[_0x5f018d(0x18b)](
        _0x437ca6,
        _0x4f4bb5
      );
      return _0x358e06;
    } catch (_0x3694d6) {
      throw _0x3694d6;
    }
  }),
  (module["exports"][_0x1b99ca(0x199)] = async (
    _0x1dab0d,
    _0x47cd62,
    _0x1ece0e
  ) => {
    const _0x5e0937 = _0x1b99ca;
    try {
      (_0x47cd62 = parseInt(_0x47cd62)), (_0x1ece0e = parseInt(_0x1ece0e));
      const _0x3bbbe8 = await Transaction["aggregate"]([
        {
          $match: {
            author: mongoose[_0x5e0937(0x1a6)][_0x5e0937(0x1a5)](_0x1dab0d),
            status: "incomplete",
          },
        },
        { $sort: { _id: -0x1 } },
        { $skip: (_0x47cd62 - 0x1) * _0x1ece0e },
        { $limit: _0x1ece0e },
        {
          $lookup: {
            from: "users",
            localField: _0x5e0937(0x1ad),
            foreignField: _0x5e0937(0x1a9),
            as: _0x5e0937(0x1ad),
          },
        },
        {
          $project: {
            _id: 0x1,
            photoURL: 0x1,
            author: 0x1,
            receiver: { $arrayElemAt: [_0x5e0937(0x185), 0x0] },
            receiver: {
              _id: 0x1,
              avatarURL: 0x1,
              name: 0x1,
              email: 0x1,
              phone: 0x1,
            },
            title: 0x1,
            status: 0x1,
            amount: 0x1,
            date: 0x1,
          },
        },
      ]);
      if (!_0x3bbbe8 || !_0x3bbbe8[_0x5e0937(0x1a7)]) {
        const _0x153739 = httpStatus[_0x5e0937(0x186)],
          _0x86419 = errors["transaction"][_0x5e0937(0x1b0)];
        throw new ApiError(_0x153739, _0x86419);
      }
      const _0x58bbfb = await Transaction["aggregate"]([
          {
            $match: {
              author: mongoose["Types"][_0x5e0937(0x1a5)](_0x1dab0d),
              status: _0x5e0937(0x1ab),
            },
          },
        ]),
        _0xfd4d3 = _0x58bbfb[_0x5e0937(0x1a7)];
      return {
        transactions: _0x3bbbe8,
        currentPage: _0x47cd62,
        totalPages: Math[_0x5e0937(0x19a)](_0xfd4d3 / _0x1ece0e),
      };
    } catch (_0x15edd6) {
      throw _0x15edd6;
    }
  }),
  (module[_0x1b99ca(0x184)][_0x1b99ca(0x18b)] = async (_0x445f0e) => {
    const _0x1c1502 = _0x1b99ca;
    try {
      const _0x373e00 = await usersService[_0x1c1502(0x1b2)](_0x445f0e);
      if (!_0x373e00) {
        const _0x1bcfaf = httpStatus[_0x1c1502(0x186)],
          _0xa20a1e = errors[_0x1c1502(0x1a2)]["notFound"];
        throw new ApiError(_0x1bcfaf, _0xa20a1e);
      }
      const _0x1f53a4 = await Transaction[_0x1c1502(0x18d)]([
        { $match: { author: _0x373e00["_id"], status: "incomplete" } },
        { $sort: { _id: -0x1 } },
        {
          $lookup: {
            from: _0x1c1502(0x1ac),
            localField: "receiver",
            foreignField: _0x1c1502(0x1a9),
            as: _0x1c1502(0x1ad),
          },
        },
        {
          $project: {
            _id: 0x1,
            author: 0x1,
            receiver: { $arrayElemAt: [_0x1c1502(0x185), 0x0] },
            receiver: {
              _id: 0x1,
              avatarURL: 0x1,
              name: 0x1,
              email: 0x1,
              phone: 0x1,
            },
            title: 0x1,
            status: 0x1,
            amount: 0x1,
            date: 0x1,
          },
        },
      ]);
      if (!_0x1f53a4 || !_0x1f53a4[_0x1c1502(0x1a7)]) {
        const _0xa1b123 = httpStatus["NOT_FOUND"],
          _0x349202 = errors[_0x1c1502(0x1ae)][_0x1c1502(0x1b0)];
        throw new ApiError(_0xa1b123, _0x349202);
      }
      const _0x202420 = await excelService[_0x1c1502(0x18b)](
        _0x373e00,
        _0x1f53a4
      );
      return _0x202420;
    } catch (_0x10d453) {
      throw _0x10d453;
    }
  });
function _0x286b() {
  const _0x425e1c = [
    "http-status",
    "783738ZwwBrG",
    "exportUserTransactionsToExcel",
    "getMyTransactions",
    "aggregate",
    "createTransaction",
    "completeOrderTransaction",
    "../../config/errors",
    "toString",
    "3wpAgfB",
    "12XYbzcx",
    "7869402jJxGAU",
    "../storage/excel.service",
    "deleteOne",
    "deleteOrderTransaction",
    "mongoose",
    "getUserTransactions",
    "ceil",
    "exportMyTransactionsToExcel",
    "839318DuzEwS",
    "7313424DFdvFW",
    "10dXStYN",
    "6287330nECyKy",
    "map",
    "find",
    "user",
    "getIncompleteTransactionsAuthorIds",
    "../../middleware/apiError",
    "ObjectId",
    "Types",
    "length",
    "complete",
    "_id",
    "3281105nuFdSl",
    "incomplete",
    "users",
    "receiver",
    "transaction",
    "deleteMany",
    "hasNoTransactions",
    "author",
    "findUserById",
    "save",
    "8zikAfJ",
    "exports",
    "$receiver",
    "NOT_FOUND",
    "19992830EeQvLT",
    "./users.service",
  ];
  _0x286b = function () {
    return _0x425e1c;
  };
  return _0x286b();
}
