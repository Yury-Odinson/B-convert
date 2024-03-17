import {ConversationRequest, ExchangeRates} from "./types";

const options = {
    method: 'GET',
    headers: {'x-cg-demo-api-key': 'CG-gCy2HCkHZpDSETuZgxxPVDrm'}
};

export const conversionRequest = async ({firstCurrency, secondCurrency}: ConversationRequest) => {

    const expandCurrency = () => {
        switch (firstCurrency) {
            case "usdt":
                return "usd";
            case "btc" :
                return "bitcoin";
            case "eth" :
                return "ethereum";
            default:
                return firstCurrency;
        }
    };

    const apiURL = `https://api.coingecko.com/api/v3/simple/price?ids=${expandCurrency()}&vs_currencies=${secondCurrency}`;
    try {
        const response = await fetch(apiURL, options);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

export const calculate = (amount: number, onePrice: number) => Number((amount * onePrice).toFixed(6));

export const fullCurrencyName = (name: string) => {
    switch (name) {
        case "usd":
            return "USDT";
        case "btc" :
            return "Bitcoin";
        case "eth" :
            return "Ethereum";
        default:
            return name;
    }
};
