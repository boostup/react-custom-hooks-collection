import React from 'react'
import { useLocalStorageState } from 'react-custom-hooks-collection'

export default () => {
  const [currentDate, setCurrentDate] = useLocalStorageState(
    'lastSetDate',
    new Date()
  )

  const handleClick = (e) => setCurrentDate(new Date())

  const formatDate = (dateString) => new Date(dateString).toLocaleString()

  return (
    <div>
      <h2>useLocalStorageState</h2>
      <h3>Last save</h3>
      <p>{formatDate(currentDate)}</p>
      <button onClick={handleClick}>Save Date</button>
      <p className='note'>
        By pressing this button, the current date and time will be saved to
        localStorage. You can close or refresh this browser tab or window, and
        the date and time previously saved will be displayed above the button.
      </p>
    </div>
  )
}
