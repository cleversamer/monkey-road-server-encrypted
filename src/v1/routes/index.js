const _0x5d1ffb = _0x976e;
function _0x976e(_0x3ad1b8, _0x1569cf) {
  const _0x307655 = _0x3076();
  return (
    (_0x976e = function (_0x976ea3, _0x434256) {
      _0x976ea3 = _0x976ea3 - 0xf2;
      let _0x561511 = _0x307655[_0x976ea3];
      return _0x561511;
    }),
    _0x976e(_0x3ad1b8, _0x1569cf)
  );
}
(function (_0xc94305, _0x4622a4) {
  const _0x55c96e = _0x976e,
    _0x445edc = _0xc94305();
  while (!![]) {
    try {
      const _0xbe481d =
        (-parseInt(_0x55c96e(0xf9)) / 0x1) *
          (-parseInt(_0x55c96e(0x102)) / 0x2) +
        parseInt(_0x55c96e(0x107)) / 0x3 +
        (parseInt(_0x55c96e(0xfd)) / 0x4) * (parseInt(_0x55c96e(0xfa)) / 0x5) +
        (-parseInt(_0x55c96e(0xf3)) / 0x6) *
          (-parseInt(_0x55c96e(0x100)) / 0x7) +
        parseInt(_0x55c96e(0x10d)) / 0x8 +
        (-parseInt(_0x55c96e(0x106)) / 0x9) *
          (-parseInt(_0x55c96e(0x104)) / 0xa) +
        -parseInt(_0x55c96e(0xf6)) / 0xb;
      if (_0xbe481d === _0x4622a4) break;
      else _0x445edc["push"](_0x445edc["shift"]());
    } catch (_0x511067) {
      _0x445edc["push"](_0x445edc["shift"]());
    }
  }
})(_0x3076, 0xca7fa);
const router = require("express")[_0x5d1ffb(0xfe)](),
  authRoute = require(_0x5d1ffb(0xfb)),
  usersRoute = require(_0x5d1ffb(0xf8)),
  transactionsRoute = require(_0x5d1ffb(0x10c)),
  brandsRoute = require(_0x5d1ffb(0xff)),
  purchaseCarsRoute = require("./car/purchaseCars.route"),
  rentCarsRoute = require(_0x5d1ffb(0xf7)),
  ordersRoute = require(_0x5d1ffb(0x10a)),
  routes = [
    { path: _0x5d1ffb(0xf2), route: authRoute },
    { path: "/users", route: usersRoute },
    { path: _0x5d1ffb(0x101), route: transactionsRoute },
    { path: _0x5d1ffb(0x103), route: ordersRoute },
    { path: "/brands", route: brandsRoute },
    { path: _0x5d1ffb(0x10b), route: purchaseCarsRoute },
    { path: _0x5d1ffb(0xfc), route: rentCarsRoute },
  ];
function _0x3076() {
  const _0x3cbb24 = [
    "./user/transactions.route",
    "5682864NcfrEP",
    "/auth",
    "8972556XTOjJY",
    "forEach",
    "path",
    "58088448vsngZk",
    "./car/rentCars.route",
    "./user/users.route",
    "69tMXnWq",
    "125PTDWSQ",
    "./user/auth.route",
    "/cars/rent",
    "88772RCvdJr",
    "Router",
    "./car/brands.route",
    "7cSZCTr",
    "/transactions",
    "31546TnVZXd",
    "/orders/rent",
    "438890mjlTdq",
    "use",
    "135QZELTI",
    "4808763baZotc",
    "route",
    "exports",
    "./car/rentOrders.route",
    "/cars/purchase",
  ];
  _0x3076 = function () {
    return _0x3cbb24;
  };
  return _0x3076();
}
routes[_0x5d1ffb(0xf4)]((_0x146e22) => {
  const _0x26de57 = _0x5d1ffb;
  router[_0x26de57(0x105)](
    _0x146e22[_0x26de57(0xf5)],
    _0x146e22[_0x26de57(0x108)]
  );
}),
  (module[_0x5d1ffb(0x109)] = router);
