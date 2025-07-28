import React, { useEffect, useState } from 'react'

function UsePersistedState(key, initialValue) {
    const [state, setstate] = useState(() =>{
        try{
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }catch(e){
            console.error("Error retrieving state from localStorage", e);
            return initialValue;
        }
    })


    
useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
},[key, state])

return [state, setstate]
}

export default UsePersistedState;