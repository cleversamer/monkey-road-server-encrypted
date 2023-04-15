const _0x1275df = _0x1577;
function _0x1577(_0x2249d9, _0x48656a) {
  const _0x5f29d1 = _0x5f29();
  return (
    (_0x1577 = function (_0x1577e5, _0x200457) {
      _0x1577e5 = _0x1577e5 - 0x13c;
      let _0x334bee = _0x5f29d1[_0x1577e5];
      return _0x334bee;
    }),
    _0x1577(_0x2249d9, _0x48656a)
  );
}
(function (_0x18ce4b, _0x20197b) {
  const _0x1a7bb7 = _0x1577,
    _0xa357f1 = _0x18ce4b();
  while (!![]) {
    try {
      const _0x3b9875 =
        -parseInt(_0x1a7bb7(0x16a)) / 0x1 +
        (parseInt(_0x1a7bb7(0x168)) / 0x2) *
          (-parseInt(_0x1a7bb7(0x166)) / 0x3) +
        parseInt(_0x1a7bb7(0x170)) / 0x4 +
        parseInt(_0x1a7bb7(0x15e)) / 0x5 +
        -parseInt(_0x1a7bb7(0x167)) / 0x6 +
        (parseInt(_0x1a7bb7(0x13e)) / 0x7) *
          (-parseInt(_0x1a7bb7(0x173)) / 0x8) +
        parseInt(_0x1a7bb7(0x14d)) / 0x9;
      if (_0x3b9875 === _0x20197b) break;
      else _0xa357f1["push"](_0xa357f1["shift"]());
    } catch (_0x11aee9) {
      _0xa357f1["push"](_0xa357f1["shift"]());
    }
  }
})(_0x5f29, 0x85079);
const router = require(_0x1275df(0x148))[_0x1275df(0x159)](),
  { rentCarsController } = require(_0x1275df(0x142)),
  { rentCarValidator } = require(_0x1275df(0x153)),
  auth = require(_0x1275df(0x145));
function _0x5f29() {
  const _0x175eca = [
    "searchRentCarsValidator",
    "/add",
    "getSimilarRentCars",
    "2118685jdzAwL",
    "delete",
    "patch",
    "rentCar",
    "requestCarRentalValidator",
    "getSimilarRentCarsValidator",
    "updateOwn",
    "addRentCar",
    "3eZNlsu",
    "2893302EwlDnn",
    "1495246ZCMlrt",
    "/not-accepted",
    "451541zZmomE",
    "getMyRentCars",
    "archiveRentCarValidator",
    "deleteRentCarValidator",
    "rentOrder",
    "post",
    "1744604FQhqWg",
    "searchRentCars",
    "/:carId/accept",
    "152kHImdj",
    "getNotAcceptedRentCars",
    "/:carId/request",
    "getRentCarDetails",
    "/my",
    "63987KanYMf",
    "deleteRentCar",
    "requestCarRental",
    "getAllRentCarsValidator",
    "../../controllers",
    "getAllRentCars",
    "restoreRentCarValidator",
    "../../middleware/auth",
    "rejectRentCar",
    "exports",
    "express",
    "/:carId/similar",
    "createOwn",
    "updateAny",
    "get",
    "13860549DMoxMR",
    "/:carId/archive",
    "acceptRentCarValidator",
    "getNotAcceptedRentCarsValidator",
    "/:carId/restore",
    "/search",
    "../../middleware/validation",
    "acceptRentCar",
    "restoreRentCar",
    "rejectRentCarValidator",
    "readOwn",
    "/:carId/delete",
    "Router",
    "archiveRentCar",
  ];
  _0x5f29 = function () {
    return _0x175eca;
  };
  return _0x5f29();
}
router[_0x1275df(0x14c)](
  "/get",
  rentCarValidator[_0x1275df(0x141)],
  rentCarsController[_0x1275df(0x143)]
),
  router[_0x1275df(0x14c)](
    "/details/:carId",
    rentCarValidator["getRentCarDetailsValidator"],
    rentCarsController[_0x1275df(0x13c)]
  ),
  router[_0x1275df(0x14c)](
    _0x1275df(0x149),
    rentCarValidator[_0x1275df(0x163)],
    rentCarsController[_0x1275df(0x15d)]
  ),
  router[_0x1275df(0x14c)](
    _0x1275df(0x152),
    rentCarValidator[_0x1275df(0x15b)],
    rentCarsController[_0x1275df(0x171)]
  ),
  router["post"](
    _0x1275df(0x175),
    rentCarValidator[_0x1275df(0x162)],
    auth(_0x1275df(0x14a), _0x1275df(0x16e)),
    rentCarsController[_0x1275df(0x140)]
  ),
  router["get"](
    _0x1275df(0x13d),
    rentCarValidator["getMyRentCarsValidator"],
    auth(_0x1275df(0x157), "rentCar"),
    rentCarsController[_0x1275df(0x16b)]
  ),
  router[_0x1275df(0x16f)](
    _0x1275df(0x15c),
    rentCarValidator["addRentCarValidator"],
    auth(_0x1275df(0x14a), _0x1275df(0x161)),
    rentCarsController[_0x1275df(0x165)]
  ),
  router[_0x1275df(0x160)](
    _0x1275df(0x14e),
    rentCarValidator[_0x1275df(0x16c)],
    auth(_0x1275df(0x164), _0x1275df(0x161)),
    rentCarsController[_0x1275df(0x15a)]
  ),
  router["patch"](
    _0x1275df(0x151),
    rentCarValidator[_0x1275df(0x144)],
    auth(_0x1275df(0x164), _0x1275df(0x161)),
    rentCarsController[_0x1275df(0x155)]
  ),
  router[_0x1275df(0x15f)](
    _0x1275df(0x158),
    rentCarValidator[_0x1275df(0x16d)],
    auth(_0x1275df(0x164), "rentCar"),
    rentCarsController[_0x1275df(0x13f)]
  ),
  router["get"](
    _0x1275df(0x169),
    rentCarValidator[_0x1275df(0x150)],
    auth(_0x1275df(0x14b), _0x1275df(0x161)),
    rentCarsController[_0x1275df(0x174)]
  ),
  router[_0x1275df(0x160)](
    _0x1275df(0x172),
    rentCarValidator[_0x1275df(0x14f)],
    auth(_0x1275df(0x14b), _0x1275df(0x161)),
    rentCarsController[_0x1275df(0x154)]
  ),
  router["patch"](
    "/:carId/reject",
    rentCarValidator[_0x1275df(0x156)],
    auth(_0x1275df(0x14b), _0x1275df(0x161)),
    rentCarsController[_0x1275df(0x146)]
  ),
  (module[_0x1275df(0x147)] = router);
