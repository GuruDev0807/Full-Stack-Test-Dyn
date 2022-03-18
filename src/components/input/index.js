import React from 'react'
import clsx from 'clsx'

const Input = (props) => {
    const {
        value,
        placeholder,
        className,
        onChange
    } = props
    return (
        <input
         type="text"
         placeholder={placeholder} 
         value={value} 
         onChange={e => onChange(e.target.value)} 
         className={clsx("mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400", className)}
        />
    )
}

export default Input