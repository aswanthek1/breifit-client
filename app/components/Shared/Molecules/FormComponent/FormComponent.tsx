'use client';

type FormType = {
    handleSubmit?: React.FormEventHandler<HTMLFormElement>,
    children: React.ReactNode
}
export default function FormComponent({children, handleSubmit=()=>null}:FormType) {
    
    return (
        <form onSubmit={handleSubmit} className="w-full" >
            {children}
        </form>
    )
}