import React from 'react';
export default function Input ({label, ...props}){
    return (
        <div className="div">
            <label htmlFor={label}>{label}</label>
            <input className="input" id={label} {...props}/>
        </div>
    );
}