/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  if (billAmount <= 0 || serviceRating <= 0 || serviceRating > 5 || !Number.isInteger(serviceRating)) return null;

  const response = {
    tipPercentage: -1,
    tipAmount: -1,
    totalAmount: -1,
  };

  if (serviceRating === 1) {
    return helpToCalculateResponse(billAmount, 5, response);
  } else if (serviceRating === 2) {
    return helpToCalculateResponse(billAmount, 10, response);
  } else if (serviceRating === 3) {
    return helpToCalculateResponse(billAmount, 15, response);
  } else if (serviceRating === 4) {
    return helpToCalculateResponse(billAmount, 20, response);
  } else {
    return helpToCalculateResponse(billAmount, 25, response);
  }
}

function helpToCalculateResponse(billAmount, percentage, response) {
  let tipAmount = billAmount * (percentage / 100);
  tipAmount = Math.round(tipAmount * 100) / 100;
  return {
    ...response,
    tipPercentage: percentage,
    tipAmount,
    totalAmount: billAmount + tipAmount,
  };
}

