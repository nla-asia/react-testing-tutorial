import React from 'react'

function Button({label}) {
    
  return (
    <button type="submit" className={`bg-primary-700 hover:bg-primary-800 text-white inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 `}>
    {label}
    </button>
  )
}

export default Button