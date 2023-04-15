const _0x516970 = _0x9edc;
function _0x9edc(_0x487b3b, _0x5c08a8) {
  const _0x5918a1 = _0x5918();
  return (
    (_0x9edc = function (_0x9edcf6, _0x441b37) {
      _0x9edcf6 = _0x9edcf6 - 0x128;
      let _0x5a4e32 = _0x5918a1[_0x9edcf6];
      return _0x5a4e32;
    }),
    _0x9edc(_0x487b3b, _0x5c08a8)
  );
}
(function (_0xa46913, _0x5232cd) {
  const _0x5d3c03 = _0x9edc,
    _0x4ab851 = _0xa46913();
  while (!![]) {
    try {
      const _0x42dd43 =
        (-parseInt(_0x5d3c03(0x144)) / 0x1) *
          (-parseInt(_0x5d3c03(0x12e)) / 0x2) +
        (-parseInt(_0x5d3c03(0x145)) / 0x3) *
          (parseInt(_0x5d3c03(0x13a)) / 0x4) +
        parseInt(_0x5d3c03(0x13e)) / 0x5 +
        (parseInt(_0x5d3c03(0x12b)) / 0x6) *
          (-parseInt(_0x5d3c03(0x141)) / 0x7) +
        (-parseInt(_0x5d3c03(0x13f)) / 0x8) *
          (parseInt(_0x5d3c03(0x140)) / 0x9) +
        parseInt(_0x5d3c03(0x12c)) / 0xa +
        parseInt(_0x5d3c03(0x128)) / 0xb;
      if (_0x42dd43 === _0x5232cd) break;
      else _0x4ab851["push"](_0x4ab851["shift"]());
    } catch (_0x35d93c) {
      _0x4ab851["push"](_0x4ab851["shift"]());
    }
  }
})(_0x5918, 0x365ee);
const { Brand } = require(_0x516970(0x130)),
  { ApiError } = require("../../middleware/apiError"),
  localStorage = require(_0x516970(0x12f)),
  cloudStorage = require("../cloud/cloudStorage.service"),
  httpStatus = require("http-status"),
  errors = require("../../config/errors");
(module[_0x516970(0x132)]["getBrand"] = async (_0x183083) => {
  const _0x46f7f1 = _0x516970;
  try {
    const _0x3c8f5b = await Brand["findById"](_0x183083);
    if (!_0x3c8f5b) {
      const _0x13f99f = httpStatus[_0x46f7f1(0x137)],
        _0x3294ef = errors["brand"][_0x46f7f1(0x147)];
      throw new ApiError(_0x13f99f, _0x3294ef);
    }
    return _0x3c8f5b;
  } catch (_0x129c59) {
    throw _0x129c59;
  }
}),
  (module[_0x516970(0x132)]["getPopularBrands"] = async (
    _0x2bca71,
    _0x161bcb
  ) => {
    const _0x90f316 = _0x516970;
    try {
      (_0x2bca71 = parseInt(_0x2bca71)), (_0x161bcb = parseInt(_0x161bcb));
      const _0x3ff444 = await Brand[_0x90f316(0x131)]({})
        [_0x90f316(0x143)]({ "noOfCars.rental": -0x1 })
        [_0x90f316(0x133)]((_0x2bca71 - 0x1) * _0x161bcb)
        [_0x90f316(0x13c)](_0x161bcb);
      if (!_0x3ff444 || !_0x3ff444["length"]) {
        const _0x481545 = httpStatus[_0x90f316(0x137)],
          _0x46e6d7 = errors["brand"][_0x90f316(0x136)];
        throw new ApiError(_0x481545, _0x46e6d7);
      }
      const _0x2e15fd = await Brand[_0x90f316(0x135)]({});
      return {
        brands: _0x3ff444,
        currentPage: _0x2bca71,
        totalPages: Math[_0x90f316(0x146)](_0x2e15fd / _0x161bcb),
      };
    } catch (_0x3b8aed) {
      throw _0x3b8aed;
    }
  }),
  (module[_0x516970(0x132)]["addBrand"] = async (
    _0x50cd9b,
    _0x7cd4f1,
    _0x2c7e50
  ) => {
    const _0x4f90e3 = _0x516970;
    try {
      const _0x3544d7 = await Brand[_0x4f90e3(0x129)]({
        $or: [
          { "name.en": { $eq: _0x50cd9b } },
          { "name.ar": { $eq: _0x7cd4f1 } },
        ],
      });
      if (_0x3544d7) {
        const _0x50ac01 = httpStatus[_0x4f90e3(0x138)],
          _0x1a32e0 = errors["brand"]["alreadyExists"];
        throw new ApiError(_0x50ac01, _0x1a32e0);
      }
      const _0x14e808 = await localStorage[_0x4f90e3(0x142)](_0x2c7e50),
        _0xc23554 = await cloudStorage[_0x4f90e3(0x134)](_0x14e808);
      await localStorage["deleteFile"](_0x14e808[_0x4f90e3(0x13d)]);
      const _0x575c4c = new Brand({
        photoURL: _0xc23554,
        name: { en: _0x50cd9b, ar: _0x7cd4f1 },
      });
      return await _0x575c4c[_0x4f90e3(0x12d)](), _0x575c4c;
    } catch (_0x26b5e7) {
      if (_0x26b5e7[_0x4f90e3(0x139)] === errors["codes"][_0x4f90e3(0x12a)]) {
        const _0x16753d = httpStatus[_0x4f90e3(0x138)],
          _0x30533a = errors["brand"][_0x4f90e3(0x13b)];
        _0x26b5e7 = new ApiError(_0x16753d, _0x30533a);
      }
      throw _0x26b5e7;
    }
  });
function _0x5918() {
  const _0x2bc336 = [
    "alreadyExists",
    "limit",
    "path",
    "432730KwOoFk",
    "8mjDzta",
    "1290771naTLoj",
    "54901LvbcWl",
    "storeFile",
    "sort",
    "1589QqnONB",
    "219ldkxCx",
    "ceil",
    "notFound",
    "5707944ODiQHa",
    "findOne",
    "duplicateIndexKey",
    "282LEjxnP",
    "826030OvnhZm",
    "save",
    "184mzrsrj",
    "../storage/localStorage.service",
    "../../models/car/brand.model",
    "find",
    "exports",
    "skip",
    "uploadFile",
    "count",
    "noBrands",
    "NOT_FOUND",
    "BAD_REQUEST",
    "code",
    "5452XZprxC",
  ];
  _0x5918 = function () {
    return _0x2bc336;
  };
  return _0x5918();
}
