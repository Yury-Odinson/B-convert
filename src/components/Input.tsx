import React, {useState} from "react";
import {InputProps} from "../tools/types";

export const Input = ({currency, setValue, setCurrency}: InputProps) => {

    const [cur, setCur] = useState<string>(currency);

    const handleInputChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "+" || e.key === "-" || e.key === "e") {
            e.preventDefault();
        }
    };

    const handlerSelectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCurrency = e.target.value;
        setCur(selectedCurrency);
        setCurrency(selectedCurrency);
    };

    const delegateState = (e: string) => setValue(e);

    return (
        <div className="relative rounded-md shadow-sm">
            <input type="number"
                   className="block w-full rounded-md border-0 py-1.5
                   pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
                   placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                   focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   placeholder="0.00"
                   onKeyDown={handleInputChange}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => delegateState(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">Currency</label>
                <select name="currency"
                        className="h-full rounded-md border-0 bg-transparent
                        py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset
                        focus:ring-indigo-600 sm:text-sm"
                        value={currency}
                        onChange={handlerSelectOption}
                >
                    <option value={"USDT"}>USDT</option>
                    <option value={"BTC"}>BTC</option>
                    <option value={"ETH"}>ETH</option>
                </select>
            </div>
        </div>
    );
};
