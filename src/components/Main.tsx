export const Main = () => {

    const handleInputChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "+" || e.key === "-" || e.key === "e") {
            e.preventDefault();
        }
    };

    return (
        <div className="main m-auto w-10/12 p-2 rounded-xl ">

            <label>
                <input className="m-2 p-2 border-2 rounded-xl" type="number" onKeyDown={handleInputChange}/>
            </label>

            <label>
                <input className="m-2 p-2 border-2 rounded-xl" type="number" onKeyDown={handleInputChange}/>
            </label>
        </div>
    );
};
