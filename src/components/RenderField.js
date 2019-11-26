import React from 'react'

export const RenderField = ({ input, label, placeholder, type, meta: { error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={placeholder} type={type}/>
            {error && <span>{error}</span>}
        </div>
    </div>
)