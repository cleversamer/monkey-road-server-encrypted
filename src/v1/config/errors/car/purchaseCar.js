const _0x27ce95 = _0x3f3d;
(function (_0x1f6979, _0x25d383) {
  const _0x3e4aae = _0x3f3d,
    _0xd050e2 = _0x1f6979();
  while (!![]) {
    try {
      const _0x2b91a6 =
        (parseInt(_0x3e4aae(0x114)) / 0x1) *
          (-parseInt(_0x3e4aae(0x12a)) / 0x2) +
        -parseInt(_0x3e4aae(0x120)) / 0x3 +
        -parseInt(_0x3e4aae(0x136)) / 0x4 +
        parseInt(_0x3e4aae(0x11b)) / 0x5 +
        -parseInt(_0x3e4aae(0x13a)) / 0x6 +
        (parseInt(_0x3e4aae(0x11e)) / 0x7) *
          (parseInt(_0x3e4aae(0x11c)) / 0x8) +
        parseInt(_0x3e4aae(0x13c)) / 0x9;
      if (_0x2b91a6 === _0x25d383) break;
      else _0xd050e2["push"](_0xd050e2["shift"]());
    } catch (_0x40757d) {
      _0xd050e2["push"](_0xd050e2["shift"]());
    }
  }
})(_0x4ab5, 0xdc540);
const {
  name,
  vin,
  model,
  kiloPerHour,
  phoneNumber,
  description,
  price,
} = require(_0x27ce95(0x12b));
module[_0x27ce95(0x140)] = Object[_0x27ce95(0x110)]({
  invalidId: { en: _0x27ce95(0x119), ar: "معرّف\x20السيّارة\x20غير\x20صالح" },
  notFound: { en: "Car\x20was\x20not\x20found", ar: _0x27ce95(0x10d) },
  notPaid: {
    en: _0x27ce95(0x141),
    ar: "تكاليف\x20نشر\x20السيّارة\x20غير\x20مدفوعة",
  },
  noCars: { en: _0x27ce95(0x128), ar: _0x27ce95(0x122) },
  noSearchCars: {
    en: "No\x20cars\x20match\x20your\x20search\x20term",
    ar: _0x27ce95(0x13b),
  },
  noSimilarCars: {
    en: _0x27ce95(0x143),
    ar: "لا\x20يوجد\x20سيّارات\x20مشابهة\x20لهذه\x20السيّارة",
  },
  noPostedCars: {
    en: "You\x20haven\x27t\x20posted\x20any\x20car\x20for\x20sale",
    ar: "أنت\x20لا\x20تملك\x20سيّارات\x20للبيع\x20بعد",
  },
  invalidName: {
    en:
      _0x27ce95(0x113) +
      name[_0x27ce95(0x115)] +
      "-" +
      name["maxLength"] +
      _0x27ce95(0x135),
    ar:
      "إسم\x20السيّارة\x20يجب\x20أن\x20يكون\x20بين\x20" +
      name[_0x27ce95(0x115)] +
      "-" +
      name["maxLength"] +
      "\x20حرفًا",
  },
  invalidVIN: {
    en:
      "Car\x27s\x20VIN\x20number\x20shoud\x20be\x20" +
      vin[_0x27ce95(0x13f)] +
      _0x27ce95(0x11d),
    ar:
      "رقم\x20المركبة\x20يجب\x20أن\x20يكون\x20" +
      vin[_0x27ce95(0x13f)] +
      _0x27ce95(0x11a),
  },
  invalidModel: {
    en:
      _0x27ce95(0x142) +
      model[_0x27ce95(0x115)] +
      "-" +
      model["maxLength"] +
      "\x20characters)\x20length",
    ar:
      "موديل\x20السيّارة\x20يجب\x20أن\x20يكون\x20بين\x20" +
      model[_0x27ce95(0x115)] +
      "-" +
      model["maxLength"] +
      _0x27ce95(0x11a),
  },
  invalidYear: { en: "Unsupported\x20car\x27s\x20year", ar: _0x27ce95(0x12f) },
  invalidENColor: { en: _0x27ce95(0x111), ar: _0x27ce95(0x124) },
  invalidARColor: {
    en: _0x27ce95(0x10f),
    ar: "لون\x20السيّارة\x20العربي\x20غير\x20مدعوم",
  },
  invalidTrimLevel: {
    en: "Invalid\x20trim\x20level",
    ar: "مستوى\x20تقليم\x20السيّارة\x20غير\x20صالح",
  },
  invalidENVehicleType: {
    en: _0x27ce95(0x12c),
    ar: "نوع\x20وقود\x20المركبة\x20الإنجليزي\x20غير\x20صالح",
  },
  invalidARVehicleType: { en: _0x27ce95(0x13d), ar: _0x27ce95(0x127) },
  invalidENFuelType: {
    en: _0x27ce95(0x138),
    ar: "نوع\x20وقود\x20المركبة\x20الإنجليزي\x20غير\x20صالح",
  },
  invalidARFuelType: { en: _0x27ce95(0x12e), ar: _0x27ce95(0x137) },
  invalidNoOfSeats: { en: _0x27ce95(0x132), ar: _0x27ce95(0x10e) },
  invalidKiloPerHour: {
    en:
      _0x27ce95(0x117) +
      kiloPerHour["min"] +
      "-" +
      kiloPerHour[_0x27ce95(0x126)] +
      "\x20km/h",
    ar:
      _0x27ce95(0x112) +
      kiloPerHour["min"] +
      "-" +
      kiloPerHour[_0x27ce95(0x126)] +
      _0x27ce95(0x121),
  },
  invalidPrice: {
    en:
      _0x27ce95(0x129) +
      price[_0x27ce95(0x116)][_0x27ce95(0x134)]() +
      "-" +
      price["max"]["toLocaleString"]() +
      _0x27ce95(0x123),
    ar:
      _0x27ce95(0x12d) +
      price[_0x27ce95(0x116)]["toLocaleString"]() +
      "-" +
      price[_0x27ce95(0x126)][_0x27ce95(0x134)]() +
      _0x27ce95(0x133),
  },
  invalidPhoneNumber: {
    en:
      _0x27ce95(0x131) +
      phoneNumber[_0x27ce95(0x115)] +
      "-" +
      phoneNumber[_0x27ce95(0x139)] +
      "\x20characters\x20length",
    ar:
      _0x27ce95(0x11f) +
      phoneNumber[_0x27ce95(0x115)] +
      "-" +
      phoneNumber[_0x27ce95(0x139)] +
      _0x27ce95(0x11a),
  },
  invalidDescription: {
    en:
      _0x27ce95(0x125) +
      description[_0x27ce95(0x115)] +
      "-" +
      description[_0x27ce95(0x139)] +
      "\x20characters\x20length",
    ar:
      _0x27ce95(0x13e) +
      description["minLength"] +
      "-" +
      description[_0x27ce95(0x139)] +
      _0x27ce95(0x11a),
  },
  alreadySold: { en: _0x27ce95(0x118), ar: _0x27ce95(0x130) },
});
function _0x3f3d(_0x490518, _0x4312f6) {
  const _0x4ab524 = _0x4ab5();
  return (
    (_0x3f3d = function (_0x3f3d3a, _0x54a05c) {
      _0x3f3d3a = _0x3f3d3a - 0x10d;
      let _0x2b2e92 = _0x4ab524[_0x3f3d3a];
      return _0x2b2e92;
    }),
    _0x3f3d(_0x490518, _0x4312f6)
  );
}
function _0x4ab5() {
  const _0x41e6e0 = [
    "\x20كيلومتر\x20في\x20الساعة",
    "لا\x20يوجد\x20هناك\x20سيّارات\x20للبيع\x20مسجّلة\x20بعد",
    "\x20AED",
    "لون\x20السيّارة\x20الإنجليزي\x20غير\x20مدعوم",
    "Car\x27s\x20description\x20should\x20be\x20",
    "max",
    "نوع\x20المركبة\x20العربي\x20غير\x20صالح",
    "There\x27re\x20no\x20cars\x20for\x20sale\x20registered\x20yet",
    "Car\x27s\x20price\x20should\x20be\x20",
    "122yOwtak",
    "../../models/purchaseCar",
    "English\x20car\x27s\x20vehicle\x20type\x20is\x20invalid",
    "سعر\x20السيّارة\x20يجب\x20أن\x20تكون\x20بين\x20",
    "Arabic\x20car\x27s\x20fuel\x20type\x20is\x20invalid",
    "موديل\x20سنة\x20السيّارة\x20غير\x20مدعوم",
    "تم\x20تعليم\x20السيّارة\x20على\x20أنها\x20مُباعة\x20مسبقًا",
    "Phone\x20number\x20should\x20be\x20",
    "Invalid\x20car\x27s\x20number\x20of\x20seats",
    "\x20درهم\x20إماراتي",
    "toLocaleString",
    "\x20characters)\x20length",
    "2788272ppBGJQ",
    "نوع\x20وقود\x20المركبة\x20العربي\x20غير\x20صالح",
    "English\x20car\x27s\x20fuel\x20type\x20is\x20invalid",
    "maxLength",
    "762582uryiKI",
    "لا\x20توجد\x20سيّارات\x20لنتيجة\x20مشابهة\x20لنتيجة\x20بحثك",
    "25276203jHbwVt",
    "Arabic\x20car\x27s\x20vehicle\x20type\x20is\x20invalid",
    "وصف\x20السيّارة\x20يجب\x20أن\x20يكون\x20بين\x20",
    "exactLength",
    "exports",
    "Car\x27s\x20post\x20cost\x20was\x20not\x20paid",
    "Car\x27s\x20model\x20should\x20be\x20(",
    "There\x27re\x20no\x20similar\x20cars",
    "السيّارة\x20غير\x20موجودة",
    "عدد\x20مقاعد\x20السيّارة\x20غير\x20صالح",
    "Arabic\x20car\x27s\x20color\x20isn\x27t\x20supported",
    "freeze",
    "English\x20car\x27s\x20color\x20isn\x27t\x20supported",
    "سرعة\x20السيّارة\x20يجب\x20أن\x20تكون\x20بين\x20",
    "Car\x27s\x20name\x20should\x20be\x20(",
    "8677WcIgJC",
    "minLength",
    "min",
    "Car\x27s\x20velocity\x20should\x20be\x20",
    "Car\x20is\x20already\x20marked\x20as\x20sold",
    "Invalid\x20car\x20id",
    "\x20حرفًا",
    "1937390djscAz",
    "656CCTMTB",
    "\x20characters\x20length",
    "1778KvQTaJ",
    "رقم\x20الهاتف\x20يجب\x20أن\x20يكون\x20بين\x20",
    "2882541pZbOih",
  ];
  _0x4ab5 = function () {
    return _0x41e6e0;
  };
  return _0x4ab5();
}
