const _0x2ab308 = _0x2ef0;
(function (_0x4be280, _0x40aebd) {
  const _0x419f1d = _0x2ef0,
    _0x27234d = _0x4be280();
  while (!![]) {
    try {
      const _0x53bc07 =
        (parseInt(_0x419f1d(0xae)) / 0x1) * (-parseInt(_0x419f1d(0xaa)) / 0x2) +
        (parseInt(_0x419f1d(0xbd)) / 0x3) * (parseInt(_0x419f1d(0xc5)) / 0x4) +
        (parseInt(_0x419f1d(0xb6)) / 0x5) * (parseInt(_0x419f1d(0xb1)) / 0x6) +
        parseInt(_0x419f1d(0xa8)) / 0x7 +
        -parseInt(_0x419f1d(0xc8)) / 0x8 +
        -parseInt(_0x419f1d(0x9d)) / 0x9 +
        (-parseInt(_0x419f1d(0xca)) / 0xa) * (-parseInt(_0x419f1d(0xc6)) / 0xb);
      if (_0x53bc07 === _0x40aebd) break;
      else _0x27234d["push"](_0x27234d["shift"]());
    } catch (_0x2b90da) {
      _0x27234d["push"](_0x27234d["shift"]());
    }
  }
})(_0x56df, 0x751ac);
function _0x56df() {
  const _0x136f0a = [
    "getAllOrders",
    "getOfficeReceivedOrders",
    "deliverOrder",
    "../../controllers",
    "3108014inbfEK",
    "order",
    "6ugVjZy",
    "rejectOrder",
    "getMyOrders",
    "/:orderId/delete",
    "305705uyrUhL",
    "deleteOrderValidator",
    "confirmPayment",
    "6iHPEpH",
    "confirmPaymentValidator",
    "deliverOrderValidator",
    "Router",
    "get",
    "582775IxbGtN",
    "getMyReceivedOrders",
    "readAny",
    "deleteOrder",
    "/my",
    "/:orderId/request-payment",
    "updateOwn",
    "3xADIYg",
    "approveOrder",
    "patch",
    "getOrderDetailsValidator",
    "/:orderId/details",
    "getOfficeReceivedOrdersValidator",
    "../../middleware/auth",
    "/:orderId/deliver",
    "2541260UcbSjE",
    "9829039WdeCID",
    "readOwn",
    "5350048aJfnNm",
    "post",
    "20NLETZn",
    "/admin/:userId/received",
    "deleteOwn",
    "getMyOrdersValidator",
    "getOrderDetails",
    "/:orderId/approve",
    "8256951UcofCo",
    "closeOrderValidator",
    "getMyReceivedOrdersValidator",
    "approveOrderValidator",
    "../../middleware/validation",
    "requestPayment",
    "/admin/all",
  ];
  _0x56df = function () {
    return _0x136f0a;
  };
  return _0x56df();
}
const router = require("express")[_0x2ab308(0xb4)](),
  { rentOrdersController: ordersController } = require(_0x2ab308(0xa7)),
  { orderValidator } = require(_0x2ab308(0xa1)),
  auth = require(_0x2ab308(0xc3));
function _0x2ef0(_0x1b6335, _0x4a9234) {
  const _0x56dfc0 = _0x56df();
  return (
    (_0x2ef0 = function (_0x2ef049, _0x472cc7) {
      _0x2ef049 = _0x2ef049 - 0x9c;
      let _0x1d3053 = _0x56dfc0[_0x2ef049];
      return _0x1d3053;
    }),
    _0x2ef0(_0x1b6335, _0x4a9234)
  );
}
router[_0x2ab308(0xb5)](
  _0x2ab308(0xba),
  orderValidator[_0x2ab308(0xcd)],
  auth("readOwn", _0x2ab308(0xa9)),
  ordersController[_0x2ab308(0xac)]
),
  router[_0x2ab308(0xb5)](
    _0x2ab308(0xc1),
    orderValidator[_0x2ab308(0xc0)],
    auth(_0x2ab308(0xc7), _0x2ab308(0xa9)),
    ordersController[_0x2ab308(0xce)]
  ),
  router[_0x2ab308(0xbf)](
    "/:orderId/close",
    orderValidator[_0x2ab308(0x9e)],
    auth(_0x2ab308(0xcc), _0x2ab308(0xa9)),
    ordersController["closeOrder"]
  ),
  router["delete"](
    _0x2ab308(0xad),
    orderValidator[_0x2ab308(0xaf)],
    auth(_0x2ab308(0xcc), _0x2ab308(0xa9)),
    ordersController[_0x2ab308(0xb9)]
  ),
  router[_0x2ab308(0xc9)](
    _0x2ab308(0xbb),
    orderValidator["requestPaymentValidator"],
    auth(_0x2ab308(0xbc), _0x2ab308(0xa9)),
    ordersController[_0x2ab308(0xa2)]
  ),
  router["post"](
    "/:orderId/confirm-payment",
    orderValidator[_0x2ab308(0xb2)],
    auth(_0x2ab308(0xbc), _0x2ab308(0xa9)),
    ordersController[_0x2ab308(0xb0)]
  ),
  router["get"](
    "/my-received",
    orderValidator[_0x2ab308(0x9f)],
    auth(_0x2ab308(0xc7), "order"),
    ordersController[_0x2ab308(0xb7)]
  ),
  router[_0x2ab308(0xbf)](
    _0x2ab308(0x9c),
    orderValidator[_0x2ab308(0xa0)],
    auth(_0x2ab308(0xbc), _0x2ab308(0xa9)),
    ordersController[_0x2ab308(0xbe)]
  ),
  router[_0x2ab308(0xbf)](
    "/:orderId/reject",
    orderValidator["rejectOrderValidator"],
    auth(_0x2ab308(0xbc), _0x2ab308(0xa9)),
    ordersController[_0x2ab308(0xab)]
  ),
  router[_0x2ab308(0xbf)](
    _0x2ab308(0xc4),
    orderValidator[_0x2ab308(0xb3)],
    auth("updateOwn", "order"),
    ordersController[_0x2ab308(0xa6)]
  ),
  router[_0x2ab308(0xb5)](
    _0x2ab308(0xa3),
    orderValidator["getAllOrdersValidator"],
    auth(_0x2ab308(0xb8), _0x2ab308(0xa9)),
    ordersController[_0x2ab308(0xa4)]
  ),
  router[_0x2ab308(0xb5)](
    _0x2ab308(0xcb),
    orderValidator[_0x2ab308(0xc2)],
    auth(_0x2ab308(0xb8), "order"),
    ordersController[_0x2ab308(0xa5)]
  ),
  (module["exports"] = router);
