import {Input} from "./Input";
import {useState} from "react";
import {Currency} from "../tools/types";
import {conversionRequest} from "../tools/utils";

export const Main = () => {

    const [firstInput, setFirstInput] = useState<number>(0.00);
    const [secondInput, setSecondInput] = useState<number>(0.00);
    const [firstCurrency, setFirstCurrency] = useState<Currency>("eth");
    const [secondCurrency, setSecondCurrency] = useState<Currency>("btc");

    const [data, setData] = useState<any>();

    const revertCurrency = () => {
        setFirstCurrency(secondCurrency);
        setSecondCurrency(firstCurrency);
    };

    const check = () => {
        conversionRequest({firstCurrency, secondCurrency}).then((e) => {
            setData(e);
            console.log(Object(e))
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
