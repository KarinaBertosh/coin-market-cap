import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Portfolio } from '../Portfolio/Portfolio';
import { ICoinRow } from '../../utils/types';
import {
  KEY_LS,
  getCoinsFromApi,
  getPricesWithoutComma,
  getFormattedValue,
  getCoinsTotalAmount,
  renderPriceWithDollarAndCurrency
} from '../../utils/default';
import './style.scss';


export const PortfolioAmount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amountDifference, setAmountDifference] = useState(0);
  const [percentAmountDifference, setPercentAmountDifference] = useState(0);

  const { coins } = useAppSelector((state) => state.assets);

  const dispatch = useAppDispatch();

  const parsedCoins = getPricesWithoutComma(JSON.parse(localStorage.getItem(KEY_LS)));
  const plus = '+';

  useEffect(() => {
    (async () => {
      const {
        amountFromApi,
        localAmount,
        amountDifference
      } = await getAmountDifference();
      setAmountDifference(Number(amountDifference));
      setPercentAmountDifference(getPercentAmountDifference(amountFromApi, localAmount));
    })();
  }, [coins]);

  const getAmountDifference = async () => {
    let amountFromApi = 0;
    const coinsFromApi = getPricesWithoutComma(await getCoinsFromApi(dispatch));
    parsedCoins.forEach((parsedCoin: ICoinRow) => {
      const coin = coinsFromApi.find((coinFromApi: ICoinRow) => coinFromApi.key === parsedCoin.key);
      if (coin) amountFromApi += Number(coin.priceUsd.slice(1)) * parsedCoin.coinsNumber;
    });
    const localAmount = Number(getCoinsTotalAmount(parsedCoins));

    return {
      amountDifference: getFormattedValue(String(localAmount - amountFromApi)),
      localAmount,
      amountFromApi,
    };
  };

  const getPercentAmountDifference = (amountFromApi: number, localAmount: number) => {
    const percent = Number(getFormattedValue(String((localAmount / amountFromApi - 1) * 100)));
    const formattedPercent = String(percent).startsWith('-') ? Number(String(percent).slice(1)) : percent;

    return parsedCoins.length
      ? formattedPercent
      : 0;
  };

  return (
    <>
      <div
        className="portfolio-amount"
        onClick={() => setIsModalOpen(true)}
      >
        <p className="price" data-testid="price">
          {renderPriceWithDollarAndCurrency(getCoinsTotalAmount(parsedCoins))} &nbsp;
        </p>
        {amountDifference > 0 && plus}
        {amountDifference}&nbsp;{percentAmountDifference}&nbsp;%
      </div >
      <Portfolio
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen} />
    </>
  );
};