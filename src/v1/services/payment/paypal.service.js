const _0x5ea835 = _0xe66d;
(function (_0x37fd6e, _0x483b82) {
  const _0x17574c = _0xe66d,
    _0x653970 = _0x37fd6e();
  while (!![]) {
    try {
      const _0x2cfa12 =
        (-parseInt(_0x17574c(0x189)) / 0x1) *
          (parseInt(_0x17574c(0x190)) / 0x2) +
        parseInt(_0x17574c(0x17e)) / 0x3 +
        (-parseInt(_0x17574c(0x172)) / 0x4) *
          (-parseInt(_0x17574c(0x17c)) / 0x5) +
        (parseInt(_0x17574c(0x179)) / 0x6) *
          (parseInt(_0x17574c(0x181)) / 0x7) +
        (parseInt(_0x17574c(0x191)) / 0x8) *
          (-parseInt(_0x17574c(0x186)) / 0x9) +
        parseInt(_0x17574c(0x16f)) / 0xa +
        -parseInt(_0x17574c(0x16b)) / 0xb;
      if (_0x2cfa12 === _0x483b82) break;
      else _0x653970["push"](_0x653970["shift"]());
    } catch (_0x59ca5b) {
      _0x653970["push"](_0x653970["shift"]());
    }
  }
})(_0x5cc4, 0x503a4);
const paypal = require(_0x5ea835(0x18b));
paypal[_0x5ea835(0x173)]({
  mode: _0x5ea835(0x182),
  client_id: _0x5ea835(0x17f),
  client_secret: _0x5ea835(0x16d),
}),
  (module[_0x5ea835(0x188)][_0x5ea835(0x170)] = async (_0x253730) => {
    const _0x32fdb7 = _0x5ea835;
    try {
      const _0x5cb585 = {
        intent: _0x32fdb7(0x185),
        payer: { payment_method: _0x32fdb7(0x183) },
        redirect_urls: {
          return_url: _0x32fdb7(0x184),
          cancel_url: _0x32fdb7(0x16e),
        },
        transactions: [
          {
            amount: { total: _0x253730, currency: _0x32fdb7(0x18e) },
            description: "",
          },
        ],
      };
      return new Promise((_0x2472b2, _0x42151) => {
        const _0x50412f = _0x32fdb7;
        paypal[_0x50412f(0x176)][_0x50412f(0x16a)](
          _0x5cb585,
          (_0x35f5d7, _0x3daabd) => {
            if (_0x35f5d7) _0x42151(_0x35f5d7);
            else _0x2472b2(_0x3daabd);
          }
        );
      });
    } catch (_0x58dfc8) {
      throw _0x58dfc8;
    }
  }),
  (module[_0x5ea835(0x188)][_0x5ea835(0x174)] = async (
    _0x533e9a,
    _0x3047cb
  ) => {
    const _0x516087 = { payer_id: _0x3047cb };
    return new Promise((_0x1b2bed, _0x1d5460) => {
      const _0x39450e = _0xe66d;
      paypal[_0x39450e(0x176)][_0x39450e(0x18f)](
        _0x533e9a,
        _0x516087,
        (_0x16aca3, _0x133d66) => {
          if (_0x16aca3) _0x1d5460(_0x16aca3);
          else _0x1b2bed(_0x133d66);
        }
      );
    });
  });
const tryPayment = () => {
  const _0x52683e = _0x5ea835;
  createPayment(_0x52683e(0x17b))
    [_0x52683e(0x178)]((_0x9a814c) => {
      const _0x9f02f5 = _0x52683e,
        _0x43565e = _0x9a814c["links"]["find"](
          (_0x32581a) => _0x32581a[_0x9f02f5(0x180)] === _0x9f02f5(0x187)
        )[_0x9f02f5(0x177)];
      console[_0x9f02f5(0x18a)](_0x9f02f5(0x17a) + _0x43565e);
      const _0x3cba7d = req[_0x9f02f5(0x18c)][_0x9f02f5(0x18d)],
        _0x1498d6 = req[_0x9f02f5(0x18c)]["PayerID"];
      executePayment(_0x3cba7d, _0x1498d6)
        [_0x9f02f5(0x178)]((_0x36463f) => {
          const _0x409342 = _0x9f02f5;
          console[_0x409342(0x18a)](_0x409342(0x175));
        })
        [_0x9f02f5(0x17d)]((_0xe46406) => {
          const _0x1e7177 = _0x9f02f5;
          console[_0x1e7177(0x16c)](
            "Error\x20executing\x20payment:\x20" + _0xe46406
          );
        });
    })
    [_0x52683e(0x17d)]((_0x77dd05) => {
      const _0x831b5e = _0x52683e;
      console[_0x831b5e(0x16c)](_0x831b5e(0x171) + _0x77dd05);
    });
};
function _0xe66d(_0x2cf0f8, _0x64437f) {
  const _0x5cc43a = _0x5cc4();
  return (
    (_0xe66d = function (_0xe66d0a, _0xa9dd3c) {
      _0xe66d0a = _0xe66d0a - 0x16a;
      let _0x5f4340 = _0x5cc43a[_0xe66d0a];
      return _0x5f4340;
    }),
    _0xe66d(_0x2cf0f8, _0x64437f)
  );
}
function _0x5cc4() {
  const _0x5136fc = [
    "paymentId",
    "USD",
    "execute",
    "2zymxXA",
    "3449808cAfFJE",
    "create",
    "6694787cWUwgl",
    "error",
    "<your_client_secret>",
    "http://localhost:3000/cancel",
    "5024170HOUHfT",
    "createPayment",
    "Error\x20creating\x20payment:\x20",
    "44VAhLlz",
    "configure",
    "executePayment",
    "Payment\x20executed\x20successfully",
    "payment",
    "href",
    "then",
    "126SQbiyv",
    "Redirecting\x20to\x20",
    "10.00",
    "100265MCXUbN",
    "catch",
    "1360899EfRbDQ",
    "<your_client_id>",
    "rel",
    "207403lwLBNt",
    "sandbox",
    "paypal",
    "http://localhost:3000/success",
    "sale",
    "9hWEomQ",
    "approval_url",
    "exports",
    "430387UDmFBO",
    "log",
    "paypal-rest-sdk",
    "query",
  ];
  _0x5cc4 = function () {
    return _0x5136fc;
  };
  return _0x5cc4();
}
