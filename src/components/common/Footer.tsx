import { devices, themes } from '@/config'
import React from 'react'
import styled from 'styled-components'
import Box from '../commonStyled/Box'
import XIcon from '../icons/Xicon'
import TelegramIcon from '../icons/TelegramIcon'
import Link from 'next/link'
import 'tippy.js/dist/tippy.css'
import { links } from '@/config/constant'
import Flex from '../commonStyled/Flex'
import Text from '../commonStyled/Text'
import { openSans } from '@/fonts'
import Image from 'next/image'
import gameRobotImg from '@/public/robot-game.webp'
import { bounce } from '../commonStyled/animation'

const StyledFooter = styled(Box)`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 500px;
  background-color: #e5e5e5;

  @media ${devices.tablet} {
    padding-top: 120px;
  }
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000bb;
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

const FooterInner = styled(Flex)`
  width: 100%;
  padding: 0 10px;
  justify-content: center;

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
  z-index: 22;
`

const FooterContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SocialsInner = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 100%;

  @media ${devices.mobileM} {
    gap: 15px;
  }

  @media ${devices.laptopL} {
    justify-content: flex-end;
  }
`

const IconWrap = styled(Link)`
  height: 35px;
  width: 35px;
  align-items: center;
  border-radius: 8px;
  background-color: ${themes.main};
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s all;

  svg {
    transition: 0.3s all;
    width: 20px;
    height: 20px;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media ${devices.tablet} {
    height: 58px;
    width: 58px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`

const RobotImg = styled(Image)`
  width: 150px;
  height: 150px;
  animation: ${bounce} 1.5s infinite ease-in-out;
`

const Footer = () => {
  return (
    <StyledFooter className={openSans.className}>
      <FooterInner>
        <FooterContent>
          <Text
            fontSize="40px"
            fontWeight={500}
            textAlign="center"
          >
            Join Our Community
          </Text>
          <RobotImg
            alt="gaming"
            src={gameRobotImg}
          />
          <Text
            color="#868686"
            textAlign="center"
          >
            Join us, share your thoughts, and be part of our journey to grow
            together!
          </Text>
          <Socials
            data-aos-once="true"
            data-aos="fade-up"
          >
            <SocialsInner>
              <IconWrap
                href={links.twitter}
                target="_blank"
                aria-label="Twitter"
              >
                <XIcon
                  height={28}
                  width={28}
                />
              </IconWrap>

              <IconWrap
                href={links.telegram}
                target="_blank"
                aria-label="Telegram"
              >
                <TelegramIcon
                  height={28}
                  width={28}
                />
              </IconWrap>
            </SocialsInner>
          </Socials>

          <Text color="#868686">© 2025 AILENS. All Rights Reserved.</Text>
        </FooterContent>
      </FooterInner>
    </StyledFooter>
  )
}

export default Footer
