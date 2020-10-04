import React from 'react'
import TogglesDemo from './demoComponents/TogglesDemo'
import SWMoviesDemo from './demoComponents/SWMoviesDemo'
import InputTextDemo from './demoComponents/InputTextDemo'
import LocalStorageDemo from './demoComponents/LocalStorageDemo'
import LocalStorageReducerDemo from './demoComponents/LocalStorageReducerDemo'
import SetTimeoutDemo from './demoComponents/useLoadable/SetTimeoutDemo'
import JSONPlaceholderDemo from './demoComponents/useLoadable/JSONPlaceholderDemo'
import ImageDemo from './demoComponents/useLoadable/ImageDemo'
import './styles.css'

function App() {
  return (
    <div className='App'>
      <h1>React Hooks Demo</h1>
      <TogglesDemo />
      <SWMoviesDemo />
      <InputTextDemo />
      <LocalStorageDemo />
      <LocalStorageReducerDemo />
      <SetTimeoutDemo />
      <JSONPlaceholderDemo />
      <ImageDemo />
    </div>
  )
}

export default App
