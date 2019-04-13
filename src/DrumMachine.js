import React, { useReducer, useEffect } from 'react'

const pads = ['Q', 'A', 'Z', 'W', 'S', 'X', 'E', 'D', 'C']

function reducer(state, action) {
  switch (action.type) {
    case 'Q':
      return { pad: action.type }

    case 'A':
      return { pad: action.type }

    case 'Z':
      return { pad: action.type }

    case 'W':
      return { pad: action.type }

    case 'S':
      return { pad: action.type }

    case 'X':
      return { pad: action.type }

    case 'E':
      return { pad: action.type }

    case 'D':
      return { pad: action.type }

    case 'C':
      return { pad: action.type }
  }
}

export default function App2() {
  const initialState = { pad: '' }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleKeyDown = e => {
    const pad = e.key.toUpperCase()

    // todo: this fails with a tab / shift ect.
    // make a regex that matches a single charachter and only a single character

    const isPad = /[QAZWSXED]/

    if (isPad.test(pad)) {
      dispatch({ type: pad })
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <div>
      <h3>Current Pad: {state.pad}</h3>
      {pads.map(pad => (
        <button key={pad} onClick={() => dispatch({ type: `${pad}` })}>
          {pad}
        </button>
      ))}
    </div>
  )
}
