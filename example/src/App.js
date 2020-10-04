import React from 'react'
import LocalStorageDemo from './demoComponents/LocalStorageDemo'
import TogglesDemo from './demoComponents/TogglesDemo'
import SWMoviesDemo from './demoComponents/SWMoviesDemo'
import InputTextDemo from './demoComponents/InputTextDemo'
import './styles.css'

function App() {
  return (
    <div className='App'>
      <h1>React Hooks Demo</h1>
      <LocalStorageDemo />
      <TogglesDemo />
      <SWMoviesDemo />
      <InputTextDemo />
    </div>
  )
}

export default App
