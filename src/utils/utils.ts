export const formatMoney = (amount: string) => {
  const parsedAmount = parseFloat(amount);
  return parsedAmount.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });
};
