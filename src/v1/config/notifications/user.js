function _0x1548() {
  const _0x5c7f9c = [
    "236MNZxEc",
    "تم\x20تأكيد\x20تسليم\x20دفعة\x20مالية\x20لمكتب\x20التأجير\x20وخصم\x20المبلغ\x20من\x20رصيد\x20حسابه\x20لدينا",
    "Your\x20payment\x20has\x20been\x20confirmed\x20and\x20the\x20amount\x20has\x20been\x20deducted\x20from\x20your\x20account\x20balance\x20with\x20us",
    "3ovtSBg",
    "تم\x20تأكيد\x20استلامك\x20للدفعة\x20المالية\x20وخصم\x20المبلغ\x20من\x20رصيد\x20حسابك\x20لدينا",
    "2148910GrPLzz",
    "28572rHkHtp",
    "\x20AED\x20has\x20been\x20confirmed\x20to\x20the\x20rental\x20office",
    "لديك\x20معاملات\x20ماليّة\x20غير\x20مكتملة",
    "\x20درهم\x20إماراتي",
    "You\x20have\x20incomplete\x20transactions",
    "يرجى\x20مراجعة\x20سجل\x20المعاملات\x20الماليّة\x20بانتظام\x20وإكمال\x20المعاملات\x20الماليّة\x20بأسرع\x20وقت",
    "119olamju",
    "You\x20are\x20confirmed\x20to\x20have\x20received\x20a\x20payment\x20of\x20",
    "toLocaleString",
    "313772HJBzyF",
    "1993056hyEOke",
    "تم\x20تأكيد\x20استلامك\x20لدفعة\x20ماليّة\x20بمبلغ\x20",
    "316955jjzXlW",
    "\x20AED",
    "exports",
    "./Notification",
    "\x20درهم\x20إماراتي\x20لمكتب\x20التأجير",
    "searchOffices",
    "A\x20payment\x20has\x20been\x20confirmed\x20to\x20the\x20office\x20and\x20the\x20amount\x20has\x20been\x20deducted\x20from\x20their\x20account\x20balance\x20with\x20us",
    "A\x20payment\x20of\x20",
    "2484639icKpVs",
    "myTransactions",
    "1987CyQkDx",
  ];
  _0x1548 = function () {
    return _0x5c7f9c;
  };
  return _0x1548();
}
const _0x38cfee = _0x7f81;
(function (_0x4cf7cc, _0x282cd5) {
  const _0x3ee98b = _0x7f81,
    _0xc5b78 = _0x4cf7cc();
  while (!![]) {
    try {
      const _0x3392ec =
        (parseInt(_0x3ee98b(0x179)) / 0x1) *
          (parseInt(_0x3ee98b(0x17a)) / 0x2) +
        (parseInt(_0x3ee98b(0x17d)) / 0x3) *
          (parseInt(_0x3ee98b(0x189)) / 0x4) +
        parseInt(_0x3ee98b(0x16f)) / 0x5 +
        (parseInt(_0x3ee98b(0x180)) / 0x6) *
          (parseInt(_0x3ee98b(0x186)) / 0x7) +
        -parseInt(_0x3ee98b(0x16d)) / 0x8 +
        -parseInt(_0x3ee98b(0x177)) / 0x9 +
        parseInt(_0x3ee98b(0x17f)) / 0xa;
      if (_0x3392ec === _0x282cd5) break;
      else _0xc5b78["push"](_0xc5b78["shift"]());
    } catch (_0x152b37) {
      _0xc5b78["push"](_0xc5b78["shift"]());
    }
  }
})(_0x1548, 0x23dfe);
function _0x7f81(_0xe4b7a8, _0x53e8ea) {
  const _0x1548e5 = _0x1548();
  return (
    (_0x7f81 = function (_0x7f8189, _0x4075b2) {
      _0x7f8189 = _0x7f8189 - 0x16d;
      let _0x10aec5 = _0x1548e5[_0x7f8189];
      return _0x10aec5;
    }),
    _0x7f81(_0xe4b7a8, _0x53e8ea)
  );
}
const Notificatin = require(_0x38cfee(0x172));
module[_0x38cfee(0x171)] = {
  paymentDeliveredForAdmin: (_0x3f1137, _0x907e97) =>
    new Notificatin(
      _0x38cfee(0x176) + _0x3f1137[_0x38cfee(0x188)]() + _0x38cfee(0x181),
      "تم\x20تأكيد\x20تسليم\x20دفعة\x20ماليّة\x20بمبلغ\x20" +
        _0x3f1137["toLocaleString"]() +
        _0x38cfee(0x173),
      _0x38cfee(0x175),
      _0x38cfee(0x17b),
      "",
      _0x38cfee(0x174),
      _0x907e97
    ),
  paymentDeliveredForOffice: (_0x29d262) =>
    new Notificatin(
      _0x38cfee(0x187) + _0x29d262["toLocaleString"]() + _0x38cfee(0x170),
      _0x38cfee(0x16e) + _0x29d262["toLocaleString"]() + _0x38cfee(0x183),
      _0x38cfee(0x17c),
      _0x38cfee(0x17e),
      "",
      _0x38cfee(0x178)
    ),
  missedIncompleteTransaction: () =>
    new Notificatin(
      _0x38cfee(0x184),
      _0x38cfee(0x182),
      "Please\x20review\x20and\x20complete\x20your\x20transactions\x20regularly\x20as\x20soon\x20as\x20possible",
      _0x38cfee(0x185),
      "",
      _0x38cfee(0x178)
    ),
};
