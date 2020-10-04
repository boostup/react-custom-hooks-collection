import React from 'react'
import { useLoadable } from 'react-custom-hooks-collection'

export default () => {
  const { load, status, resource, error } = useLoadable(
    () => myAsyncFunction(imgURL),
    false
  )

  return (
    <div>
      <h2>useLoadable</h2>
      <h3>ImageDemo</h3>
      <button onClick={load} disabled={status === 'pending'}>
        Load image
      </button>
      {status === 'pending' && <p>Loading...</p>}
      {status === 'success' && (
        <p>
          <img alt='boostup github stats' src={resource} />
        </p>
      )}
      {status === 'error' && <p>{error}</p>}
    </div>
  )
}

const imgURL =
  'https://coolwallpapers.me/picsup/2619217-nature-4k-screen-wallpaper-hd.jpg'

function myAsyncFunction(filePath) {
  return new Promise((resolve) => {
    const img = document.createElement('img')

    img.onload = () => resolve(filePath)
    img.src = filePath
  })
}
