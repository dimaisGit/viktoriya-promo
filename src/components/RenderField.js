import React from 'react'

export const RenderField = ({ index, pattern, name, input, label, additionalLabelClass, placeholder, couponError, type, meta: { error } }) => (
    <div className={index + '-block'}>
        <label className={'label-' + index + ' ' + additionalLabelClass}>{label}</label>
        <div>
            <input {...input} className={name} placeholder={placeholder} type={type} pattern={pattern} />

            {error && <div className='inputError'>{error}</div>}
            {couponError && <div className='inputError'>{couponError}</div>}
        </div>
    </div>
)