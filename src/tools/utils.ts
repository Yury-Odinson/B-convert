import {ConversationRequest} from "./types";

const options = {
    method: 'GET',
    headers: {'x-cg-demo-api-key': 'CG-gCy2HCkHZpDSETuZgxxPVDrm'}
};

export const conversionRequest = async ({first, second}: ConversationRequest) => {
    const apiURL = `https://api.coingecko.com/api/v3/simple/price?ids=${first}&vs_currencies=${second}`;

    try {
        const response = await fetch(apiURL, options);
        console.log(response.json());
    } catch (error) {
        console.log(error);
    }
};
