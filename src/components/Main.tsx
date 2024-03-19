import {Input} from "./Input";
import {useEffect, useState} from "react";
import {Currency, NestedObject} from "../tools/types";
import {calculate, conversionRequest} from "../tools/utils";
import {InfoCoin} from "./InfoCoin";

export const Main = () => {

    const [firstInput, setFirstInput] = useState<number>(0);
    const [secondInput, setSecondInput] = useState<number>(0);
    const [firstCurrency, setFirstCurrency] = useState<Currency>("eth");
    const [secondCurrency, setSecondCurrency] = useState<Currency>("btc");
    const [oneCoin, setOneCoin] = useState<number>(0);

    useEffect(() => {
        conversionRequest({firstCurrency, secondCurrency}).then((e) => {
            let onePrice = 0;
            const findNestedValue = (obj: NestedObject): number => {
                for (const key in obj) {
                    if (typeof obj[key] === "object") {
                        return findNestedValue(obj[key] as NestedObject); // recursively calling a func on a newest object
                    } else {
                        return Number(obj[key]); // return value if it is not an object
                    }
                }
                return onePrice;
            };
            onePrice = findNestedValue(e);
            const result = calculate(firstInput, onePrice);
            setSecondInput(result);
            setOneCoin(onePrice);
        });

    }, [firstInput, secondInput, firstCurrency, secondCurrency]);

    const revertCurrency = () => {
        setFirstCurrency(secondCurrency);
        setSecondCurrency(firstCurrency);
    };

    return (
        <div className="main m-auto p-10 rounded-xl">

            <div className="flex items-center">
                <div className="flex flex-col p-2 gap-5">
                    <Input value={firstInput}
                           currency={firstCurrency}
                           setValue={setFirstInput}
                           setCurrency={setFirstCurrency}
                           readonly={false}
                           key={1}
                    />
                    <Input value={secondInput}
                           currency={secondCurrency}
                           setValue={setSecondInput}
                           setCurrency={setSecondCurrency}
                           readonly={true}
                           key={2}
                    />
                </div>

                <button className="btn main-btn__revert" type="button" onClick={revertCurrency}/>

            </div>

            <InfoCoin
                firstCurrency={firstCurrency}
                secondCurrency={secondCurrency}
                onePrice={oneCoin}
            />

        </div>
    );
};
