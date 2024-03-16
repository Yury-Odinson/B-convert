import {Input} from "./Input";
import {useState} from "react";
import {Currency} from "../tools/types";

export const Main = () => {

    const [firstInput, setFirstInput] = useState<number>(0.00);
    const [secondInput, setSecondInput] = useState<number>(0.00);
    const [firstCurrency, setFirstCurrency] = useState<Currency>("ETH");
    const [secondCurrency, setSecondCurrency] = useState<Currency>("BTC");

    const revertCurrency = () => {
        setFirstCurrency(secondCurrency);
        setSecondCurrency(firstCurrency);
    };

    return (
        <div className="main m-auto flex items-center gap-5 w-10/12 p-2 rounded-xl ">
            <Input value={firstInput} currency={firstCurrency} setValue={setFirstInput} setCurrency={setFirstCurrency} key={1}/>
            <button className="btn main-btn__revert" type="button" onClick={revertCurrency}/>
            <Input value={secondInput} currency={secondCurrency} setValue={setSecondInput} setCurrency={setSecondCurrency} key={2}/>
        </div>
    );
};
