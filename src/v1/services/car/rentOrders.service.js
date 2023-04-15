function _0x310d() {
  const _0x45a96b = [
    "notReceiverOffice",
    "ObjectId",
    "alreadyApproved",
    "../../models/car/rentCar.model",
    "ceil",
    "rentOrder",
    "deleteUserOrders",
    "notFound",
    "BAD_REQUEST",
    "deservedAmount",
    "approveOrder",
    "aggregate",
    "isWaitingForDelivery",
    "getMyReceivedOrders",
    "_id",
    "deliverOrder",
    "save",
    "getAllOrders",
    "deleteDeliveredOrder",
    "deliverUnpaidOrder",
    "getMyOrders",
    "rejectNotPendingOrApproved",
    "mongoose",
    "exports",
    "rejection",
    "438616vgeRYL",
    "getOrderById",
    "notOwner",
    "../user/users.service",
    "length",
    "toString",
    "971000SLezqv",
    "addInvoiceURL",
    "payUnapprovedOrder",
    "411890wRMZZw",
    "FORBIDDEN",
    "isDelivered",
    "reasonFor",
    "noReceivedOrders",
    "isWaitingForApproval",
    "createOrder",
    "deletePaidOrder",
    "1064ndYgHU",
    "442352lxbnXC",
    "getOrderDetails",
    "rentCar",
    "Types",
    "$office",
    "approve",
    "getRentOrdersStatus",
    "../../models/car/rentOrder.model",
    "3961917MbWOQD",
    "../../config/errors",
    "forOffice",
    "3TiZGdE",
    "completeOrderTransaction",
    "../user/transactions.service",
    "closed",
    "author",
    "findById",
    "closePendingOrPaidOrder",
    "office",
    "$author",
    "users",
    "isWaitingForPayment",
    "deliver",
    "$rentCar",
    "90924WUTqmG",
    "deleteOrder",
    "http-status",
    "1032llWgpD",
    "rentcars",
    "noAddedOrders",
    "addBalance",
    "deleteMany",
    "NOT_FOUND",
    "pay",
  ];
  _0x310d = function () {
    return _0x45a96b;
  };
  return _0x310d();
}
const _0x3e18b7 = _0x2b80;
(function (_0x471ec0, _0x50bf5c) {
  const _0x33dd0 = _0x2b80,
    _0x3a2878 = _0x471ec0();
  while (!![]) {
    try {
      const _0x2b8435 =
        parseInt(_0x33dd0(0x141)) / 0x1 +
        (parseInt(_0x33dd0(0x120)) / 0x2) * (parseInt(_0x33dd0(0x134)) / 0x3) +
        parseInt(_0x33dd0(0x164)) / 0x4 +
        parseInt(_0x33dd0(0x11d)) / 0x5 +
        (-parseInt(_0x33dd0(0x144)) / 0x6) *
          (-parseInt(_0x33dd0(0x128)) / 0x7) +
        -parseInt(_0x33dd0(0x129)) / 0x8 +
        -parseInt(_0x33dd0(0x131)) / 0x9;
      if (_0x2b8435 === _0x50bf5c) break;
      else _0x3a2878["push"](_0x3a2878["shift"]());
    } catch (_0x1a3f38) {
      _0x3a2878["push"](_0x3a2878["shift"]());
    }
  }
})(_0x310d, 0x20120);
const { RentOrder } = require(_0x3e18b7(0x130)),
  { RentCar } = require(_0x3e18b7(0x14e)),
  { ApiError } = require("../../middleware/apiError"),
  httpStatus = require(_0x3e18b7(0x143)),
  errors = require(_0x3e18b7(0x132)),
  mongoose = require(_0x3e18b7(0x161)),
  transactionsService = require(_0x3e18b7(0x136)),
  usersService = require(_0x3e18b7(0x11a));
function _0x2b80(_0x315860, _0x465ca7) {
  const _0x310d9b = _0x310d();
  return (
    (_0x2b80 = function (_0x2b8061, _0x37027c) {
      _0x2b8061 = _0x2b8061 - 0x119;
      let _0x2c5a9c = _0x310d9b[_0x2b8061];
      return _0x2c5a9c;
    }),
    _0x2b80(_0x315860, _0x465ca7)
  );
}
(module[_0x3e18b7(0x162)][_0x3e18b7(0x11e)] = async (_0x21be15, _0x4bcab9) => {
  const _0x49cfac = _0x3e18b7;
  try {
    return (
      _0x21be15[_0x49cfac(0x11e)](_0x4bcab9),
      await _0x21be15[_0x49cfac(0x15b)](),
      _0x21be15
    );
  } catch (_0x3f3595) {
    throw _0x3f3595;
  }
}),
  (module[_0x3e18b7(0x162)][_0x3e18b7(0x165)] = async (_0x46b968) => {
    const _0x514c6d = _0x3e18b7;
    try {
      const _0x39f4cf = await RentOrder["findById"](_0x46b968);
      if (!_0x39f4cf) {
        const _0x2f8d10 = httpStatus[_0x514c6d(0x149)],
          _0x14e726 = errors["rentOrder"]["notFound"];
        throw new ApiError(_0x2f8d10, _0x14e726);
      }
      return _0x39f4cf;
    } catch (_0x17c6b1) {
      throw _0x17c6b1;
    }
  }),
  (module[_0x3e18b7(0x162)][_0x3e18b7(0x126)] = async (
    _0xd084ca,
    _0x4d27bf,
    _0x30028b,
    _0x12927c,
    _0x19efb4,
    _0x38860a,
    _0x5abc4f
  ) => {
    const _0x5be12d = _0x3e18b7;
    try {
      const _0x2ff506 = new RentOrder({
        author: _0x4d27bf[_0x5be12d(0x159)],
        rentCar: _0x30028b,
        totalPrice: _0x12927c,
        location: {
          title: _0x19efb4,
          longitude: _0x38860a,
          latitude: _0x5abc4f,
        },
        purpose: _0xd084ca,
        date: new Date(),
      });
      return await _0x2ff506["save"](), _0x2ff506;
    } catch (_0x34b219) {
      throw _0x34b219;
    }
  }),
  (module[_0x3e18b7(0x162)][_0x3e18b7(0x12f)] = async () => {
    try {
      const _0x3fd3b = await RentOrder["count"]({});
      return { total: _0x3fd3b };
    } catch (_0x1d0616) {
      throw _0x1d0616;
    }
  }),
  (module["exports"][_0x3e18b7(0x151)] = async (_0x4ad48c) => {
    const _0x5b457b = _0x3e18b7;
    try {
      await RentOrder[_0x5b457b(0x148)]({ author: _0x4ad48c });
    } catch (_0x442318) {
      throw _0x442318;
    }
  }),
  (module[_0x3e18b7(0x162)][_0x3e18b7(0x15f)] = async (
    _0x1d07ed,
    _0x3dea27,
    _0x2f0e35
  ) => {
    const _0x4586f1 = _0x3e18b7;
    try {
      (_0x3dea27 = parseInt(_0x3dea27)), (_0x2f0e35 = parseInt(_0x2f0e35));
      const _0x3b35bb = await RentOrder[_0x4586f1(0x156)]([
        { $match: { author: _0x1d07ed[_0x4586f1(0x159)] } },
        { $sort: { _id: -0x1 } },
        { $skip: (_0x3dea27 - 0x1) * _0x2f0e35 },
        { $limit: _0x2f0e35 },
        {
          $lookup: {
            from: _0x4586f1(0x13d),
            localField: _0x4586f1(0x13b),
            foreignField: _0x4586f1(0x159),
            as: _0x4586f1(0x13b),
          },
        },
        {
          $lookup: {
            from: _0x4586f1(0x145),
            localField: "rentCar",
            foreignField: "_id",
            as: "rentCar",
          },
        },
        {
          $project: {
            _id: 0x1,
            author: 0x1,
            office: 0x1,
            rentCar: 0x1,
            fullName: 0x1,
            phoneNumber: 0x1,
            receptionLocation: 0x1,
            totalPrice: 0x1,
            invoiceURL: 0x1,
            status: 0x1,
            reasonFor: 0x1,
            startDate: 0x1,
            endDate: 0x1,
            noOfDays: 0x1,
            date: 0x1,
            office: { $arrayElemAt: [_0x4586f1(0x12d), 0x0] },
            rentCar: { $arrayElemAt: [_0x4586f1(0x140), 0x0] },
            office: {
              _id: 0x1,
              avatarURL: 0x1,
              name: 0x1,
              email: 0x1,
              phone: 0x1,
              role: 0x1,
            },
          },
        },
      ]);
      if (!_0x3b35bb || !_0x3b35bb["length"]) {
        const _0x649d92 = httpStatus[_0x4586f1(0x149)],
          _0x5f061f = errors[_0x4586f1(0x150)]["noOrders"];
        throw new ApiError(_0x649d92, _0x5f061f);
      }
      const _0x56ebb0 = await RentOrder[_0x4586f1(0x156)]([
          { $match: { author: _0x1d07ed[_0x4586f1(0x159)] } },
        ]),
        _0x2c8568 = _0x56ebb0[_0x4586f1(0x11b)];
      return {
        orders: _0x3b35bb,
        currentPage: _0x3dea27,
        totalPages: Math[_0x4586f1(0x14f)](_0x2c8568 / _0x2f0e35),
      };
    } catch (_0x30b9ab) {
      throw _0x30b9ab;
    }
  }),
  (module["exports"][_0x3e18b7(0x12a)] = async (_0x53a0fd, _0x433a7a) => {
    const _0x3f8965 = _0x3e18b7;
    try {
      const _0x5ddbc8 = await RentOrder[_0x3f8965(0x156)]([
        {
          $match: {
            _id: mongoose[_0x3f8965(0x12c)][_0x3f8965(0x14c)](_0x433a7a),
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "office",
            foreignField: _0x3f8965(0x159),
            as: _0x3f8965(0x13b),
          },
        },
        {
          $lookup: {
            from: _0x3f8965(0x145),
            localField: _0x3f8965(0x12b),
            foreignField: "_id",
            as: "rentCar",
          },
        },
        {
          $project: {
            _id: 0x1,
            author: 0x1,
            office: 0x1,
            rentCar: 0x1,
            fullName: 0x1,
            phoneNumber: 0x1,
            receptionLocation: 0x1,
            totalPrice: 0x1,
            invoiceURL: 0x1,
            status: 0x1,
            reasonFor: 0x1,
            startDate: 0x1,
            endDate: 0x1,
            noOfDays: 0x1,
            date: 0x1,
            office: { $arrayElemAt: [_0x3f8965(0x12d), 0x0] },
            rentCar: { $arrayElemAt: [_0x3f8965(0x140), 0x0] },
            office: {
              _id: 0x1,
              avatarURL: 0x1,
              name: 0x1,
              email: 0x1,
              phone: 0x1,
              role: 0x1,
            },
          },
        },
      ]);
      if (!_0x5ddbc8 || !_0x5ddbc8[_0x3f8965(0x11b)]) {
        const _0x40e657 = httpStatus[_0x3f8965(0x149)],
          _0x5b23fd = errors[_0x3f8965(0x150)][_0x3f8965(0x152)];
        throw new ApiError(_0x40e657, _0x5b23fd);
      }
      const _0x23d2b9 =
        _0x5ddbc8[0x0][_0x3f8965(0x138)]["toString"]() ===
        _0x53a0fd[_0x3f8965(0x159)][_0x3f8965(0x11c)]();
      if (!_0x23d2b9) {
        const _0x4b9f6b = httpStatus[_0x3f8965(0x121)],
          _0x29d62b = errors[_0x3f8965(0x150)][_0x3f8965(0x119)];
        throw new ApiError(_0x4b9f6b, _0x29d62b);
      }
      return _0x5ddbc8[0x0];
    } catch (_0x52ae3b) {
      throw _0x52ae3b;
    }
  }),
  (module[_0x3e18b7(0x162)]["closeOrder"] = async (_0x2e694c, _0x3b1b4e) => {
    const _0x1b019c = _0x3e18b7;
    try {
      const _0x18f60e = await RentOrder["findById"](_0x3b1b4e);
      if (!_0x18f60e) {
        const _0x1d5aec = httpStatus[_0x1b019c(0x149)],
          _0x351e03 = errors["rentOrder"][_0x1b019c(0x152)];
        throw new ApiError(_0x1d5aec, _0x351e03);
      }
      const _0x5d4b82 = await RentCar[_0x1b019c(0x139)](
        _0x18f60e[_0x1b019c(0x12b)]
      );
      if (!_0x5d4b82) {
        const _0x748ef2 = httpStatus[_0x1b019c(0x149)],
          _0x37eb5c = errors[_0x1b019c(0x12b)][_0x1b019c(0x152)];
        throw new ApiError(_0x748ef2, _0x37eb5c);
      }
      const _0x2e9d87 =
        _0x18f60e[_0x1b019c(0x138)][_0x1b019c(0x11c)]() ===
        _0x2e694c[_0x1b019c(0x159)][_0x1b019c(0x11c)]();
      if (!_0x2e9d87) {
        const _0x3a84e2 = httpStatus[_0x1b019c(0x121)],
          _0x9669a0 = errors[_0x1b019c(0x150)][_0x1b019c(0x119)];
        throw new ApiError(_0x3a84e2, _0x9669a0);
      }
      if (_0x18f60e["isClosed"]()) {
        const _0xc817d5 = httpStatus[_0x1b019c(0x153)],
          _0x1cbd5e = errors[_0x1b019c(0x150)]["alreadyClosed"];
        throw new ApiError(_0xc817d5, _0x1cbd5e);
      }
      if (
        !_0x18f60e[_0x1b019c(0x125)]() &&
        !_0x18f60e["isWaitingForPayment"]()
      ) {
        const _0xb38f27 = httpStatus[_0x1b019c(0x153)],
          _0x20e840 = errors[_0x1b019c(0x150)][_0x1b019c(0x13a)];
        throw new ApiError(_0xb38f27, _0x20e840);
      }
      return (
        _0x18f60e["close"](),
        await _0x18f60e[_0x1b019c(0x15b)](),
        { order: _0x18f60e, rentCar: _0x5d4b82 }
      );
    } catch (_0x4eeac2) {
      throw _0x4eeac2;
    }
  }),
  (module[_0x3e18b7(0x162)][_0x3e18b7(0x142)] = async (
    _0x4bdc19,
    _0x321842
  ) => {
    const _0xc5cbcd = _0x3e18b7;
    try {
      const _0x2ed598 = await RentOrder[_0xc5cbcd(0x139)](_0x321842);
      if (!_0x2ed598) {
        const _0xe062b4 = httpStatus["NOT_FOUND"],
          _0x238cef = errors[_0xc5cbcd(0x150)]["notFound"];
        throw new ApiError(_0xe062b4, _0x238cef);
      }
      const _0x36b78e = await RentCar[_0xc5cbcd(0x139)](
        _0x2ed598[_0xc5cbcd(0x12b)]
      );
      if (!_0x36b78e) {
        const _0x5f2b61 = httpStatus[_0xc5cbcd(0x149)],
          _0x391dcd = errors[_0xc5cbcd(0x12b)][_0xc5cbcd(0x152)];
        throw new ApiError(_0x5f2b61, _0x391dcd);
      }
      const _0x380743 =
        _0x2ed598[_0xc5cbcd(0x138)][_0xc5cbcd(0x11c)]() ===
        _0x4bdc19["_id"][_0xc5cbcd(0x11c)]();
      if (!_0x380743) {
        const _0x1d0b12 = httpStatus[_0xc5cbcd(0x121)],
          _0x49c272 = errors[_0xc5cbcd(0x150)][_0xc5cbcd(0x119)];
        throw new ApiError(_0x1d0b12, _0x49c272);
      }
      if (_0x2ed598[_0xc5cbcd(0x157)]()) {
        const _0x1e827a = httpStatus[_0xc5cbcd(0x153)],
          _0x50baba = errors[_0xc5cbcd(0x150)][_0xc5cbcd(0x127)];
        throw new ApiError(_0x1e827a, _0x50baba);
      }
      if (_0x2ed598[_0xc5cbcd(0x122)]()) {
        const _0x1b5001 = httpStatus["BAD_REQUEST"],
          _0x1354eb = errors["rentOrder"][_0xc5cbcd(0x15d)];
        throw new ApiError(_0x1b5001, _0x1354eb);
      }
      return (
        await _0x2ed598["delete"](),
        _0x2ed598[_0xc5cbcd(0x13e)]() &&
          (await transactionsService["deleteOrderTransaction"](
            _0x2ed598["_id"]
          )),
        { order: _0x2ed598, rentCar: _0x36b78e }
      );
    } catch (_0x20ea67) {
      throw _0x20ea67;
    }
  }),
  (module[_0x3e18b7(0x162)]["confirmPayment"] = async (
    _0x140717,
    _0x453a44
  ) => {
    const _0x426251 = _0x3e18b7;
    try {
      const _0x6fafd7 = await RentCar["findById"](_0x453a44[_0x426251(0x12b)]);
      if (!_0x6fafd7) {
        const _0x986c27 = httpStatus[_0x426251(0x149)],
          _0x3f9b25 = errors["rentCar"][_0x426251(0x152)];
        throw new ApiError(_0x986c27, _0x3f9b25);
      }
      const _0x26796d =
        _0x453a44[_0x426251(0x138)]["toString"]() ===
        _0x140717[_0x426251(0x159)]["toString"]();
      if (!_0x26796d) {
        const _0x1f9b58 = httpStatus[_0x426251(0x121)],
          _0xfcc701 = errors[_0x426251(0x150)][_0x426251(0x119)];
        throw new ApiError(_0x1f9b58, _0xfcc701);
      }
      if (!_0x453a44[_0x426251(0x13e)]()) {
        const _0x4c2323 = httpStatus[_0x426251(0x153)],
          _0x39b56e = errors[_0x426251(0x150)][_0x426251(0x11f)];
        throw new ApiError(_0x4c2323, _0x39b56e);
      }
      _0x453a44[_0x426251(0x14a)](),
        await _0x453a44[_0x426251(0x15b)](),
        await transactionsService[_0x426251(0x135)](
          _0x453a44[_0x426251(0x159)]
        );
      const _0xb1c033 = await usersService["findUserById"](
        _0x453a44[_0x426251(0x13b)]
      );
      return (
        _0xb1c033[_0x426251(0x147)](
          _0x453a44[_0x426251(0x154)][_0x426251(0x133)]
        ),
        await _0xb1c033["save"](),
        { order: _0x453a44, rentCar: _0x6fafd7 }
      );
    } catch (_0x101c39) {
      throw _0x101c39;
    }
  }),
  (module[_0x3e18b7(0x162)][_0x3e18b7(0x158)] = async (
    _0x167341,
    _0x28a61f,
    _0x4a9929
  ) => {
    const _0x3c15d8 = _0x3e18b7;
    try {
      (_0x28a61f = parseInt(_0x28a61f)), (_0x4a9929 = parseInt(_0x4a9929));
      const _0x3caf85 = await RentOrder["aggregate"]([
        { $match: { office: _0x167341[_0x3c15d8(0x159)] } },
        { $sort: { _id: -0x1 } },
        { $skip: (_0x28a61f - 0x1) * _0x4a9929 },
        { $limit: _0x4a9929 },
        {
          $lookup: {
            from: _0x3c15d8(0x13d),
            localField: "author",
            foreignField: "_id",
            as: _0x3c15d8(0x138),
          },
        },
        {
          $lookup: {
            from: _0x3c15d8(0x145),
            localField: _0x3c15d8(0x12b),
            foreignField: "_id",
            as: _0x3c15d8(0x12b),
          },
        },
        {
          $project: {
            _id: 0x1,
            author: 0x1,
            office: 0x1,
            rentCar: 0x1,
            fullName: 0x1,
            phoneNumber: 0x1,
            receptionLocation: 0x1,
            totalPrice: 0x1,
            invoiceURL: 0x1,
            status: 0x1,
            reasonFor: 0x1,
            startDate: 0x1,
            endDate: 0x1,
            noOfDays: 0x1,
            date: 0x1,
            author: { $arrayElemAt: [_0x3c15d8(0x13c), 0x0] },
            rentCar: { $arrayElemAt: [_0x3c15d8(0x140), 0x0] },
            author: { _id: 0x1, avatarURL: 0x1, name: 0x1, role: 0x1 },
          },
        },
      ]);
      if (!_0x3caf85 || !_0x3caf85[_0x3c15d8(0x11b)]) {
        const _0x5c57cb = httpStatus["NOT_FOUND"],
          _0x138691 = errors[_0x3c15d8(0x150)][_0x3c15d8(0x124)];
        throw new ApiError(_0x5c57cb, _0x138691);
      }
      const _0x43cf9b = await RentOrder[_0x3c15d8(0x156)]([
          { $match: { office: _0x167341[_0x3c15d8(0x159)] } },
        ]),
        _0x15a73e = _0x43cf9b[_0x3c15d8(0x11b)];
      return {
        orders: _0x3caf85,
        currentPage: _0x28a61f,
        totalPages: Math[_0x3c15d8(0x14f)](_0x15a73e / _0x4a9929),
      };
    } catch (_0x52e44) {
      throw _0x52e44;
    }
  }),
  (module[_0x3e18b7(0x162)][_0x3e18b7(0x155)] = async (
    _0xde134d,
    _0x653504
  ) => {
    const _0x3dd284 = _0x3e18b7;
    try {
      const _0xba6839 = await RentOrder[_0x3dd284(0x139)](_0x653504);
      if (!_0xba6839) {
        const _0x33ef31 = httpStatus[_0x3dd284(0x149)],
          _0x3d44e7 = errors[_0x3dd284(0x150)][_0x3dd284(0x152)];
        throw new ApiError(_0x33ef31, _0x3d44e7);
      }
      const _0x4313d1 = await RentCar[_0x3dd284(0x139)](
        _0xba6839[_0x3dd284(0x12b)]
      );
      if (!_0x4313d1) {
        const _0x3cb5ce = httpStatus[_0x3dd284(0x149)],
          _0x45d7ba = errors["rentCar"][_0x3dd284(0x152)];
        throw new ApiError(_0x3cb5ce, _0x45d7ba);
      }
      const _0x2fd114 =
        _0xba6839[_0x3dd284(0x13b)][_0x3dd284(0x11c)]() ===
        _0xde134d[_0x3dd284(0x159)][_0x3dd284(0x11c)]();
      if (!_0x2fd114) {
        const _0x5c0c6f = httpStatus[_0x3dd284(0x121)],
          _0x5611a6 = errors[_0x3dd284(0x150)][_0x3dd284(0x14b)];
        throw new ApiError(_0x5c0c6f, _0x5611a6);
      }
      if (_0xba6839[_0x3dd284(0x13e)]()) {
        const _0x2c9712 = httpStatus[_0x3dd284(0x153)],
          _0x4a2860 = errors[_0x3dd284(0x150)][_0x3dd284(0x14d)];
        throw new ApiError(_0x2c9712, _0x4a2860);
      }
      if (!_0xba6839["isWaitingForApproval"]()) {
        const _0x1259fa = httpStatus["BAD_REQUEST"],
          _0x1ca792 = errors["rentOrder"][_0x3dd284(0x160)];
        throw new ApiError(_0x1259fa, _0x1ca792);
      }
      return (
        _0xba6839[_0x3dd284(0x12e)](),
        await _0xba6839[_0x3dd284(0x15b)](),
        { order: _0xba6839, rentCar: _0x4313d1 }
      );
    } catch (_0x562067) {
      throw _0x562067;
    }
  }),
  (module["exports"]["rejectOrder"] = async (
    _0x139eef,
    _0x13bbb4,
    _0x243d4c
  ) => {
    const _0x4dda5b = _0x3e18b7;
    try {
      const _0x60180 = await RentOrder[_0x4dda5b(0x139)](_0x13bbb4);
      if (!_0x60180) {
        const _0x8bbb64 = httpStatus[_0x4dda5b(0x149)],
          _0x26c1dd = errors[_0x4dda5b(0x150)][_0x4dda5b(0x152)];
        throw new ApiError(_0x8bbb64, _0x26c1dd);
      }
      const _0x309a9a = await RentCar[_0x4dda5b(0x139)](
        _0x60180[_0x4dda5b(0x12b)]
      );
      if (!_0x309a9a) {
        const _0x281fe3 = httpStatus[_0x4dda5b(0x149)],
          _0x16b31e = errors[_0x4dda5b(0x12b)][_0x4dda5b(0x152)];
        throw new ApiError(_0x281fe3, _0x16b31e);
      }
      const _0x46ed6c =
        _0x60180["office"][_0x4dda5b(0x11c)]() ===
        _0x139eef[_0x4dda5b(0x159)][_0x4dda5b(0x11c)]();
      if (!_0x46ed6c) {
        const _0x39569a = httpStatus[_0x4dda5b(0x149)],
          _0x15082f = errors["rentOrder"]["notReceiverOffice"];
        throw new ApiError(_0x39569a, _0x15082f);
      }
      if (_0x60180["isRejected"]()) {
        const _0x1d38b9 = httpStatus[_0x4dda5b(0x149)],
          _0x5dd313 = errors[_0x4dda5b(0x150)]["alreadyRejected"];
        throw new ApiError(_0x1d38b9, _0x5dd313);
      }
      if (
        !_0x60180["isWaitingForApproval"]() &&
        !_0x60180[_0x4dda5b(0x13e)]()
      ) {
        const _0x254320 = httpStatus[_0x4dda5b(0x153)],
          _0x4c8703 = errors[_0x4dda5b(0x150)][_0x4dda5b(0x160)];
        throw new ApiError(_0x254320, _0x4c8703);
      }
      return (
        _0x60180["reject"](),
        (_0x60180[_0x4dda5b(0x123)][_0x4dda5b(0x163)] = _0x243d4c),
        await _0x60180[_0x4dda5b(0x15b)](),
        { order: _0x60180, rentCar: _0x309a9a }
      );
    } catch (_0x3ad3aa) {
      throw _0x3ad3aa;
    }
  }),
  (module[_0x3e18b7(0x162)][_0x3e18b7(0x15a)] = async (
    _0x10c82f,
    _0x4429c3
  ) => {
    const _0x2e2f60 = _0x3e18b7;
    try {
      const _0x257ceb = await RentOrder[_0x2e2f60(0x139)](_0x4429c3);
      if (!_0x257ceb) {
        const _0x2ab721 = httpStatus[_0x2e2f60(0x149)],
          _0x5a430 = errors[_0x2e2f60(0x150)][_0x2e2f60(0x152)];
        throw new ApiError(_0x2ab721, _0x5a430);
      }
      const _0x1f92f4 = await RentCar[_0x2e2f60(0x139)](
        _0x257ceb[_0x2e2f60(0x12b)]
      );
      if (!_0x1f92f4) {
        const _0x7c4a2e = httpStatus[_0x2e2f60(0x149)],
          _0x5da26b = errors["rentCar"]["notFound"];
        throw new ApiError(_0x7c4a2e, _0x5da26b);
      }
      const _0x5d17c0 =
        _0x257ceb[_0x2e2f60(0x13b)][_0x2e2f60(0x11c)]() ===
        _0x10c82f[_0x2e2f60(0x159)]["toString"]();
      if (!_0x5d17c0) {
        const _0x175eeb = httpStatus[_0x2e2f60(0x121)],
          _0x1c9d4d = errors[_0x2e2f60(0x150)][_0x2e2f60(0x14b)];
        throw new ApiError(_0x175eeb, _0x1c9d4d);
      }
      if (!_0x257ceb[_0x2e2f60(0x157)]()) {
        const _0xca255f = httpStatus[_0x2e2f60(0x153)],
          _0x3c33b3 = errors[_0x2e2f60(0x150)][_0x2e2f60(0x15e)];
        throw new ApiError(_0xca255f, _0x3c33b3);
      }
      return (
        _0x257ceb[_0x2e2f60(0x13f)](),
        await _0x257ceb[_0x2e2f60(0x15b)](),
        { order: _0x257ceb, rentCar: _0x1f92f4 }
      );
    } catch (_0x3b4f61) {
      throw _0x3b4f61;
    }
  }),
  (module[_0x3e18b7(0x162)][_0x3e18b7(0x15c)] = async (
    _0x5acc34,
    _0x5da711
  ) => {
    const _0xb3a184 = _0x3e18b7;
    try {
      (_0x5acc34 = parseInt(_0x5acc34)), (_0x5da711 = parseInt(_0x5da711));
      const _0x444126 = await RentOrder[_0xb3a184(0x156)]([
        { $match: { status: { $not: { $eq: _0xb3a184(0x137) } } } },
        { $sort: { _id: -0x1 } },
        { $skip: (_0x5acc34 - 0x1) * _0x5da711 },
        { $limit: _0x5da711 },
        {
          $lookup: {
            from: _0xb3a184(0x13d),
            localField: "author",
            foreignField: _0xb3a184(0x159),
            as: _0xb3a184(0x138),
          },
        },
        {
          $lookup: {
            from: "rentcars",
            localField: "rentCar",
            foreignField: _0xb3a184(0x159),
            as: _0xb3a184(0x12b),
          },
        },
        {
          $lookup: {
            from: _0xb3a184(0x13d),
            localField: _0xb3a184(0x13b),
            foreignField: "_id",
            as: _0xb3a184(0x13b),
          },
        },
        {
          $project: {
            _id: 0x1,
            author: 0x1,
            office: 0x1,
            rentCar: 0x1,
            fullName: 0x1,
            phoneNumber: 0x1,
            receptionLocation: 0x1,
            totalPrice: 0x1,
            invoiceURL: 0x1,
            status: 0x1,
            reasonFor: 0x1,
            startDate: 0x1,
            endDate: 0x1,
            noOfDays: 0x1,
            date: 0x1,
            author: { $arrayElemAt: [_0xb3a184(0x13c), 0x0] },
            rentCar: { $arrayElemAt: ["$rentCar", 0x0] },
            office: { $arrayElemAt: ["$office", 0x0] },
            author: {
              _id: 0x1,
              avatarURL: 0x1,
              name: 0x1,
              email: 0x1,
              phone: 0x1,
              role: 0x1,
            },
            office: {
              _id: 0x1,
              avatarURL: 0x1,
              name: 0x1,
              email: 0x1,
              phone: 0x1,
            },
          },
        },
      ]);
      if (!_0x444126 || !_0x444126[_0xb3a184(0x11b)]) {
        const _0x288566 = httpStatus[_0xb3a184(0x149)],
          _0xcd086a = errors[_0xb3a184(0x150)][_0xb3a184(0x146)];
        throw new ApiError(_0x288566, _0xcd086a);
      }
      const _0x4fac2e = await RentOrder[_0xb3a184(0x156)]([
          { $match: { status: { $not: { $eq: _0xb3a184(0x137) } } } },
        ]),
        _0x1187dc = _0x4fac2e[_0xb3a184(0x11b)];
      return {
        orders: _0x444126,
        currentPage: _0x5acc34,
        totalPages: Math[_0xb3a184(0x14f)](_0x1187dc / _0x5da711),
      };
    } catch (_0x59b703) {
      throw _0x59b703;
    }
  }),
  (module["exports"]["getOfficeReceivedOrders"] = async (
    _0x1bc1c6,
    _0x206327,
    _0x3e5a21
  ) => {
    const _0x4b262e = _0x3e18b7;
    try {
      (_0x206327 = parseInt(_0x206327)), (_0x3e5a21 = parseInt(_0x3e5a21));
      const _0x47b4af = await RentOrder["aggregate"]([
        {
          $match: {
            status: { $not: { $eq: "closed" } },
            office: mongoose[_0x4b262e(0x12c)][_0x4b262e(0x14c)](_0x1bc1c6),
          },
        },
        { $sort: { _id: -0x1 } },
        { $skip: (_0x206327 - 0x1) * _0x3e5a21 },
        { $limit: _0x3e5a21 },
        {
          $lookup: {
            from: _0x4b262e(0x13d),
            localField: _0x4b262e(0x138),
            foreignField: _0x4b262e(0x159),
            as: "author",
          },
        },
        {
          $lookup: {
            from: _0x4b262e(0x145),
            localField: _0x4b262e(0x12b),
            foreignField: _0x4b262e(0x159),
            as: _0x4b262e(0x12b),
          },
        },
        {
          $lookup: {
            from: "users",
            localField: _0x4b262e(0x13b),
            foreignField: _0x4b262e(0x159),
            as: _0x4b262e(0x13b),
          },
        },
        {
          $project: {
            _id: 0x1,
            author: 0x1,
            office: 0x1,
            rentCar: 0x1,
            fullName: 0x1,
            phoneNumber: 0x1,
            receptionLocation: 0x1,
            totalPrice: 0x1,
            invoiceURL: 0x1,
            status: 0x1,
            reasonFor: 0x1,
            startDate: 0x1,
            endDate: 0x1,
            noOfDays: 0x1,
            date: 0x1,
            author: { $arrayElemAt: [_0x4b262e(0x13c), 0x0] },
            rentCar: { $arrayElemAt: [_0x4b262e(0x140), 0x0] },
            office: { $arrayElemAt: [_0x4b262e(0x12d), 0x0] },
            author: {
              _id: 0x1,
              avatarURL: 0x1,
              name: 0x1,
              email: 0x1,
              phone: 0x1,
              role: 0x1,
            },
            office: {
              _id: 0x1,
              avatarURL: 0x1,
              name: 0x1,
              email: 0x1,
              phone: 0x1,
            },
          },
        },
      ]);
      if (!_0x47b4af || !_0x47b4af["length"]) {
        const _0x2e8b47 = httpStatus[_0x4b262e(0x149)],
          _0x57ca47 = errors["rentOrder"][_0x4b262e(0x146)];
        throw new ApiError(_0x2e8b47, _0x57ca47);
      }
      const _0x3c3787 = await RentOrder["aggregate"]([
          { $match: { status: { $not: { $eq: _0x4b262e(0x137) } } } },
        ]),
        _0x41bd4d = _0x3c3787[_0x4b262e(0x11b)];
      return {
        orders: _0x47b4af,
        currentPage: _0x206327,
        totalPages: Math[_0x4b262e(0x14f)](_0x41bd4d / _0x3e5a21),
      };
    } catch (_0x448d6f) {
      throw _0x448d6f;
    }
  });
