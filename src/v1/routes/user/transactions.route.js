const _0x360ef3 = _0x44cd;
function _0xff33() {
  const _0x174bc6 = [
    "313065AfbPrS",
    "Router",
    "5KtwjQf",
    "305434DDSfFr",
    "7168567qEFZMo",
    "get",
    "2471733igFskL",
    "1387572lePKEI",
    "getMyTransactionsValidator",
    "readAny",
    "readOwn",
    "getMyTransactions",
    "exportUserTransactionsToExcelValidator",
    "106144Yfjcji",
    "../../controllers",
    "2661340ySFvpr",
    "/my",
    "transaction",
    "exportUserTransactionsToExcel",
    "6NbDjms",
    "../../middleware/auth",
    "/my/export",
    "express",
  ];
  _0xff33 = function () {
    return _0x174bc6;
  };
  return _0xff33();
}
(function (_0x5ea20c, _0x294bbb) {
  const _0x1a74a3 = _0x44cd,
    _0x82162b = _0x5ea20c();
  while (!![]) {
    try {
      const _0x9210ca =
        parseInt(_0x1a74a3(0x167)) / 0x1 +
        (-parseInt(_0x1a74a3(0x16a)) / 0x2) *
          (-parseInt(_0x1a74a3(0x17a)) / 0x3) +
        parseInt(_0x1a74a3(0x176)) / 0x4 +
        (parseInt(_0x1a74a3(0x169)) / 0x5) *
          (parseInt(_0x1a74a3(0x16e)) / 0x6) +
        -parseInt(_0x1a74a3(0x16b)) / 0x7 +
        -parseInt(_0x1a74a3(0x174)) / 0x8 +
        parseInt(_0x1a74a3(0x16d)) / 0x9;
      if (_0x9210ca === _0x294bbb) break;
      else _0x82162b["push"](_0x82162b["shift"]());
    } catch (_0x194678) {
      _0x82162b["push"](_0x82162b["shift"]());
    }
  }
})(_0xff33, 0xb7b00);
function _0x44cd(_0x164be4, _0xf7a6f5) {
  const _0xff3343 = _0xff33();
  return (
    (_0x44cd = function (_0x44cd45, _0x4dc0ac) {
      _0x44cd45 = _0x44cd45 - 0x167;
      let _0x383256 = _0xff3343[_0x44cd45];
      return _0x383256;
    }),
    _0x44cd(_0x164be4, _0xf7a6f5)
  );
}
const router = require(_0x360ef3(0x17d))[_0x360ef3(0x168)](),
  { transactionsController } = require(_0x360ef3(0x175)),
  { transactionValidator } = require("../../middleware/validation"),
  auth = require(_0x360ef3(0x17b));
router[_0x360ef3(0x16c)](
  _0x360ef3(0x177),
  transactionValidator[_0x360ef3(0x16f)],
  auth("readOwn", _0x360ef3(0x178)),
  transactionsController[_0x360ef3(0x172)]
),
  router[_0x360ef3(0x16c)](
    _0x360ef3(0x17c),
    auth(_0x360ef3(0x171), _0x360ef3(0x178)),
    transactionsController["exportMyTransactionsToExcel"]
  ),
  router[_0x360ef3(0x16c)](
    "/:userId/get",
    transactionValidator["getUserTransactionsValidator"],
    auth("readAny", _0x360ef3(0x178)),
    transactionsController["getUserTransactions"]
  ),
  router["get"](
    "/:userId/export",
    transactionValidator[_0x360ef3(0x173)],
    auth(_0x360ef3(0x170), _0x360ef3(0x178)),
    transactionsController[_0x360ef3(0x179)]
  ),
  (module["exports"] = router);
