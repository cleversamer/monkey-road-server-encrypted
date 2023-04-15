const _0x3270a3 = _0x84b4;
(function (_0xd2151c, _0x2e8d0d) {
  const _0x3bda26 = _0x84b4,
    _0x11ccdd = _0xd2151c();
  while (!![]) {
    try {
      const _0x4fe51c =
        (-parseInt(_0x3bda26(0xcc)) / 0x1) *
          (-parseInt(_0x3bda26(0xce)) / 0x2) +
        (parseInt(_0x3bda26(0xc2)) / 0x3) * (-parseInt(_0x3bda26(0xc1)) / 0x4) +
        -parseInt(_0x3bda26(0xc5)) / 0x5 +
        -parseInt(_0x3bda26(0xd3)) / 0x6 +
        (-parseInt(_0x3bda26(0xd1)) / 0x7) * (parseInt(_0x3bda26(0xd0)) / 0x8) +
        -parseInt(_0x3bda26(0xc4)) / 0x9 +
        (parseInt(_0x3bda26(0xcf)) / 0xa) * (parseInt(_0x3bda26(0xc0)) / 0xb);
      if (_0x4fe51c === _0x2e8d0d) break;
      else _0x11ccdd["push"](_0x11ccdd["shift"]());
    } catch (_0x328230) {
      _0x11ccdd["push"](_0x11ccdd["shift"]());
    }
  }
})(_0x4fd7, 0x1afdd);
const router = require(_0x3270a3(0xc7))[_0x3270a3(0xd4)](),
  { brandsController } = require(_0x3270a3(0xd5)),
  { brandValidator } = require(_0x3270a3(0xc3)),
  auth = require(_0x3270a3(0xc9));
function _0x84b4(_0x17b193, _0x1e2df5) {
  const _0x4fd75a = _0x4fd7();
  return (
    (_0x84b4 = function (_0x84b4c9, _0x2417f5) {
      _0x84b4c9 = _0x84b4c9 - 0xc0;
      let _0x4ad229 = _0x4fd75a[_0x84b4c9];
      return _0x4ad229;
    }),
    _0x84b4(_0x17b193, _0x1e2df5)
  );
}
function _0x4fd7() {
  const _0x1a9ec7 = [
    "express",
    "/popular",
    "../../middleware/auth",
    "getPopularBrandsValidator",
    "brand",
    "33BZfouY",
    "addBrand",
    "6282XxlraU",
    "6757090mlLdIP",
    "1587440sURjQJ",
    "7KrOXDA",
    "exports",
    "166176jsXNFC",
    "Router",
    "../../controllers",
    "addBrandValidator",
    "11NWDLYl",
    "2708BCnsCV",
    "906MeteUp",
    "../../middleware/validation",
    "295362YFgaSz",
    "1027035pcxokQ",
    "post",
  ];
  _0x4fd7 = function () {
    return _0x1a9ec7;
  };
  return _0x4fd7();
}
router["get"](
  _0x3270a3(0xc8),
  brandValidator[_0x3270a3(0xca)],
  brandsController["getPopularBrands"]
),
  router[_0x3270a3(0xc6)](
    "/add",
    brandValidator[_0x3270a3(0xd6)],
    auth("createAny", _0x3270a3(0xcb)),
    brandsController[_0x3270a3(0xcd)]
  ),
  (module[_0x3270a3(0xd2)] = router);
