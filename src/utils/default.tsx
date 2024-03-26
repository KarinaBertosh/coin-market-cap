import axios from "axios";
import { useState } from "react";


const getPrice = (price: any) => {
  const index = price.startsWith('0')
    ? price.indexOf(Array.from(price).filter((el) => el !== '0')[1]) + 3
    : price.indexOf('.') + 3;

  return price.slice(0, index);
};


export const getData = () => {
  const [assets, setAssets] = useState([]);

  axios.get('https://api.coincap.io/v2/assets/')
    .then(function (response) {
      setAssets(response.data.data);
    });

  return assets.map((asset) => (
    {
      key: asset.id,
      add: 'x',
      symbol: asset.symbol,
      logo: asset.symbol,
      priceUsd: `$ ${getPrice(asset.priceUsd)}`,
      marketCapUsd: `$ ${getPrice(asset.marketCapUsd)}`,
      volumeUsd24Hr: `$ ${getPrice(asset.volumeUsd24Hr)}`,
    }
  ));
};