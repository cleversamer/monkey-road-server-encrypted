function _0x2cb1(_0x3f8e8d, _0x5ce27e) {
  const _0x349fc7 = _0x349f();
  return (
    (_0x2cb1 = function (_0x2cb136, _0x27e30d) {
      _0x2cb136 = _0x2cb136 - 0x17b;
      let _0x546474 = _0x349fc7[_0x2cb136];
      return _0x546474;
    }),
    _0x2cb1(_0x3f8e8d, _0x5ce27e)
  );
}
const _0xb41490 = _0x2cb1;
(function (_0x3a0ad9, _0x257a77) {
  const _0x5cf3e7 = _0x2cb1,
    _0x26cd5d = _0x3a0ad9();
  while (!![]) {
    try {
      const _0x4daafe =
        (-parseInt(_0x5cf3e7(0x195)) / 0x1) *
          (-parseInt(_0x5cf3e7(0x192)) / 0x2) +
        (parseInt(_0x5cf3e7(0x1a0)) / 0x3) *
          (parseInt(_0x5cf3e7(0x198)) / 0x4) +
        (parseInt(_0x5cf3e7(0x19d)) / 0x5) *
          (-parseInt(_0x5cf3e7(0x180)) / 0x6) +
        (-parseInt(_0x5cf3e7(0x19a)) / 0x7) *
          (-parseInt(_0x5cf3e7(0x196)) / 0x8) +
        (parseInt(_0x5cf3e7(0x199)) / 0x9) *
          (parseInt(_0x5cf3e7(0x18e)) / 0xa) +
        (parseInt(_0x5cf3e7(0x19b)) / 0xb) *
          (parseInt(_0x5cf3e7(0x194)) / 0xc) +
        -parseInt(_0x5cf3e7(0x17d)) / 0xd;
      if (_0x4daafe === _0x257a77) break;
      else _0x26cd5d["push"](_0x26cd5d["shift"]());
    } catch (_0x45b651) {
      _0x26cd5d["push"](_0x26cd5d["shift"]());
    }
  }
})(_0x349f, 0x6b4e1);
function _0x349f() {
  const _0x26e45e = [
    "/search",
    "getRecentlyArrivedPurchaseCars",
    "2RNVjpe",
    "markPurchaseCarAsSold",
    "1656KlrNIr",
    "82013XAZsIi",
    "88QNHIlS",
    "getBestSellerPurchaseCars",
    "164hCeAEt",
    "108enGPow",
    "291781tNbXRN",
    "58509wBZBmK",
    "exports",
    "66905cfUMzS",
    "getPurchaseCarDetailsValidator",
    "../../controllers",
    "27279tsUCps",
    "purchaseCar",
    "getMyPurchaseCarsValidator",
    "17414007UWgLfP",
    "payPurchaseCarPostCostValidator",
    "post",
    "294XLPwnt",
    "getPurchaseCarDetails",
    "/latest-models",
    "/recently-arrived",
    "/details/:carId",
    "markPurchaseCarAsSoldValidator",
    "getRecentlyArrivedPurchaseCarsValidator",
    "express",
    "/best-seller",
    "/:carId/pay-cost",
    "createOwn",
    "addPurchaseCarValidator",
    "Router",
    "get",
    "656140yWyUSa",
    "addPurchaseCar",
  ];
  _0x349f = function () {
    return _0x26e45e;
  };
  return _0x349f();
}
const router = require(_0xb41490(0x187))[_0xb41490(0x18c)](),
  { purchaseCarsController } = require(_0xb41490(0x19f)),
  { purchaseCarValidator } = require("../../middleware/validation"),
  auth = require("../../middleware/auth");
router[_0xb41490(0x18d)](
  _0xb41490(0x184),
  purchaseCarValidator[_0xb41490(0x19e)],
  purchaseCarsController[_0xb41490(0x181)]
),
  router[_0xb41490(0x18d)](
    _0xb41490(0x183),
    purchaseCarValidator[_0xb41490(0x186)],
    purchaseCarsController[_0xb41490(0x191)]
  ),
  router[_0xb41490(0x18d)](
    _0xb41490(0x182),
    purchaseCarValidator["getLatestModelsPurchaseCarsValidator"],
    purchaseCarsController["getLatestModelsPurchaseCars"]
  ),
  router["get"](
    _0xb41490(0x188),
    purchaseCarValidator["getBestSellerPurchaseCarsValidator"],
    purchaseCarsController[_0xb41490(0x197)]
  ),
  router[_0xb41490(0x18d)](
    _0xb41490(0x190),
    purchaseCarValidator["searchPurchaseCarsValidator"],
    purchaseCarsController["searchPurchaseCars"]
  ),
  router[_0xb41490(0x18d)](
    "/my",
    purchaseCarValidator[_0xb41490(0x17c)],
    auth("readOwn", _0xb41490(0x17b)),
    purchaseCarsController["getMyPurchaseCars"]
  ),
  router[_0xb41490(0x17f)](
    "/add",
    purchaseCarValidator[_0xb41490(0x18b)],
    auth(_0xb41490(0x18a), _0xb41490(0x17b)),
    purchaseCarsController[_0xb41490(0x18f)]
  ),
  router["post"](
    _0xb41490(0x189),
    purchaseCarValidator[_0xb41490(0x17e)],
    auth("createOwn", _0xb41490(0x17b)),
    purchaseCarsController["payPurchaseCarPostCost"]
  ),
  router["patch"](
    "/:carId/mark-sold",
    purchaseCarValidator[_0xb41490(0x185)],
    auth("updateOwn", "purchaseCar"),
    purchaseCarsController[_0xb41490(0x193)]
  ),
  (module[_0xb41490(0x19c)] = router);
