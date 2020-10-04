import React from 'react'
import { useLoadable } from 'react-custom-hooks-collection'

export default () => {
  const { status, resource, error } = useLoadable(myAsyncFunction)

  return (
    <div>
      <h2>useLoadable</h2>
      <h3>JSONPlaceholderDemo</h3>
      {status === 'pending' && <p>Loading...</p>}
      {status === 'success' && <code>{JSON.stringify(resource, null, 2)}</code>}
      {status === 'error' && <p>{error}</p>}
    </div>
  )
}

const myAsyncFunction = async () => {
  return fetch(
    'https://jsonplaceholder.typicode.com/users/1'
  ).then((response) => response.json())
}
