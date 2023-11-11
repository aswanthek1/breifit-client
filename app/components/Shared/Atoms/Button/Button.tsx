'use client';

import { MouseEventHandler } from "react";

type ButtonType = {
    text: string,
    onClick?:MouseEventHandler<HTMLButtonElement>,
    style?:any,
    buttonType?: "button" | "reset" | "submit",
    backgroundColor?:string
}
const Button = ({text='', onClick=()=>{}, style={}, buttonType='button',backgroundColor='bg-transparent'}:ButtonType) => {

    return (
        <>
         <button
           onClick={onClick}
           type={buttonType}
           className={`border-2 py-3 px-3 min-[370px]:px-5 md:px-11 shadow-2xl rounded ${backgroundColor}`}>
            {text}
         </button>
        </>
    )
}

export default Button;