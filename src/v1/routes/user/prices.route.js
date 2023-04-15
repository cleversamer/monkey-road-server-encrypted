function _0x4e6f() {
  const _0x2f951a = [
    "7693vzfGxu",
    "createAny",
    "Router",
    "exports",
    "2070056ZYbdDt",
    "3889305fZMdOc",
    "get",
    "../../middleware/validation",
    "1224sbOeqB",
    "../../controllers",
    "addPrice",
    "price",
    "5138eIWwpJ",
    "338157orAcoQ",
    "express",
    "../../middleware/auth",
    "1697935EcwBwy",
    "post",
    "420184zjnHpA",
    "10ErCkun",
    "98MHPwFv",
    "readAny",
    "getCouponPricesValidator",
  ];
  _0x4e6f = function () {
    return _0x2f951a;
  };
  return _0x4e6f();
}
const _0x2c3844 = _0x1e52;
(function (_0x30b144, _0x35e743) {
  const _0x14f779 = _0x1e52,
    _0x26c75d = _0x30b144();
  while (!![]) {
    try {
      const _0x36044f =
        (-parseInt(_0x14f779(0x1b6)) / 0x1) *
          (-parseInt(_0x14f779(0x1b3)) / 0x2) +
        parseInt(_0x14f779(0x1ac)) / 0x3 +
        parseInt(_0x14f779(0x1b1)) / 0x4 +
        -parseInt(_0x14f779(0x1af)) / 0x5 +
        (-parseInt(_0x14f779(0x1a7)) / 0x6) *
          (-parseInt(_0x14f779(0x1ab)) / 0x7) +
        parseInt(_0x14f779(0x1ba)) / 0x8 +
        (parseInt(_0x14f779(0x1bb)) / 0x9) *
          (-parseInt(_0x14f779(0x1b2)) / 0xa);
      if (_0x36044f === _0x35e743) break;
      else _0x26c75d["push"](_0x26c75d["shift"]());
    } catch (_0x3c79d0) {
      _0x26c75d["push"](_0x26c75d["shift"]());
    }
  }
})(_0x4e6f, 0x3883b);
const router = require(_0x2c3844(0x1ad))[_0x2c3844(0x1b8)](),
  { pricesController } = require(_0x2c3844(0x1a8)),
  { priceValidator } = require(_0x2c3844(0x1a6)),
  auth = require(_0x2c3844(0x1ae));
function _0x1e52(_0xebe793, _0x5f1144) {
  const _0x4e6fef = _0x4e6f();
  return (
    (_0x1e52 = function (_0x1e52c0, _0x15f36c) {
      _0x1e52c0 = _0x1e52c0 - 0x1a5;
      let _0x312b66 = _0x4e6fef[_0x1e52c0];
      return _0x312b66;
    }),
    _0x1e52(_0xebe793, _0x5f1144)
  );
}
router[_0x2c3844(0x1a5)](
  "/price/:couponCode",
  priceValidator[_0x2c3844(0x1b5)],
  auth(_0x2c3844(0x1b4), "price"),
  pricesController["getCouponPrices"]
),
  router[_0x2c3844(0x1b0)](
    "/price/add",
    priceValidator["addPriceValidator"],
    auth(_0x2c3844(0x1b7), _0x2c3844(0x1aa)),
    pricesController[_0x2c3844(0x1a9)]
  ),
  (module[_0x2c3844(0x1b9)] = router);
