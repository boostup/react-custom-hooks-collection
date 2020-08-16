// import React from 'react'

// const App = () => {
//   return <ExampleComponent text="Create React Library Example 😄" />
// }

import React from 'react'
import TogglesDemo from './components/TogglesDemo'
// import FormsDemo from './components/FormsDemo'
// import ClickerDemo from './components/ClickerDemo'
// import SWMoviesDemo from './components/SWMoviesDemo'

import './styles.css'

function App() {
  return (
    <div className='App'>
      <h1>React Hooks Demo</h1>
      {/* <SWMoviesDemo /> */}
      {/* <ClickerDemo /> */}
      {/* <FormsDemo /> */}
      <TogglesDemo />
    </div>
  )
}

export default App
