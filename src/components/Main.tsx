import {Input} from "./Input";
import {useState} from "react";

export const Main = () => {

    const [firstInput, setFirstInput] = useState<number>(0);
    const [secondInput, setSecondInput] = useState<number>(0);

    return (
        <div className="main m-auto flex items-center gap-5 w-10/12 p-2 rounded-xl ">
            <Input value={firstInput} setValue={setFirstInput} key={1}/>
            <button className="btn main-btn__revert" type="button"/>
            <Input value={secondInput} setValue={setSecondInput} key={2}/>
        </div>
    );
};
