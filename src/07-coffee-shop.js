/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
    if (!checkSize(size) || !checkType(type)) {
      return -1;
    }

    let cost = 0;
    cost += getBasePrice(size);
    cost += getCoffeeAddon(type);
    cost += getExtrasCost(extras.whippedCream, extras.extraShot);

    return Math.round(cost * 100) / 100;
}

function checkSize (size){
  return size === "small" ||size == "medium" || size == "large";
}

function checkType (type) {
  return type === "regular" || type === "latte" || type === "cappuccino" || type === "mocha"
}

function getBasePrice(size) {
  let price = 0;

  switch (size) {
    case "small":
      price = 3.00;
      break;
    case "medium":
      price = 4.00;
      break;
    case "large":
      price = 5.00;
      break;
    default:
      price = 0;
  }

  return price;
}

function getCoffeeAddon(type) {
  let addon = 0;

  switch (type) {
    case "regular":
      addon = 0.00;
      break;
    case "latte":
      addon = 1.00;
      break;
    case "cappuccino":
      addon = 1.50;
      break;
    case "mocha":
      addon = 2.00;
      break;
    default:
      addon = 0;
  }

  return addon;
}

function getExtrasCost(whippedCream, extraShot) {
  let cost = 0;

  if (whippedCream === true) {
    cost += 0.50;
  }

  if (extraShot === true) {
    cost += 0.75;
  }

  return cost;
}
