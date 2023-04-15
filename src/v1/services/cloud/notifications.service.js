function _0x50c4() {
  const _0x3fcefd = [
    "1879296IAXjTs",
    "4nbLEvu",
    "20357InFScP",
    "INTERNAL_SERVER_ERROR",
    "4JHnjvj",
    "filter",
    "207639AgjcTp",
    "firebase-admin",
    "3053930PDGefv",
    "../../config/errors",
    "4011616VURelP",
    "9rJPrqQ",
    "sendPushNotification",
    "user",
    "cert",
    "errorSendingNotification",
    "token",
    "4231254WmokdB",
    "18493690OpPstg",
    "fcm-notification",
    "sendToMultipleToken",
    "../../config/system/service-account.json",
  ];
  _0x50c4 = function () {
    return _0x3fcefd;
  };
  return _0x50c4();
}
const _0x3f7df1 = _0x1b5a;
(function (_0xef0608, _0xe5c7c6) {
  const _0x5d4a62 = _0x1b5a,
    _0x1a6226 = _0xef0608();
  while (!![]) {
    try {
      const _0x50062f =
        parseInt(_0x5d4a62(0x146)) / 0x1 +
        (parseInt(_0x5d4a62(0x145)) / 0x2) *
          (parseInt(_0x5d4a62(0x134)) / 0x3) +
        (parseInt(_0x5d4a62(0x148)) / 0x4) *
          (-parseInt(_0x5d4a62(0x136)) / 0x5) +
        -parseInt(_0x5d4a62(0x13f)) / 0x6 +
        -parseInt(_0x5d4a62(0x138)) / 0x7 +
        (parseInt(_0x5d4a62(0x144)) / 0x8) *
          (parseInt(_0x5d4a62(0x139)) / 0x9) +
        parseInt(_0x5d4a62(0x140)) / 0xa;
      if (_0x50062f === _0xe5c7c6) break;
      else _0x1a6226["push"](_0x1a6226["shift"]());
    } catch (_0x162e4f) {
      _0x1a6226["push"](_0x1a6226["shift"]());
    }
  }
})(_0x50c4, 0x566bd);
function _0x1b5a(_0x10ff52, _0x1bf86c) {
  const _0x50c4d3 = _0x50c4();
  return (
    (_0x1b5a = function (_0x1b5a27, _0x185301) {
      _0x1b5a27 = _0x1b5a27 - 0x133;
      let _0x2f2406 = _0x50c4d3[_0x1b5a27];
      return _0x2f2406;
    }),
    _0x1b5a(_0x10ff52, _0x1bf86c)
  );
}
const admin = require(_0x3f7df1(0x135)),
  FCM = require(_0x3f7df1(0x141)),
  serviceAccount = require(_0x3f7df1(0x143)),
  certPath = admin["credential"][_0x3f7df1(0x13c)](serviceAccount),
  errors = require(_0x3f7df1(0x137)),
  httpStatus = require("http-status"),
  { ApiError } = require("../../middleware/apiError"),
  fcm = new FCM(certPath);
module["exports"][_0x3f7df1(0x13a)] = (
  _0x19fe25,
  _0x5d5629,
  _0x24d396,
  _0x1379da,
  _0x4958d3
) => {
  const _0x3b2929 = _0x3f7df1;
  try {
    _0x24d396 = filterTokens(_0x24d396);
    let _0x4e6a1a = {
      data: {},
      notification: { title: _0x19fe25, body: _0x5d5629, icon: _0x4958d3 },
    };
    fcm[_0x3b2929(0x142)](_0x4e6a1a, _0x24d396, _0x1379da);
  } catch (_0x125602) {
    const _0x434c9e = httpStatus[_0x3b2929(0x147)],
      _0x156541 = errors[_0x3b2929(0x13b)][_0x3b2929(0x13d)];
    throw new ApiError(_0x434c9e, _0x156541);
  }
};
const filterTokens = (_0x4f670e = []) =>
  _0x4f670e[_0x3f7df1(0x133)](
    (_0x50e433) => _0x50e433 && _0x50e433 !== _0x3f7df1(0x13e)
  );
