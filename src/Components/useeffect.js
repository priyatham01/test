import React, {useEffect, useState} from "react";

function UseEffectcomponent (){
    const[number, setNumber] = useState(0);

        useEffect(()=>{
                console.log("call UseEffect");
        });


        function increment (){
            setNumber(number+1);
        }

        return (
            <div className=" font-semibold">
                <h2> {number}</h2>
                <button onClick={increment}>CLick</button>



            </div>

        )


}


export default UseEffectcomponent;