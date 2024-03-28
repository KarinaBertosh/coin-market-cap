export const getPrice = (price: any, numberPastComma = 2) => {
  const index = price.startsWith('0')
    ? price.indexOf(Array.from(price).filter((el) => el !== '0')[1]) + numberPastComma + 1
    : price.indexOf('.') + 3;

  return price.slice(0, index);
};

export const navigateToMain = (navigate: any) => navigate('/');
