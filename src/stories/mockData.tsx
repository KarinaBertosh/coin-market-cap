import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import React from 'react';


export const MockedState = {
  assets: [
    {
      id: "binance-coin",
      rank: "4",
      name: "BNB",
      symbol: "BNB",
      supply: "166801148.0000000000000000",
      maxSupply: "166801148.0000000000000000",
      marketCapUsd: "99411595304.3798540467656292",
      volumeUsd24Hr: "289187104.4006299359351054",
      priceUsd: "595.9886757157082279",
      changePercent24Hr: "1.0563483801646715",
      vwap24Hr: "584.8594763994482081",
      explorer: "https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
    },
    {
      id: "solana",
      rank: "5",
      name: "SOL",
      symbol: "Solana",
      supply: "445575505.2622752000000000",
      maxSupply: null,
      marketCapUsd: "80980065321.0953356228821051",
      volumeUsd24Hr: "703515563.7307202310995089",
      priceUsd: "181.7426325386283304",
      changePercent24Hr: "0.1773617249135589",
      vwap24Hr: "179.4456414454116161",
      explorer: "https://explorer.solana.com/"
    },
  ],
  coinsRow: [
    {
      key: "solana",
      add: 'Add',
      symbol: "SOL",
      logo: "SOL",
      priceUsd: "$181.7426325386283304",
      marketCapUsd: "$99411595304.3798540467656292",
      volumeUsd24Hr: "$289187104.4006299359351054",
    },
    {
      key: "binance-coin",
      add: 'Add',
      symbol: "BNB",
      logo: "BNB",
      priceUsd: "$595.9886757157082279",
      marketCapUsd: "$80980065321.0953356228821051",
      volumeUsd24Hr: "$703515563.7307202310995089",
    }
  ],
  isLoading: false,
  searchText: '',
  selectedCoin: {
    id: "internet-computer",
    rank: "19",
    symbol: "ICP",
    name: "Internet Computer",
    supply: "462289257.3134180000000000",
    marketCapUsd: "7271519639.8313250920829927",
    volumeUsd24Hr: "95099529.7733148543727729",
    priceUsd: "15.7293718700918391",
    changePercent24Hr: "-8.2751518479705806",
    vwap24Hr: "16.2678014675357772",
    explorer: "https://www.dfinityexplorer.org/#/"
  },
};


export const MockStore = ({ children }: any) => (
  <Provider
    store={configureStore({
      reducer: {
        assets: createSlice({
          name: 'assets',
          initialState: MockedState,
          reducers: {
            setCoinsRow: (state, { payload }) => {
              state.coinsRow = payload;
            },
            setSearchText: (state, { payload }) => {
              state.searchText = payload;
            },
            setSelectedCoin: (state, { payload }) => {
              state.selectedCoin = payload;
            },
          },
        }).reducer,
      },

    })}
  >
    {children}
  </Provider>
);

export const mockCoinPrices = [
  {
    priceUsd: '1892.7650310384502757',
    time: 1681257600000,
    date: '2023-04-12T00:00:00.000Z'
  },
  {
    priceUsd: '1973.0155014673751272',
    time: 1681344000000,
    date: '2023-04-13T00:00:00.000Z'
  },
  {
    priceUsd: '2102.3958949872107670',
    time: 1681430400000,
    date: '2023-04-14T00:00:00.000Z'
  },
  {
    priceUsd: '2099.5548081990952191',
    time: 1681516800000,
    date: '2023-04-15T00:00:00.000Z'
  },
  {
    priceUsd: '2104.4203469552620133',
    time: 1681603200000,
    date: '2023-04-16T00:00:00.000Z'
  },
  {
    priceUsd: '2087.7714705588959574',
    time: 1681689600000,
    date: '2023-04-17T00:00:00.000Z'
  }
];

export const mockCoinRating = [
  {
    id: "yemeni-rial",
    symbol: "YER",
    currencySymbol: "﷼",
    type: "fiat",
    rateUsd: "0.0039940082048671"
  },
  {
    id: "ethereum",
    symbol: "ETH",
    currencySymbol: null,
    type: "crypto",
    rateUsd: "3524.9311737396141461"
  },
  {
    id: "cambodian-riel",
    symbol: "KHR",
    currencySymbol: "៛",
    type: "fiat",
    rateUsd: "0.0002472203305005"
  },
];
