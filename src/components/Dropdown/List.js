import React from 'react'
import { useDropdown } from './dropdown-context'

function List({ children }) {
    const { show } = useDropdown()
    return (
        <>{show && <div className='absolute top-full left-0 w-full rounded-lg bg-white shadow-sm'>{children}</div>}</>
    )
}

export default List