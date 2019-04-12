import React, { useState, useEffect, useRef } from 'react'

export default function DrumMachine() {
  const [pressed, setPressed] = useState('')

  const Q = useRef()
  const W = useRef()
  const E = useRef()
  const A = useRef()
  const S = useRef()
  const D = useRef()
  const Z = useRef()
  const X = useRef()
  const C = useRef()

  function playPad(pad) {
    pad = pad.toUpperCase()

    if (pad === 'Q') {
      Q.current.play()
    }

    if (pad === 'W') {
      W.current.play()
    }

    if (pad === 'E') {
      E.current.play()
    }

    if (pad === 'A') {
      A.current.play()
    }

    if (pad === 'S') {
      S.current.play()
    }

    if (pad === 'D') {
      D.current.play()
    }

    if (pad === 'Z') {
      Z.current.play()
    }

    if (pad === 'X') {
      X.current.play()
    }

    if (pad === 'C') {
      C.current.play()
    }
  }

  const handleKeyDown = e => {
    setPressed(e.key.toUpperCase())
    playPad(e.key)
  }

  const handleKeyUp = () => {
    setPressed('')
  }

  const handleMouseDown = e => {
    setPressed(e.target.innerText)
    playPad(e.target.innerText)
  }

  const handleMouseUp = e => {
    setPressed('')
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  })

  return (
    <div id="drum-machine">
      <div id="display">Currently pressed key: {pressed} </div>
      <div className="row">
        <button
          id="drum-pad"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          Q
          <audio ref={Q} preload="auto">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
          </audio>
        </button>
        <button
          id="drum-pad"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          W
          <audio ref={W} preload="auto">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
          </audio>
        </button>
        <button
          id="drum-pad"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          E
          <audio ref={E} preload="auto">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
          </audio>
        </button>
      </div>
      <div className="row">
        <button
          id="drum-pad"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          A
          <audio ref={A} preload="auto">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
          </audio>
        </button>
        <button
          id="drum-pad"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          S
          <audio ref={S} preload="auto">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
          </audio>
        </button>
        <button
          id="drum-pad"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          D
          <audio ref={D} preload="auto">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
          </audio>
        </button>
      </div>
      <div className="row">
        <button
          id="drum-pad"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          Z
          <audio ref={Z} preload="auto">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
          </audio>
        </button>
        <button
          id="drum-pad"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          X
          <audio ref={X} preload="auto">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
          </audio>
        </button>
        <button
          id="drum-pad"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          C
          <audio ref={C} preload="auto">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
          </audio>
        </button>
      </div>
    </div>
  )
}
