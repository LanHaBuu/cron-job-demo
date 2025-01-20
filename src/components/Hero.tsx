import { devices, themes } from "@/config";
import React, { FC, useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { pixel } from "@/fonts";
import Background from "./Background/CustomBg";

import Image from "next/image";

import headerImg from "@/public/header.webp";
import { HeroContent } from "@/config/constant";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

const StyledHero = styled.div`
  height: max-content;
  position: relative;
`;

const HeroWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  top: 50px;
  z-index: 1;
  @media ${devices.mobileL} {
    top: 100px;
  }

  @media ${devices.tablet} {
    top: 150px;
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
`;

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
`;

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

const HeroCatImg = styled(Image)`
  width: 150px;
  height: 150px;
  @media ${devices.tablet} {
    width: 300px;
    height: 300px;
  }
`;

export const Themes = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  box-shadow: 0 0 15px ${themes.main};
`;

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
`;

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
`;

export const WrapperInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
    background: #00bfa5;
    box-shadow: 0 0 10px ${themes.main}, 0 0 20px ${themes.main};
  }
`;

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  const [searchAddress, setSearchAddress] = useState("");
  const router = useRouter();
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
    if (address) {
      router.push(`/community?address=${searchAddress}`);
      setSearchAddress("");
      searchRef.current?.blur();
    } else {
      toast.error("Please enter the token address!");
    }
    if (searchAddress === "") {
      searchRef.current?.blur();
    }
  };

  return (
    <StyledHero>
      <ToastContainer />
      <HeroWrapper>
        <ContentInner className={pixel.className}>
          <HeroCatImg alt='cat' src={headerImg} />
          <BigTitle>{HeroContent.title}</BigTitle>

          <SearchBox>
            <WrapperInput>
              <InputSearch
                ref={searchRef}
                type='text'
                placeholder='Enter token address...'
                value={searchAddress}
                onChange={(e) => setSearchAddress(e.target.value)}
                onKeyDown={handleKeyDown}
                spellCheck={false}
              />
            </WrapperInput>

            <ButtonSearch onClick={handleSearch}>Search</ButtonSearch>
          </SearchBox>

          {HeroContent.desc?.map((_) => (
            <Desc key={_}>{_}</Desc>
          ))}
        </ContentInner>
      </HeroWrapper>

      <Background />

      <EmptyBox />
    </StyledHero>
  );
};

export default Hero;
