import { devices, themes } from '@/config'
import React from 'react'
import styled from 'styled-components'
import mechanicCatImg from '@/public/mechanic-cat.webp'
import mechanicCatLeftImg from '@/public/mechanic-cat-left.webp'
import headerImg from '@/public/favicon.webp'
import Image from 'next/image'
import { pixel } from '@/fonts'
import Flex from './commonStyled/Flex'
import { AboutContent, HowToByContent } from '@/config/constant'
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: -4px;
  position: relative;
  padding-bottom: 60px;
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

const StyledIntroduce = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 10px;

  @media ${devices.tablet} {
    padding: 0;
  }

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

const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  flex-direction: column;
  padding-top: 120px;
  margin-top: -60px;
  @media ${devices.tablet} {
    flex-direction: row;
    padding-top: 120px;
    margin-top: 0;
  }
`

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 32px;

  @media ${devices.tablet} {
    align-items: flex-start;
  }
`

export const AboutWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  @media ${devices.tablet} {
    height: 100%;
    justify-content: space-around;
    flex: 6;
    align-items: flex-start;
    padding: 40px 0;
  }
`

export const ImgWithEggWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 50px;

  @media ${devices.tablet} {
    align-items: flex-start;
    flex: 4;
    margin-top: 0;
  }
`

export const LongEggImg = styled(Image)`
  width: 100%;
  max-width: 500px;
  height: auto;
  @media ${devices.tablet} {
    max-width: unset;
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

const StepBigtitle = styled(BigTitle)`
  @media ${devices.mobileL} {
    margin-bottom: 18px;
  }
`

export const Desc = styled.p`
  margin: 0;
  font-weight: 400;
  text-align: center;
  color: ${themes.main};
  font-size: 18px;

  @media ${devices.mobileM} {
    font-size: 20px;
  }

  @media ${devices.tablet} {
    font-size: 22px;
    text-align: left;
  }

  @media ${devices.laptopL} {
    font-size: 26px;
  }
`

const BottomContent = styled(Content)`
  gap: 30px;
  flex-direction: column-reverse;
  padding-top: 120px;
  margin-top: -40px;

  @media ${devices.tablet} {
    flex-direction: row;
    padding-top: 170px;
  }
`
const LongWithChartImg = styled(Image)`
  width: 100%;
  max-width: 550px;
  height: auto;
`

const GuideStep = styled.div`
  width: 100%;
  border: 2px solid ${themes.main};
  border-radius: 20px;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 20px;
  height: max-content;

  @media ${devices.tablet} {
    padding: 20px;
  }
`

const StepImg = styled(Image)`
  height: 70px;
  width: 70px;

  @media ${devices.mobileM} {
    height: 90px;
    width: 90px;
  }

  @media ${devices.tablet} {
    height: 110px;
    width: 110px;
  }
`

const GuideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 10px 0;
`

const AboutContentWrapper = styled.div``

const GuideTitle = styled.p`
  margin: 0;
  line-height: 1;
  font-size: 18px;
  margin-bottom: 10px;
  color: ${themes.main};
  font-weight: 800;

  @media ${devices.mobileM} {
    font-size: 25px;
  }

  @media ${devices.tablet} {
    font-size: 20px;
    margin-bottom: 20px;
  }

  @media ${devices.laptop} {
    font-size: 25px;
  }

  @media ${devices.laptopL} {
    font-size: 28px;
  }

  @media ${devices.desktop} {
    font-size: 28px;
  }
`

const GuideDesc = styled.p`
  margin: 0;
  color: ${themes.main};
  font-size: 14px;

  @media ${devices.mobileM} {
    font-size: 18px;
  }

  @media ${devices.tablet} {
    font-size: 14px;
  }

  @media ${devices.laptop} {
    font-size: 16px;
  }

  @media ${devices.laptopL} {
    font-size: 18px;
  }

  @media ${devices.desktop} {
    font-size: 19px;
  }
`

const LinkText = styled.a`
  font-size: 14px;
  margin: 0;
  display: inline;
  color: ${themes.main};
  cursor: pointer;
  text-decoration: none;

  @media ${devices.mobileM} {
    font-size: 18px;
  }

  @media ${devices.tablet} {
    font-size: 14px;
  }

  @media ${devices.laptop} {
    font-size: 16px;
  }

  @media ${devices.laptopL} {
    font-size: 18px;
  }

  @media ${devices.desktop} {
    font-size: 21px;
  }

  &:hover {
    text-decoration: underline;
  }
`

const Overlay = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000bb;
`

const Introduce = () => {
  return (
    <Container className={pixel.className}>
      <Overlay />
      <VideoBackground
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/videos/introduces.mp4"
          type="video/mp4"
        />
        <source
          src="/videos/introduces.mp4"
          type="video/webm"
        />
      </VideoBackground>
      <StyledIntroduce>
        <Content id="about">
          <ImgWithEggWrap
            data-aos-once="true"
            data-aos="fade-left"
          >
            <LongEggImg
              src={mechanicCatLeftImg}
              alt="mechanicCatImg"
            />
          </ImgWithEggWrap>
          <AboutWrap
            data-aos-once="true"
            data-aos="fade-right"
          >
            <BigTitle className={pixel.className}>
              {AboutContent.title}
            </BigTitle>
            {AboutContent?.desc?.map((desc, index) => {
              return (
                <AboutContentWrapper key={index}>
                  <Desc>{desc}</Desc>
                </AboutContentWrapper>
              )
            })}
          </AboutWrap>
        </Content>

        <BottomContent id="howtobuy">
          <ContentItem
            data-aos-once="true"
            data-aos="fade-left"
          >
            <StepBigtitle className={pixel.className}>
              {HowToByContent.title}
            </StepBigtitle>

            {HowToByContent.desc?.map((item, index) => {
              return (
                <GuideStep
                  data-aos-once="true"
                  data-aos="fade-left"
                  key={item.guideDesc}
                >
                  <StepImg
                    src={headerImg}
                    alt="guid_wallet"
                  />
                  <GuideContent>
                    <GuideTitle className={pixel.className}>
                      {item.guideTitle}
                    </GuideTitle>

                    <GuideDesc className={pixel.className}>
                      {item.guideDesc}
                    </GuideDesc>
                  </GuideContent>
                </GuideStep>
              )
            })}
          </ContentItem>
          <ContentItem
            data-aos-once="true"
            data-aos="fade-right"
          >
            <LongWithChartImg
              src={mechanicCatImg}
              alt="chart"
            />
          </ContentItem>
        </BottomContent>
      </StyledIntroduce>
    </Container>
  )
}

export default Introduce
