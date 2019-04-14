import React, { useState, useEffect, useRef } from 'react'

const pads = ['Q', 'A', 'Z', 'W', 'S', 'X', 'E', 'D', 'C']

export default function App() {
  const [pad, setPad] = useState('')

  const handleKeyDown = e => {
    const pad = e.key.toUpperCase()

    const isPad = /[QAZWSXED]/

    // make a regex that matches a single charachter and only a single character
    // todo fix: this returns true  with  tab / shift key ect. Should return false

    if (isPad.test(pad)) {
      setPad(pad)
    }
  }

  const handleKeyUp = () => {
    setPad('')
  }

  const handleMouseDown = e => {
    setPad(e.target.innerText)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)
    }
  })

  return (
    <>
      <h3>Current Pad: {pad}</h3>
      {pads.map(pad => (
        <button key={pad} onMouseDown={handleMouseDown} onMouseUp={handleKeyUp}>
          {pad}
        </button>
      ))}
    </>
  )
}
