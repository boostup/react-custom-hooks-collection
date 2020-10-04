import React from 'react'
import { useLoadable } from 'react-custom-hooks-collection'

export default () => {
  const { load, status, resource, error } = useLoadable(myAsyncFunction, false)

  return (
    <div>
      <h2>useLoadable</h2>
      <h3>SetTimeoutDemo</h3>
      <div>
        <button onClick={load} disabled={status === 'pending'}>
          Load
        </button>
      </div>
      {status === 'pending' && <p>Loading...</p>}
      {status === 'success' && <p>{resource}</p>}
      {status === 'error' && <p>{error}</p>}
    </div>
  )
}

const myAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rdm = Math.random() * 10
      rdm > 5
        ? resolve('successful 🙌')
        : reject('Oh no ! There was an error 😞')
    }, 2000)
  })
}
