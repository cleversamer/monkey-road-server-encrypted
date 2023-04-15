function _0x347f() {
  const _0x5f5102 = [
    "sendNotification",
    "5401468VeGSCH",
    "6106131ctDiVF",
    "photo",
    "13kFfKjm",
    "query",
    "photoURL",
    "brand",
    "8QohmcL",
    "275tLlzkq",
    "64066932uAWyGL",
    "name",
    "../../config",
    "sendNotificationToAdmins",
    "exports",
    "11226FFEFJh",
    "2125BoRCSy",
    "13419203nCxSuk",
    "http-status",
    "map",
    "brandAddedForAllUsers",
    "lodash",
    "../../services",
    "status",
    "pick",
    "3FOiGvV",
    "addBrand",
    "getPopularBrands",
    "4200977wTxpAR",
    "json",
    "40pCzMHy",
    "CREATED",
    "files",
    "2248JEyYxE",
    "body",
  ];
  _0x347f = function () {
    return _0x5f5102;
  };
  return _0x347f();
}
function _0x52ac(_0x4e4269, _0x2ef0ed) {
  const _0x347f61 = _0x347f();
  return (
    (_0x52ac = function (_0x52ac1a, _0x2884da) {
      _0x52ac1a = _0x52ac1a - 0x106;
      let _0x4627ee = _0x347f61[_0x52ac1a];
      return _0x4627ee;
    }),
    _0x52ac(_0x4e4269, _0x2ef0ed)
  );
}
const _0x3812ef = _0x52ac;
(function (_0x2a6061, _0x5dbb22) {
  const _0x3068e6 = _0x52ac,
    _0x1728a6 = _0x2a6061();
  while (!![]) {
    try {
      const _0x363695 =
        (parseInt(_0x3068e6(0x108)) / 0x1) *
          (parseInt(_0x3068e6(0x120)) / 0x2) +
        (parseInt(_0x3068e6(0x118)) / 0x3) *
          (-parseInt(_0x3068e6(0x123)) / 0x4) +
        (parseInt(_0x3068e6(0x10f)) / 0x5) *
          (parseInt(_0x3068e6(0x10e)) / 0x6) +
        (parseInt(_0x3068e6(0x110)) / 0x7) *
          (-parseInt(_0x3068e6(0x107)) / 0x8) +
        -parseInt(_0x3068e6(0x124)) / 0x9 +
        (-parseInt(_0x3068e6(0x11d)) / 0xa) *
          (parseInt(_0x3068e6(0x11b)) / 0xb) +
        (parseInt(_0x3068e6(0x109)) / 0xc) * (parseInt(_0x3068e6(0x126)) / 0xd);
      if (_0x363695 === _0x5dbb22) break;
      else _0x1728a6["push"](_0x1728a6["shift"]());
    } catch (_0x1d61b7) {
      _0x1728a6["push"](_0x1728a6["shift"]());
    }
  }
})(_0x347f, 0xecbe7);
const { CLIENT_SCHEMA: brandSchema } = require("../../models/car/brand.model"),
  { brandsService, usersService } = require(_0x3812ef(0x115)),
  httpStatus = require(_0x3812ef(0x111)),
  _ = require(_0x3812ef(0x114)),
  { notifications } = require(_0x3812ef(0x10b));
(module[_0x3812ef(0x10d)][_0x3812ef(0x11a)] = async (
  _0x4187f2,
  _0x50739d,
  _0x235da9
) => {
  const _0x6ef41b = _0x3812ef;
  try {
    const { page: _0x5a54f0, limit: _0x3bd594 } = _0x4187f2[_0x6ef41b(0x127)],
      {
        currentPage: _0x8ec56,
        totalPages: _0x52381a,
        brands: _0x5f19ce,
      } = await brandsService[_0x6ef41b(0x11a)](_0x5a54f0, _0x3bd594),
      _0x539f8e = {
        currentPage: _0x8ec56,
        totalPages: _0x52381a,
        brands: _0x5f19ce[_0x6ef41b(0x112)]((_0x4a120f) =>
          _[_0x6ef41b(0x117)](_0x4a120f, brandSchema)
        ),
      };
    _0x50739d[_0x6ef41b(0x116)](httpStatus["OK"])[_0x6ef41b(0x11c)](_0x539f8e);
  } catch (_0x2f623a) {
    _0x235da9(_0x2f623a);
  }
}),
  (module[_0x3812ef(0x10d)][_0x3812ef(0x119)] = async (
    _0x2075d2,
    _0x22750f,
    _0x21789b
  ) => {
    const _0x590d26 = _0x3812ef;
    try {
      const { nameEN: _0x3766dd, nameAR: _0x3cbf7c } =
          _0x2075d2[_0x590d26(0x121)],
        _0x4559e5 = _0x2075d2?.[_0x590d26(0x11f)]?.[_0x590d26(0x125)],
        _0x2f51d5 = await brandsService["addBrand"](
          _0x3766dd,
          _0x3cbf7c,
          _0x4559e5
        ),
        _0x5d9a6f = notifications["brand"]["brandAddedForAdmin"](
          _0x2f51d5["name"],
          _0x2f51d5[_0x590d26(0x128)]
        );
      await usersService[_0x590d26(0x10c)](_0x5d9a6f);
      const _0x3efea4 = notifications[_0x590d26(0x106)][_0x590d26(0x113)](
        _0x2f51d5[_0x590d26(0x10a)],
        _0x2f51d5[_0x590d26(0x128)]
      );
      await usersService[_0x590d26(0x122)]([], _0x3efea4);
      const _0x1032b0 = _[_0x590d26(0x117)](_0x2f51d5, brandSchema);
      _0x22750f[_0x590d26(0x116)](httpStatus[_0x590d26(0x11e)])["json"](
        _0x1032b0
      );
    } catch (_0x4bcefd) {
      _0x21789b(_0x4bcefd);
    }
  });
