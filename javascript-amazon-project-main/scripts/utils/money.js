// FUNCTION RELATED TO MONEY
// HELP CHANGE THE MONEY TO 2 DECIMAL PLACES
export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}
