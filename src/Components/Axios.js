import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios=() => {

    const [userData, setData] = useState([]);
    
    useEffect(() =>{

        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            console.log(response);
            setData(response.data);
        
        });

    }, []);


    return(
        <div className="text-center mt-9">
            {userData.map((getting)=>{return(
                <div>
                    {`${getting.id} Username: ${getting.username}`}

                </div>
            )})}
                
 

        </div>
    )



}

export default Axios;