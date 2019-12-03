import React from 'react'

export const RenderField = ({ name, input, label, placeholder, type, meta: { error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} className={name} placeholder={placeholder} type={type}/>
            {error && <span>{error}</span>}
        </div>
    </div>
)