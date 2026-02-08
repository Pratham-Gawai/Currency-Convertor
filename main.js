const country1 = document.querySelector("#country1");
const country2 = document.querySelector("#country2");
const countryflag1 = document.querySelector("#countryflag1");
const countryflag2 = document.querySelector("#countryflag2");
const amount1 = document.querySelector(".amount1");
const amount2 = document.querySelector(".amount2");
const submit = document.querySelector("#submit");

// const countrycode = {
//   US: "USD",
//   IN: "INR",
//   GB: "GBP",
//   EU: "EUR",
//   JP: "JPY",
//   CN: "CNY",
//   AU: "AUD",
//   CA: "CAD",
//   CH: "CHF",
//   AE: "AED",
//   AF: "AFN",
//   AL: "ALL",
//   AM: "AMD",
//   AR: "ARS",
//   AT: "EUR",
//   BD: "BDT",
//   BE: "EUR",
//   BG: "BGN",
//   BH: "BHD",
//   BR: "BRL",
//   BT: "BTN",
//   BY: "BYN",
//   CL: "CLP",
//   CO: "COP",
//   CZ: "CZK",
//   DE: "EUR",
//   DK: "DKK",
//   EG: "EGP",
//   ES: "EUR",
//   ET: "ETB",
//   FI: "EUR",
//   FR: "EUR",
//   GE: "GEL",
//   GH: "GHS",
//   GR: "EUR",
//   HK: "HKD",
//   HU: "HUF",
//   ID: "IDR",
//   IE: "EUR",
//   IL: "ILS",
//   IQ: "IQD",
//   IR: "IRR",
//   IS: "ISK",
//   IT: "EUR",
//   JO: "JOD",
//   KE: "KES",
//   KR: "KRW",
//   KW: "KWD",
//   KZ: "KZT",
//   LK: "LKR",
//   MA: "MAD",
//   MX: "MXN",
//   MY: "MYR",
//   NG: "NGN",
//   NL: "EUR",
//   NO: "NOK",
//   NP: "NPR",
//   NZ: "NZD",
//   OM: "OMR",
//   PA: "PAB",
//   PE: "PEN",
//   PH: "PHP",
//   PK: "PKR",
//   PL: "PLN",
//   PT: "EUR",
//   QA: "QAR",
//   RO: "RON",
//   RU: "RUB",
//   SA: "SAR",
//   SE: "SEK",
//   SG: "SGD",
//   TH: "THB",
//   TR: "TRY",
//   TW: "TWD",
//   UA: "UAH",
//   VN: "VND",
//   ZA: "ZAR",
//   ZW: "ZWL",
// };

let countrycode = {
  USD: "US",
  AED: "AE",
  AFN: "AF",
  ALL: "AL",
  AMD: "AM",
  ANG: "NL",
  AOA: "AO",
  ARS: "AR",
  AUD: "AU",
  AWG: "AW",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  BTN: "BT",
  BWP: "BW",
  BYN: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  CHF: "CH",
  CLF: "CL",
  CLP: "CL",
  CNH: "CN",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  EGP: "EG",
  ERN: "ER",
  ETB: "ET",
  EUR: "EU",
  FJD: "FJ",
  FKP: "FK",
  FOK: "FO",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  IMP: "IM",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JEP: "JE",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KID: "KI",
  KMF: "KM",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRU: "MR",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  NGN: "NG",
  NIO: "NI",
  NOK: "NO",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SHP: "SH",
  SLE: "SL",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  SSP: "SS",
  STN: "ST",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TVD: "TV",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  UYU: "UY",
  UZS: "UZ",
  VES: "VE",
  VND: "VN",
  VUV: "VU",
  WST: "WS",
  XAF: "CM",
  XCD: "AG",
  XOF: "SN",
  XPF: "PF",
  YER: "YE",
  ZAR: "ZA",
  ZMW: "ZM",
  ZWG: "ZW",
  ZWL: "ZW",
};
let rate;
let flag = false;
fetch(`https://v6.exchangerate-api.com/v6/658e06fe7c12ef72323dccb9/latest/USD`)
  .then((response) => response.json())
  .then((data) => {
    const rates = data.conversion_rates;
    let options = "";
    for (let currency in rates) {
      options += `<option value="${currency}">${currency}</option>`;
    }
    country1.innerHTML = options;
    country2.innerHTML = options;
    country1.value = "USD";
    country2.value = "INR";
    rate = rates["INR"];
  });
country1.addEventListener("change", () => {
  fetch(
    `https://v6.exchangerate-api.com/v6/658e06fe7c12ef72323dccb9/latest/${country1.value}`,
  )
    .then((response) => response.json())
    .then((data) => {
        const key = countrycode[ country1.value ];
        countryflag1.src = `https://flagsapi.com/${key}/flat/64.png`;
        rate = data.conversion_rates[country2.value];
    });
});
country2.addEventListener("change", () => {
  fetch(
    `https://v6.exchangerate-api.com/v6/658e06fe7c12ef72323dccb9/latest/${country1.value}`,
  )
    .then((response) => response.json())
    .then((data) => {
        const key = countrycode[ country2.value ];
      countryflag2.src = `https://flagsapi.com/${key}/flat/64.png`;
      rate = data.conversion_rates[country2.value];
    });
});

amount1.addEventListener("input", () => {
  flag = true;
});
amount2.addEventListener("input", () => {
  flag = false;
});
submit.addEventListener("click", () => {
  if (flag === true) {
    let result = amount1.value * rate;
    amount2.value = Math.trunc(result * 100) / 100;
  } else {
    let result = amount2.value * (1 / rate);
    amount1.value = Math.trunc(result * 100) / 100;
  }
});
