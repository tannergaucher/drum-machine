import React, { useState, useEffect } from 'react'
import { Flex, Heading, Button } from 'rebass'

const Pad = ({ text, src, setIsClicked, isClicked }) => (
  <Button
    bg="black"
    width={[1]}
    m={[1, 2]}
    style={{ boxShadow: isClicked === text ? 'none' : '0 0 20px black' }}
    onMouseDown={e => setIsClicked(e.target.innerText)}
    onMouseUp={e => setIsClicked(null)}
  >
    <Heading fontSize={[4, 5]} color={isClicked === text ? 'white' : 'grey'}>
      {text}
    </Heading>
    <audio src={src} onClick={() => console.log('click')} />
  </Button>
)

const Row = ({ children }) => (
  <Flex width="1" style={{ height: '33.333vh' }}>
    {children}
  </Flex>
)

export default function App() {
  const [isClicked, setIsClicked] = useState(null)

  return (
    <Flex style={{ height: '100vh', width: '100vw' }} flexDirection="column">
      <Row>
        <Pad text="Q" setIsClicked={setIsClicked} isClicked={isClicked} />
        <Pad text="W" setIsClicked={setIsClicked} isClicked={isClicked} />
        <Pad text="E" setIsClicked={setIsClicked} isClicked={isClicked} />
      </Row>

      <Row>
        <Pad text="A" setIsClicked={setIsClicked} isClicked={isClicked} />
        <Pad text="S" setIsClicked={setIsClicked} isClicked={isClicked} />
        <Pad text="D" setIsClicked={setIsClicked} isClicked={isClicked} />
      </Row>

      <Row>
        <Pad text="Z" setIsClicked={setIsClicked} isClicked={isClicked} />
        <Pad text="X" setIsClicked={setIsClicked} isClicked={isClicked} />
        <Pad text="C" setIsClicked={setIsClicked} isClicked={isClicked} />
      </Row>
    </Flex>
  )
}
