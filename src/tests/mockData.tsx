import { fn } from "@storybook/test";
import { fetchAssets } from "../api/assets";

export const MockedState = {
    assets: [
        {
            id: "binance-coin",
            rank: "4",
            symbol: "BNB",
            name: "BNB",
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
            symbol: "SOL",
            name: "Solana",
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
    selectedCoin: {},
};

// export const mockFetchAssets = fn(fetchAssets);