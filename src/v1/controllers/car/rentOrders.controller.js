const _0x74b4f5 = _0x16bb;
(function (_0x31a393, _0x1fd67d) {
  const _0x5ec4ec = _0x16bb,
    _0x55eb5b = _0x31a393();
  while (!![]) {
    try {
      const _0x5032c2 =
        (-parseInt(_0x5ec4ec(0x1f5)) / 0x1) *
          (-parseInt(_0x5ec4ec(0x1bf)) / 0x2) +
        -parseInt(_0x5ec4ec(0x1f0)) / 0x3 +
        parseInt(_0x5ec4ec(0x1c5)) / 0x4 +
        parseInt(_0x5ec4ec(0x1bb)) / 0x5 +
        (parseInt(_0x5ec4ec(0x1c1)) / 0x6) *
          (-parseInt(_0x5ec4ec(0x1b7)) / 0x7) +
        (-parseInt(_0x5ec4ec(0x1f9)) / 0x8) *
          (-parseInt(_0x5ec4ec(0x1c6)) / 0x9) +
        (-parseInt(_0x5ec4ec(0x1c3)) / 0xa) *
          (-parseInt(_0x5ec4ec(0x1d0)) / 0xb);
      if (_0x5032c2 === _0x1fd67d) break;
      else _0x55eb5b["push"](_0x55eb5b["shift"]());
    } catch (_0x564dcf) {
      _0x55eb5b["push"](_0x55eb5b["shift"]());
    }
  }
})(_0x2e66, 0xe8af9);
const {
    rentOrdersService: ordersService,
    usersService,
    transactionsService,
    fatoraService,
  } = require(_0x74b4f5(0x1e3)),
  { CLIENT_SCHEMA: orderSchema } = require(_0x74b4f5(0x1dd)),
  { CLIENT_SCHEMA: rentCarSchema } = require(_0x74b4f5(0x1fd)),
  { CLIENT_SCHEMA: userSchema } = require("../../models/user/user.model"),
  httpStatus = require(_0x74b4f5(0x1ca)),
  { errors } = require(_0x74b4f5(0x1d3)),
  { ApiError } = require(_0x74b4f5(0x1f1)),
  _ = require(_0x74b4f5(0x1c4)),
  { notifications, success, transactions } = require(_0x74b4f5(0x1d3));
(module[_0x74b4f5(0x1bc)][_0x74b4f5(0x1d8)] = async (
  _0x2f49f0,
  _0x28545a,
  _0x375543
) => {
  const _0x29fa9c = _0x74b4f5;
  try {
    const _0x145918 = _0x2f49f0[_0x29fa9c(0x1ad)],
      { page: _0x3149fc, limit: _0x8ce310 } = _0x2f49f0[_0x29fa9c(0x1af)],
      {
        currentPage: _0x4a476b,
        totalPages: _0x22db2f,
        orders: _0x4227c4,
      } = await ordersService[_0x29fa9c(0x1d8)](
        _0x145918,
        _0x3149fc,
        _0x8ce310
      ),
      _0x1392d1 = {
        currentPage: _0x4a476b,
        totalPages: _0x22db2f,
        orders: _0x4227c4[_0x29fa9c(0x1bd)]((_0x20dc65) => {
          const _0x456b2c = _0x29fa9c,
            _0xe86785 = {
              ..._0x20dc65,
              office: _[_0x456b2c(0x1c0)](
                _0x20dc65[_0x456b2c(0x1cb)][0x0],
                userSchema
              ),
              rentCar: _[_0x456b2c(0x1c0)](
                _0x20dc65[_0x456b2c(0x1ba)],
                rentCarSchema
              ),
            };
          return _[_0x456b2c(0x1c0)](_0xe86785, orderSchema);
        }),
      };
    _0x28545a[_0x29fa9c(0x1b0)](httpStatus["OK"])["json"](_0x1392d1);
  } catch (_0x141652) {
    _0x375543(_0x141652);
  }
}),
  (module[_0x74b4f5(0x1bc)]["getOrderDetails"] = async (
    _0x63d95d,
    _0xf92f2,
    _0x38e58b
  ) => {
    const _0x499f74 = _0x74b4f5;
    try {
      const _0x139f63 = _0x63d95d[_0x499f74(0x1ad)],
        { orderId: _0x338ef0 } = _0x63d95d[_0x499f74(0x1df)],
        _0x59c861 = await ordersService["getOrderDetails"](
          _0x139f63,
          _0x338ef0
        ),
        _0x3423a6 = {
          ..._0x59c861,
          office: _["pick"](_0x59c861["office"][0x0], userSchema),
          rentCar: _[_0x499f74(0x1c0)](
            _0x59c861[_0x499f74(0x1ba)],
            rentCarSchema
          ),
        },
        _0x309118 = _[_0x499f74(0x1c0)](_0x3423a6, orderSchema);
      _0xf92f2["status"](httpStatus["OK"])[_0x499f74(0x1d2)](_0x309118);
    } catch (_0x22b85f) {
      _0x38e58b(_0x22b85f);
    }
  }),
  (module[_0x74b4f5(0x1bc)][_0x74b4f5(0x1c7)] = async (
    _0x24ab82,
    _0x333823,
    _0x45972e
  ) => {
    const _0xe6a67a = _0x74b4f5;
    try {
      const _0x47b350 = _0x24ab82[_0xe6a67a(0x1ad)],
        { orderId: _0x4e8f45 } = _0x24ab82[_0xe6a67a(0x1df)],
        { rentCar: _0x2fe4a1, order: _0x1a5c43 } = await ordersService[
          _0xe6a67a(0x1c7)
        ](_0x47b350, _0x4e8f45);
      await transactionsService[_0xe6a67a(0x1aa)](_0x1a5c43[_0xe6a67a(0x1ea)]);
      const _0x4cc40c = notifications[_0xe6a67a(0x1e5)][_0xe6a67a(0x1fa)](
        _0x2fe4a1[_0xe6a67a(0x1ee)][0x0]
      );
      await usersService[_0xe6a67a(0x1c8)](
        [_0x47b350[_0xe6a67a(0x1ea)]],
        _0x4cc40c
      );
      const _0x18b73d = success[_0xe6a67a(0x1e5)]["orderClosed"];
      _0x333823["status"](httpStatus["OK"])[_0xe6a67a(0x1d2)](_0x18b73d);
    } catch (_0x529787) {
      _0x45972e(_0x529787);
    }
  }),
  (module[_0x74b4f5(0x1bc)][_0x74b4f5(0x1e9)] = async (
    _0x1242e3,
    _0x340ee3,
    _0x51bd89
  ) => {
    const _0x5948b7 = _0x74b4f5;
    try {
      const _0x49d7dd = _0x1242e3[_0x5948b7(0x1ad)],
        { orderId: _0x2a87e7 } = _0x1242e3[_0x5948b7(0x1df)],
        { rentCar: _0xc44ea5 } = await ordersService[_0x5948b7(0x1e9)](
          _0x49d7dd,
          _0x2a87e7
        ),
        _0x36e313 = notifications[_0x5948b7(0x1e5)][_0x5948b7(0x1c2)](
          _0xc44ea5[_0x5948b7(0x1ee)][0x0]
        );
      await usersService[_0x5948b7(0x1c8)](
        [_0x49d7dd[_0x5948b7(0x1ea)]],
        _0x36e313
      );
      const _0x1c2d9a = success[_0x5948b7(0x1e5)][_0x5948b7(0x1d1)];
      _0x340ee3[_0x5948b7(0x1b0)](httpStatus["OK"])["json"](_0x1c2d9a);
    } catch (_0x253c7c) {
      _0x51bd89(_0x253c7c);
    }
  }),
  (module["exports"][_0x74b4f5(0x1ac)] = async (
    _0x48446d,
    _0x1021b6,
    _0x5e045a
  ) => {
    const _0x13647c = _0x74b4f5;
    try {
      const _0x4551a4 = _0x48446d[_0x13647c(0x1ad)],
        { orderId: _0x578174 } = _0x48446d[_0x13647c(0x1df)],
        _0x3ddc15 = await ordersService["getOrderById"](_0x578174),
        _0x405507 = (_0x548104) => {
          const _0x225ba3 = _0x13647c;
          try {
            const _0x31bb71 = httpStatus["INTERNAL_SERVER_ERROR"],
              _0x88f0d4 = errors[_0x225ba3(0x1eb)]["somethingWrong"],
              _0x2bc3a2 = new ApiError(_0x31bb71, _0x88f0d4);
            _0x5e045a(_0x2bc3a2);
          } catch (_0x48e52b) {
            const _0xba5c9d = httpStatus[_0x225ba3(0x1d4)],
              _0x4c2b1c = errors[_0x225ba3(0x1eb)]["somethingWrong"],
              _0x5de599 = new ApiError(_0xba5c9d, _0x4c2b1c);
            _0x5e045a(_0x5de599);
          }
        },
        _0x684cd = async (_0x440729) => {
          const _0x469a4c = _0x13647c;
          try {
            const _0xb4773f = _0x440729[_0x469a4c(0x1b5)]["checkout_url"];
            await ordersService[_0x469a4c(0x1ae)](_0x3ddc15, _0xb4773f);
            const _0x3a8eec = { type: "txt/url", path: _0xb4773f };
            _0x1021b6[_0x469a4c(0x1b0)](httpStatus[_0x469a4c(0x1f3)])[
              _0x469a4c(0x1d2)
            ](_0x3a8eec);
          } catch (_0x42511c) {
            _0x5e045a(_0x42511c);
          }
        };
      fatoraService[_0x13647c(0x1fb)](
        _0x4551a4,
        _0x3ddc15[_0x13647c(0x1b2)],
        _0x3ddc15["_id"],
        _0x684cd,
        _0x405507
      );
    } catch (_0x3af58b) {
      _0x5e045a(_0x3af58b);
    }
  }),
  (module[_0x74b4f5(0x1bc)][_0x74b4f5(0x1c9)] = async (
    _0x350b0e,
    _0x4bf526,
    _0x430120
  ) => {
    const _0x3171eb = _0x74b4f5;
    try {
      const _0x2c44c6 = _0x350b0e[_0x3171eb(0x1ad)],
        { orderId: _0x805d60 } = _0x350b0e[_0x3171eb(0x1df)],
        _0x5ebff0 = await ordersService[_0x3171eb(0x1cc)](_0x805d60),
        _0x162058 = (_0x6234f) => {
          const _0x53a4fa = _0x3171eb;
          try {
            const _0x3963d1 = httpStatus[_0x53a4fa(0x1d4)],
              _0x42c0f8 = errors["fatora"][_0x53a4fa(0x1e8)],
              _0x491634 = new ApiError(_0x3963d1, _0x42c0f8);
            _0x430120(_0x491634);
          } catch (_0x3aa477) {
            const _0x41d1cf = httpStatus[_0x53a4fa(0x1d4)],
              _0xdcd13c = errors[_0x53a4fa(0x1eb)]["somethingWrong"],
              _0x444e07 = new ApiError(_0x41d1cf, _0xdcd13c);
            _0x430120(_0x444e07);
          }
        },
        _0x38d70a = async (_0x4b61ce) => {
          const _0x23f79e = _0x3171eb;
          try {
            const _0x41a6bf = _0x4b61ce["result"][_0x23f79e(0x1b3)],
              _0x1c8315 = _0x4b61ce[_0x23f79e(0x1b5)][_0x23f79e(0x1f4)];
            (_0x5ebff0[_0x23f79e(0x1ed)] = _0x1c8315),
              await _0x5ebff0[_0x23f79e(0x1e1)]();
            if (_0x41a6bf !== _0x23f79e(0x1ab)) {
              const _0xa0f89b = httpStatus[_0x23f79e(0x1be)],
                _0x26ccbe = errors["fatora"]["notPaid"],
                _0x28172e = new ApiError(_0xa0f89b, _0x26ccbe);
              return _0x430120(_0x28172e);
            }
            const { rentCar: _0x6f1f06 } = await ordersService[
                "confirmPayment"
              ](_0x2c44c6, _0x5ebff0),
              _0x4e7e09 = notifications[_0x23f79e(0x1d7)][_0x23f79e(0x1da)]();
            await usersService[_0x23f79e(0x1c8)](
              [_0x5ebff0["author"]],
              _0x4e7e09
            );
            const _0x4f96a1 = notifications[_0x23f79e(0x1d7)][_0x23f79e(0x1b8)](
              _0x6f1f06[_0x23f79e(0x1ee)][0x0]
            );
            await usersService[_0x23f79e(0x1d5)](_0x4f96a1);
            const _0x5124c8 = notifications[_0x23f79e(0x1d7)][_0x23f79e(0x1ce)](
              _0x6f1f06[_0x23f79e(0x1ee)][0x0]
            );
            await usersService["sendNotification"](
              [_0x5ebff0[_0x23f79e(0x1cb)]],
              _0x5124c8
            );
            const _0x40eaea = notifications["rentCars"][_0x23f79e(0x1f6)](
              _0x6f1f06[_0x23f79e(0x1ee)][0x0]
            );
            await usersService[_0x23f79e(0x1c8)](
              [_0x5ebff0[_0x23f79e(0x1dc)]],
              _0x40eaea
            );
            const _0x254a4f = success["rentOrder"][_0x23f79e(0x1fc)];
            _0x4bf526[_0x23f79e(0x1b0)](httpStatus["OK"])["json"](_0x254a4f);
          } catch (_0x162a09) {
            _0x430120(_0x162a09);
          }
        };
      fatoraService[_0x3171eb(0x1db)](
        _0x5ebff0["_id"],
        _0x5ebff0[_0x3171eb(0x1ed)],
        _0x38d70a,
        _0x162058
      );
    } catch (_0x16b6b8) {
      _0x430120(_0x16b6b8);
    }
  }),
  (module[_0x74b4f5(0x1bc)][_0x74b4f5(0x1ec)] = async (
    _0x2b3e77,
    _0x23754e,
    _0x290805
  ) => {
    const _0x4466e2 = _0x74b4f5;
    try {
      const _0x16da74 = _0x2b3e77[_0x4466e2(0x1ad)],
        { page: _0x245a53, limit: _0x5661aa } = _0x2b3e77[_0x4466e2(0x1af)],
        {
          currentPage: _0x163ffc,
          totalPages: _0x39612f,
          orders: _0x337432,
        } = await ordersService[_0x4466e2(0x1ec)](
          _0x16da74,
          _0x245a53,
          _0x5661aa
        ),
        _0x15735c = {
          currentPage: _0x163ffc,
          totalPages: _0x39612f,
          orders: _0x337432[_0x4466e2(0x1bd)]((_0x4bb8e2) => {
            const _0x518f30 = _0x4466e2,
              _0x1ef19f = {
                ..._0x4bb8e2,
                phoneNumber: "",
                rentCar: _[_0x518f30(0x1c0)](
                  _0x4bb8e2[_0x518f30(0x1ba)],
                  rentCarSchema
                ),
              };
            return _[_0x518f30(0x1c0)](_0x1ef19f, orderSchema);
          }),
        };
      _0x23754e[_0x4466e2(0x1b0)](httpStatus["OK"])[_0x4466e2(0x1d2)](
        _0x15735c
      );
    } catch (_0x5acbb4) {
      _0x290805(_0x5acbb4);
    }
  }),
  (module[_0x74b4f5(0x1bc)][_0x74b4f5(0x1f2)] = async (
    _0x5018ea,
    _0x2fd3de,
    _0x21a02a
  ) => {
    const _0x32d7e1 = _0x74b4f5;
    try {
      const _0x2c30dd = _0x5018ea[_0x32d7e1(0x1ad)],
        { orderId: _0x31d136 } = _0x5018ea[_0x32d7e1(0x1df)],
        { order: _0x357326, rentCar: _0x2d1140 } = await ordersService[
          _0x32d7e1(0x1f2)
        ](_0x2c30dd, _0x31d136),
        _0x44e09c = notifications[_0x32d7e1(0x1d7)][_0x32d7e1(0x1e2)](
          _0x2d1140[_0x32d7e1(0x1ee)][0x0]
        );
      await usersService[_0x32d7e1(0x1d5)](_0x44e09c);
      const _0x21f055 = notifications["rentCars"][_0x32d7e1(0x1f7)](
        _0x2d1140[_0x32d7e1(0x1ee)][0x0]
      );
      await usersService[_0x32d7e1(0x1c8)](
        [_0x2c30dd[_0x32d7e1(0x1ea)]],
        _0x21f055
      );
      const _0x2dc439 = notifications["rentCars"][
        "rentalRequestApprovedForUser"
      ](_0x2d1140[_0x32d7e1(0x1ee)][0x0]);
      await usersService["sendNotification"]([_0x357326["author"]], _0x2dc439),
        await transactionsService[_0x32d7e1(0x1d6)](
          _0x357326[_0x32d7e1(0x1dc)],
          _0x2c30dd[_0x32d7e1(0x1ea)],
          _0x357326[_0x32d7e1(0x1ea)],
          transactions[_0x32d7e1(0x1cf)](_0x357326[_0x32d7e1(0x1b1)]),
          _0x357326[_0x32d7e1(0x1b2)],
          _0x2d1140["photos"][0x0]
        );
      const _0xbef8e3 = notifications[_0x32d7e1(0x1d7)][_0x32d7e1(0x1cd)]();
      await usersService[_0x32d7e1(0x1c8)]([_0x357326["author"]], _0xbef8e3);
      const _0x34834b = success[_0x32d7e1(0x1e5)]["orderApproved"];
      _0x2fd3de[_0x32d7e1(0x1b0)](httpStatus["OK"])[_0x32d7e1(0x1d2)](
        _0x34834b
      );
    } catch (_0x3015cb) {
      _0x21a02a(_0x3015cb);
    }
  }),
  (module[_0x74b4f5(0x1bc)][_0x74b4f5(0x1de)] = async (
    _0x40f419,
    _0x2df4b2,
    _0x1dd547
  ) => {
    const _0x114b9b = _0x74b4f5;
    try {
      const _0x5d7bfc = _0x40f419[_0x114b9b(0x1ad)],
        { orderId: _0x463d7d } = _0x40f419[_0x114b9b(0x1df)],
        { rejectionReason: _0x527855 } = _0x40f419[_0x114b9b(0x1b6)],
        { order: _0x1702a9, rentCar: _0x341ab4 } = await ordersService[
          _0x114b9b(0x1de)
        ](_0x5d7bfc, _0x463d7d, _0x527855);
      await transactionsService[_0x114b9b(0x1aa)](_0x1702a9[_0x114b9b(0x1ea)]);
      const _0x55ef9d = notifications[_0x114b9b(0x1d7)][_0x114b9b(0x1f8)](
        _0x527855,
        _0x341ab4["photos"][0x0]
      );
      await usersService[_0x114b9b(0x1d5)](_0x55ef9d);
      const _0x423658 = notifications["rentCars"][_0x114b9b(0x1ef)](
        _0x527855,
        _0x341ab4["photos"][0x0]
      );
      await usersService[_0x114b9b(0x1c8)]([_0x5d7bfc["_id"]], _0x423658);
      const _0x4f21ec = notifications["rentCars"][_0x114b9b(0x1b9)](
        _0x527855,
        _0x341ab4["photos"][0x0]
      );
      await usersService[_0x114b9b(0x1c8)](
        [_0x1702a9[_0x114b9b(0x1dc)]],
        _0x4f21ec
      );
      const _0x97e4c8 = success[_0x114b9b(0x1e5)]["orderRejected"];
      _0x2df4b2[_0x114b9b(0x1b0)](httpStatus["OK"])["json"](_0x97e4c8);
    } catch (_0x5e1700) {
      _0x1dd547(_0x5e1700);
    }
  }),
  (module[_0x74b4f5(0x1bc)][_0x74b4f5(0x1e7)] = async (
    _0x113b43,
    _0x29b1d6,
    _0x4d5c0a
  ) => {
    const _0x59cc5f = _0x74b4f5;
    try {
      const _0x43b48d = _0x113b43[_0x59cc5f(0x1ad)],
        { orderId: _0xcd2963 } = _0x113b43[_0x59cc5f(0x1df)],
        { order: _0x139dde, rentCar: _0x32c41a } = await ordersService[
          _0x59cc5f(0x1e7)
        ](_0x43b48d, _0xcd2963),
        _0x6454eb = notifications["rentCars"][_0x59cc5f(0x1e0)](
          _0x32c41a[_0x59cc5f(0x1ee)][0x0]
        );
      await usersService["sendNotificationToAdmins"](_0x6454eb);
      const _0x74428 = notifications["rentCars"][_0x59cc5f(0x1e4)](
        _0x32c41a[_0x59cc5f(0x1ee)][0x0]
      );
      await usersService[_0x59cc5f(0x1c8)](
        [_0x43b48d[_0x59cc5f(0x1ea)]],
        _0x74428
      );
      const _0x18fa8a = notifications[_0x59cc5f(0x1d7)][
        "rentalRequestDeliveredForUser"
      ](_0x32c41a[_0x59cc5f(0x1ee)][0x0]);
      await usersService[_0x59cc5f(0x1c8)](
        [_0x139dde[_0x59cc5f(0x1dc)]],
        _0x18fa8a
      );
      const _0x184c6e = success[_0x59cc5f(0x1e5)][_0x59cc5f(0x1e6)];
      _0x29b1d6["status"](httpStatus["OK"])[_0x59cc5f(0x1d2)](_0x184c6e);
    } catch (_0x19d440) {
      _0x4d5c0a(_0x19d440);
    }
  }),
  (module[_0x74b4f5(0x1bc)]["getAllOrders"] = async (
    _0x4c0300,
    _0x1aa987,
    _0x44656e
  ) => {
    const _0x42d648 = _0x74b4f5;
    try {
      const { page: _0x1af429, limit: _0xa4f5e4 } = _0x4c0300[_0x42d648(0x1af)],
        {
          currentPage: _0x1fc012,
          totalPages: _0x561fca,
          orders: _0x3c0f98,
        } = await ordersService[_0x42d648(0x1d9)](_0x1af429, _0xa4f5e4),
        _0x3a51d4 = {
          currentPage: _0x1fc012,
          totalPages: _0x561fca,
          orders: _0x3c0f98[_0x42d648(0x1bd)]((_0x454af) => {
            const _0x546c4b = _0x42d648,
              _0x3dfa57 = {
                ..._0x454af,
                rentCar: _[_0x546c4b(0x1c0)](
                  _0x454af["rentCar"],
                  rentCarSchema
                ),
              };
            return _["pick"](_0x3dfa57, orderSchema);
          }),
        };
      _0x1aa987["status"](httpStatus["OK"])["json"](_0x3a51d4);
    } catch (_0x4237b1) {
      _0x44656e(_0x4237b1);
    }
  }),
  (module["exports"][_0x74b4f5(0x1b4)] = async (
    _0x3cc948,
    _0x254b08,
    _0x5a40f6
  ) => {
    const _0x4ff980 = _0x74b4f5;
    try {
      const { userId: _0xc54484 } = _0x3cc948[_0x4ff980(0x1df)],
        { page: _0x2ab025, limit: _0x2fe621 } = _0x3cc948[_0x4ff980(0x1af)],
        {
          currentPage: _0x42fc38,
          totalPages: _0x38cf1d,
          orders: _0x27f079,
        } = await ordersService["getOfficeReceivedOrders"](
          _0xc54484,
          _0x2ab025,
          _0x2fe621
        ),
        _0x32adfa = {
          currentPage: _0x42fc38,
          totalPages: _0x38cf1d,
          orders: _0x27f079["map"]((_0x27e315) => {
            const _0x365bf8 = _0x4ff980,
              _0x33d333 = {
                ..._0x27e315,
                rentCar: _[_0x365bf8(0x1c0)](
                  _0x27e315[_0x365bf8(0x1ba)],
                  rentCarSchema
                ),
              };
            return _["pick"](_0x33d333, orderSchema);
          }),
        };
      _0x254b08["status"](httpStatus["OK"])[_0x4ff980(0x1d2)](_0x32adfa);
    } catch (_0x53a00f) {
      _0x5a40f6(_0x53a00f);
    }
  });
function _0x16bb(_0x1a934f, _0x4588de) {
  const _0x2e66cc = _0x2e66();
  return (
    (_0x16bb = function (_0x16bb17, _0x4d50e8) {
      _0x16bb17 = _0x16bb17 - 0x1aa;
      let _0x43cb1c = _0x2e66cc[_0x16bb17];
      return _0x43cb1c;
    }),
    _0x16bb(_0x1a934f, _0x4588de)
  );
}
function _0x2e66() {
  const _0x58dd11 = [
    "getOfficeReceivedOrders",
    "result",
    "body",
    "21XRnpeT",
    "rentalRequestPaidForAdmin",
    "rentalRequestRejectedForUser",
    "rentCar",
    "6460525rFKjOm",
    "exports",
    "map",
    "FORBIDDEN",
    "152822UojIym",
    "pick",
    "2251254eEEDcd",
    "orderDeletedForUser",
    "90PtCDye",
    "lodash",
    "5658480MqMsCt",
    "7884kqlwvS",
    "closeOrder",
    "sendNotification",
    "confirmPayment",
    "http-status",
    "office",
    "getOrderById",
    "transactionNotificationIncomplete",
    "rentalRequestPaidForOffice",
    "rentalOrderPayment",
    "547811zGMVKG",
    "orderDeleted",
    "json",
    "../../config",
    "INTERNAL_SERVER_ERROR",
    "sendNotificationToAdmins",
    "createTransaction",
    "rentCars",
    "getMyOrders",
    "getAllOrders",
    "transactionNotificationComplete",
    "verifyFatoraTransaction",
    "author",
    "../../models/car/rentOrder.model",
    "rejectOrder",
    "params",
    "rentalRequestDeliveredForAdmin",
    "save",
    "rentalRequestApprovedForAdmin",
    "../../services",
    "rentalRequestDeliveredForOffice",
    "rentOrder",
    "orderDelivered",
    "deliverOrder",
    "somethingWrong",
    "deleteOrder",
    "_id",
    "fatora",
    "getMyReceivedOrders",
    "bankTransactionId",
    "photos",
    "rentalRequestRejectedForOffice",
    "4518786FkIOYg",
    "../../middleware/apiError",
    "approveOrder",
    "CREATED",
    "transaction_id",
    "4NFkytp",
    "rentalRequestPaidForUser",
    "rentalRequestApprovedForOffice",
    "rentalRequestRejectedForAdmin",
    "1136rgbDHC",
    "orderClosedForUser",
    "addFatoraTransaction",
    "orderPaid",
    "../../models/car/rentCar.model",
    "deleteOrderTransaction",
    "SUCCESS",
    "requestPayment",
    "user",
    "addInvoiceURL",
    "query",
    "status",
    "noOfDays",
    "totalPrice",
    "payment_status",
  ];
  _0x2e66 = function () {
    return _0x58dd11;
  };
  return _0x2e66();
}
