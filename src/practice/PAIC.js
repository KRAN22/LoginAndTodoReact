import React from "react";
import { useState } from "react";


export const Paic=()=>{
    const [p,setP] = useState(0)
    const [r,setR] = useState(0)
    const [t,setT] = useState(0)
    const [i,setI] = useState(0) 

    const pacl=()=>{
        setI((p*t*r)/100)
    }
    console.log(p,t,r);
    return(
        <center>
            <h1>Principle Intrest Calculator</h1>
            <div>
                P:<input type={"number"} onChange={e=>setP(e.target.value)}/> 
            </div>
            <div>
                T:<input type={"number"} onChange={e=>setT(e.target.value)}/> 
            </div>
            <div>
                R:<input type={"number"} onChange={e=>setR(e.target.value)}/> 
            </div>
            <div>
                Intrest : <h1>{i}</h1>
            </div>
            <div>
                Total : <h1>{parseInt(p)+parseInt(i)}</h1>
            </div>
            <button onClick={pacl}>Calculator</button>
            <h1></h1>
        </center>
    )
}