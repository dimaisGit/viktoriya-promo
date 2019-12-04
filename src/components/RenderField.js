import React from 'react'

export const RenderField = ({ index, name, input, label, additionalLabelClass, placeholder, type, meta: { error } }) => (
    <div className={index+'-block'}>
        <label className={ 'label-'+index + ' ' + additionalLabelClass }>{label}</label>
        <div>
            <input {...input} className={name} placeholder={placeholder} type={type}/>
            
            {error && <div className='inputError'>{error}</div>}
        </div>
    </div>
)