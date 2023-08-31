import {
  SmartContract,
  ThirdwebNftMedia,
  ThirdwebSDKProvider,
  useAddress,
  useClaimNFT,
  useClaimedNFTSupply,
  useContract,
  useOwnedNFTs,
  useTotalCirculatingSupply,
  useTransferNFT,
} from "@thirdweb-dev/react";
import { Signer } from "ethers";
import { YACHT_CONTRACT, THIRDWEB_API_KEY, chain } from "../lib/constants";
import styles from "../styles/Home.module.css";
import { shortenIfAddress } from "../lib/addresses";
import { Blocks } from "react-loader-spinner";
import { useState } from "react";
import { Box, Button, Container } from "@mantine/core";
import { LocalWallet } from "@thirdweb-dev/wallets";

export const Connected = ({
  username,
  signer,
}: {
  username: string;
  signer: Signer;
}) => {
  return (
    <ThirdwebSDKProvider
      signer={signer}
      activeChain={chain}
      clientId={THIRDWEB_API_KEY || ""}
    >
      <ConnectedInner username={username} />
    </ThirdwebSDKProvider>
  );
};

const ConnectedInner = ({ username }: { username: string }) => {
  const address = useAddress();
  const { contract } = useContract(YACHT_CONTRACT);
  const { mutate: claim, isLoading: claimLoading } = useClaimNFT(contract);
  const { mutate: transfer, isLoading: transferLoading } =
    useTransferNFT(contract);
  const {
    data: ownedNFTs,
    isLoading: nftsLoading,
    refetch,
  } = useOwnedNFTs(contract, address);
  const [transferTo, setTransferTo] = useState("");



//   const exportWallet = async () => {
//     await wallet.export({
//       strategy: "encryptedJson",
//       password: "password",
//     });
// };


  return (
    <Container sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h4 className={styles.title} style={{ marginTop: "2rem" }}>
        Welcome <br />
        <span className={styles.gradientText1}>{username}</span>
      </h4>
      <hr className={styles.divider} />
      <p className={styles.label}>
        Smart Wallet Address:{" "}
        
          {shortenIfAddress(address)}
       
      </p>

      <Box sx={{width: "300px", textAlign: "center"}}>
            <p >Buy a Yacht NFT</p>
            <button
              className={styles.button}
              onClick={() =>
                claim(
                  {
                    quantity: 1,
                    tokenId: 0,
                  },
                  {
                    onSuccess: async () => {
                      alert("Claim successful");
                      // wait for 1 sec before refetching
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      await refetch();
                    },
                    onError: (err) => {
                      let reason = (err as any).reason || err;
                      if (reason == "!Qty") {
                        reason = "Already claimed max number of NFTs!";
                      }
                      alert(reason);
                    },
                  }
                )
              }
            >
              Buy $0.10 USDC
            </button>
          </Box>


      {/* <Button
      onClick={() => exportWallet()}
      >
        Export Wallet</Button> */}
      <div className={styles.filler}>
        {nftsLoading || claimLoading || transferLoading ? (
          <>
            <Blocks
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
            />
            <p>
              {nftsLoading
                ? "Loading your account..."
                : claimLoading
                ? "Claiming..."
                : "Transfering..."}
            </p>
          </>
        ) : ownedNFTs && ownedNFTs.length > 0 ? (
          <>
            <ThirdwebNftMedia metadata={ownedNFTs[0].metadata} />
            <p>You own {ownedNFTs[0].quantityOwned}</p>
            <p className={styles.description} style={{ fontWeight: "bold" }}>
              Yacht NFTs
            </p>
            <p style={{ color: "#999" }}>
              view on{" "}
              <a
                href={`https://testnets.opensea.io/assets/base-goerli/${YACHT_CONTRACT.toLowerCase()}/${
                  ownedNFTs[0].metadata.id
                }`}
                target="_blank"
              >
                OpenSea
              </a>
            </p>

            <hr className={styles.divider} />
            <div className={styles.row_center} style={{ width: "100%" }}>
              <input
                type="text"
                placeholder="Wallet address / ENS"
                className={styles.input}
                style={{ borderRadius: "5px 0 0 5px" }}
                value={transferTo}
                onChange={(e) => setTransferTo(e.target.value)}
              />
              <button
                className={styles.button}
                style={{
                  marginTop: 0,
                  width: "130px",
                  borderRadius: "0 5px 5px 0",
                }}
                onClick={() =>
                  transfer(
                    {
                      to: transferTo,
                      tokenId: ownedNFTs[0].metadata.id,
                      amount: 1,
                    },
                    {
                      onSuccess: async () => {
                        alert("Transfer successful");
                        // wait for 1 sec before refetching
                        await new Promise((resolve) =>
                          setTimeout(resolve, 1000)
                        );
                        await refetch();
                      },
                      onError: (err) => alert((err as any).reason || err),
                    }
                  )
                }
              >
                Transfer
              </button>
            </div>
          </>
        ) : (
          <>
            <p className={styles.description}>Claim your Yacht NFT</p>
            <button
              className={styles.button}
              onClick={() =>
                claim(
                  {
                    quantity: 1,
                    tokenId: 0,
                  },
                  {
                    onSuccess: async () => {
                      alert("Claim successful");
                      // wait for 1 sec before refetching
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      await refetch();
                    },
                    onError: (err) => {
                      let reason = (err as any).reason || err;
                      if (reason == "!Qty") {
                        reason = "Already claimed max number of NFTs!";
                      }
                      alert(reason);
                    },
                  }
                )
              }
            >
              Claim
            </button>
          </>
        )}
      </div>
      <TotalClaimed contract={contract} />
    </Container>
  );
};

const TotalClaimed = ({
  contract,
}: {
  contract: SmartContract | undefined;
}) => {
  const { data: totalClaimed } = useTotalCirculatingSupply(contract, 0);
  return (
    <div className={styles.column_center} style={{ marginBottom: "2rem" }}>
      <p style={{ color: "#999" }}>
        <b>{totalClaimed?.toString() || "-"}</b> Yacht NFTs have been claimed
      </p>
      <p className={styles.label} style={{ color: "#999", marginTop: "5px" }}>
        Contract:{" "}
        <a
          href={`https://mumbai.polygonscan.com/token/0x05e32a6da695923d064ffd94053321fdbad573ed`}
          target="_blank"
        >
          {shortenIfAddress(YACHT_CONTRACT)}
        </a>
      </p>
    </div>
  );
};
