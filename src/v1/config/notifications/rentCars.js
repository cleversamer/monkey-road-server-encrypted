const _0x5b5341 = _0x45d1;
(function (_0x56945b, _0x1ee980) {
  const _0x191213 = _0x45d1,
    _0x28914a = _0x56945b();
  while (!![]) {
    try {
      const _0x28d1ca =
        -parseInt(_0x191213(0x82)) / 0x1 +
        (parseInt(_0x191213(0xb6)) / 0x2) * (parseInt(_0x191213(0x75)) / 0x3) +
        parseInt(_0x191213(0x94)) / 0x4 +
        (-parseInt(_0x191213(0xb4)) / 0x5) * (parseInt(_0x191213(0x7b)) / 0x6) +
        parseInt(_0x191213(0x7c)) / 0x7 +
        (parseInt(_0x191213(0xa2)) / 0x8) * (parseInt(_0x191213(0x73)) / 0x9) +
        -parseInt(_0x191213(0x92)) / 0xa;
      if (_0x28d1ca === _0x1ee980) break;
      else _0x28914a["push"](_0x28914a["shift"]());
    } catch (_0x285bfd) {
      _0x28914a["push"](_0x28914a["shift"]());
    }
  }
})(_0xfebf, 0xbd0b1);
const Notificatin = require("./Notification");
module[_0x5b5341(0x71)] = {
  postAddedForAdmin: (_0x12e1c4, _0x1686a4) =>
    new Notificatin(
      _0x5b5341(0xac),
      _0x5b5341(0xaa),
      "There\x20is\x20a\x20new\x20pending\x20rental\x20post,\x20please\x20check\x20it\x20out",
      _0x5b5341(0x78),
      _0x12e1c4,
      "rentCarDetails",
      _0x1686a4
    ),
  postAddedForOffice: (_0x2d5d08, _0xc2eeab) =>
    new Notificatin(
      _0x5b5341(0x8e),
      _0x5b5341(0xa9),
      _0x5b5341(0xb0),
      _0x5b5341(0x74),
      _0x2d5d08,
      _0x5b5341(0x83),
      _0xc2eeab
    ),
  postRejectedForAdmin: (_0x435b8b, _0x4cda50) =>
    new Notificatin(
      _0x5b5341(0x77),
      _0x5b5341(0x8b),
      _0x435b8b,
      _0x435b8b,
      _0x4cda50
    ),
  postRejectedForOffice: (_0x4c3c42, _0x2656fa) =>
    new Notificatin(
      _0x5b5341(0x96),
      _0x5b5341(0xaa),
      _0x4c3c42,
      _0x4c3c42,
      _0x2656fa
    ),
  postAcceptedForAdmin: (_0x1e46e4, _0x45dd23) =>
    new Notificatin(
      _0x5b5341(0xb8),
      _0x5b5341(0x87),
      "Rental\x20post\x20request\x20has\x20been\x20successfully\x20approved\x20and\x20the\x20office\x20has\x20been\x20notified",
      _0x5b5341(0x8f),
      _0x1e46e4,
      _0x5b5341(0x83),
      _0x45dd23
    ),
  postAcceptedForOffice: (_0x571bce, _0x7d033f) =>
    new Notificatin(
      _0x5b5341(0x96),
      "طلب\x20نشر\x20سيّارة\x20للإيجار",
      _0x5b5341(0x98),
      _0x5b5341(0x79),
      _0x571bce,
      _0x5b5341(0x83),
      _0x7d033f
    ),
  rentalRequestForAdmin: (_0x68863e) =>
    new Notificatin(
      _0x5b5341(0x8d),
      _0x5b5341(0xb3),
      "There\x20is\x20a\x20new\x20car\x20rental\x20order\x20which\x20is\x20under\x20review\x20by\x20the\x20office\x20now",
      _0x5b5341(0x7e),
      _0x68863e,
      _0x5b5341(0x7a)
    ),
  rentalRequestForOffice: (_0x41ba70) =>
    new Notificatin(
      _0x5b5341(0x8d),
      _0x5b5341(0xb3),
      "You\x20just\x20received\x20a\x20new\x20car\x20rental\x20order,\x20please\x20review\x20and\x20respond\x20to\x20it",
      _0x5b5341(0x9d),
      _0x41ba70,
      "myReceivedOrders"
    ),
  rentalRequestForUser: (_0x266f0f) =>
    new Notificatin(
      _0x5b5341(0x86),
      "تم\x20إرسال\x20طلبك\x20بنجاح",
      _0x5b5341(0x7f),
      _0x5b5341(0x9e),
      _0x266f0f,
      "myOrders"
    ),
  rentalRequestApprovedForAdmin: (_0x52048c) =>
    new Notificatin(
      _0x5b5341(0x9c),
      "تم\x20قبول\x20طلب\x20استئجار",
      _0x5b5341(0x89),
      _0x5b5341(0xa4),
      _0x52048c,
      _0x5b5341(0x7a)
    ),
  rentalRequestApprovedForOffice: (_0x143735) =>
    new Notificatin(
      _0x5b5341(0x9c),
      _0x5b5341(0x76),
      _0x5b5341(0x88),
      _0x5b5341(0x81),
      _0x143735,
      _0x5b5341(0xa6)
    ),
  rentalRequestApprovedForUser: (_0xc3244b) =>
    new Notificatin(
      _0x5b5341(0x9c),
      _0x5b5341(0x76),
      "Your\x20car\x20rental\x20order\x20has\x20been\x20approved\x20by\x20the\x20office,\x20please\x20pay\x20to\x20receive\x20your\x20request",
      _0x5b5341(0x9a),
      _0xc3244b,
      "myOrders"
    ),
  rentalRequestPaidForAdmin: (_0x106c19) =>
    new Notificatin(
      _0x5b5341(0x7d),
      _0x5b5341(0x72),
      _0x5b5341(0x97),
      "هناك\x20طلب\x20استئجار\x20سيّارة\x20تم\x20دفعه\x20من\x20طرف\x20المستأجر\x20وهو\x20الآن\x20بانتظار\x20التسليم\x20من\x20طرف\x20مكتب\x20التأجير",
      _0x106c19,
      _0x5b5341(0x7a)
    ),
  rentalRequestPaidForOffice: (_0x2da393) =>
    new Notificatin(
      _0x5b5341(0x7d),
      _0x5b5341(0x72),
      _0x5b5341(0x80),
      _0x5b5341(0x84),
      _0x2da393,
      "myReceivedOrders"
    ),
  rentalRequestPaidForUser: (_0x1e160a) =>
    new Notificatin(
      "The\x20rental\x20amount\x20was\x20paid\x20successfully",
      _0x5b5341(0xb7),
      _0x5b5341(0x85),
      _0x5b5341(0xab),
      _0x1e160a,
      _0x5b5341(0xad)
    ),
  rentalRequestRejectedForAdmin: (_0x33469a, _0x52329d) =>
    new Notificatin(
      _0x5b5341(0xa8),
      _0x5b5341(0xa0),
      _0x33469a,
      _0x33469a,
      _0x52329d,
      "officesOrders"
    ),
  rentalRequestRejectedForOffice: (_0x1b884f, _0x522e65) =>
    new Notificatin(
      _0x5b5341(0xa7),
      _0x5b5341(0xa1),
      _0x1b884f,
      _0x1b884f,
      _0x522e65,
      _0x5b5341(0xa6)
    ),
  rentalRequestRejectedForUser: (_0x1c275d, _0x3a9cf7) =>
    new Notificatin(
      _0x5b5341(0xae),
      _0x5b5341(0x95),
      _0x1c275d,
      _0x1c275d,
      _0x3a9cf7,
      _0x5b5341(0xad)
    ),
  transactionNotificationIncomplete: () =>
    new Notificatin(
      "You\x20have\x20a\x20new\x20incomplete\x20transaction",
      _0x5b5341(0x9f),
      _0x5b5341(0x93),
      "لديك\x20معاملة\x20ماليّة\x20جديدة\x20يرجى\x20مراجعة\x20سجل\x20المعاملات\x20الماليّة",
      "",
      _0x5b5341(0x70)
    ),
  transactionNotificationComplete: () =>
    new Notificatin(
      _0x5b5341(0x90),
      _0x5b5341(0xaf),
      _0x5b5341(0xb2),
      _0x5b5341(0x8c),
      "",
      "myTransactions"
    ),
  rentalRequestDeliveredForAdmin: (_0x37c88d) =>
    new Notificatin(
      _0x5b5341(0xb1),
      _0x5b5341(0xa3),
      "The\x20delivery\x20of\x20a\x20car\x20to\x20a\x20renter\x20has\x20been\x20confirmed\x20by\x20an\x20office",
      _0x5b5341(0x99),
      _0x37c88d,
      "officesOrders"
    ),
  rentalRequestDeliveredForOffice: (_0x554681) =>
    new Notificatin(
      "The\x20car\x20has\x20been\x20delivered\x20to\x20the\x20renter",
      _0x5b5341(0xa5),
      _0x5b5341(0x9b),
      _0x5b5341(0x8a),
      _0x554681,
      _0x5b5341(0xa6)
    ),
  rentalRequestDeliveredForUser: (_0x40943f) =>
    new Notificatin(
      _0x5b5341(0x91),
      "تم\x20تأكيد\x20تسليم\x20السيّارة\x20لك",
      _0x5b5341(0xb5),
      "تم\x20تأكيد\x20تسليم\x20السيّارة\x20لك\x20من\x20طرف\x20مكتب\x20التأجير\x20المالك\x20للسيّارة",
      _0x40943f,
      _0x5b5341(0xad)
    ),
};
function _0x45d1(_0x59af80, _0x541d9d) {
  const _0xfebf30 = _0xfebf();
  return (
    (_0x45d1 = function (_0x45d13f, _0x5ed7b3) {
      _0x45d13f = _0x45d13f - 0x70;
      let _0x8f0205 = _0xfebf30[_0x45d13f];
      return _0x8f0205;
    }),
    _0x45d1(_0x59af80, _0x541d9d)
  );
}
function _0xfebf() {
  const _0x4bd4e4 = [
    "The\x20car\x20rental\x20order\x20is\x20rejected\x20and\x20the\x20user\x20is\x20informed\x20of\x20the\x20reason\x20for\x20the\x20rejection",
    "A\x20car\x20rental\x20order\x20has\x20been\x20rejected\x20by\x20an\x20office",
    "تم\x20إرسال\x20طلبك\x20بنجاح",
    "طلب\x20نشر\x20سيّارة\x20للإيجار",
    "إجراء\x20طلبك\x20اكتمل\x20وسيتم\x20تسليمك\x20السيّارة\x20في\x20المدة\x20المحددة",
    "New\x20pending\x20rental\x20post",
    "myOrders",
    "Your\x20car\x20rental\x20order\x20was\x20rejected",
    "تم\x20إكمال\x20معاملتك\x20الماليّة\x20بنجاح",
    "Your\x20request\x20to\x20post\x20your\x20rental\x20car\x20has\x20been\x20sent\x20to\x20admin\x20and\x20is\x20currently\x20under\x20review",
    "A\x20car\x20has\x20been\x20delivered\x20to\x20a\x20renter",
    "You\x20can\x20review\x20your\x20transactions\x20and\x20make\x20sure\x20it\x20is\x20complete",
    "طلب\x20استئجار\x20سيّارة\x20جديد",
    "57330hacaHl",
    "The\x20car\x20has\x20been\x20confirmed\x20to\x20be\x20delivered\x20to\x20you\x20by\x20the\x20office\x20that\x20owns\x20the\x20car",
    "302xiUwbL",
    "تم\x20دفع\x20مبلغ\x20التأجير\x20بنجاح",
    "Your\x20rental\x20post\x20request\x20has\x20been\x20approved",
    "myTransactions",
    "exports",
    "تم\x20دفع\x20مبلغ\x20التأجير\x20من\x20مستأجر",
    "3303PyMMYk",
    "تم\x20إرسال\x20طلب\x20نشر\x20سيّارتك\x20للإيجار\x20إلى\x20مدير\x20النظام\x20وهو\x20الآن\x20قيد\x20المراجعة",
    "20409xYBsNj",
    "تم\x20قبول\x20طلب\x20استئجار",
    "Car\x20rental\x20request\x20has\x20been\x20rejected\x20and\x20the\x20rental\x20office\x20has\x20been\x20successfully\x20notified",
    "يوجد\x20هناك\x20طلب\x20نشر\x20سيّارة\x20للإيجار\x20جديد\x20تفحّصه",
    "تم\x20قبول\x20طلبك",
    "officesOrders",
    "186uvrBbJ",
    "6517693szChap",
    "The\x20rental\x20amount\x20was\x20paid\x20by\x20a\x20renter",
    "هناك\x20طلب\x20استئجار\x20سيّارة\x20جديد\x20وهو\x20قيد\x20المراجعة\x20من\x20طرف\x20مكتب\x20التأجير\x20الآن",
    "Your\x20order\x20has\x20been\x20sent\x20to\x20the\x20office\x20and\x20is\x20now\x20under\x20review",
    "There\x20is\x20a\x20car\x20rental\x20order\x20that\x20has\x20been\x20paid\x20by\x20the\x20renter,\x20please\x20go\x20to\x20the\x20delivery\x20procedures\x20to\x20hand\x20over\x20the\x20car\x20to\x20the\x20renter",
    "لقد\x20قمت\x20بقبول\x20طلب\x20التأجير\x20وهو\x20الآن\x20بانتظار\x20الدفع\x20من\x20قبل\x20المستأجر\x20قبل\x20التسليم",
    "570840KPIkRV",
    "rentCarDetails",
    "هناك\x20طلب\x20استئجار\x20سيّارة\x20تم\x20دفعه\x20من\x20طرف\x20المستأجر\x20يرجى\x20التوجه\x20إلى\x20إجراءات\x20التسليم\x20لتسليم\x20السيّارة\x20للمستأجر",
    "Your\x20order\x20has\x20been\x20paid\x20and\x20the\x20car\x20will\x20be\x20delivered\x20to\x20you\x20within\x20the\x20specified\x20period",
    "Your\x20order\x20has\x20been\x20sent\x20successfully",
    "تم\x20قبول\x20طلب\x20نشر\x20سيّارة\x20للإيجار\x20بنجاح",
    "You\x20just\x20approved\x20the\x20rental\x20order\x20and\x20it\x20is\x20now\x20waiting\x20for\x20payment\x20from\x20the\x20renter\x20before\x20delivery",
    "There\x20is\x20a\x20car\x20rental\x20order\x20that\x20has\x20been\x20approved\x20by\x20the\x20office\x20now\x20and\x20is\x20waiting\x20for\x20payment\x20from\x20the\x20renter",
    "تم\x20تأكيد\x20التسليم\x20وإعلام\x20المستأجر\x20ومدير\x20النظام\x20بذلك",
    "تم\x20رفض\x20طلب\x20سيّارة\x20للإيجار\x20وإعلام\x20مكتب\x20التأجير\x20بنجاح",
    "بإمكانك\x20مراجعة\x20سجل\x20المعاملات\x20الماليّة\x20والتأكد\x20من\x20صحة\x20الاكتمال",
    "New\x20car\x20rental\x20order",
    "Your\x20request\x20has\x20been\x20sent\x20successfully",
    "تم\x20قبول\x20طلب\x20نشر\x20السيّارة\x20بنجاح\x20وإعلام\x20مكتب\x20التأجير\x20بذلك",
    "Your\x20transaction\x20has\x20been\x20completed\x20successfully",
    "The\x20car\x20has\x20been\x20delivered\x20to\x20you",
    "6849170izStUV",
    "You\x20have\x20a\x20new\x20incomplete\x20transaction,\x20please\x20check\x20your\x20transactions",
    "1570696ceSpWW",
    "تم\x20رفض\x20طلب\x20استئجار\x20السيّارة\x20الذي\x20أرسلته",
    "Rental\x20post\x20request",
    "There\x20is\x20a\x20car\x20rental\x20order\x20that\x20has\x20been\x20paid\x20by\x20the\x20renter\x20and\x20is\x20now\x20waiting\x20for\x20delivery\x20by\x20the\x20office",
    "Your\x20request\x20has\x20been\x20approved",
    "تم\x20تأكيد\x20تسليم\x20سيّارة\x20لمستأجر\x20من\x20طرف\x20مكتب\x20تأجير",
    "تم\x20قبول\x20طلب\x20استئجار\x20سيّارة\x20من\x20طرف\x20مكتب\x20التأجير\x20يرجى\x20الدفع\x20لاستلام\x20طلبك",
    "Delivery\x20is\x20confirmed\x20and\x20the\x20renter\x20and\x20admin\x20are\x20notified",
    "Rental\x20order\x20has\x20been\x20approved",
    "لقد\x20وصلك\x20طلب\x20استئجار\x20سيّارة\x20جديد\x20يرجى\x20مراجعته\x20والرد\x20عليه",
    "تم\x20إرسال\x20طلبك\x20إلى\x20مكتب\x20التأجير\x20وهو\x20قيد\x20المراجعة\x20الآن",
    "لديك\x20معاملة\x20ماليّة\x20جديدة\x20بانتظار\x20الدفع",
    "تم\x20رفض\x20طلب\x20استئجار\x20سيّارة\x20من\x20طرف\x20مكتب\x20تأجير",
    "تم\x20رفض\x20طلب\x20استئجار\x20السيّارة\x20وإبلاغ\x20المستخدم\x20بسبب\x20الرفض",
    "752xFcRMw",
    "تم\x20تأكيد\x20تسليم\x20سيّارة\x20لمستأجر",
    "هناك\x20طلب\x20استئجار\x20سيّارة\x20تم\x20قبوله\x20من\x20طرف\x20مكتب\x20التأجير\x20الآن\x20وهو\x20بانتظار\x20الدفع\x20من\x20طرف\x20المستأجر",
    "تم\x20تأكيد\x20تسليم\x20السيّارة\x20للمستأجر",
    "myReceivedOrders",
  ];
  _0xfebf = function () {
    return _0x4bd4e4;
  };
  return _0xfebf();
}
