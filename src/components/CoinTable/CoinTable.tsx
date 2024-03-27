import React, { useEffect, useState } from 'react';
import { Table } from "antd";
import { columns } from '../../utils/constants';
import { fetchAssets, getPrice } from '../../utils/default';

export function CoinTable() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    (async () => {
      const assets = await fetchAssets();
      const data = assets.map((asset: any) => (
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
      setAssets(data);
    }
    )();
  }, []);

  return (
    <Table dataSource={assets} columns={columns} />
  );
}