const codeToSymbol = {
  EUR: "€",
  USD: "$",
  GBP: "£",
};

//console.log(codeToSymbol);
//console.log(Object.entries(codeToSymbol));

const symbolToCode = {};

for (const [code, symbol] of Object.entries(codeToSymbol)) {
  symbolToCode[symbol] = code;
}

console.log(symbolToCode);
