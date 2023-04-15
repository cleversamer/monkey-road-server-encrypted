const _0x3cb374 = _0x2968;
(function (_0x3bc5df, _0x39790b) {
  const _0x6e9e2f = _0x2968,
    _0x13d035 = _0x3bc5df();
  while (!![]) {
    try {
      const _0x473d19 =
        parseInt(_0x6e9e2f(0x1a0)) / 0x1 +
        (-parseInt(_0x6e9e2f(0x18f)) / 0x2) *
          (parseInt(_0x6e9e2f(0x186)) / 0x3) +
        -parseInt(_0x6e9e2f(0x174)) / 0x4 +
        parseInt(_0x6e9e2f(0x160)) / 0x5 +
        parseInt(_0x6e9e2f(0x171)) / 0x6 +
        -parseInt(_0x6e9e2f(0x189)) / 0x7 +
        parseInt(_0x6e9e2f(0x1ab)) / 0x8;
      if (_0x473d19 === _0x39790b) break;
      else _0x13d035["push"](_0x13d035["shift"]());
    } catch (_0x7d1a1c) {
      _0x13d035["push"](_0x13d035["shift"]());
    }
  }
})(_0x437a, 0xa8dbf);
function _0x2968(_0x195d81, _0x5cf38b) {
  const _0x437ac9 = _0x437a();
  return (
    (_0x2968 = function (_0x296859, _0x2b010a) {
      _0x296859 = _0x296859 - 0x159;
      let _0x5c6cf9 = _0x437ac9[_0x296859];
      return _0x5c6cf9;
    }),
    _0x2968(_0x195d81, _0x5cf38b)
  );
}
function _0x437a() {
  const _0x42dc11 = [
    "deleteFile",
    "./uploads/",
    "seen",
    "http-status",
    "xlsx",
    "عدد\x20الإشعارات\x20المقروءة",
    "length",
    "notifications",
    "system",
    "رابط\x20الصورة\x20الشخصيّة",
    "addWorksheet",
    "التاريخ",
    "6010758TBszHC",
    ".xlsx",
    "مسجّل\x20بواسطة",
    "3792056XEjgoX",
    "user",
    "مكتب\x20تأجير",
    "uploadFile",
    "password",
    "office",
    "Office\x20Name",
    "full",
    "Workbook",
    "join",
    "name",
    "سيّارات\x20البيع",
    "forEach",
    "phone",
    "INTERNAL_SERVER_ERROR",
    "exceljs",
    "البريد\x20الإلكتروني",
    "addRow",
    "2132373TIPHBX",
    "Date",
    "writeFile",
    "8551858hochhi",
    "عدد\x20الإشعارات\x20الغير\x20مقروءة",
    "toLocaleString",
    "سيّارات\x20الإيجار",
    "role",
    "آخر\x20دخول",
    "2BhCPmS",
    "getMonth",
    "البريد\x20مفعّل",
    "عدد\x20الإشعارات",
    "favorites",
    "email",
    "Title",
    "عدد\x20الطلبات\x20المستلمة",
    "عدد\x20الطلبات\x20المنشأة\x20المقبولة",
    "غير\x20مكتملة",
    "errorExportingExcel",
    "avatarURL",
    "authType",
    "عدد\x20السيّارات\x20المفضّلة",
    "lastLogin",
    "exports",
    "../../config/errors",
    "1131953WNrnht",
    "Status",
    "getDay",
    "عدد\x20الطلبات\x20المنشأة\x20قيد\x20الإنتظار",
    "الإسم\x20الكامل",
    "آدمن",
    "split",
    "incomplete",
    "مستخدم",
    "../cloud/cloudStorage.service",
    "Monkey\x20Road\x20Users",
    "913440FaBmxF",
    "\x27s\x20Transactions\x20Report",
    "مكتب\x20التأجير",
    "مكتملة",
    "complete",
    "filter",
    "نوع\x20المستخدم",
    "يملك\x20كلمة\x20مرور",
    "getFullYear",
    "العنوان",
    "favLang",
    "الحالة",
    "6621100uLlsLo",
    "exportUserTransactionsToExcel",
    "./localStorage.service",
    "verified",
    "سجل\x20المعاملات\x20الماليّة\x20",
  ];
  _0x437a = function () {
    return _0x42dc11;
  };
  return _0x437a();
}
const Excel = require(_0x3cb374(0x183)),
  localStorage = require(_0x3cb374(0x162)),
  cloudStorage = require(_0x3cb374(0x1a9)),
  httpStatus = require(_0x3cb374(0x168)),
  errors = require(_0x3cb374(0x19f)),
  { ApiError } = require("../../middleware/apiError");
(module[_0x3cb374(0x19e)]["exportUsersToExcelFile"] = async (
  _0x26c2a4 = []
) => {
  const _0x5ebd46 = _0x3cb374;
  try {
    let _0x3ba2e0 = new Excel[_0x5ebd46(0x17c)](),
      _0x5389a1 = _0x3ba2e0[_0x5ebd46(0x16f)](_0x5ebd46(0x1aa));
    _0x5389a1[_0x5ebd46(0x185)]([
      _0x5ebd46(0x1a4),
      _0x5ebd46(0x184),
      "رقم\x20الهاتف",
      _0x5ebd46(0x15a),
      _0x5ebd46(0x191),
      "رقم\x20الهاتف\x20مفعّل",
      _0x5ebd46(0x19c),
      _0x5ebd46(0x192),
      _0x5ebd46(0x16a),
      _0x5ebd46(0x18a),
      _0x5ebd46(0x17f),
      _0x5ebd46(0x18c),
      "سيّارات\x20الإيجار\x20النشطة",
      "سيّارات\x20الإيجار\x20المعلّقة",
      _0x5ebd46(0x196),
      "عدد\x20الطلبات\x20المنشأة",
      _0x5ebd46(0x1a3),
      _0x5ebd46(0x197),
      "عدد\x20الطلبات\x20المنشأة\x20المرفوضة",
      "عدد\x20الطلبات\x20المنشأة\x20المغلقة",
      _0x5ebd46(0x173),
      _0x5ebd46(0x15b),
      _0x5ebd46(0x16e),
      _0x5ebd46(0x18e),
    ]),
      _0x26c2a4[_0x5ebd46(0x180)](function (_0x4c7c98) {
        const _0x4937c2 = _0x5ebd46,
          _0x17223c = _0x4c7c98[_0x4937c2(0x16c)][_0x4937c2(0x159)](
            (_0x3ccb59) => _0x3ccb59[_0x4937c2(0x167)]
          )["length"],
          _0xddfa2c = _0x4c7c98[_0x4937c2(0x16c)][_0x4937c2(0x159)](
            (_0x91e14b) => !_0x91e14b[_0x4937c2(0x167)]
          )["length"],
          _0x4517ef =
            _0x4c7c98[_0x4937c2(0x18d)] === _0x4937c2(0x175)
              ? _0x4937c2(0x1a8)
              : _0x4c7c98[_0x4937c2(0x18d)] === _0x4937c2(0x179)
              ? _0x4937c2(0x176)
              : _0x4937c2(0x1a5);
        _0x5389a1["addRow"]([
          _0x4c7c98[_0x4937c2(0x17e)],
          _0x4c7c98[_0x4937c2(0x194)],
          _0x4c7c98[_0x4937c2(0x181)][_0x4937c2(0x17b)],
          _0x4517ef,
          _0x4c7c98[_0x4937c2(0x163)][_0x4937c2(0x194)] ? "نعم" : "لا",
          _0x4c7c98[_0x4937c2(0x163)][_0x4937c2(0x181)] ? "نعم" : "لا",
          _0x4c7c98[_0x4937c2(0x193)][_0x4937c2(0x16b)],
          _0x4c7c98[_0x4937c2(0x16c)][_0x4937c2(0x16b)],
          _0x17223c,
          _0xddfa2c,
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          _0x4c7c98[_0x4937c2(0x19b)],
          _0x4c7c98[_0x4937c2(0x178)] ? "نعم" : "لا",
          _0x4c7c98[_0x4937c2(0x19a)],
          _0x4c7c98[_0x4937c2(0x19d)],
        ]);
      }, "i");
    const _0x149264 =
        filterName("monkey_road_users_" + getCurrentDate()) + _0x5ebd46(0x172),
      _0x484610 = "/" + _0x149264;
    await _0x3ba2e0[_0x5ebd46(0x169)][_0x5ebd46(0x188)](
      _0x5ebd46(0x166) + _0x149264
    );
    const _0x36f6bc = await cloudStorage[_0x5ebd46(0x177)]({
      name: _0x149264,
      path: _0x484610,
    });
    return await localStorage[_0x5ebd46(0x165)](_0x484610), _0x36f6bc;
  } catch (_0x3e570b) {
    const _0x282ddd = httpStatus[_0x5ebd46(0x182)],
      _0x826fd = errors["system"]["errorExportingExcel"];
    throw new ApiError(_0x282ddd, _0x826fd);
  }
}),
  (module[_0x3cb374(0x19e)][_0x3cb374(0x161)] = async (
    _0x31cd3b,
    _0x4096af
  ) => {
    const _0x2dda35 = _0x3cb374;
    try {
      let _0xe20eb2 = new Excel[_0x2dda35(0x17c)]();
      const _0x8d2f1b =
        _0x31cd3b["favLang"] === "en"
          ? _0x31cd3b["name"] + _0x2dda35(0x1ac)
          : _0x2dda35(0x164) + _0x31cd3b[_0x2dda35(0x17e)];
      let _0x51e414 = _0xe20eb2[_0x2dda35(0x16f)](_0x8d2f1b);
      _0x51e414["addRow"]([
        _0x31cd3b[_0x2dda35(0x15e)] === "en"
          ? _0x2dda35(0x195)
          : _0x2dda35(0x15d),
        _0x31cd3b[_0x2dda35(0x15e)] === "en"
          ? _0x2dda35(0x17a)
          : _0x2dda35(0x1ad),
        _0x31cd3b["favLang"] === "en" ? _0x2dda35(0x1a1) : _0x2dda35(0x15f),
        _0x31cd3b[_0x2dda35(0x15e)] === "en" ? "Amount" : "المبلغ",
        _0x31cd3b[_0x2dda35(0x15e)] === "en"
          ? _0x2dda35(0x187)
          : _0x2dda35(0x170),
      ]),
        _0x4096af[_0x2dda35(0x180)](function (_0x4e3132) {
          const _0x1121fe = _0x2dda35,
            {
              receiver: _0x3c4c47,
              title: _0x266918,
              status: _0x553cf0,
              amount: _0x1f631c,
              date: _0x29ecb7,
            } = _0x4e3132,
            _0x18ea9b = _0x3c4c47[0x0][_0x1121fe(0x17e)],
            _0x42388b =
              _0x553cf0 === _0x1121fe(0x1af)
                ? { en: "complete", ar: _0x1121fe(0x1ae) }
                : { en: _0x1121fe(0x1a7), ar: _0x1121fe(0x198) };
          let _0x5ab0d3 = new Date(_0x29ecb7);
          const _0x565c9f = _0x5ab0d3[_0x1121fe(0x1a2)](),
            _0xfb031a = _0x5ab0d3[_0x1121fe(0x190)](),
            _0x530ab9 = _0x5ab0d3[_0x1121fe(0x15c)]();
          (_0x5ab0d3 = _0x565c9f + "-" + _0xfb031a + "-" + _0x530ab9),
            _0x51e414["addRow"]([
              _0x266918[_0x31cd3b[_0x1121fe(0x15e)]],
              _0x18ea9b,
              _0x42388b[_0x31cd3b[_0x1121fe(0x15e)]],
              _0x1f631c,
              _0x5ab0d3,
            ]);
        }, "i");
      const _0x23793a = _0x31cd3b[_0x2dda35(0x17e)]
          ["toLowerCase"]()
          ["split"]("\x20")
          ["join"]("_"),
        _0x3e3b5e = filterName(_0x23793a + "_" + getCurrentDate()) + ".xlsx",
        _0x340233 = "/" + _0x3e3b5e;
      await _0xe20eb2["xlsx"]["writeFile"]("./uploads/" + _0x3e3b5e);
      const _0x129e4f = await cloudStorage["uploadFile"]({
        name: _0x3e3b5e,
        path: _0x340233,
      });
      return await localStorage[_0x2dda35(0x165)](_0x340233), _0x129e4f;
    } catch (_0x6fa568) {
      const _0x97b5ed = httpStatus[_0x2dda35(0x182)],
        _0x349953 = errors[_0x2dda35(0x16d)][_0x2dda35(0x199)];
      throw new ApiError(_0x97b5ed, _0x349953);
    }
  });
const filterName = (_0x16ac48 = "") => {
    const _0x59ab2a = _0x3cb374;
    return _0x16ac48["split"]("\x20")
      [_0x59ab2a(0x17d)]("_")
      ["split"](":")
      ["join"]("_");
  },
  getCurrentDate = () => {
    const _0x5ecf84 = _0x3cb374;
    let _0x30a0c9 = new Date()[_0x5ecf84(0x18b)]();
    _0x30a0c9 = _0x30a0c9["split"](",\x20");
    let _0x18ec55 = _0x30a0c9[0x0],
      _0xe13d6d = "" + _0x18ec55;
    return (
      (_0xe13d6d = _0xe13d6d[_0x5ecf84(0x1a6)]("/")[_0x5ecf84(0x17d)]("-")),
      _0xe13d6d
    );
  };
