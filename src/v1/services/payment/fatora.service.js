const _0x4d7751 = _0x5c5e;
(function (_0x3e41df, _0x351c48) {
  const _0x29f08a = _0x5c5e,
    _0x523e68 = _0x3e41df();
  while (!![]) {
    try {
      const _0x4fbf94 =
        -parseInt(_0x29f08a(0x19b)) / 0x1 +
        (parseInt(_0x29f08a(0x18c)) / 0x2) *
          (-parseInt(_0x29f08a(0x19c)) / 0x3) +
        parseInt(_0x29f08a(0x185)) / 0x4 +
        (-parseInt(_0x29f08a(0x19d)) / 0x5) *
          (parseInt(_0x29f08a(0x192)) / 0x6) +
        parseInt(_0x29f08a(0x18a)) / 0x7 +
        -parseInt(_0x29f08a(0x186)) / 0x8 +
        (parseInt(_0x29f08a(0x187)) / 0x9) * (parseInt(_0x29f08a(0x197)) / 0xa);
      if (_0x4fbf94 === _0x351c48) break;
      else _0x523e68["push"](_0x523e68["shift"]());
    } catch (_0x4daff7) {
      _0x523e68["push"](_0x523e68["shift"]());
    }
  }
})(_0x5f45, 0x90bf9);
const request = require(_0x4d7751(0x18b)),
  { errors } = require(_0x4d7751(0x18d)),
  { ApiError } = require("../../middleware/apiError"),
  httpStatus = require(_0x4d7751(0x18e)),
  addTransactionURL = _0x4d7751(0x191),
  verifyPaymentURL = "https://api.fatora.io/v1/payments/verify",
  sandboxApiKey = _0x4d7751(0x196),
  liveApiKey = process[_0x4d7751(0x1a1)][_0x4d7751(0x184)],
  apiKey = liveApiKey;
(module["exports"]["addFatoraTransaction"] = (
  _0x3a6b0a,
  _0x3ae474,
  _0x5e5acf,
  _0x3d42e0,
  _0x249df3
) => {
  const _0x56b87f = _0x4d7751;
  try {
    const _0x40e3f9 = {
        amount: _0x3ae474,
        currency: _0x56b87f(0x19e),
        order_id: _0x5e5acf,
        client: {
          name: _0x3a6b0a[_0x56b87f(0x194)],
          phone: _0x3a6b0a[_0x56b87f(0x195)][_0x56b87f(0x19f)],
          email: _0x3a6b0a[_0x56b87f(0x18f)],
        },
        language: _0x3a6b0a["favLang"],
        success_url: "",
        failure_url: "",
        fcm_token: _0x3a6b0a[_0x56b87f(0x199)],
        save_token: !![],
        note: "",
      },
      _0x1324a5 = {
        json: _0x40e3f9,
        headers: { "Content-Type": _0x56b87f(0x190), api_key: apiKey },
      },
      _0x131ab1 = function (_0x37fffa, _0x16a249, _0xdb0d75) {
        const _0x83b8c7 = _0x56b87f;
        try {
          if (!_0x37fffa && _0x16a249[_0x83b8c7(0x188)] == 0xc8)
            _0x3d42e0(_0xdb0d75);
          else _0x249df3(_0x37fffa);
        } catch (_0x16c382) {
          _0x249df3(_0x16c382);
        }
      };
    request[_0x56b87f(0x193)](addTransactionURL, _0x1324a5, _0x131ab1);
  } catch (_0x1d13c7) {
    const _0x26404e = httpStatus["INTERNAL_SERVER_ERROR"],
      _0x505388 = errors[_0x56b87f(0x1a0)][_0x56b87f(0x19a)];
    throw new ApiError(_0x26404e, _0x505388);
  }
}),
  (module[_0x4d7751(0x198)][_0x4d7751(0x189)] = async (
    _0x63488a,
    _0x2e72a2,
    _0x53dbf8,
    _0x306f68
  ) => {
    const _0x597dab = _0x4d7751;
    try {
      const _0x3b6d76 = { order_id: _0x63488a, transaction_id: _0x2e72a2 },
        _0x44e35d = {
          json: _0x3b6d76,
          headers: { "Content-Type": _0x597dab(0x190), api_key: apiKey },
        },
        _0x1189f9 = function (_0x256f14, _0x5e8923, _0x484d31) {
          const _0x344ec0 = _0x597dab;
          try {
            if (!_0x256f14 && _0x5e8923[_0x344ec0(0x188)] == 0xc8)
              _0x53dbf8(_0x484d31);
            else _0x306f68(_0x256f14);
          } catch (_0x39ee46) {
            _0x306f68(_0x39ee46);
          }
        };
      request[_0x597dab(0x193)](verifyPaymentURL, _0x44e35d, _0x1189f9);
    } catch (_0x172bf3) {
      throw _0x172bf3;
    }
  });
function _0x5c5e(_0x11f09a, _0x2bd5ea) {
  const _0x5f457b = _0x5f45();
  return (
    (_0x5c5e = function (_0x5c5e5b, _0x21e345) {
      _0x5c5e5b = _0x5c5e5b - 0x184;
      let _0x412036 = _0x5f457b[_0x5c5e5b];
      return _0x412036;
    }),
    _0x5c5e(_0x11f09a, _0x2bd5ea)
  );
}
function _0x5f45() {
  const _0x2c6b44 = [
    "5QDMvCY",
    "AED",
    "full",
    "fatora",
    "env",
    "FATORA_API_KEY",
    "660036HsiVka",
    "8684768LQKVOX",
    "20850219umhCzZ",
    "statusCode",
    "verifyFatoraTransaction",
    "8014517gmWEjz",
    "request",
    "22zbczIU",
    "../../config",
    "http-status",
    "email",
    "application/json",
    "https://api.fatora.io/v1/payments/checkout",
    "3285174tedecS",
    "post",
    "name",
    "phone",
    "E4B73FEE-F492-4607-A38D-852B0EBC91C9",
    "10xVaSQv",
    "exports",
    "deviceToken",
    "somethingWrong",
    "1053314xFCaFV",
    "94719VrJZuG",
  ];
  _0x5f45 = function () {
    return _0x2c6b44;
  };
  return _0x5f45();
}
