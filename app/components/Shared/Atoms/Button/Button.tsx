'use client';
const Button = ({text='', onClick=()=>{}, style={}}) => {
    return (
        <>
         <button
           onClick={onClick}
           className="border-2 py-3 px-3 min-[370px]:px-5 md:px-11 shadow-2xl bg-transparent rounded">
            {text}
         </button>
        </>
    )
}

export default Button;