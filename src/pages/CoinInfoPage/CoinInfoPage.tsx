import * as React from 'react';
import { useAppSelector } from '../../hooks/redux';


export function CoinInfoPage() {
    const { selectedCoin } = useAppSelector((state) => state.assets);
    console.log({ selectedCoin });

    return (
        <div>CoinInfoPage</div>
    );
}