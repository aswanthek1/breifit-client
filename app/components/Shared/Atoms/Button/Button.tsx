"use client";

import { MouseEventHandler } from "react";

type ButtonType = {
    text: string,
    onClick?:MouseEventHandler<HTMLButtonElement>,
    style?:any,
    buttonType?: "button" | "reset" | "submit",
    backgroundColor?:string
}
const Button = ({text='', onClick=()=>{}, style={}, buttonType='button',backgroundColor=''}:ButtonType) => {

    return (
        <>
         <button
           onClick={onClick}
           type={buttonType}
           className={`font-bold border-2 py-3 px-3 min-[370px]:px-5 mt-3 md:px-11 shadow-xl hover:shadow-2xl  transition-all rounded bg-slate-300`}>
            {text}
         </button>
        </>
    )
}

export default Button;