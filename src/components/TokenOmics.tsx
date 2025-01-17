import { devices, themes } from '@/config'
import React from 'react'
import styled from 'styled-components'
import { pixel, ruluko } from '@/fonts'
import { AboutWrap, Desc, ImgWithEggWrap, LongEggImg } from './Introduce'
import WhyImg from '@/public/why.webp'
import { WhyContent } from '@/config/constant'
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: -4px;
  position: relative;
  padding-bottom: 60px;
`
const StyledTokenOmics = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 10px;

  @media ${devices.mobileM} {
    max-width: 540px;
  }
  @media ${devices.mobileL} {
    max-width: 720px;
  }
  @media ${devices.tablet} {
    max-width: 960px;
  }
  @media ${devices.laptop} {
    max-width: 1140px;
  }
  @media ${devices.laptopL} {
    max-width: 1320px;
  }
`

const BigTitle = styled.p`
  margin: 0;
  color: ${themes.main};
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;

  @media ${devices.tablet} {
    font-size: 45px;
  }
`

const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  flex-direction: column;
  margin-top: 50px;

  @media ${devices.tablet} {
    margin-top: 80px;
    flex-direction: row;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`
const Overlay = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000bb;
`

const StepBigtitle = styled(BigTitle)`
  @media ${devices.mobileL} {
    margin-bottom: 18px;
  }
`

const TokenOmics = () => {
  return (
    <Container
      id="why"
      className={ruluko.className}
      suppressHydrationWarning
    >
      <Overlay />
      <VideoBackground
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/videos/footers.mp4"
          type="video/mp4"
        />
        <source
          src="/videos/footers.mp4"
          type="video/webm"
        />
      </VideoBackground>
      <StyledTokenOmics>
        <Content>
          <ImgWithEggWrap
            data-aos-once="true"
            data-aos="fade-left"
          >
            <LongEggImg
              src={WhyImg}
              alt="mechanicCatImg"
            />
          </ImgWithEggWrap>
          <AboutWrap
            data-aos-once="true"
            data-aos="fade-right"
            style={{ justifyContent: 'start' }}
          >
            <StepBigtitle className={pixel.className}>
              {WhyContent.title}
            </StepBigtitle>

            {WhyContent.desc?.map((_) => (
              <Desc key={_}>{_}</Desc>
            ))}
          </AboutWrap>
        </Content>
      </StyledTokenOmics>
    </Container>
  )
}

export default TokenOmics
