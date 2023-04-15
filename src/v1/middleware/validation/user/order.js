const _0x38c57f = _0x479e;
function _0x3259() {
  const _0x5422f0 = [
    "66zfdXsi",
    "checkRejectionReason",
    "16479268fapbeO",
    "261620ExPiAx",
    "putQueryParamsInBody",
    "139457XVeBRa",
    "checkOrderId",
    "checkUserId",
    "checkPage",
    "2enBKUq",
    "5719602hHSnMX",
    "next",
    "exports",
    "checkLimit",
    "11ivrNlm",
    "72Vebuiu",
    "1161764lSZPgF",
    "12rOtRlf",
    "9ropZSH",
    "1060240fNaDLo",
    "../common",
    "2236590nGCwgr",
  ];
  _0x3259 = function () {
    return _0x5422f0;
  };
  return _0x3259();
}
(function (_0x1d62e8, _0x1a60e5) {
  const _0x2916f9 = _0x479e,
    _0x3944e1 = _0x1d62e8();
  while (!![]) {
    try {
      const _0x3665ce =
        (parseInt(_0x2916f9(0xd5)) / 0x1) * (-parseInt(_0x2916f9(0xd9)) / 0x2) +
        (parseInt(_0x2916f9(0xe2)) / 0x3) * (parseInt(_0x2916f9(0xe0)) / 0x4) +
        (parseInt(_0x2916f9(0xd3)) / 0x5) * (-parseInt(_0x2916f9(0xd0)) / 0x6) +
        parseInt(_0x2916f9(0xda)) / 0x7 +
        (parseInt(_0x2916f9(0xcd)) / 0x8) * (parseInt(_0x2916f9(0xdf)) / 0x9) +
        (-parseInt(_0x2916f9(0xcf)) / 0xa) * (parseInt(_0x2916f9(0xde)) / 0xb) +
        (parseInt(_0x2916f9(0xe1)) / 0xc) * (-parseInt(_0x2916f9(0xd2)) / 0xd);
      if (_0x3665ce === _0x1a60e5) break;
      else _0x3944e1["push"](_0x3944e1["shift"]());
    } catch (_0x1c3313) {
      _0x3944e1["push"](_0x3944e1["shift"]());
    }
  }
})(_0x3259, 0x8467d);
function _0x479e(_0x51576a, _0x449bda) {
  const _0x3259ea = _0x3259();
  return (
    (_0x479e = function (_0x479e74, _0xf97c96) {
      _0x479e74 = _0x479e74 - 0xcd;
      let _0x45141c = _0x3259ea[_0x479e74];
      return _0x45141c;
    }),
    _0x479e(_0x51576a, _0x449bda)
  );
}
const commonMiddleware = require(_0x38c57f(0xce)),
  getMyOrdersValidator = [
    commonMiddleware[_0x38c57f(0xd4)],
    commonMiddleware[_0x38c57f(0xd8)],
    commonMiddleware["checkLimit"],
    commonMiddleware[_0x38c57f(0xdb)],
  ],
  getOrderDetailsValidator = [
    commonMiddleware["putQueryParamsInBody"],
    commonMiddleware[_0x38c57f(0xd6)],
    commonMiddleware[_0x38c57f(0xdb)],
  ],
  closeOrderValidator = [
    commonMiddleware[_0x38c57f(0xd4)],
    commonMiddleware[_0x38c57f(0xd6)],
    commonMiddleware["next"],
  ],
  deleteOrderValidator = [
    commonMiddleware[_0x38c57f(0xd4)],
    commonMiddleware[_0x38c57f(0xd6)],
    commonMiddleware["next"],
  ],
  requestPaymentValidator = [
    commonMiddleware["putQueryParamsInBody"],
    commonMiddleware[_0x38c57f(0xd6)],
    commonMiddleware[_0x38c57f(0xdb)],
  ],
  confirmPaymentValidator = [
    commonMiddleware[_0x38c57f(0xd4)],
    commonMiddleware[_0x38c57f(0xd6)],
    commonMiddleware[_0x38c57f(0xdb)],
  ],
  getMyReceivedOrdersValidator = [
    commonMiddleware[_0x38c57f(0xd4)],
    commonMiddleware[_0x38c57f(0xd8)],
    commonMiddleware[_0x38c57f(0xdd)],
    commonMiddleware[_0x38c57f(0xdb)],
  ],
  approveOrderValidator = [
    commonMiddleware[_0x38c57f(0xd4)],
    commonMiddleware["checkOrderId"],
    commonMiddleware[_0x38c57f(0xdb)],
  ],
  rejectOrderValidator = [
    commonMiddleware["putQueryParamsInBody"],
    commonMiddleware[_0x38c57f(0xd6)],
    commonMiddleware[_0x38c57f(0xd1)],
    commonMiddleware[_0x38c57f(0xdb)],
  ],
  deliverOrderValidator = [
    commonMiddleware["putQueryParamsInBody"],
    commonMiddleware[_0x38c57f(0xd6)],
    commonMiddleware[_0x38c57f(0xdb)],
  ],
  getAllOrdersValidator = [
    commonMiddleware[_0x38c57f(0xd4)],
    commonMiddleware["checkPage"],
    commonMiddleware[_0x38c57f(0xdd)],
    commonMiddleware[_0x38c57f(0xdb)],
  ],
  getOfficeReceivedOrdersValidator = [
    commonMiddleware[_0x38c57f(0xd4)],
    commonMiddleware[_0x38c57f(0xd7)],
    commonMiddleware["next"],
  ];
module[_0x38c57f(0xdc)] = {
  getMyOrdersValidator: getMyOrdersValidator,
  getOrderDetailsValidator: getOrderDetailsValidator,
  closeOrderValidator: closeOrderValidator,
  deleteOrderValidator: deleteOrderValidator,
  requestPaymentValidator: requestPaymentValidator,
  confirmPaymentValidator: confirmPaymentValidator,
  getMyReceivedOrdersValidator: getMyReceivedOrdersValidator,
  approveOrderValidator: approveOrderValidator,
  rejectOrderValidator: rejectOrderValidator,
  deliverOrderValidator: deliverOrderValidator,
  getAllOrdersValidator: getAllOrdersValidator,
  getOfficeReceivedOrdersValidator: getOfficeReceivedOrdersValidator,
};
