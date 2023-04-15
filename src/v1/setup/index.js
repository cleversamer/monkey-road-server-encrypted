const _0x3846ab = _0x1eee;
(function (_0x3370d5, _0xaccb98) {
  const _0x13da88 = _0x1eee,
    _0xa69597 = _0x3370d5();
  while (!![]) {
    try {
      const _0x1c85fa =
        (parseInt(_0x13da88(0x149)) / 0x1) *
          (parseInt(_0x13da88(0x140)) / 0x2) +
        parseInt(_0x13da88(0x146)) / 0x3 +
        (parseInt(_0x13da88(0x14b)) / 0x4) *
          (-parseInt(_0x13da88(0x13d)) / 0x5) +
        (-parseInt(_0x13da88(0x13c)) / 0x6) *
          (parseInt(_0x13da88(0x143)) / 0x7) +
        (parseInt(_0x13da88(0x14e)) / 0x8) *
          (-parseInt(_0x13da88(0x14d)) / 0x9) +
        parseInt(_0x13da88(0x139)) / 0xa +
        parseInt(_0x13da88(0x14f)) / 0xb;
      if (_0x1c85fa === _0xaccb98) break;
      else _0xa69597["push"](_0xa69597["shift"]());
    } catch (_0x4efc41) {
      _0xa69597["push"](_0xa69597["shift"]());
    }
  }
})(_0x5b45, 0x4f604);
function _0x1eee(_0x1c8710, _0x437ca3) {
  const _0x5b4592 = _0x5b45();
  return (
    (_0x1eee = function (_0x1eeed1, _0x296fb5) {
      _0x1eeed1 = _0x1eeed1 - 0x135;
      let _0x667cc7 = _0x5b4592[_0x1eeed1];
      return _0x667cc7;
    }),
    _0x1eee(_0x1c8710, _0x437ca3)
  );
}
const setupSanitization = require(_0x3846ab(0x141)),
  setupMongoDB = require("./db"),
  routes = require(_0x3846ab(0x135)),
  { server } = require(_0x3846ab(0x147)),
  { errorHandler, errorConverter, unsupportedRouteHandler } = require(_0x3846ab(
    0x138
  )),
  passport = require(_0x3846ab(0x13b)),
  { jwtStrategy } = require("../middleware/passport"),
  socket = require(_0x3846ab(0x14a)),
  setupScheduling = require(_0x3846ab(0x14c));
module[_0x3846ab(0x13f)] = (_0x14db92) => {
  const _0x2bb3db = _0x3846ab;
  setupMongoDB(),
    setupSanitization(_0x14db92),
    _0x14db92[_0x2bb3db(0x144)](passport[_0x2bb3db(0x13a)]()),
    passport["use"](_0x2bb3db(0x137), jwtStrategy),
    _0x14db92[_0x2bb3db(0x144)](_0x2bb3db(0x136), routes),
    _0x14db92[_0x2bb3db(0x144)](unsupportedRouteHandler),
    _0x14db92[_0x2bb3db(0x144)](errorConverter),
    _0x14db92[_0x2bb3db(0x144)](errorHandler);
  const _0x3576ad = _0x14db92[_0x2bb3db(0x142)](
    server[_0x2bb3db(0x145)],
    () => {
      const _0x4cd3f6 = _0x2bb3db;
      console[_0x4cd3f6(0x13e)](_0x4cd3f6(0x148) + server[_0x4cd3f6(0x145)]);
    }
  );
  socket(_0x3576ad), setupScheduling();
};
function _0x5b45() {
  const _0x4610fa = [
    "./socket",
    "39548NFdsiT",
    "./scheduling",
    "9IBlHgg",
    "4725312PtbrHh",
    "10924309cKPQka",
    "../routes",
    "/api",
    "jwt",
    "../middleware/apiError",
    "2642130snwxfu",
    "initialize",
    "passport",
    "34302HaSZBd",
    "85ApSWri",
    "log",
    "exports",
    "98OvSVPJ",
    "./sanitize",
    "listen",
    "511ALXilK",
    "use",
    "PORT",
    "163620UIKPZp",
    "../config/system",
    "App\x20is\x20listening\x20on\x20port\x20",
    "3864CicDCc",
  ];
  _0x5b45 = function () {
    return _0x4610fa;
  };
  return _0x5b45();
}
