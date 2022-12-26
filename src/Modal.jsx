import { useState } from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalBody = styled.div`
  padding: 50px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
`

export const Modal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false)

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show Modal</button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShouldShow(false)}>Hide Modal</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  )
}
