import axios from "axios";
import { IAssets } from "./types";


export const getPrice = (price: any) => {
  const index = price.startsWith('0')
    ? price.indexOf(Array.from(price).filter((el) => el !== '0')[1]) + 3
    : price.indexOf('.') + 3;

  return price.slice(0, index);
};

export const fetchAssets = async () => await axios.get('https://api.coincap.io/v2/assets/')
  .then(function (response) {
    return response.data.data;
  });

