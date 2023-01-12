import { useState } from "react"


export const useCounter = (initialVlue=10)=>{

    const [counter, setCounter] = useState(initialVlue);

    return{
        counter,
    }


}