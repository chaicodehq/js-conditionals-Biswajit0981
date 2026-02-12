/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
   if (hours <= 0) return -1;

  const rates = {
    car: { first: 5, extra: 3, max: 30 },
    motorcycle: { first: 3, extra: 2, max: 18 },
    bus: { first: 10, extra: 7, max: 60 }
  };

  if (!rates[vehicleType]) return -1;

  
  const totalHours = Math.ceil(hours);

  const { first, extra, max } = rates[vehicleType];

  
  const fullDays = Math.floor(totalHours / 24);
  const remainingHours = totalHours % 24;

  let totalFee = 0;

 
  totalFee += fullDays * max;

 
  if (remainingHours > 0) {
    let dailyFee;

    if (remainingHours === 1) {
      dailyFee = first;
    } else {
      dailyFee = first + (remainingHours - 1) * extra;
    }

   
    totalFee += Math.min(dailyFee, max);
  }

  return totalFee;

}
