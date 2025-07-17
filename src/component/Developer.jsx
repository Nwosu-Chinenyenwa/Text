import React from 'react'
import Lanyard from './Lanyard'

export default function Developer() {
  return (
     <div style={{ width: '100vw', height: '100vh' }}>
      <Suspense fallback={null}>
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </Suspense>
    </div>
  )
}
