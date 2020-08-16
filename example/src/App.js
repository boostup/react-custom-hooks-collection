import React from 'react'
import TogglesDemo from './demoComponents/TogglesDemo'
import SWMoviesDemo from './demoComponents/SWMoviesDemo'
import InputTextDemo from './demoComponents/InputTextDemo'
import './styles.css'

function App() {
  return (
    <div className='App'>
      <h1>React Hooks Demo</h1>
      <TogglesDemo />
      <SWMoviesDemo />
      <InputTextDemo />
    </div>
  )
}

export default App
