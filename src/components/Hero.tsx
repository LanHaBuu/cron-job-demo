import { ADDRESS_SUI_AI, ADDRESS_TOKEN_MAIN, devices, themes } from "@/config";
import React, { FC, useCallback, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { openSans } from "@/fonts";
import Background from "./Background/CustomBg";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import suiAiImg from "@/public/suai_logo.png";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import Flex from "./commonStyled/Flex";
import Text from "./commonStyled/Text";
import { formatNumber, isAddress, sliceAddress } from "./utils";
import Box from "./commonStyled/Box";
import { useCASuiAIAndTokenMainInfo } from "./Community/components/Description/hooks/useCAInfo";
const StyledHero = styled.div`
  position: relative;
`;

const HeroWrapper = styled.div`
  position: relative;
  left: 0;
  right: 0;
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  z-index: 1;
  top: 90px;

  padding-top: 40px;
  padding-bottom: 80px;

  @media ${devices.laptop} {
    padding-top: 110px;
    padding-bottom: 110px;
  }
`;

const ContentInner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const BigTitle = styled.h1`
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
`;

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
`;

const EmptyBox = styled.div`
  background: #000;
  position: absolute;
  height: 80px;
  width: 100%;
  bottom: -20px;
  display: block;
  opacity: 0.8;
  filter: blur(10px); /* Apply the blur effect */
`;


const Card = styled(Flex)`
  background-color: #fff;
  border: 1px solid #dedede;
  border-radius: 10px;
  padding: 10px;

  max-width: 480px;
  flex-direction: column;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    transform: scale(1.03);
  }

  @media ${devices.laptop} {
    padding: 16px;
  }
`;

const CardWrap = styled(Flex)`
  gap: 20px;
  margin-top: 20px;
  flex-direction: column;

  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

const Logo = styled(Image)`
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #ebe1e1;
  border-radius: 10px;
  height: 120px;
  width: 120px;
  min-width: max-content;
`;

const SearchWrap = styled(Flex)`
  border-radius: 20px;
  padding: 10px 20px;
  border: 1px solid #ebe1e1;
  background-color: #f6f6f6;
  width: 100%;
  max-width: 600px;
  padding-right: 10px;
  margin-top: 15px;

  @media ${devices.laptop} {
    margin-top: 30px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  color: #868686;
  font-size: 18px;
  font-weight: 600;

  &::placeholder {
    color: #cdc7c7;
    font-weight: 400;
  }
`;

const BottomDesc = styled(Flex)`
  margin-top: 10px;
  max-width: 800px;
  @media ${devices.laptop} {
    margin-top: 150px;
  }
`;

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
`;

const BouncingFlex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  cursor: pointer;
`;

const BouncingText = styled(Text)`
  font-size: 22px;
  color: #868686;
  animation: ${bounce} 1.5s infinite ease-in-out;
`;

const BouncingIcon = styled(KeyboardDoubleArrowDownIcon)`
  color: #4d4b4b;
  animation: ${bounce} 1.5s infinite ease-in-out;
`;

export const IconWrap = styled(Box)`
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  const [searchAddress, setSearchAddress] = useState("");
  const { push } = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && searchAddress) {
      handleSearch();
    } else if (e.key === "Enter" && searchAddress === "") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const address = searchAddress.trim();
    if (!address) {
      toast.error("Please enter the token address.");
    } else {
      if (isAddress(address)) {
        push(`/community?address=${searchAddress}`);
        setSearchAddress("");
        searchRef.current?.blur();
      } else {
        toast.error("Please enter the correct format of the token address.");
      }
    }
  };

  const { data } = useCASuiAIAndTokenMainInfo([
    ADDRESS_SUI_AI,
    ADDRESS_TOKEN_MAIN,
  ]);

  const handleNavigateToken = (token: any) => {
    push(`/community?address=${token?.token_address}`);
  };

  return (
    <StyledHero>
      <ToastContainer />
      <HeroWrapper>
        <ContentInner className={openSans.className}>
          <BigTitle>LENS AI</BigTitle>

          <Desc>
            Track tokens, monitor dev wallets, and discover hidden gems, all on
            the SUIAI platform, powered by AI.
          </Desc>

          <SearchWrap>
            <Input
              placeholder='Enter CA to see the magic...'
              onKeyDown={handleKeyDown}
              onChange={(e) => setSearchAddress(e.target.value)}
            />
            <IconWrap onClick={handleSearch}>
              <SearchIcon />
            </IconWrap>
          </SearchWrap>

          <CardWrap>
            {data?.map((item) => (
              <Card
                key={item?.symbol}
                onClick={() => handleNavigateToken(item)}
              >
                <Flex alignItems='center'>
                  <Text color='#000' fontWeight={600} mr='5px' fontSize='20px'>
                    {item?.symbol}
                  </Text>
                  <CheckCircleIcon fontSize='small' color='success' />
                </Flex>

                <Text color='#868686'>
                  CA: {sliceAddress(item?.token_address, 10)}
                </Text>

                <Flex
                  mt='10px'
                  style={{
                    gap: "10px",
                  }}
                >
                  {item?.icon_url ? (
                    <Image
                      src={item?.icon_url}
                      width={120}
                      height={120}
                      alt='logo'
                    />
                  ) : (
                    <Logo alt='logo' src={suiAiImg} />
                  )}

                  <Flex
                    flexDirection='column'
                    style={{
                      gap: "8px",
                    }}
                  >
                    <Text color='#868686'>
                      Launch and Co-Create Onchain AI Agents @SuiNetwork
                    </Text>

                    <Flex>
                      <Text mr='5px'>Created By:</Text>
                      <Text color='#868686'>{sliceAddress(item?.creator)}</Text>
                    </Flex>
                    <Flex>
                      <Text mr='5px'> Marketcap:</Text>
                      <Text color='#868686'>
                        {formatNumber(Number(item?.marketcap))}$
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Card>
            ))}
          </CardWrap>

          <BottomDesc>
            <Desc
              style={{
                lineHeight: "1.4",
                letterSpacing: "1.3",
              }}
            >
              As a big fan of SUIAI and aim to create a platform that simplifies
              crypto for both beginners and experienced users. The platform will
              help users check token information, track dev wallets, and
              discover investment opportunities, providing valuable insights for
              smarter decisions 💚
            </Desc>
          </BottomDesc>

          <BouncingFlex
            onClick={() => {
              push("/#about");
            }}
          >
            <BouncingText mr='10px' fontSize='22px' color='#868686'>
              SCROLL DOWN
            </BouncingText>
            <BouncingIcon>
              <KeyboardDoubleArrowDownIcon
                style={{
                  color: "#4d4b4b",
                }}
              />
            </BouncingIcon>
          </BouncingFlex>
        </ContentInner>
        <Background />
      </HeroWrapper>
    </StyledHero>
  );
};

export default Hero;
