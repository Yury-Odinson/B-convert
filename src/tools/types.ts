import {Dispatch, SetStateAction} from "react";

export type ConversationRequest = {
    firstCurrency: string,
    secondCurrency: string
};

export type InputProps = {
    value: number,
    currency: string,
    setValue: Dispatch<SetStateAction<number>>,
    setCurrency: Dispatch<React.SetStateAction<Currency>>
    readonly: boolean
};

export type ExchangeRates = {
    amount: number,
    onePrice: number
};

export type Currency = "usdt" | "btc" | "eth" | "usd" | "bitcoin" |"ethereum";

export type InfoProps = {
    firstCurrency: string,
    secondCurrency: string,
    onePrice: number
};
