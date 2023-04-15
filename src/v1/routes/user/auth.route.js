const _0x4539ff = _0x174c;
(function (_0x1166c7, _0x13f710) {
  const _0x89a11 = _0x174c,
    _0x3601e0 = _0x1166c7();
  while (!![]) {
    try {
      const _0x293ef4 =
        (parseInt(_0x89a11(0x17a)) / 0x1) * (parseInt(_0x89a11(0x170)) / 0x2) +
        -parseInt(_0x89a11(0x181)) / 0x3 +
        -parseInt(_0x89a11(0x17d)) / 0x4 +
        (-parseInt(_0x89a11(0x176)) / 0x5) * (parseInt(_0x89a11(0x182)) / 0x6) +
        -parseInt(_0x89a11(0x183)) / 0x7 +
        -parseInt(_0x89a11(0x180)) / 0x8 +
        (parseInt(_0x89a11(0x185)) / 0x9) * (parseInt(_0x89a11(0x175)) / 0xa);
      if (_0x293ef4 === _0x13f710) break;
      else _0x3601e0["push"](_0x3601e0["shift"]());
    } catch (_0x5e8e8e) {
      _0x3601e0["push"](_0x3601e0["shift"]());
    }
  }
})(_0x4002, 0xdc00a);
function _0x174c(_0x24f54f, _0x28ce95) {
  const _0x40028a = _0x4002();
  return (
    (_0x174c = function (_0x174c2f, _0x441edb) {
      _0x174c2f = _0x174c2f - 0x16f;
      let _0x37dbc6 = _0x40028a[_0x174c2f];
      return _0x37dbc6;
    }),
    _0x174c(_0x24f54f, _0x28ce95)
  );
}
const router = require("express")[_0x4539ff(0x171)](),
  { authController } = require(_0x4539ff(0x178)),
  { authValidator } = require(_0x4539ff(0x177));
function _0x4002() {
  const _0x3d75b9 = [
    "loginWithGoogle",
    "6103608OWLDpD",
    "loginWithEmailValidator",
    "/login/email",
    "8100496VHmKwQ",
    "4194222RSsEpt",
    "4108026eZanko",
    "127876VhULcz",
    "registerWithEmailValidator",
    "1813005OXFZFO",
    "registerWithGoogleValidator",
    "203184kLtsCZ",
    "Router",
    "/register/google",
    "/login/google",
    "post",
    "270YwfeCw",
    "5SeeGTW",
    "../../middleware/validation",
    "../../controllers",
    "/register/email",
    "1vaExnL",
    "loginWithGoogleValidator",
  ];
  _0x4002 = function () {
    return _0x3d75b9;
  };
  return _0x4002();
}
router[_0x4539ff(0x174)](
  _0x4539ff(0x179),
  authValidator[_0x4539ff(0x184)],
  authController["registerWithEmail"]
),
  router[_0x4539ff(0x174)](
    _0x4539ff(0x172),
    authValidator[_0x4539ff(0x16f)],
    authController["registerWithGoogle"]
  ),
  router[_0x4539ff(0x174)](
    _0x4539ff(0x17f),
    authValidator[_0x4539ff(0x17e)],
    authController["loginWithEmail"]
  ),
  router[_0x4539ff(0x174)](
    _0x4539ff(0x173),
    authValidator[_0x4539ff(0x17b)],
    authController[_0x4539ff(0x17c)]
  ),
  (module["exports"] = router);
