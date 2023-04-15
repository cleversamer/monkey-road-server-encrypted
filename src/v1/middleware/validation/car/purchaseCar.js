const _0x49afeb = _0x5917;
function _0x4937() {
  const _0x36fad3 = [
    "checkPurchaseCarModel",
    "photo5",
    "85rCrUeW",
    "checkCarId",
    "checkBrand",
    "checkPurchaseCarVIN",
    "60867myKztq",
    "579391RuwYfa",
    "exports",
    "1611250gqhRJs",
    "checkPurchaseCarDescription",
    "checkPurchaseCarARVehicleType",
    "jpeg",
    "438UVnQyz",
    "checkPurchaseCarPrice",
    "checkPurchaseCarYear",
    "checkSearchBrandsList",
    "checkFile",
    "photo6",
    "minPrice",
    "checkPurchaseCarNoOfSeats",
    "putQueryParamsInBody",
    "checkPurchaseCarENVehicleType",
    "checkPage",
    "1797892GARHCh",
    "checkSearchYears",
    "checkPurchaseCarENFuelType",
    "3jUPJgs",
    "2361516SRartz",
    "checkRentCarSearchMinPrice",
    "checkSearchColors",
    "png",
    "next",
    "checkPurchaseCarName",
    "44ZlZtPm",
    "checkPurchaseCarARColor",
    "checkPhoneICC",
    "53011HFmpcL",
    "96UkAdGd",
    "maxPrice",
    "checkSearchTerm",
    "photo3",
    "photo4",
    "jpg",
    "182748koEUyf",
    "checkLimit",
  ];
  _0x4937 = function () {
    return _0x36fad3;
  };
  return _0x4937();
}
(function (_0x122905, _0x549987) {
  const _0x56504e = _0x5917,
    _0x2f729e = _0x122905();
  while (!![]) {
    try {
      const _0x241b3a =
        parseInt(_0x56504e(0xbd)) / 0x1 +
        (-parseInt(_0x56504e(0xce)) / 0x2) * (parseInt(_0x56504e(0xd1)) / 0x3) +
        (-parseInt(_0x56504e(0xb4)) / 0x4) *
          (-parseInt(_0x56504e(0xb8)) / 0x5) +
        (parseInt(_0x56504e(0xc3)) / 0x6) * (parseInt(_0x56504e(0xdb)) / 0x7) +
        (parseInt(_0x56504e(0xdc)) / 0x8) * (-parseInt(_0x56504e(0xbc)) / 0x9) +
        (parseInt(_0x56504e(0xbf)) / 0xa) * (-parseInt(_0x56504e(0xd8)) / 0xb) +
        parseInt(_0x56504e(0xd2)) / 0xc;
      if (_0x241b3a === _0x549987) break;
      else _0x2f729e["push"](_0x2f729e["shift"]());
    } catch (_0x192cad) {
      _0x2f729e["push"](_0x2f729e["shift"]());
    }
  }
})(_0x4937, 0x75742);
const commonMiddleware = require("../common"),
  getPurchaseCarDetailsValidator = [
    commonMiddleware[_0x49afeb(0xcb)],
    commonMiddleware[_0x49afeb(0xb9)],
    commonMiddleware[_0x49afeb(0xd6)],
  ],
  getRecentlyArrivedPurchaseCarsValidator = [
    commonMiddleware[_0x49afeb(0xcb)],
    commonMiddleware[_0x49afeb(0xcd)],
    commonMiddleware["checkLimit"],
    commonMiddleware["next"],
  ],
  getLatestModelsPurchaseCarsValidator = [
    commonMiddleware[_0x49afeb(0xcb)],
    commonMiddleware[_0x49afeb(0xcd)],
    commonMiddleware[_0x49afeb(0xb5)],
    commonMiddleware[_0x49afeb(0xd6)],
  ],
  getBestSellerPurchaseCarsValidator = [
    commonMiddleware["putQueryParamsInBody"],
    commonMiddleware[_0x49afeb(0xcd)],
    commonMiddleware[_0x49afeb(0xb5)],
    commonMiddleware["next"],
  ],
  searchPurchaseCarsValidator = [
    commonMiddleware[_0x49afeb(0xcb)],
    commonMiddleware["checkPage"],
    commonMiddleware[_0x49afeb(0xb5)],
    commonMiddleware[_0x49afeb(0xb0)],
    commonMiddleware["conditionalCheck"](
      _0x49afeb(0xc9),
      commonMiddleware[_0x49afeb(0xd3)]
    ),
    commonMiddleware["conditionalCheck"](
      _0x49afeb(0xaf),
      commonMiddleware["checkRentCarSearchMaxPrice"]
    ),
    commonMiddleware[_0x49afeb(0xc6)],
    commonMiddleware[_0x49afeb(0xd4)],
    commonMiddleware[_0x49afeb(0xcf)],
    commonMiddleware["next"],
  ],
  getMyPurchaseCarsValidator = [
    commonMiddleware[_0x49afeb(0xcb)],
    commonMiddleware[_0x49afeb(0xcd)],
    commonMiddleware[_0x49afeb(0xb5)],
    commonMiddleware[_0x49afeb(0xd6)],
  ],
  addPurchaseCarValidator = [
    commonMiddleware[_0x49afeb(0xd7)],
    commonMiddleware[_0x49afeb(0xbb)],
    commonMiddleware[_0x49afeb(0xb6)],
    commonMiddleware[_0x49afeb(0xba)],
    commonMiddleware[_0x49afeb(0xc5)],
    commonMiddleware["checkPurchaseCarENColor"],
    commonMiddleware[_0x49afeb(0xd9)],
    commonMiddleware["checkPurchaseCarTrimeLevel"],
    commonMiddleware[_0x49afeb(0xcc)],
    commonMiddleware[_0x49afeb(0xc1)],
    commonMiddleware[_0x49afeb(0xd0)],
    commonMiddleware["checkPurchaseCarARFuelType"],
    commonMiddleware[_0x49afeb(0xca)],
    commonMiddleware["checkPurchaseCarKiloPerHour"],
    commonMiddleware[_0x49afeb(0xc4)],
    commonMiddleware[_0x49afeb(0xda)],
    commonMiddleware["checkPhoneNSN"],
    commonMiddleware[_0x49afeb(0xc0)],
    commonMiddleware[_0x49afeb(0xc7)](
      "photo1",
      ["png", _0x49afeb(0xb3), _0x49afeb(0xc2)],
      !![]
    ),
    commonMiddleware[_0x49afeb(0xc7)](
      "photo2",
      ["png", _0x49afeb(0xb3), _0x49afeb(0xc2)],
      ![]
    ),
    commonMiddleware[_0x49afeb(0xc7)](
      _0x49afeb(0xb1),
      [_0x49afeb(0xd5), _0x49afeb(0xb3), _0x49afeb(0xc2)],
      ![]
    ),
    commonMiddleware[_0x49afeb(0xc7)](
      _0x49afeb(0xb2),
      [_0x49afeb(0xd5), _0x49afeb(0xb3), _0x49afeb(0xc2)],
      ![]
    ),
    commonMiddleware["checkFile"](
      _0x49afeb(0xb7),
      ["png", "jpg", _0x49afeb(0xc2)],
      ![]
    ),
    commonMiddleware["checkFile"](
      _0x49afeb(0xc8),
      [_0x49afeb(0xd5), _0x49afeb(0xb3), _0x49afeb(0xc2)],
      ![]
    ),
    commonMiddleware[_0x49afeb(0xd6)],
  ],
  payPurchaseCarPostCostValidator = [
    commonMiddleware[_0x49afeb(0xcb)],
    commonMiddleware[_0x49afeb(0xb9)],
    commonMiddleware[_0x49afeb(0xd6)],
  ],
  markPurchaseCarAsSoldValidator = [
    commonMiddleware[_0x49afeb(0xcb)],
    commonMiddleware[_0x49afeb(0xb9)],
    commonMiddleware[_0x49afeb(0xd6)],
  ];
function _0x5917(_0x3ac53b, _0x4470f3) {
  const _0x4937a4 = _0x4937();
  return (
    (_0x5917 = function (_0x59176f, _0x1b7b3b) {
      _0x59176f = _0x59176f - 0xaf;
      let _0x490e20 = _0x4937a4[_0x59176f];
      return _0x490e20;
    }),
    _0x5917(_0x3ac53b, _0x4470f3)
  );
}
module[_0x49afeb(0xbe)] = {
  getPurchaseCarDetailsValidator: getPurchaseCarDetailsValidator,
  getRecentlyArrivedPurchaseCarsValidator:
    getRecentlyArrivedPurchaseCarsValidator,
  getLatestModelsPurchaseCarsValidator: getLatestModelsPurchaseCarsValidator,
  getBestSellerPurchaseCarsValidator: getBestSellerPurchaseCarsValidator,
  searchPurchaseCarsValidator: searchPurchaseCarsValidator,
  getMyPurchaseCarsValidator: getMyPurchaseCarsValidator,
  addPurchaseCarValidator: addPurchaseCarValidator,
  payPurchaseCarPostCostValidator: payPurchaseCarPostCostValidator,
  markPurchaseCarAsSoldValidator: markPurchaseCarAsSoldValidator,
};
