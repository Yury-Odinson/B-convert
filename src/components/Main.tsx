import {Input} from "./Input";

export const Main = () => {

    return (
        <div className="main m-auto flex items-center gap-5 w-10/12 p-2 rounded-xl ">

            <Input />
            <button className="btn main-btn__revert" type="button"/>
            <Input />


            {/*<label>*/}
            {/*    <input className="m-2 p-2 border-2 rounded-xl" type="number" onKeyDown={handleInputChange}/>*/}
            {/*</label>*/}
        </div>
    );
};
