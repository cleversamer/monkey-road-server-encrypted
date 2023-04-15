function _0x4b3f() {
  const _0x43515b = [
    "../../../../uploads",
    "45VRopWo",
    "14200912zzrGyZ",
    "bucket",
    "@google-cloud/storage",
    "18752830PqiVPT",
    "file",
    "70100HoHtXz",
    "mediaLink",
    "2470770ALaveG",
    "315yZaIJY",
    "upload",
    "6709773IFJhkj",
    "../../config/system/service-account.json",
    "41473KltgsD",
    "807864rxBXso",
    "delete",
    "monkey-road",
    "exports",
    "74vzMMGR",
    "path",
    "join",
    "split",
    "monkey-road-bucket-1",
    "/o/",
  ];
  _0x4b3f = function () {
    return _0x43515b;
  };
  return _0x4b3f();
}
const _0x389b37 = _0x4828;
(function (_0x389684, _0xea3c08) {
  const _0x3dae5c = _0x4828,
    _0x7a3759 = _0x389684();
  while (!![]) {
    try {
      const _0x308ac8 =
        (parseInt(_0x3dae5c(0x17d)) / 0x1) *
          (-parseInt(_0x3dae5c(0x182)) / 0x2) +
        (-parseInt(_0x3dae5c(0x192)) / 0x3) *
          (-parseInt(_0x3dae5c(0x18f)) / 0x4) +
        (-parseInt(_0x3dae5c(0x189)) / 0x5) *
          (-parseInt(_0x3dae5c(0x17e)) / 0x6) +
        -parseInt(_0x3dae5c(0x17b)) / 0x7 +
        -parseInt(_0x3dae5c(0x18a)) / 0x8 +
        parseInt(_0x3dae5c(0x191)) / 0x9 +
        parseInt(_0x3dae5c(0x18d)) / 0xa;
      if (_0x308ac8 === _0xea3c08) break;
      else _0x7a3759["push"](_0x7a3759["shift"]());
    } catch (_0x34639f) {
      _0x7a3759["push"](_0x7a3759["shift"]());
    }
  }
})(_0x4b3f, 0xe3ecc);
const { Storage } = require(_0x389b37(0x18c)),
  path = require(_0x389b37(0x183)),
  uploadFile = async (_0xb4c308 = { name: "", path: "" }) => {
    const _0x211139 = _0x389b37;
    try {
      const _0x325704 = new Storage({
          keyFilename: path[_0x211139(0x184)](__dirname, _0x211139(0x17c)),
          projectId: _0x211139(0x180),
        }),
        _0x2831d4 = _0x211139(0x186),
        _0x53270f = path[_0x211139(0x184)](
          __dirname,
          _0x211139(0x188) + _0xb4c308[_0x211139(0x183)]
        ),
        _0x46639f = _0xb4c308["name"],
        _0x15b6a1 = 0x0,
        _0x410e49 = { destination: _0x46639f },
        _0xd1ff19 = await _0x325704[_0x211139(0x18b)](_0x2831d4)[
          _0x211139(0x17a)
        ](_0x53270f, _0x410e49);
      return _0xd1ff19[0x1][_0x211139(0x190)];
    } catch (_0x160aef) {
      throw _0x160aef;
    }
  },
  deleteFile = async (_0x20dde3) => {
    const _0x33e6c3 = _0x389b37;
    try {
      if (!_0x20dde3) return;
      const _0x2d7652 = new Storage({
          keyFilename: path[_0x33e6c3(0x184)](__dirname, _0x33e6c3(0x17c)),
          projectId: "monkey-road",
        }),
        _0x516bc1 = _0x33e6c3(0x186),
        _0x205603 = _0x20dde3[_0x33e6c3(0x185)](_0x33e6c3(0x187))[0x1][
          _0x33e6c3(0x185)
        ]("?")[0x0];
      return (
        await _0x2d7652[_0x33e6c3(0x18b)](_0x516bc1)
          [_0x33e6c3(0x18e)](_0x205603)
          [_0x33e6c3(0x17f)](),
        !![]
      );
    } catch (_0x559dff) {
      throw _0x559dff;
    }
  };
function _0x4828(_0x3ff8d2, _0x10874a) {
  const _0x4b3f70 = _0x4b3f();
  return (
    (_0x4828 = function (_0x482836, _0x50b793) {
      _0x482836 = _0x482836 - 0x17a;
      let _0x1d0bcb = _0x4b3f70[_0x482836];
      return _0x1d0bcb;
    }),
    _0x4828(_0x3ff8d2, _0x10874a)
  );
}
module[_0x389b37(0x181)] = { uploadFile: uploadFile, deleteFile: deleteFile };
