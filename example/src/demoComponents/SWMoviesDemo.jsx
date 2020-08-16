import React, { useState, useEffect } from 'react'
import { useInputState } from 'react-custom-hooks-collection'

export default () => {
  const [number, setNumber] = useInputState(1)
  const [movie, setMovie] = useState('')

  useEffect(() => {
    async function fetchMovie() {
      const resp = await fetch(`https://swapi.dev/api/films/${number}`)
      setMovie(await resp.json())
    }
    fetchMovie()
  }, [number])

  return (
    <div>
      <h2>Star Wars Movies (Online API)</h2>
      <h3>Pick one</h3>
      <select value={number} onChange={setNumber}>
        <option value='1'>Chapter 1</option>
        <option value='2'>Chapter 2</option>
        <option value='3'>Chapter 3</option>
        <option value='4'>Chapter 4</option>
        <option value='5'>Chapter 5</option>
        <option value='6'>Chapter 6</option>
      </select>
      <h4>
        <span
          style={{ fontWeight: 300, fontFamily: 'Roboto', fontSize: '1.3em' }}
        >
          {movie.title}
        </span>
      </h4>
      <p>{movie.opening_crawl}</p>
      <p style={{ fontStyle: 'italic', color: 'grey' }}>
        Note: Thanks to the useEffect hook, some code can be triggered after a
        rendering occured. In this case, once a movie number is selected, its
        display is changed. This triggers the re-rendering of the component,
        which in turn will trigger the useEffect code. We will therefore fetch
        the remote data associated with the selected movie chapter after it is
        being selected.
      </p>
    </div>
  )
}
