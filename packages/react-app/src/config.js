import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xa0A13cD9Aa7F1c0A454bbcaa77810870a6C8Ec1F";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/ZcKH37pcTxxsHYv0fA5UcRVlPRgB8rnI",
  },
};
