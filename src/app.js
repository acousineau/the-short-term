import React from 'react'

import Reserved from './components/reserved'

const App = ({ children }) => {
  return (
    <div className="app" data-component="app">
      { children }
      <Reserved />
    </div>
  )
}

export default App
