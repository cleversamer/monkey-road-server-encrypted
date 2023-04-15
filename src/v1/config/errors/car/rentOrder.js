function _0x2962() {
  const _0x57027e = [
    "49666199VASgfE",
    "\x20حرفًا",
    "الطلب\x20غير\x20موجود",
    "9365226eqOVhO",
    "Full\x20name\x20should\x20be\x20",
    "Order\x20is\x20already\x20rejected",
    "الإسم\x20الكامل\x20يجب\x20أن\x20يكون\x20بين\x20",
    "You\x20can\x27t\x20delete\x20an\x20order\x20if\x20it\x27s\x20delivered",
    "10525184WIuIjr",
    "4wQxbds",
    "\x20characters",
    "You\x20can\x20reject\x20only\x20pending\x20and\x20waiting\x20for\x20payment\x20orders",
    "../../models/rentOrder",
    "You\x20can\x27t\x20delete\x20an\x20order\x20if\x20it\x27s\x20waiting\x20for\x20delivery",
    "There\x20are\x20no\x20rental\x20orders\x20until\x20now",
    "You\x20can\x20only\x20close\x20pending\x20and\x20approved\x20orders",
    "This\x20order\x20doesn\x27t\x20belong\x20to\x20you",
    "You\x20can\x27t\x20deliver\x20an\x20unpaid\x20order",
    "minLength",
    "freeze",
    "You\x20can\x27t\x20pay\x20for\x20an\x20unapproved\x20order",
    "تم\x20إغلاق\x20الطلب\x20مسبقًا",
    "18423nwyzLY",
    "يمكنك\x20إغلاق\x20الطلبات\x20التي\x20هي\x20قيد\x20الإنتظار\x20والموافق\x20عليها\x20فقط",
    "There\x27re\x20no\x20received\x20orders\x20yet",
    "3557490hDWlZB",
    "\x20letters",
    "7KJiokx",
    "The\x20start\x20date\x20precedes\x20the\x20current\x20date",
    "9ZUJido",
    "Invalid\x20start\x20date",
    "Order\x20was\x20not\x20found",
    "maxLength",
    "سبب\x20الرفض\x20يجب\x20أن\x20يكون\x20بين\x20",
    "\x20days",
    "max",
    "لا\x20يوجد\x20طلبات\x20تأجير\x20مستلمة\x20بعد",
    "يمكنك\x20رفض\x20الطلبات\x20المعلّقة\x20وبإنتظار\x20الدفع\x20فقط",
    "Number\x20of\x20days\x20should\x20be\x20",
    "أنت\x20لم\x20تستقبل\x20هذا\x20الطلب",
    "تم\x20قبول\x20الطلب\x20مسبقًا",
    "أنت\x20لم\x20تضيف\x20أيّ\x20طلب\x20بعد",
    "لا\x20يمكنك\x20تسليم\x20طلب\x20لم\x20يتم\x20دفعه",
    "4678287sonncv",
    "لا\x20يمكنك\x20حذف\x20طلب\x20بإنتظار\x20التسليم",
    "إسم\x20العنوان\x20يجب\x20أن\x20يكون\x20بين\x20",
    "min",
    "36lZFSAn",
    "عدد\x20الأيام\x20يجب\x20أن\x20يكون\x20بين\x20",
    "exports",
    "3769515FhJTyI",
  ];
  _0x2962 = function () {
    return _0x57027e;
  };
  return _0x2962();
}
const _0x2912f8 = _0x1abf;
function _0x1abf(_0x570615, _0xde9057) {
  const _0x296292 = _0x2962();
  return (
    (_0x1abf = function (_0x1abf34, _0x45f692) {
      _0x1abf34 = _0x1abf34 - 0x92;
      let _0x3e6f66 = _0x296292[_0x1abf34];
      return _0x3e6f66;
    }),
    _0x1abf(_0x570615, _0xde9057)
  );
}
(function (_0x286f81, _0x1b22dd) {
  const _0x9f0c03 = _0x1abf,
    _0x30dfe0 = _0x286f81();
  while (!![]) {
    try {
      const _0x330507 =
        (parseInt(_0x9f0c03(0x95)) / 0x1) * (parseInt(_0x9f0c03(0xae)) / 0x2) +
        (parseInt(_0x9f0c03(0xaa)) / 0x3) * (-parseInt(_0x9f0c03(0xbb)) / 0x4) +
        parseInt(_0x9f0c03(0xb1)) / 0x5 +
        (parseInt(_0x9f0c03(0xb5)) / 0x6) * (-parseInt(_0x9f0c03(0x9a)) / 0x7) +
        (parseInt(_0x9f0c03(0xba)) / 0x8) * (-parseInt(_0x9f0c03(0x9c)) / 0x9) +
        -parseInt(_0x9f0c03(0x98)) / 0xa +
        parseInt(_0x9f0c03(0xb2)) / 0xb;
      if (_0x330507 === _0x1b22dd) break;
      else _0x30dfe0["push"](_0x30dfe0["shift"]());
    } catch (_0x384772) {
      _0x30dfe0["push"](_0x30dfe0["shift"]());
    }
  }
})(_0x2962, 0xc57e1);
const {
  noOfDays,
  locationTitle,
  fullName,
  reasonForRejection,
} = require(_0x2912f8(0xbe));
module[_0x2912f8(0xb0)] = Object[_0x2912f8(0x92)]({
  noOrders: {
    en: "You\x20haven\x27t\x20added\x20any\x20order\x20yet",
    ar: _0x2912f8(0xa8),
  },
  notFound: { en: _0x2912f8(0x9e), ar: _0x2912f8(0xb4) },
  notOwner: { en: _0x2912f8(0xc2), ar: "هذا\x20الطلب\x20لا\x20ينتمي\x20إليك" },
  notReceiverOffice: {
    en: "You\x20haven\x27t\x20received\x20this\x20order",
    ar: _0x2912f8(0xa6),
  },
  alreadyApproved: {
    en: "Order\x20is\x20already\x20approved",
    ar: _0x2912f8(0xa7),
  },
  alreadyClosed: {
    en: "Order\x20is\x20already\x20closed",
    ar: _0x2912f8(0x94),
  },
  alreadyRejected: { en: _0x2912f8(0xb7), ar: "تم\x20رفض\x20الطلب\x20مسبقًا" },
  noReceivedOrders: { en: _0x2912f8(0x97), ar: _0x2912f8(0xa3) },
  invalidNoOfDays: {
    en:
      _0x2912f8(0xa5) +
      noOfDays[_0x2912f8(0xad)] +
      "-" +
      noOfDays[_0x2912f8(0xa2)] +
      _0x2912f8(0xa1),
    ar:
      _0x2912f8(0xaf) +
      noOfDays[_0x2912f8(0xad)] +
      "-" +
      noOfDays[_0x2912f8(0xa2)] +
      "\x20يومًا",
  },
  invalidLocationTitle: {
    en:
      "Location\x20title\x20should\x20be\x20" +
      locationTitle[_0x2912f8(0xc4)] +
      "-" +
      locationTitle["maxLength"] +
      _0x2912f8(0xbc),
    ar:
      _0x2912f8(0xac) +
      locationTitle[_0x2912f8(0xc4)] +
      "-" +
      locationTitle[_0x2912f8(0x9f)] +
      "\x20حرفًا",
  },
  invalidFullName: {
    en:
      _0x2912f8(0xb6) +
      fullName["minLength"] +
      "-" +
      fullName[_0x2912f8(0x9f)] +
      "\x20characters",
    ar:
      _0x2912f8(0xb8) +
      fullName[_0x2912f8(0xc4)] +
      "-" +
      fullName["maxLength"] +
      _0x2912f8(0xb3),
  },
  rejectNotPendingOrApproved: { en: _0x2912f8(0xbd), ar: _0x2912f8(0xa4) },
  closePendingOrPaidOrder: { en: _0x2912f8(0xc1), ar: _0x2912f8(0x96) },
  deletePaidOrder: { en: _0x2912f8(0xbf), ar: _0x2912f8(0xab) },
  deleteDeliveredOrder: {
    en: _0x2912f8(0xb9),
    ar: "لا\x20يمكنك\x20حذف\x20طلب\x20تم\x20تسليمه",
  },
  payUnapprovedOrder: {
    en: _0x2912f8(0x93),
    ar: "لا\x20يمكنك\x20الدفع\x20مقابل\x20طلب\x20غير\x20موافق\x20عليه",
  },
  deliverUnpaidOrder: { en: _0x2912f8(0xc3), ar: _0x2912f8(0xa9) },
  noAddedOrders: {
    en: _0x2912f8(0xc0),
    ar: "لا\x20توجد\x20طلبات\x20تأجير\x20حتى\x20الآن",
  },
  invalidRejectionReason: {
    en:
      "Rejection\x20reason\x20should\x20be\x20" +
      reasonForRejection[_0x2912f8(0xc4)] +
      "-" +
      reasonForRejection[_0x2912f8(0x9f)] +
      _0x2912f8(0x99),
    ar:
      _0x2912f8(0xa0) +
      reasonForRejection[_0x2912f8(0xc4)] +
      "-" +
      reasonForRejection[_0x2912f8(0x9f)] +
      "\x20حرفًا",
  },
  invalidStartDate: {
    en: _0x2912f8(0x9d),
    ar: "تاريخ\x20بداية\x20التأجير\x20غير\x20صالح",
  },
  lowerStartDate: {
    en: _0x2912f8(0x9b),
    ar: "تاريخ\x20البدء\x20يسبق\x20التاريخ\x20الحالي",
  },
});
