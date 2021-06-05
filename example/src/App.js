import React from 'react'

import { useMyHook } from 'react-hook-figlet'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
