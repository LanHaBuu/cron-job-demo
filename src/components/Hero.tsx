import { devices, themes } from '@/config'
import React, { FC, useCallback, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { openSans, pixel } from '@/fonts'
import Background from './Background/CustomBg'
import SearchIcon from '@mui/icons-material/Search'
import Image from 'next/image'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import headerImg from '@/public/header.webp'
import suiAiImg from '@/public/suai_logo.png'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import { HeroContent } from '@/config/constant'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import Flex from './commonStyled/Flex'
import Text from './commonStyled/Text'
import { isAddress } from './utils'

const StyledHero = styled.div`
  /* height: max-content; */
  position: relative;
`

const HeroWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  top: 120px;
  z-index: 1;
  @media ${devices.mobileL} {
    top: 200px;
  }

  @media ${devices.tablet} {
    top: 230px;
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
  color: #000;
  font-weight: 700;
  font-size: 40px;

  @media ${devices.mobileM} {
    font-size: 50px;
  }

  @media ${devices.laptop} {
    font-size: 80px;
  }
`

const Desc = styled.h1`
  margin: 0;
  color: #868686;
  font-weight: 400;
  font-size: 16px;
  text-align: center;

  @media ${devices.tablet} {
    font-size: 20px;
  }

  @media ${devices.laptop} {
    font-size: 20px;
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

export const Themes = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  box-shadow: 0 0 15px ${themes.main};
`

export const SearchBox = styled(Themes)`
  min-width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 30px;

  @media ${devices.mobileM} {
    min-width: 500px;
  }
`

export const InputSearch = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #1e1e1e;
  color: ${themes.main};
  font-size: 1rem;
  outline: none;
  box-shadow: 0 0 5px ${themes.main};

  &::placeholder {
    color: #666;
  }
`

export const WrapperInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonSearch = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: ${themes.main};
  color: #000000;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 0 5px ${themes.main}, 0 0 10px ${themes.main};
  transition: 0.3s ease;

  &:hover {
    background: #216e05;
    box-shadow: 0 0 10px ${themes.main}, 0 0 20px ${themes.main};
  }
`

const Card = styled(Flex)`
  background-color: #fff;
  border: 1px solid #dedede;
  border-radius: 10px;
  padding: 16px;

  max-width: 480px;
  flex-direction: column;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    transform: scale(1.03);
  }
`

const CardWrap = styled(Flex)`
  gap: 20px;
  margin-top: 20px;
  flex-direction: column;
  @media ${devices.laptop} {
    flex-direction: row;
  }
`

const Logo = styled(Image)`
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #ebe1e1;
  border-radius: 10px;
  height: 120px;
  width: 120px;
  min-width: max-content;
`

const SearchWrap = styled(Flex)`
  border-radius: 20px;
  padding: 10px 20px;
  border: 1px solid #ebe1e1;
  background-color: #f6f6f6;
  width: 100%;
  max-width: 600px;
  padding-right: 10px;
  margin-top: 10px;
`

const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  color: #868686;
  font-size: 20px;
  font-weight: 600;

  &::placeholder {
    color: #cdc7c7;
    font-weight: 400;
  }
`

const BottomDesc = styled(Flex)`
  margin-top: 10px;
  max-width: 800px;
  @media ${devices.laptop} {
    margin-top: 150px;
  }
`

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-5px);
  }
`

const BouncingFlex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  cursor: pointer;
`

const BouncingText = styled(Text)`
  font-size: 22px;
  color: #868686;
  animation: ${bounce} 1.5s infinite ease-in-out;
`

const BouncingIcon = styled(KeyboardDoubleArrowDownIcon)`
  color: #4d4b4b;
  animation: ${bounce} 1.5s infinite ease-in-out;
`

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  const [searchAddress, setSearchAddress] = useState('')
  const router = useRouter()
  const searchRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' && searchAddress) {
      handleSearch()
    } else if (e.key === 'Enter' && searchAddress === '') {
      handleSearch()
    }
  }

  const handleSearch = () => {
    const address = searchAddress.trim()
    if (isAddress(address)) {
      router.push(`/community?address=${searchAddress}`)
      setSearchAddress('')
      searchRef.current?.blur()
    } else {
      toast.error('Please enter the token address!')
    }
    if (searchAddress === '') {
      searchRef.current?.blur()
    }
  }

  return (
    <StyledHero>
      <ToastContainer />
      <HeroWrapper>
        <ContentInner className={openSans.className}>
          <BigTitle>AI LENS</BigTitle>

          <Desc>
            Track tokens, monitor dev wallets, and discover hidden gems, all on
            the SUIAI platform, powered by AI.
          </Desc>

          <SearchWrap>
            <Input placeholder="Enter CA to see magic" />
            <SearchIcon />
          </SearchWrap>

          <CardWrap>
            <Card>
              <Flex alignItems="center">
                <Text
                  color="#000"
                  fontWeight={600}
                  mr="5px"
                  fontSize="20px"
                >
                  SUIAI
                </Text>
                <CheckCircleIcon
                  fontSize="small"
                  color="success"
                />
              </Flex>

              <Text color="#868686">CA: 0xbc732bc...1f92::suai::SUAI</Text>

              <Flex
                mt="10px"
                style={{
                  gap: '10px',
                }}
              >
                <Logo
                  alt="logo"
                  src={suiAiImg}
                  width={120}
                  height={120}
                />

                <Flex
                  flexDirection="column"
                  style={{
                    gap: '8px',
                  }}
                >
                  <Text color="#868686">
                    Launch and Co-Create Onchain AI Agents @SuiNetwork
                  </Text>

                  <Flex>
                    <Text mr="5px">Created By:</Text>
                    <Text color="#868686">0xbc732bc...1f92</Text>
                  </Flex>
                  <Flex>
                    <Text mr="5px"> Marketcap:</Text>
                    <Text color="#868686">18.5M$</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Card>

            <Card>
              <Flex alignItems="center">
                <Text
                  color="#000"
                  fontWeight={600}
                  mr="5px"
                  fontSize="20px"
                >
                  SUIAI
                </Text>
                <CheckCircleIcon
                  fontSize="small"
                  color="success"
                />
              </Flex>

              <Text color="#868686">CA: 0xbc732bc...1f92::suai::SUAI</Text>

              <Flex
                mt="10px"
                style={{
                  gap: '10px',
                }}
              >
                {/* <LogoContainer> */}
                <Logo
                  alt="logo"
                  src={suiAiImg}
                  // width={120}
                  // height={120}
                />
                {/* </LogoContainer> */}

                <Flex
                  flexDirection="column"
                  style={{
                    gap: '8px',
                  }}
                >
                  <Text color="#868686">
                    Launch and Co-Create Onchain AI Agents @SuiNetwork
                  </Text>

                  <Flex>
                    <Text mr="5px">Created By:</Text>
                    <Text color="#868686">0xbc732bc...1f92</Text>
                  </Flex>
                  <Flex>
                    <Text mr="5px"> Marketcap:</Text>
                    <Text color="#868686">18.5M$</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Card>
          </CardWrap>

          <BottomDesc>
            <Desc>
              As a big fan of SUIAI and aim to create a platform that simplifies
              crypto for both beginners and experienced users. The platform will
              help users check token information, track dev wallets, and
              discover investment opportunities, providing valuable insights for
              smarter decisions 💚
            </Desc>
          </BottomDesc>

          <BouncingFlex>
            <BouncingText
              mr="10px"
              fontSize="22px"
              color="#868686"
            >
              SCROLL DOWN
            </BouncingText>
            <BouncingIcon>
              <KeyboardDoubleArrowDownIcon
                style={{
                  color: '#4d4b4b',
                }}
              />
            </BouncingIcon>
          </BouncingFlex>
        </ContentInner>
      </HeroWrapper>

      <Background />
    </StyledHero>
  )
}

export default Hero
