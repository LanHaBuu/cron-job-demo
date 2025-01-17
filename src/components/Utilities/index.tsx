import React, { FC, useState } from 'react'
import styled from 'styled-components'
import Flex from '../commonStyled/Flex'
import ScrollToTop from '../ScrollToTop'
import Audio from '../Audio'

const Container = styled(Flex)`
  position: fixed;
  bottom: 0;
  right: 0;
  flex-direction: column;
  margin: 40px;
  gap: 20px;
  justify-content: flex-end;
  align-items: end;
  z-index: 999;
`

const Utilities: FC<{
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setIsOpen }) => {
  return (
    <Container>
      <Audio />
      <ScrollToTop />
    </Container>
  )
}

export default Utilities
