import { ADDRESS_SUI_AI, ADDRESS_TOKEN_MAIN, devices, themes } from "@/config";
import React from "react";
import styled from "styled-components";
import { openSans, pixel, ruluko } from "@/fonts";
import { AboutWrap, ImgWithEggWrap, LongEggImg } from "./Introduce";
import WhyImg from "@/public/why.webp";
import { WhyContent } from "@/config/constant";
import Flex from "./commonStyled/Flex";
import Text from "./commonStyled/Text";
import Image from "next/image";
import chartImg from "@/public/tradingchart.png";
import robot from "@/public/logo.png";
import { bounce } from "./commonStyled/animation";
import { useCAInfo } from "./Community/components/Description/hooks/useCAInfo";
import Box from "./commonStyled/Box";
import Chart from "./Community/components/Chart";
import ChartDexscreener from "./Community/components/ChartDexscreener";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #eeeeee;
  position: relative;
  padding-bottom: 60px;
`;
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
`;

const BigTitle = styled.p`
  margin: 0;
  color: ${themes.main};
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;

  @media ${devices.tablet} {
    font-size: 45px;
  }
`;

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
`;

const Desc = styled.h1`
  margin: 0;
  color: #868686;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;

  @media ${devices.tablet} {
    font-size: 20px;
  }

  @media ${devices.laptop} {
    font-size: 20px;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
const Overlay = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000bb;
`;

const ChartWrap = styled(Box)`
  /* border-radius: 20px; */
  overflow: hidden;
`;

const RobotImg = styled(Image)`
  width: 150px;
  height: 150px;
  animation: ${bounce} 1.5s infinite ease-in-out;
`;

const TokenOmics = () => {
  const { data: caInfo } = useCAInfo(ADDRESS_SUI_AI);
  return (
    <Container id='why' className={openSans.className} suppressHydrationWarning>
      <StyledTokenOmics>
        <Flex
          width='100%'
          justifyContent='center'
          flexDirection='column'
          alignItems='center'
        >
          <Flex padding='40px 0' flexDirection='column' alignItems='center'>
            <BigTitle>SUIAI CHART</BigTitle>

            <Flex flexDirection='column' alignItems='center'>
              <RobotImg src={robot} alt='robot' />
              <Desc>From A big fan of SUI AI 💚</Desc>
            </Flex>
          </Flex>
        </Flex>
        <ChartWrap data-aos-once='true' data-aos='zoom-in'>
          <ChartDexscreener caInfo={caInfo} />
        </ChartWrap>
      </StyledTokenOmics>
    </Container>
  );
};

export default TokenOmics;
