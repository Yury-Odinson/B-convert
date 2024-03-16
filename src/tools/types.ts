export type ConversationRequest = {
    firstCurrency: string,
    secondCurrency: string
};

export type InputProps = {
    value: number,
    currency: string,
    setValue: any,
    setCurrency: any
};

export type Currency = "usdt" | "btc" | "eth" | "usd" | "bitcoin" |"ethereum";
