
import React from 'react'

function Select({ name, value, options, onChange }) {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
        >
            <option value="">Choose a course</option>

            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export default Select
