import React, { useEffect, useState } from 'react';
import { Portfolio } from '../Portfolio/Portfolio';
import { useAppDispatch } from '../../hooks/redux';
import { getData, getPrice, getCoinsTotalValue } from '../../utils/default';
import { ICoinRow } from '../../utils/types';
import { KEY } from '../../utils/constants';
import './style.scss';


export const PortfolioAmount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [differenceAmount, setDifferenceAmount] = useState(0);
  const [differenceAmountPercent, setDifferenceAmountPercent] = useState(0);

  const getPortfolioCoins = () => localStorage[KEY] ? JSON.parse(localStorage[KEY]) : [];

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const { totalAmountLocal, oldTotalAmount, differenceAmount } = await getDifferenceAmount();
      setDifferenceAmount(Number(differenceAmount));
      setDifferenceAmountPercent(() => getPortfolioDifferencePercent(totalAmountLocal, oldTotalAmount));
    })();
  }, );

  const getTotalAmount = () => {
    if (!getPortfolioCoins().length) return `0 USD`;
    const totalAmount = getPrice(getCoinsTotalValue(getPortfolioCoins()));
    return `${totalAmount} USD`;
  };

  const getDifferenceAmount = async () => {
    let totalAmountLocal = 0;
    const data = await getData(dispatch);
    getPortfolioCoins().forEach((coin: ICoinRow) => {
      const foundedCoin = data.find((c: ICoinRow) => c.key === coin.key);
      totalAmountLocal += Number(foundedCoin.priceUsd.slice(1)) * coin.coinsNumber;
    });
    const oldTotalAmount = Number(getTotalAmount().slice(0, getTotalAmount().length - 4));

    return {
      differenceAmount: getPrice(oldTotalAmount - totalAmountLocal),
      oldTotalAmount,
      totalAmountLocal,
    };
  };

  const getPortfolioDifferencePercent = (totalAmountLocal: number, oldTotalAmount: number) => {
    return getPortfolioCoins().length
      ? Number(getPrice((totalAmountLocal / oldTotalAmount - 1) * 100))
      : 0;
  };

  return (
    <>
      <div
        className="portfolio-amount"
        onClick={() => setIsModalOpen(true)}>
        <div className="price">
          {getTotalAmount()} &nbsp;
        </div>
        {differenceAmount}&nbsp;{differenceAmountPercent}&nbsp;%
      </div >
      <Portfolio
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen} />
    </>
  );
};