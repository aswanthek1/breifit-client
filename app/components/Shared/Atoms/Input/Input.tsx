'use client'

type InputType = {
    label?: string,
    type: string,
    value?: string | number,
    onChange?:any,
    placeHolder?:string,
    name?: string,
    classes?:string,
    required?:boolean
}

export default function Input({label='', type='', value, onChange=()=>null, placeHolder='', name='', classes='', required=false}:InputType) {
    return (
        <>
         <div className={`flex flex-col gap-2  ${classes}`}>
            <label htmlFor="form-input" className="text-sm font-normal">{label}</label>
            <input 
              className="py-3 px-4 rounded border-2"
              required={required}
              name={name} onChange={onChange} placeholder={placeHolder} type={type} value={value}/>
         </div>
        </>
    )
}