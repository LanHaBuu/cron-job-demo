import React from 'react'
import styled from 'styled-components'
import Flex from '../commonStyled/Flex'

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const Overlay = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000063;
`

const Background = () => {
  return (
    <BackgroundContainer>
      <Overlay />
      <VideoBackground
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/videos/heros.mp4"
          type="video/mp4"
        />
        <source
          src="/videos/heros.mp4"
          type="video/webm"
        />
        {/* Additional sources can be added for compatibility */}
        Your browser does not support the video tag.
      </VideoBackground>
      {/* Place any other content you want on top of the video here */}
    </BackgroundContainer>
  )
}

export default Background
