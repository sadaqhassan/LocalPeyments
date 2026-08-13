import React, { useEffect, useState } from 'react'

const Payment = () => {
    const [optionPayment, setOptionPayment] = useState("local")
    const [selected,setSelected] = useState("");
    const [localPeymentOptions,setLocalPeymentOptions] = useState([
        {
        operator : "EVC",
        codeNum : 252,
        isSelected: false
        },
        {
        operator : "Zahal",
        codeNum : 253,
        isSelected: false
        },
        {
        operator : "Zaad",
        codeNum : 254,
        isSelected: false
        },

    ])

    const handleSelected = (operate:number)=>{
        

        setLocalPeymentOptions((prev)=>
             prev.map((option,i)=>{
                return {
                ...option,
                isSelected : i  === operate
            }})
        )
    }


    useEffect(()=>{
        if(localPeymentOptions){
            console.log(localPeymentOptions)
        }
    })
 

  return (
    <div>
      {
        optionPayment === "local" &&
        localPeymentOptions.map((option,index)=>(
            <div key={index} className='flex flex-col space-y-5'>
                <button onClick={()=>{handleSelected(index)}} className={`${option.isSelected ? "bg-green-600  py-4 my-5 text-white" : "bg-gray-200 py-4 my-5 text-black rounded"}`}>{option.operator}</button>
            </div>
        ))
      }
    </div>
  )
}

export default Payment
