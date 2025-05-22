let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

document.getElementById('purchase-btn').addEventListener('click', function() {
  let cash = parseFloat(document.getElementById('cash').value);
  let result = calculateChange(cash, price);
  let changeDueElement = document.getElementById('change-due');

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    changeDueElement.textContent = '';
  } else if (cash === price) {
    changeDueElement.textContent = "No change due - customer paid with exact cash";
  } else {
    changeDueElement.textContent = `Status: ${result.status} ${formatChange(result.change)}`;
  }
});

function calculateChange(cash, price) {
  let changeRequired = parseFloat((cash - price).toFixed(2));
  let totalInDrawer = cid.reduce((sum, curr) => sum + curr[1], 0);
  totalInDrawer = parseFloat(totalInDrawer.toFixed(2));

  if (totalInDrawer < changeRequired) return { status: "INSUFFICIENT_FUNDS", change: [] };

  let originalCid = JSON.parse(JSON.stringify(cid));
  let change = [];
  let availableCash = [...cid].reverse();

  for (let [coin, amount] of availableCash) {
    let coinValue = getCoinValue(coin);
    let maxCanGive = Math.min(amount, Math.floor(changeRequired / coinValue) * coinValue);
    if (maxCanGive > 0) {
      change.push([coin, maxCanGive]);
      changeRequired -= maxCanGive;
      changeRequired = parseFloat(changeRequired.toFixed(2));
    }
    if (changeRequired === 0) break;
  }

  if (changeRequired > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };

  if (totalInDrawer === cash - price) {
    return { status: "CLOSED", change: originalCid.filter(([_, amount]) => amount > 0) };
  }

  return { status: "OPEN", change };
}

function formatChange(change) {
  return change.map(([coin, amount]) => `${coin}: $${amount.toFixed(2)}`).join(" ");
}

function getCoinValue(coin) {
  return { "PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100 }[coin];
}