import Box from "@/components/commonStyled/Box";
import React from "react";
import { LoadingDot } from "@/components/Loader";
import { IWalletActivity } from "../../type";
import { Button } from "../..";
import ActivityItems from "./ActivityItems";
import { HeaderActivityColumns } from "../../config";
import Flex from "@/components/commonStyled/Flex";
import Text from "@/components/commonStyled/Text";
interface IActivityWallet {
  walletActivity: IWalletActivity[];
  isLoading: boolean;
  loadMore?: any;
  hasNextPage?: boolean;
}

const ActivityWallet = ({
  walletActivity,
  isLoading,
  loadMore,
  hasNextPage,
}: IActivityWallet) => {
  return (
    <Flex style={{ flexDirection: "column", gap: "20px" }}>
      <Flex style={{ marginTop: "20px" }}>
        {HeaderActivityColumns?.map((item: any) => (
          <Box key={item?.title} style={{ width: item?.width }}>
            <Text fontSize='16px' fontWeight={700}>
              {item.title}
            </Text>
          </Box>
        ))}
      </Flex>
      {walletActivity &&
        walletActivity?.map((item: IWalletActivity, index: any) => (
          <ActivityItems item={item} index={index} />
        ))}

      {hasNextPage && (
        <Button onClick={loadMore}>
          {isLoading ? "Loading..." : "Load More"}
        </Button>
      )}
    </Flex>
  );
};

export default ActivityWallet;
