import React from 'react'

export default function SearchBox({onInputChange}) {
  return (
    <div>
        <input type="text" onChange={(event) => onInputChange(event.target.value)} 
        placeholder='Type Keyword'/>
    </div>
  )
}
