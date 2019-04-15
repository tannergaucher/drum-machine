import React, { useState, useEffect, useRef } from 'react'

import keyIsPad from './utils/keyIsPad'

export default function App() {
  const [display, setDisplay] = useState('')

  const pads = [
    {
      letter: 'Q',
      ref: useRef(),
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
      letter: 'A',
      ref: useRef(),
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
      letter: 'Z',
      ref: useRef(),
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
      letter: 'W',
      ref: useRef(),
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
      letter: 'S',
      ref: useRef(),
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
      letter: 'X',
      ref: useRef(),
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
      letter: 'E',
      ref: useRef(),
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
      letter: 'D',
      ref: useRef(),
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      letter: 'C',
      ref: useRef(),
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
  ]

  const handleKeyDown = e => {
    const key = e.key.toUpperCase()

    if (keyIsPad(key)) {
      play(key)
    }
  }

  const handleKeyUp = e => {
    setDisplay('')
  }

  const handleMouseDown = e => {
    play(e.target.innerText)
  }

  const play = currentPad => {
    setDisplay(currentPad)
    // iterate the pads object
    for (let pad in pads) {
      //  find the pad === currentpad
      if (pads[pad].letter === currentPad) {
        // if current pad is playing
        if (!pads[pad].ref.current.paused) {
          // set time to 0
          pads[pad].ref.current.currentTime = 0
          // play pad
          pads[pad].ref.current.play()
        } else {
          pads[pad].ref.current.play()
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <>
      <h3>Current Pad: {display} </h3>
      {pads.map(pad => (
        <button
          key={pad.letter}
          onMouseDown={handleMouseDown}
          onMouseUp={handleKeyUp}
        >
          {pad.letter}
          <audio ref={pad.ref} preload="auto">
            <source src={pad.src} />
          </audio>
        </button>
      ))}
    </>
  )
}
