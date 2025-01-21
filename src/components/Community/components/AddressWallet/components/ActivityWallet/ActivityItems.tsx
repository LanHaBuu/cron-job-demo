import React, { memo } from "react";
import { ICoinChange, IInteractAddresses, IWalletActivity } from "../../type";
import Flex from "@/components/commonStyled/Flex";
import Box from "@/components/commonStyled/Box";
import Text from "@/components/commonStyled/Text";
import {
  formatAmount,
  formatNumberWithCommas,
  sliceAddress,
} from "@/components/utils";
import Image from "next/image";
import { themes } from "@/config";
import SuiIcon from "@/components/icons/SuiIcon";
import {
  getActivityAccount,
  getUrlToken,
  getUrlTx,
  TableActivityColWidth,
} from "../../config";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import styled from "styled-components";
import ComponentCopy from "@/components/Copy";
import LinkCustom from "@/components/commonStyled/LinkCustom";
import { SIZE_LOGO } from "../HeaderInfoWallet";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: 14,
    border: `1px solid ${theme.main}`,
  },
}));

interface IActivityItems {
  item: IWalletActivity;
  index: number;
}

const ActivityItems = ({ item, index }: IActivityItems) => {
  const urlTx = getUrlTx(item?.transaction);

  return (
    <Flex key={index} alignItems='center'>
      <Box style={{ width: TableActivityColWidth.type }}>
        <Text>{item?.type}</Text>
        <Flex alignItems='center' style={{ gap: "4px" }}>
          <LinkCustom href={urlTx} target='_blank'>
            {sliceAddress(item?.transaction, 8)}
          </LinkCustom>
          <ComponentCopy stringCopy={item?.transaction} />
        </Flex>
      </Box>
      <Box>
        {!item?.coinChanges ? (
          <Text style={{ width: TableActivityColWidth.details }} />
        ) : (
          item?.coinChanges?.map((coinChange: ICoinChange, index) => (
            <Flex
              key={index}
              style={{
                width: TableActivityColWidth.details,
                gap: "10px",
                alignItems: "center",
              }}
            >
              <Box>
                {coinChange?.logo ? (
                  <Image
                    src={coinChange?.logo}
                    width={SIZE_LOGO}
                    height={SIZE_LOGO}
                    alt='logo'
                    style={{
                      borderRadius: "50%",
                      // boxShadow: `0 0 5px ${themes.main}, 0 0 10px ${themes.main}`,
                    }}
                  />
                ) : (
                  <SuiIcon width={SIZE_LOGO} height={SIZE_LOGO} />
                )}
              </Box>
              <Box>
                <Text
                  style={{
                    color:
                      Number(coinChange?.amount) < 0 ? "#e04f4f" : "#3b9963",
                  }}
                >
                  {formatNumberWithCommas(
                    formatAmount(coinChange?.amount, coinChange?.decimal)
                  )}
                </Text>
              </Box>
              <Box>
                <LinkCustom
                  href={getUrlToken(coinChange?.coinAddress)}
                  target='_blank'
                >
                  {coinChange?.symbol}
                </LinkCustom>
              </Box>
            </Flex>
          ))
        )}
      </Box>

      <Box style={{ width: TableActivityColWidth.with }}>
        {item?.interactAddresses?.length >= 4 ? (
          <Flex style={{ gap: "20px", alignItems: "center" }}>
            <Flex style={{ gap: "10px", alignItems: "center" }}>
              {item?.interactAddresses[0]?.logo && (
                <Image
                  src={item?.interactAddresses[0]?.logo}
                  width={SIZE_LOGO}
                  height={SIZE_LOGO}
                  alt='logo'
                  style={{
                    borderRadius: "50%",
                    // boxShadow: `0 0 5px ${themes.main}, 0 0 10px ${themes.main}`,
                  }}
                />
              )}
              {item?.interactAddresses[0]?.address && (
                <LinkCustom
                  href={getActivityAccount(item?.interactAddresses[0]?.address)}
                  target='_blank'
                >
                  {sliceAddress(item?.interactAddresses[0]?.address, 8)}
                </LinkCustom>
              )}
            </Flex>
            <HtmlTooltip
              title={
                <Flex
                  alignItems='center'
                  style={{ flexDirection: "column", gap: "10px" }}
                >
                  {item?.interactAddresses?.map(
                    (interact: IInteractAddresses, index) => {
                      return (
                        <Box key={index}>
                          <Flex alignItems='center' style={{ gap: "10px" }}>
                            {interact?.logo && (
                              <Image
                                src={interact?.logo}
                                width={16}
                                height={16}
                                alt='logo'
                                style={{
                                  borderRadius: "50%",
                                }}
                              />
                            )}
                            {interact?.address && (
                              <Flex alignItems='center' style={{ gap: " 6px" }}>
                                <LinkCustom
                                  href={getActivityAccount(interact?.address)}
                                  target='_blank'
                                  style={{
                                    color: "#000",
                                  }}
                                >
                                  {sliceAddress(interact?.address, 8)}
                                </LinkCustom>
                              </Flex>
                            )}
                          </Flex>
                        </Box>
                      );
                    }
                  )}
                </Flex>
              }
            >
              <Text style={{ cursor: "pointer" }}>
                +{item?.interactAddresses?.length}
              </Text>
            </HtmlTooltip>
          </Flex>
        ) : (
          item?.interactAddresses?.map(
            (interact: IInteractAddresses, index) => {
              return (
                <Box key={index}>
                  <Flex style={{ gap: "10px" }}>
                    {interact?.logo && (
                      <Image
                        src={interact?.logo}
                        width={SIZE_LOGO}
                        height={SIZE_LOGO}
                        alt='logo'
                        style={{
                          borderRadius: "50%",
                          boxShadow: `0 0 5px ${themes.main}, 0 0 10px ${themes.main}`,
                        }}
                      />
                    )}
                    {interact?.address && (
                      <LinkCustom href={getActivityAccount(interact?.address)} target='_blank'>
                        {sliceAddress(interact?.address, 8)}
                      </LinkCustom>
                    )}
                  </Flex>
                </Box>
              );
            }
          )
        )}

        {!item?.interactAddresses && (
          <Text style={{ width: TableActivityColWidth.with }} />
        )}
      </Box>

      <Box style={{ width: TableActivityColWidth.gas }}>
        <Text>{item?.gasFee} SUI</Text>
      </Box>
    </Flex>
  );
};

export default memo(ActivityItems);
