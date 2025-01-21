import React, {
  useCallback,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import Chart from "./components/Chart";
import { devices, position, themes } from "@/config";
import { useChart } from "./components/Chart/hooks/useChart";
import { LoadingDot } from "../Loader";
import { useCAInfo } from "./components/Description/hooks/useCAInfo";
import Description from "./components/Description";
import {
  ButtonSearch,
  InputSearch,
  SearchBox,
  Themes,
  WrapperInput,
} from "../Hero";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import AddressWallet from "./components/AddressWallet";
import { useWalletInfo } from "./components/AddressWallet/hooks/useWalletInfo";
import Text from "@/components/commonStyled/Text";
import { useWalletActivity } from "./components/AddressWallet/hooks/useWalletActivity";
import { isAddress } from "../utils";
import Flex from "../commonStyled/Flex";
import ChartDexscreener from "./components/ChartDexscreener";
import { getPairDexScreenerInfo } from "./components/ChartDexscreener/api";
import Box from "../commonStyled/Box";
import { useWalletCreatorActivity } from "./components/AddressWallet/hooks/useWalletActivityCreator";
import ActivityCretor from "./components/AddressWallet/components/ActivityCretor";

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(120deg, #0f2027, #203a43, #2c5364);
  color: ${themes.main};
  font-family: "Courier New", Courier, monospace;
  overflow: hidden;
  padding: 0 10px;
`;

const PageWrapper = styled.div`
  margin-top: calc(${position.heightHeader} + 15px);
  margin-left: auto;
  margin-right: auto;

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
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-shadow: 0 0 5px ${themes.main}, 0 0 10px ${themes.main};
`;

const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1400px) {
    flex-direction: column;
  }
`;

const ContentCA = styled(Themes)`
  height: 100%;
  padding: 30px;

  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const ContentChart = styled(Themes)`
  height: 100%;
  padding: 30px;

  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const WrapperButtonChart = styled(Flex)`
  margin-bottom: 20px;
  gap: 10px;
`;

const ButtonChart = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: ${themes.main};
  color: #000000;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #00bfa5;
  }
`;

const WalletInfo = styled(Themes)`
  margin-top: 20px;
  height: 100%;
  padding: 30px;
`;

const Community = () => {
  const router = useRouter();
  const { address } = router.query;
  const [input, setInput] = useState("");
  const [chartChoose, setChartChoose] = useState("fun");
  const [isExistDexscreener, setIsExistDexscreener] = useState(false);

  const { data: caInfo, isLoading: isLoadingCAInfo } = useCAInfo(
    address as string
  );

  const { data: walletInfo, isLoading: isLoadingWallet } = useWalletInfo(
    caInfo?.creator
  );

  const { data: creatorActivity, isLoading: isLoadingWalletCreatorActivity } = useWalletCreatorActivity(
    caInfo?.creator
  );

  // const {
  //   data: walletActivity,
  //   isLoading,
  //   loadMore,
  //   hasNextPage,
  // } = useWalletActivity(caInfo?.creator);



  const searchRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && input) {
      handleSearch();
    } else if (e.key === "Enter" && input === "") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const address = input.trim();
    if (isAddress(address)) {
      router.push(`/community?address=${address}`);
      setInput("");
      searchRef.current?.blur();
    } else {
      toast.error("Please enter the token address.");
    }
  };

  const handleCurrentChart = useCallback(async() => {
    const data = await getPairDexScreenerInfo(caInfo?.token_address);
    if (data?.length > 0) {
      setIsExistDexscreener(true);
    } else {
      setIsExistDexscreener(false);
    }
    setChartChoose("current")
  },[caInfo])

  const ComponentNotFound = () => {
    return <Text>Not Found</Text>;
  };
  

  return (
    <PageContainer>
      {/* <BackgroundEffect /> */}
      <ToastContainer />
      <PageWrapper>
        <WrapperTitle>
          <Title>Title</Title>
        </WrapperTitle>
        <SearchBox>
          <WrapperInput>
            <InputSearch
              type='text'
              placeholder='Enter token address...'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
            />
          </WrapperInput>

          <ButtonSearch onClick={handleSearch}>Search</ButtonSearch>
        </SearchBox>

        <Content>
          <ContentCA>
            {isLoadingCAInfo ? (
              <LoadingDot />
            ) : caInfo ? (
              <Description caInfo={caInfo} />
            ) : (
              <ComponentNotFound />
            )}
          </ContentCA>

          <ContentChart>
            <WrapperButtonChart>
              <ButtonChart onClick={() => setChartChoose("fun")}>
                Fun chart
              </ButtonChart>

              <ButtonChart onClick={handleCurrentChart}>
                Current chart
              </ButtonChart>
            </WrapperButtonChart>
            {caInfo ? (
              <>
                <Box
                  style={{ display: chartChoose == "fun" ? "block" : "none" }}
                >
                  <Chart caInfo={caInfo} />
                </Box>
                <Box
                  style={{
                    display: chartChoose == "current" ? "block" : "none",
                  }}
                >
                  {isExistDexscreener ? (
                    <ChartDexscreener caInfo={caInfo} />
                  ) : (
                    <ComponentNotFound />
                  )}
                </Box>
              </>
            ) : (
              <ComponentNotFound />
            )}
          </ContentChart>
        </Content>

        <WalletInfo>
          {isLoadingWallet ? (
            <LoadingDot />
          ) : walletInfo ? (
            <ActivityCretor walletInfo={walletInfo} creatorActivity={creatorActivity} searchAddress={address}/>
          ) : (
            <ComponentNotFound />
          )}
        </WalletInfo>
      </PageWrapper>
    </PageContainer>
  );
};

export default Community;
