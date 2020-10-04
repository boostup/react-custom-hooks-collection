import React from 'react'
import { useLocalStorageReducer } from 'react-custom-hooks-collection'

let count = 1

export default () => {
  const [todos, dispatch] = useLocalStorageReducer(
    'TodoReducerDemo',
    [{ task: 'walk the fish' }],
    todosReducer
  )

  const handleClick = () =>
    dispatch({ type: 'ADD', task: `a new todo ${count++}` })

  return (
    <div>
      <h2>useLocalStorageReducer</h2>
      <h3>Todos</h3>
      <button onClick={handleClick}>Add a Todo</button>
      <p>
        <code>{JSON.stringify(todos)}</code>
      </p>

      <p className='note'></p>
    </div>
  )
}

const todosReducer = (todosState, action) => {
  switch (action.type) {
    case 'ADD':
      return [...todosState, { task: action.task }]

    default:
      return todosState
  }
}
