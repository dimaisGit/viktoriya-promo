import React from 'react'

export const RenderField = ({ index, name, input, label, placeholder, type, meta: { error } }) => (
    <div className={index+'-block'}>
        <label className={'label-'+index}>{label}</label>
        <div>
            <input {...input} className={name} placeholder={placeholder} type={type}/>
            {error && <span>{error}</span>}
        </div>
    </div>
)