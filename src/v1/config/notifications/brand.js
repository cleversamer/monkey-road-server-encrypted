const _0xf084dd = _0x40e1;
(function (_0x2afb6a, _0x3aa091) {
  const _0x4b7fa4 = _0x40e1,
    _0xb97af8 = _0x2afb6a();
  while (!![]) {
    try {
      const _0x1e0f95 =
        -parseInt(_0x4b7fa4(0x137)) / 0x1 +
        parseInt(_0x4b7fa4(0x13a)) / 0x2 +
        parseInt(_0x4b7fa4(0x135)) / 0x3 +
        parseInt(_0x4b7fa4(0x136)) / 0x4 +
        -parseInt(_0x4b7fa4(0x131)) / 0x5 +
        (parseInt(_0x4b7fa4(0x13b)) / 0x6) *
          (-parseInt(_0x4b7fa4(0x13c)) / 0x7) +
        parseInt(_0x4b7fa4(0x138)) / 0x8;
      if (_0x1e0f95 === _0x3aa091) break;
      else _0xb97af8["push"](_0xb97af8["shift"]());
    } catch (_0x47b924) {
      _0xb97af8["push"](_0xb97af8["shift"]());
    }
  }
})(_0x25a2, 0x7a199);
const Notificatin = require(_0xf084dd(0x13d));
function _0x25a2() {
  const _0x2d6592 = [
    "\x27\x20has\x20been\x20added\x20successfully\x20and\x20users\x20has\x20been\x20notified",
    "\x27\x20has\x20been\x20added\x20to\x20app,\x20and\x20now\x20you\x20can\x20post\x20cars\x20with\x20this\x20brand",
    "2649873zhVNBt",
    "2451652qChzRL",
    "832187jhpQcj",
    "11714496NVzlLQ",
    "\x27\x20has\x20been\x20added\x20successfully",
    "358070wYIEiH",
    "1668acNjXh",
    "22533QLmgtO",
    "./Notification",
    "تم\x20إضافة\x20شركة\x20سيّارات\x20جديدة\x20من\x20نوع\x20\x27",
    "\x27\x20إلى\x20النظام\x20وإعلان\x20كافّة\x20المستخدمين\x20بنجاح",
    "popularBrands",
    "Brand\x20\x27",
    "تم\x20إضافة\x20شركة\x20السيّارات\x20",
    "4561805AMhHmi",
    "New\x20brand\x20\x27",
  ];
  _0x25a2 = function () {
    return _0x2d6592;
  };
  return _0x25a2();
}
function _0x40e1(_0x534be3, _0x41b4a8) {
  const _0x25a2de = _0x25a2();
  return (
    (_0x40e1 = function (_0x40e159, _0x3e5f1b) {
      _0x40e159 = _0x40e159 - 0x130;
      let _0x28f610 = _0x25a2de[_0x40e159];
      return _0x28f610;
    }),
    _0x40e1(_0x534be3, _0x41b4a8)
  );
}
module["exports"] = {
  brandAddedForAdmin: (_0x4df4d8, _0x3297cb) =>
    new Notificatin(
      _0xf084dd(0x141) + _0x4df4d8["en"] + _0xf084dd(0x139),
      _0xf084dd(0x130) + _0x4df4d8["ar"] + "\x20بنجاح",
      "Brand\x20\x27" + _0x4df4d8["en"] + _0xf084dd(0x133),
      "تم\x20إضافة\x20شركة\x20السيّارات\x20\x27" +
        _0x4df4d8["ar"] +
        _0xf084dd(0x13f),
      _0x3297cb,
      "popularBrands"
    ),
  brandAddedForAllUsers: (_0xa08f37, _0x2cb5de) =>
    new Notificatin(
      _0xf084dd(0x132) +
        _0xa08f37["en"] +
        "\x27\x20has\x20been\x20added\x20to\x20app",
      _0xf084dd(0x13e) + _0xa08f37["ar"] + "\x27",
      _0xf084dd(0x132) + _0xa08f37["en"] + _0xf084dd(0x134),
      "تم\x20إضافة\x20شركة\x20سيّارات\x20جديدة\x20للتطبيق\x20من\x20نوع\x20" +
        _0xa08f37["ar"] +
        "،\x20بإمكانك\x20إضافة\x20سيّارات\x20جديدة\x20من\x20هذا\x20النوع\x20الآن",
      _0x2cb5de,
      _0xf084dd(0x140)
    ),
};
