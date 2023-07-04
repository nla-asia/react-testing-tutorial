import React from 'react'

function FormGroupSelect({label, options, selected=""}) {
  return (
    <div>
        <label htmlFor={label} className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        <select defaultValue={selected}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" >
                <option>Select One</option>
                {options.map((o,i)=><option key={i}  value={o.value}>{o.label}</option>)}
        </select>
    </div>
  )
}

export default FormGroupSelect