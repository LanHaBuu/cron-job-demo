import { devices, themes } from '@/config'
import React, { FC } from 'react'
import styled from 'styled-components'
import { pixel } from '@/fonts'
import Background from './Background/CustomBg'

import Image from 'next/image'

import headerImg from '@/public/header.webp'
import { HeroContent } from '@/config/constant'

const StyledHero = styled.div`
  height: max-content;
  position: relative;
`

const HeroWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: max-content;
  display: flex;
  justify-content: center;
  top: 200px;
  z-index: 1;
  @media ${devices.mobileL} {
    top: 250px;
  }

  @media ${devices.tablet} {
    top: 300px;
  }
`

const ContentInner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
`

const BigTitle = styled.h1`
  margin: 0;
  color: ${themes.main};
  font-weight: 700;
  font-size: 70px;

  @media ${devices.mobileM} {
    font-size: 90px;
  }

  @media ${devices.tablet} {
    font-size: 90px;
  }

  @media ${devices.laptop} {
    font-size: 150px;
  }
`

const Desc = styled.h1`
  margin: 0;
  color: ${themes.main};
  font-weight: 700;
  font-size: 40px;
  text-align: center;

  @media ${devices.mobileM} {
    font-size: 50px;
  }

  @media ${devices.tablet} {
    font-size: 50px;
  }

  @media ${devices.laptop} {
    font-size: 50px;
  }
`

const EmptyBox = styled.div`
  background: #000;
  position: absolute;
  height: 80px;
  width: 100%;
  bottom: -20px;
  display: block;
  opacity: 0.8;
  filter: blur(10px); /* Apply the blur effect */
`

const Socials = styled.div`
  flex: 1;
  display: flex;
  align-items: end;

  @media ${devices.tablet} {
    justify-content: flex-start;
    margin-top: 24px;
  }
`

const HeroCatImg = styled(Image)`
  width: 150px;
  height: 150px;
  @media ${devices.tablet} {
    width: 300px;
    height: 300px;
  }
`

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <StyledHero>
      <HeroWrapper>
        <ContentInner
          data-aos="fade-up"
          data-aos-once="true"
          className={pixel.className}
        >
          <HeroCatImg
            alt="cat"
            src={headerImg}
          />
          <BigTitle>{HeroContent.title}</BigTitle>

          {HeroContent.desc?.map((_) => (
            <Desc key={_}>{_}</Desc>
          ))}
        </ContentInner>
      </HeroWrapper>

      <Background />

      <EmptyBox />
    </StyledHero>
  )
}

export default Hero
