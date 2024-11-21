import React, { useEffect, useState } from 'react'


const StateHook = () => {

    
    
    const [count, increasCount] = useState(0);

    useEffect(()=>{
       console.log("this is mounting stage");

       return function (){
        console.log("component unmounted");
       }

    }, [])
    useEffect(()=>{
        console.log("count is updated");
     }, [count])


    const handelIncreaseCllick = ()=>{
        increasCount((count) => count + 1);
    }

  return (
    <>
        <button onClick={handelIncreaseCllick}>
            increase count
        </button>
        <button onClick={
            ()=>{increasCount((count)=> count-1)}} 
        >decrease count</button>

        the count is {count}
      
    </>
  )
}

export default StateHook
