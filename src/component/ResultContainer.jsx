import React from 'react'
import NameCard from './NameCard'

export default function ResultContainer({suggestedNames}) {
    const suggestedNamesJsx = suggestedNames.map((suggestedName) =>{
        return <NameCard key={suggestedName} suggestedName={suggestedName}/>
    })
  return (
    <div>{suggestedNamesJsx}</div>
  )
}
