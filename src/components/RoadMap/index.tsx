import React from 'react'
import styled from 'styled-components'
import Flex from '../commonStyled/Flex'
import Text from '../commonStyled/Text'
import Box from '../commonStyled/Box'
import { devices } from '@/config'

const Container = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  cursor: pointer;

  @media ${devices.laptopL} {
    padding: 40px 0;
    justify-content: space-between;
    align-items: normal;
    flex-direction: row;
    gap: 0;
  }
`

const Item = styled(Flex)`
  flex-direction: column;
  max-width: 300px;
  position: relative;
  justify-content: center;
  align-items: center;

  @media ${devices.laptopL} {
    justify-content: flex-start;
    align-items: flex-start;
  }
`

const Number = styled(Text)`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`
const Title = styled(Text)`
  font-size: 25px;
  font-weight: 900;

  text-align: center;

  @media ${devices.laptopL} {
    text-align: left;
  }
`
const Desc = styled(Text)`
  color: #868686;
  text-align: center;

  @media ${devices.laptopL} {
    text-align: left;
    font-size: 18px;
  }
`

const ArrowImg = styled.img`
  width: 100%;
`

const Arrow = styled(Box)`
  position: absolute;
  left: 0;
  width: 100%;
  display: none;

  @media ${devices.laptopL} {
    display: block;
  }
`

const TopArrow = styled(Arrow)`
  top: calc(-50% + 10px);
`

const BtArrow = styled(Arrow)`
  bottom: calc(-50% + 5px);
`
const Roadmap = () => {
  return (
    <Container
      data-aos="zoom-in"
      data-aos-once="true"
      data-aos-duration="1500"
    >
      <Item>
        <Number>01</Number>
        <Title>Development & Testing</Title>
        <Desc>
          The commencement of the Swap2Earn protocol journey with meticulous
          development and thorough testing.
        </Desc>

        {/* <BtArrow>
          <ArrowImg src="/images/home/roadmap/bottom-arrow.webp" />
        </BtArrow> */}
      </Item>

      <Item>
        {/* <TopArrow>
          <ArrowImg src="/images/home/roadmap/top-arrow.webp" />
        </TopArrow> */}
        <Number mt={[0, 0, 0, 0, 0, 0, 39]}>02</Number>
        <Title>Launching</Title>
        <Desc>
          Token generation event and the launch of the main protocol features on
          zkSync Era mainnet.
        </Desc>
      </Item>

      <Item>
        <Number>03</Number>
        <Title>Repeat Evolution -&gt; Revolution</Title>
        <Desc>
          Commitment to ongoing evolution with user-centric enhancements and
          diverse product development.
        </Desc>
        {/* <BtArrow>
          <ArrowImg src="/images/home/roadmap/bottom-arrow.webp" />
        </BtArrow> */}
      </Item>

      <Item>
        <Number mt={[0, 0, 0, 0, 0, 0, 39]}>04</Number>
        <Title>Multichain Expansion</Title>
        <Desc>
          Expanding the platform's reach and accessibility by integrating
          multiple blockchain networks.
        </Desc>
      </Item>
    </Container>
  )
}

export default Roadmap
