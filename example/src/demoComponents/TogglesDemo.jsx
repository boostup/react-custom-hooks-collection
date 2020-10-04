import React from 'react'
import { useToggle } from 'react-custom-hooks-collection'

function TogglesDemo() {
  const [isHappy, setIsHappy] = useToggle(true)
  const [isHeartBroken, setIsHeartBroken] = useToggle(false)
  const [isBanana, setIsBanana] = useToggle(true)

  return (
    <div>
      <h2>useToggle</h2>
      <h1 onClick={setIsHappy}>{isHappy ? '😀' : '😡'}</h1>
      <h1 onClick={setIsHeartBroken}>{isHeartBroken ? '💔' : '💓'}</h1>
      <h1 onClick={setIsBanana}>{isBanana ? '🍌' : '🍏'}</h1>
    </div>
  )
}

export default TogglesDemo
