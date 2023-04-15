function _0x47a0() {
  const _0x11d7b1 = [
    "restoreRentCar",
    "rejectRentCar",
    "photo5",
    "rentCars",
    "author",
    "128xbgAMz",
    "photos",
    "status",
    "rentalRequestForOffice",
    "4406238DEFLOn",
    "addRentCar",
    "body",
    "CREATED",
    "sendNotificationToAdmins",
    "_id",
    "lodash",
    "exports",
    "7167240HuLVAd",
    "pick",
    "getNotAcceptedRentCars",
    "getMyRentCars",
    "getAllRentCars",
    "searchRentCars",
    "archiveRentCar",
    "1040310JGsuth",
    "getRentCarDetails",
    "map",
    "json",
    "photo1",
    "../../services",
    "acceptRentCar",
    "ref",
    "query",
    "deleteRentCar",
    "params",
    "984AmUaNZ",
    "postAddedForAdmin",
    "requestCarRental",
    "photo3",
    "../../models/car/rentOrder.model",
    "office",
    "1607072vALeSu",
    "5hyMaol",
    "getSimilarRentCars",
    "../../config",
    "http-status",
    "postAddedForOffice",
    "47637hXoTHA",
    "sendNotification",
    "rentalRequestForUser",
    "user",
    "3752133DkAnUq",
    "files",
    "13549tCiwHO",
  ];
  _0x47a0 = function () {
    return _0x11d7b1;
  };
  return _0x47a0();
}
const _0x1527dd = _0x22de;
function _0x22de(_0x130d82, _0x33073d) {
  const _0x47a023 = _0x47a0();
  return (
    (_0x22de = function (_0x22de19, _0x26ebe1) {
      _0x22de19 = _0x22de19 - 0x1b6;
      let _0x49287b = _0x47a023[_0x22de19];
      return _0x49287b;
    }),
    _0x22de(_0x130d82, _0x33073d)
  );
}
(function (_0x4dd198, _0x2231f3) {
  const _0x427fd4 = _0x22de,
    _0x4cd575 = _0x4dd198();
  while (!![]) {
    try {
      const _0x367b53 =
        (-parseInt(_0x427fd4(0x1c6)) / 0x1) *
          (parseInt(_0x427fd4(0x1cc)) / 0x2) +
        parseInt(_0x427fd4(0x1df)) / 0x3 +
        (-parseInt(_0x427fd4(0x1ba)) / 0x4) *
          (parseInt(_0x427fd4(0x1bb)) / 0x5) +
        parseInt(_0x427fd4(0x1d0)) / 0x6 +
        -parseInt(_0x427fd4(0x1c4)) / 0x7 +
        (-parseInt(_0x427fd4(0x1ea)) / 0x8) *
          (-parseInt(_0x427fd4(0x1c0)) / 0x9) +
        parseInt(_0x427fd4(0x1d8)) / 0xa;
      if (_0x367b53 === _0x2231f3) break;
      else _0x4cd575["push"](_0x4cd575["shift"]());
    } catch (_0x419154) {
      _0x4cd575["push"](_0x4cd575["shift"]());
    }
  }
})(_0x47a0, 0x9d38f);
const {
    CLIENT_SCHEMA: rentCarSchema,
  } = require("../../models/car/rentCar.model"),
  { CLIENT_SCHEMA: orderSchema } = require(_0x1527dd(0x1b8)),
  { rentCarsService, usersService } = require(_0x1527dd(0x1e4)),
  httpStatus = require(_0x1527dd(0x1be)),
  _ = require(_0x1527dd(0x1d6)),
  { notifications } = require(_0x1527dd(0x1bd));
(module[_0x1527dd(0x1d7)][_0x1527dd(0x1dc)] = async (
  _0x4d1af8,
  _0x77480e,
  _0x156c3e
) => {
  const _0x375520 = _0x1527dd;
  try {
    const { page: _0x427906, limit: _0x34a73e } = _0x4d1af8["query"],
      {
        currentPage: _0xd058cd,
        totalPages: _0x132e6d,
        rentCars: _0x4a13,
      } = await rentCarsService[_0x375520(0x1dc)](_0x427906, _0x34a73e),
      _0x59a014 = {
        currentPage: _0xd058cd,
        totalPages: _0x132e6d,
        rentCars: _0x4a13[_0x375520(0x1e1)]((_0x34cd38) =>
          _[_0x375520(0x1d9)](_0x34cd38, rentCarSchema)
        ),
      };
    _0x77480e[_0x375520(0x1ce)](httpStatus["OK"])[_0x375520(0x1e2)](_0x59a014);
  } catch (_0x27e314) {
    _0x156c3e(_0x27e314);
  }
}),
  (module["exports"][_0x1527dd(0x1e0)] = async (
    _0x55533a,
    _0x415278,
    _0x15834b
  ) => {
    const _0x2f265e = _0x1527dd;
    try {
      const { carId: _0x4b69ca } = _0x55533a["params"],
        _0x3ca069 = await rentCarsService[_0x2f265e(0x1e0)](_0x4b69ca),
        _0x3afdf7 = _[_0x2f265e(0x1d9)](_0x3ca069, rentCarSchema);
      _0x415278[_0x2f265e(0x1ce)](httpStatus["OK"])["json"](_0x3afdf7);
    } catch (_0x4fbc2d) {
      _0x15834b(_0x4fbc2d);
    }
  }),
  (module["exports"][_0x1527dd(0x1bc)] = async (
    _0x3732e2,
    _0x4f91e3,
    _0x26614a
  ) => {
    const _0x55b044 = _0x1527dd;
    try {
      const { carId: _0x51e9b4 } = _0x3732e2[_0x55b044(0x1e9)],
        {
          name: _0x18b420,
          model: _0xb1d1c7,
          brandEN: _0x19bbcb,
          brandAR: _0x22ef6d,
          colorEN: _0x238a9e,
          colorAR: _0x27c3a6,
          year: _0x2cb7a2,
          description: _0x4c4b99,
        } = _0x3732e2[_0x55b044(0x1e7)],
        _0x11b82b = await rentCarsService["getSimilarRentCars"](
          _0x51e9b4,
          _0x18b420,
          _0xb1d1c7,
          _0x19bbcb,
          _0x22ef6d,
          _0x238a9e,
          _0x27c3a6,
          _0x2cb7a2,
          _0x4c4b99
        ),
        _0x33c3d8 = {
          cars: _0x11b82b[_0x55b044(0x1e1)]((_0x1277e1) =>
            _["pick"](_0x1277e1, rentCarSchema)
          ),
        };
      _0x4f91e3[_0x55b044(0x1ce)](httpStatus["OK"])[_0x55b044(0x1e2)](
        _0x33c3d8
      );
    } catch (_0x54d53c) {
      _0x26614a(_0x54d53c);
    }
  }),
  (module[_0x1527dd(0x1d7)][_0x1527dd(0x1dd)] = async (
    _0x41a209,
    _0x1265f8,
    _0x54c29e
  ) => {
    const _0x38aa48 = _0x1527dd;
    try {
      const {
          searchTerm: _0x233598,
          page: _0x538bbf,
          limit: _0x3c577a,
          minPrice: _0x131a9b,
          maxPrice: _0x256eda,
          brands: _0xb693dd,
          colors: _0x3bfe13,
          years: _0x4c8133,
        } = _0x41a209["body"],
        {
          currentPage: _0x36a3d1,
          totalPages: _0x44835b,
          rentCars: _0x1fe209,
        } = await rentCarsService[_0x38aa48(0x1dd)](
          _0x233598,
          _0x538bbf,
          _0x3c577a,
          _0x131a9b,
          _0x256eda,
          _0xb693dd,
          _0x3bfe13,
          _0x4c8133
        ),
        _0x5a5358 = {
          currentPage: _0x36a3d1,
          totalPages: _0x44835b,
          rentCars: _0x1fe209[_0x38aa48(0x1e1)]((_0x4eae36) =>
            _["pick"](_0x4eae36, rentCarSchema)
          ),
        };
      _0x1265f8[_0x38aa48(0x1ce)](httpStatus["OK"])["json"](_0x5a5358);
    } catch (_0x4a71d5) {
      _0x54c29e(_0x4a71d5);
    }
  }),
  (module["exports"][_0x1527dd(0x1b6)] = async (
    _0x425f11,
    _0x5334cd,
    _0x31388b
  ) => {
    const _0x56c634 = _0x1527dd;
    try {
      const _0x2d9677 = _0x425f11[_0x56c634(0x1c3)],
        { carId: _0x321710 } = _0x425f11[_0x56c634(0x1e9)],
        {
          startDate: _0x1707b7,
          noOfDays: _0x55e767,
          locationTitle: _0x1770be,
          longitude: _0x4c61ce,
          latitude: _0x4845c5,
          fullName: _0x7f6e02,
          phoneICC: _0x4fc1a3,
          phoneNSN: _0xc34f16,
        } = _0x425f11[_0x56c634(0x1d2)],
        { order: _0x5c1cc9, rentCar: _0x1b6f33 } = await rentCarsService[
          "requestCarRental"
        ](
          _0x2d9677,
          _0x321710,
          _0x1707b7,
          _0x55e767,
          _0x1770be,
          _0x4c61ce,
          _0x4845c5,
          _0x7f6e02,
          _0x4fc1a3,
          _0xc34f16
        ),
        _0x41afbd = notifications[_0x56c634(0x1ca)]["rentalRequestForAdmin"](
          _0x1b6f33[_0x56c634(0x1cd)][0x0]
        );
      await usersService[_0x56c634(0x1d4)](_0x41afbd);
      const _0x3c1510 = notifications[_0x56c634(0x1ca)][_0x56c634(0x1cf)](
        _0x1b6f33["photos"][0x0]
      );
      await usersService[_0x56c634(0x1c1)](
        [_0x5c1cc9[_0x56c634(0x1b9)]],
        _0x3c1510
      );
      const _0x293d1e = notifications[_0x56c634(0x1ca)][_0x56c634(0x1c2)](
        _0x1b6f33["photos"][0x0]
      );
      await usersService[_0x56c634(0x1c1)](
        [_0x5c1cc9[_0x56c634(0x1cb)]],
        _0x293d1e
      );
      const _0x3a9879 = _["pick"](_0x5c1cc9, orderSchema);
      _0x5334cd[_0x56c634(0x1ce)](httpStatus[_0x56c634(0x1d3)])[
        _0x56c634(0x1e2)
      ](_0x3a9879);
    } catch (_0x1cef6c) {
      _0x31388b(_0x1cef6c);
    }
  }),
  (module[_0x1527dd(0x1d7)][_0x1527dd(0x1db)] = async (
    _0x860e44,
    _0x32ddb5,
    _0x165d3a
  ) => {
    const _0x103fcb = _0x1527dd;
    try {
      const _0x437cb0 = _0x860e44[_0x103fcb(0x1c3)],
        { page: _0x280424, limit: _0x452c82 } = _0x860e44[_0x103fcb(0x1e7)],
        {
          currentPage: _0x126a6d,
          totalPages: _0x443de5,
          rentCars: _0xec5201,
        } = await rentCarsService[_0x103fcb(0x1db)](
          _0x437cb0,
          _0x280424,
          _0x452c82
        ),
        _0x4c7c61 = {
          currentPage: _0x126a6d,
          totalPages: _0x443de5,
          rentCars: _0xec5201[_0x103fcb(0x1e1)]((_0x212ebb) =>
            _[_0x103fcb(0x1d9)](_0x212ebb, rentCarSchema)
          ),
        };
      _0x32ddb5[_0x103fcb(0x1ce)](httpStatus["OK"])[_0x103fcb(0x1e2)](
        _0x4c7c61
      );
    } catch (_0x1ffbce) {
      _0x165d3a(_0x1ffbce);
    }
  }),
  (module[_0x1527dd(0x1d7)][_0x1527dd(0x1d1)] = async (
    _0x5d2089,
    _0x309cda,
    _0x29469c
  ) => {
    const _0xb94304 = _0x1527dd;
    try {
      const _0x9a1a57 = _0x5d2089[_0xb94304(0x1c3)],
        {
          carName: _0xdada79,
          model: _0x1c1215,
          colorEN: _0x1a8ade,
          colorAR: _0x41a685,
          brandId: _0x484d3b,
          year: _0x1f4197,
          dailyPrice: _0x4c2b07,
          weeklyPrice: _0x440328,
          monthlyPrice: _0xe48d,
          deposit: _0x251326,
          description: _0x32bfd9,
        } = _0x5d2089[_0xb94304(0x1d2)],
        _0x184559 = _0x5d2089?.["files"]?.[_0xb94304(0x1e3)],
        _0x3d4a02 = _0x5d2089?.[_0xb94304(0x1c5)]?.["photo2"],
        _0x131c20 = _0x5d2089?.[_0xb94304(0x1c5)]?.[_0xb94304(0x1b7)],
        _0x423651 = _0x5d2089?.[_0xb94304(0x1c5)]?.["photo4"],
        _0x18bbcd = _0x5d2089?.[_0xb94304(0x1c5)]?.[_0xb94304(0x1c9)],
        _0x1268b0 = _0x5d2089?.[_0xb94304(0x1c5)]?.["photo6"],
        _0x59c790 = await rentCarsService[_0xb94304(0x1d1)](
          _0x9a1a57,
          _0xdada79,
          _0x1c1215,
          _0x1a8ade,
          _0x41a685,
          _0x484d3b,
          _0x1f4197,
          _0x4c2b07,
          _0x440328,
          _0xe48d,
          _0x251326,
          _0x32bfd9,
          _0x184559,
          _0x3d4a02,
          _0x131c20,
          _0x423651,
          _0x18bbcd,
          _0x1268b0
        ),
        _0x45e871 = notifications[_0xb94304(0x1ca)][_0xb94304(0x1eb)](
          _0x59c790["photos"][0x0],
          _0x59c790["_id"]
        );
      await usersService["sendNotificationToAdmins"](_0x45e871);
      const _0x561c89 = notifications[_0xb94304(0x1ca)][_0xb94304(0x1bf)](
        _0x59c790[_0xb94304(0x1cd)][0x0],
        _0x59c790[_0xb94304(0x1d5)]
      );
      await usersService["sendNotification"](
        [_0x9a1a57[_0xb94304(0x1d5)]],
        _0x561c89
      );
      const _0x4171de = _[_0xb94304(0x1d9)](_0x59c790, rentCarSchema);
      _0x309cda[_0xb94304(0x1ce)](httpStatus["OK"])[_0xb94304(0x1e2)](
        _0x4171de
      );
    } catch (_0x5b8549) {
      _0x29469c(_0x5b8549);
    }
  }),
  (module[_0x1527dd(0x1d7)][_0x1527dd(0x1de)] = async (
    _0x23d476,
    _0xea5be4,
    _0x2322e0
  ) => {
    const _0x195287 = _0x1527dd;
    try {
      const { carId: _0x18c1e } = _0x23d476["params"],
        _0x570b3c = await rentCarsService[_0x195287(0x1de)](_0x18c1e),
        _0x590924 = _["pick"](_0x570b3c, rentCarSchema);
      _0xea5be4[_0x195287(0x1ce)](httpStatus["OK"])[_0x195287(0x1e2)](
        _0x590924
      );
    } catch (_0x172c87) {
      _0x2322e0(_0x172c87);
    }
  }),
  (module[_0x1527dd(0x1d7)][_0x1527dd(0x1c7)] = async (
    _0x53ed0f,
    _0x1ade8d,
    _0x543a43
  ) => {
    const _0x4a2ebd = _0x1527dd;
    try {
      const { carId: _0x2197e5 } = _0x53ed0f["params"],
        _0x32192d = await rentCarsService[_0x4a2ebd(0x1c7)](_0x2197e5),
        _0x33bb04 = _["pick"](_0x32192d, rentCarSchema);
      _0x1ade8d[_0x4a2ebd(0x1ce)](httpStatus["OK"])[_0x4a2ebd(0x1e2)](
        _0x33bb04
      );
    } catch (_0x4a5673) {
      _0x543a43(_0x4a5673);
    }
  }),
  (module["exports"]["deleteRentCar"] = async (
    _0x395f26,
    _0x46c234,
    _0x4d870a
  ) => {
    const _0xfe478d = _0x1527dd;
    try {
      const { carId: _0x1ffe4d } = _0x395f26[_0xfe478d(0x1e9)],
        _0x1be8fa = await rentCarsService[_0xfe478d(0x1e8)](_0x1ffe4d),
        _0x382f9b = _[_0xfe478d(0x1d9)](_0x1be8fa, rentCarSchema);
      _0x46c234[_0xfe478d(0x1ce)](httpStatus["OK"])["json"](_0x382f9b);
    } catch (_0x461aa7) {
      _0x4d870a(_0x461aa7);
    }
  }),
  (module[_0x1527dd(0x1d7)][_0x1527dd(0x1da)] = async (
    _0x1b038f,
    _0x43f28f,
    _0x3c3854
  ) => {
    const _0x485efd = _0x1527dd;
    try {
      const { page: _0x56f9ce, limit: _0x2d8eb0 } = _0x1b038f["query"],
        {
          currentPage: _0x430a99,
          totalPages: _0x5b265e,
          rentCars: _0x23a61b,
        } = await rentCarsService["getNotAcceptedRentCars"](
          _0x56f9ce,
          _0x2d8eb0
        ),
        _0x9cca77 = {
          currentPage: _0x430a99,
          totalPages: _0x5b265e,
          rentCars: _0x23a61b[_0x485efd(0x1e1)]((_0x2d226e) =>
            _[_0x485efd(0x1d9)](_0x2d226e, rentCarSchema)
          ),
        };
      _0x43f28f["status"](httpStatus["OK"])[_0x485efd(0x1e2)](_0x9cca77);
    } catch (_0x2a4967) {
      _0x3c3854(_0x2a4967);
    }
  }),
  (module["exports"][_0x1527dd(0x1e5)] = async (
    _0x45b1ba,
    _0x2a619c,
    _0x11bff9
  ) => {
    const _0x2badb6 = _0x1527dd;
    try {
      const { carId: _0x11fd2b } = _0x45b1ba["params"],
        _0x3bd103 = await rentCarsService[_0x2badb6(0x1e5)](_0x11fd2b),
        _0x26c19f = notifications["rentCars"]["postAcceptedForAdmin"](
          _0x3bd103[_0x2badb6(0x1cd)][0x0],
          _0x3bd103["_id"]
        );
      await usersService["sendNotificationToAdmins"](_0x26c19f);
      const _0x1a9a45 = notifications[_0x2badb6(0x1ca)][
        "postAcceptedForOffice"
      ](_0x3bd103[_0x2badb6(0x1cd)][0x0], _0x3bd103[_0x2badb6(0x1d5)]);
      await usersService[_0x2badb6(0x1c1)](
        [_0x3bd103[_0x2badb6(0x1b9)][_0x2badb6(0x1e6)]],
        _0x1a9a45
      );
      const _0x5d80c6 = _["pick"](_0x3bd103, rentCarSchema);
      _0x2a619c[_0x2badb6(0x1ce)](httpStatus["OK"])[_0x2badb6(0x1e2)](
        _0x5d80c6
      );
    } catch (_0x2faa51) {
      _0x11bff9(_0x2faa51);
    }
  }),
  (module[_0x1527dd(0x1d7)][_0x1527dd(0x1c8)] = async (
    _0x2ba414,
    _0x3f36d5,
    _0x1c6073
  ) => {
    const _0x5253d3 = _0x1527dd;
    try {
      const { carId: _0xb6a2b1 } = _0x2ba414[_0x5253d3(0x1e9)],
        { rejectionReason: _0x7fdf98 } = _0x2ba414["body"],
        _0x2e94d6 = await rentCarsService["rejectRentCar"](_0xb6a2b1),
        _0x42e285 = notifications[_0x5253d3(0x1ca)]["postRejectedForAdmin"](
          _0x7fdf98,
          _0x2e94d6[_0x5253d3(0x1cd)][0x0]
        );
      await usersService[_0x5253d3(0x1d4)](_0x42e285);
      const _0x47715a = notifications[_0x5253d3(0x1ca)][
        "postRejectedForOffice"
      ](_0x7fdf98, _0x2e94d6[_0x5253d3(0x1cd)][0x0]);
      await usersService[_0x5253d3(0x1c1)](
        [_0x2e94d6[_0x5253d3(0x1b9)][_0x5253d3(0x1e6)]],
        _0x47715a
      );
      const _0x9735a = _[_0x5253d3(0x1d9)](_0x2e94d6, rentCarSchema);
      _0x3f36d5[_0x5253d3(0x1ce)](httpStatus["OK"])[_0x5253d3(0x1e2)](_0x9735a);
    } catch (_0x56428e) {
      _0x1c6073(_0x56428e);
    }
  });
