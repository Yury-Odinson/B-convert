import {Input} from "./Input";
import {useState} from "react";
import {Currency} from "../tools/types";
import {calculate, conversionRequest} from "../tools/utils";

export const Main = () => {

    const [firstInput, setFirstInput] = useState<number>(0);
    const [secondInput, setSecondInput] = useState<number>(0);
    const [firstCurrency, setFirstCurrency] = useState<Currency>("eth");
    const [secondCurrency, setSecondCurrency] = useState<Currency>("btc");

    const revertCurrency = () => {
        setFirstInput(secondInput);
        setSecondInput(firstInput);
        setFirstCurrency(secondCurrency);
        setSecondCurrency(firstCurrency);
    };

    const check = () => {
        conversionRequest({firstCurrency, secondCurrency}).then((e) => {
            const findNestedValue = (obj: any): any => {
                for (const key in obj) {
                    if (typeof obj[key] === "object") {
                        return findNestedValue(obj[key]); // recursively calling a func on a newest object
                    } else {
                        return obj[key]; // return value if it is not an object
                    }
                }
            };
            const onePrice = findNestedValue(e);
            const result = calculate(firstInput, onePrice);
            setSecondInput(result);
        })
    };

    return (
        <div className="main m-auto flex items-center gap-5 w-10/12 p-2 rounded-xl ">
            <Input value={firstInput}
                   currency={firstCurrency}
                   setValue={setFirstInput}
                   setCurrency={setFirstCurrency}
                   key={1}
            />
            <button className="btn main-btn__revert" type="button" onClick={revertCurrency}/>
            <Input value={secondInput}
                   currency={secondCurrency}
                   setValue={setSecondInput}
                   setCurrency={setSecondCurrency}
                   key={2}
            />

            <button onClick={check}>check</button>

        </div>
    );
};
