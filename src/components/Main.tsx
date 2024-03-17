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
                    if (typeof obj[key] === 'object') {
                        return findNestedValue(obj[key]); // Рекурсивно вызываем функцию для вложенного объекта
                    } else {
                        return obj[key]; // Возвращаем значение, если это не объект
                    }
                }
            };

            const onePrice = findNestedValue(e);
            console.log(onePrice);
            const test = calculate(firstInput, onePrice);
            console.log(test);
            setSecondInput(test);

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
