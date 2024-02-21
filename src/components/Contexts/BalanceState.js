
import { useState,React } from "react";
import balanceContext from "./balanceContext";
const BalanceState = (props) => {
    const [balance, setBalanace] = useState(100)
    const [name, setName] = useState();
    const updateBalance = (newBalance)=>{
        setBalanace(newBalance)
    }
    const updateName = (newName)=>{
        setName(newName)
    }
    return (

        <balanceContext.Provider value={{balance,updateBalance,name,updateName}}>
          {props.children}
        </balanceContext.Provider>
    )

}

export default BalanceState;