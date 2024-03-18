import {InfoProps} from "../tools/types";
import {fullCurrencyName} from "../tools/utils";

export const InfoCoin = ({firstCurrency, secondCurrency, onePrice}: InfoProps) => {

    const upDate = () => {
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const second = currentDate.getSeconds();
        const formatSecond = second <= 9 ? `0${second}` : second;
        return `Data update in ${hours}:${minutes}:${formatSecond}`;
    };

    return (
        <div className="mt-2 p-2 flex flex-col max-w-xs">
            <p className="text-lg">
                1
                <strong className="px-2">{fullCurrencyName(firstCurrency)}</strong>
                = {onePrice}
                <strong className="px-2">{fullCurrencyName(secondCurrency)}</strong>
            </p>
            <p className="my-2 text-xs">{upDate()}</p>
        </div>
    );
};
