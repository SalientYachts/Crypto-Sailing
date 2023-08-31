import * as React from 'react'
import { useEffect, useMemo, useState, } from "react";
import {

    useContractMetadata,
    useNetwork,
    useActiveClaimCondition,
    useNFT,
    ThirdwebNftMedia,
    useAddress,
    useMetamask,
    useNetworkMismatch,
    useClaimNFT,
    useDisconnect,
    useMagic,
    MediaRenderer,
    useWalletConnect,
    useTrustWallet,
    useConnect, useSmartWallet,
    coinbaseWallet, trustWallet, useWallet
} from "@thirdweb-dev/react";

import { Login2 } from "./login2";
import { Button, Container, Group, Menu, Modal, TextInput, CopyButton, Select, NativeSelect, Image, ThemeIcon, Box } from "@mantine/core";

import trustIcon from "../Assets/logos/trustwallet.svg"
import smartwalletIcon from "../Assets/logos/smart-wallet.svg"
import MetaMaskIcon from "../Assets/logos/metamask-fox.svg"
import WalletConnectIcon from "../Assets/logos/walletconnect-logo.svg"
import CoinbaseIcon from "../Assets/logos/coinbase-wallet-logo.svg"
import MagicIcon from "../Assets/logos/magic-logo.svg"
import { BsArrowDownCircle } from "react-icons/bs";
import { FaCheck, FaTimes, FaCopy } from "react-icons/fa";
import { HiClipboardCheck, HiClipboardCopy } from 'react-icons/hi';
//import { useWeb3 } from '../../Components/web3/useWeb3';
import { AiOutlineDisconnect } from 'react-icons/ai';
import { SmartWallet, LocalWallet } from "@thirdweb-dev/wallets";
import {
    ACCOUNT_ABI,
    THIRDWEB_API_KEY,
    chain,
    factoryAddress,
} from "../lib/constants";

import { connectToSmartWallet } from "../lib/wallet";
import styles from "../styles/Home.module.css";
import { Blocks } from "react-loader-spinner";
import { Connected } from "./connected";
import Footer from "./Footer";
import logo from '../Assets/logo.png'


const emailRegex = /\S+@\S+\.\S+/


export default function SYWallet({ signer, setSigner, setUsername, username}) {

    const coinbaseConfig = coinbaseWallet(
        {
            qrmodal: "coinbase",
        },
    );
    const trustWalletConfig = trustWallet({
        projectId: "59c6e116e5446dd44429ff0eb9cac01e",
    });
    const connect = useConnect();

    const [network, switchNetwork] = useNetwork();

    const address = useAddress(); // Hook to grab the currently connected user's address.
    const connectWithMagic = useMagic(); // Hook to connect with Magic Link.
    const connectWithWalletConnect = useWalletConnect();
    const connectWithCoinbaseWallet = async () => {
        await connect(coinbaseConfig);
    };
    const connectWithMetamask = useMetamask();
    const connectTrustWallet = useWalletConnect();
    const disconnect = useDisconnect(); // Hook to disconnect from the connected wallet.

    const [email, setEmail] = useState(""); // State to hold the email address the user entered.
    const [validEmail, setValidEmail] = useState(false);
    const [modal1Opened, setModal1Opened] = useState(false);
    const DiffIcon2 = validEmail ? FaCheck : FaTimes;

    const getEllipsisTxt = (str, n = 6) => {
        if (str) {
            return `${str.substr(0, n)}.....${str.substr(str.length - n, str.length)}`;
        }
        return "";
    };


    useEffect(() => {
        setValidEmail(emailRegex.test(email));
    }, [email])


    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );


    const [logged, setLogged] = useState<any>(false);
    
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [loadingStatus, setLoadingStatus] = useState("");
    const [error, setError] = useState("");

    const connectWallet = async () => {
        if (!username || !password) return;
        try {
            setIsLoading(true);
            const wallet = await connectToSmartWallet(username, password, (status) =>
                setLoadingStatus(status)
            );
            const s = await wallet.getSigner();
            setSigner(s);
           
            setIsLoading(false);
            await delay(3000);
            setLogged(true)
            setModal1Opened(false)

        } catch (e) {
            setIsLoading(false);
            console.error(e);
            setError((e as any).message);
        }


    };









    return (

        <><Modal
            centered
            opened={modal1Opened}
            onClose={() => setModal1Opened(false)}
            title="Connect with Username and password"
        >



            {logged ? (
                <>
                    You are connected!
                    
                </>
               
            ) : isLoading ? (
                <div className={styles.filler}>
                    <Blocks
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                    />
                    <p className={styles.label} style={{ textAlign: "center" }}>
                        {loadingStatus}
                    </p>
                </div>
            ) : error ? (
                <div className={styles.filler}>
                    <p className={styles.label} style={{ textAlign: "center" }}>
                        ❌ {error}
                    </p>
                    <button className={styles.button} onClick={() => setError("")}>
                        Try again Username already exists or wrong password was used
                    </button>
                </div>
            ) : (
                <>
                    <div className={styles.row_center} style={{ marginTop: "2rem", marginBottom: "20px" }}>
                        <a href="https://salientyachts.com">
                            <img src={logo} className={styles.logo} alt="logo" />
                        </a>
                        <h3>Login using ERC-4337 Account abstraction!</h3>
                    </div>
                    <div className={styles.filler}>
                        <input
                            type="text"
                            placeholder="Username"
                            className={styles.input}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className={styles.button} onClick={() => connectWallet()}>
                            Login
                        </button>
                    </div>

                </>
            )}


        </Modal>

            <Menu
                withArrow
                shadow="md"
                width={240}
            >
                <Menu.Target>
                    <Button sx={{ justifyContent: 'space-between', height: '50px', width: '250px', color: 'black', backgroundColor: "#1fc7d3" }}
                        //rightIcon={<BsArrowDownCircle style={{ marginLeft: '5px' }} size={24} />}
                        radius="xl"

                    >

                        <Group
                            sx={{ justifyContent: 'space-between', width: '250px', }}
                        >
                            {/* <Image
                            src={}
                              /> */}

                            {address ? (
                                <p> Your Address: <br /> {getEllipsisTxt(address, 7)}</p>
                            ) : (
                                <p>Connect Wallet</p>
                            )}

                            <BsArrowDownCircle style={{ marginLeft: '5px' }} size={24} />
                        </Group>
                    </Button>
                </Menu.Target>

                <Menu.Dropdown>
                    <Box style={{ textAlignLast: 'left' }}>
                        {address ? (

                            <div>
                                <CopyButton value={address}>
                                    {({ copied, copy }) => (
                                        <Button mt={15}
                                            sx={{ width: '230px', }}
                                            color={copied ? 'teal' : 'blue'}
                                            onClick={copy}
                                            radius="xl"
                                            variant='subtle'
                                            leftIcon={copied ? <HiClipboardCheck size={20} /> : <HiClipboardCopy size={20} />}
                                        >
                                            {copied ? 'Copied address' : 'Copy address'}
                                        </Button>
                                    )}
                                </CopyButton>

                                <Button mt={15}
                                    sx={{ width: '230px', }}
                                    color={'blue'}
                                    onClick={disconnect}
                                    radius="xl"
                                    variant='subtle'
                                    leftIcon={<AiOutlineDisconnect size={20} />}
                                >
                                    Disconnect Wallet
                                </Button>
                            </div>
                        ) : (
                            <Box sx={{ textAlign: "left" }}>
                                <div >
                                    <Menu.Label>Smart Local Wallet</Menu.Label>
                                    <Menu.Item icon={<img width={35} height={18} src={smartwalletIcon} />}
                                        onClick={() => setModal1Opened(true)}
                                    >
                                        Smart Wallet</Menu.Item>

                                    <Menu.Divider />

                                    <Menu.Label>Web3 Wallets</Menu.Label>
                                    <Menu.Item icon={<img width={35} height={18} src={MetaMaskIcon} />}
                                        onClick={() => { connectWithMetamask }}>
                                        MetaMask
                                    </Menu.Item>
                                    <Menu.Item icon={<img width={35} height={18} src={CoinbaseIcon} />}
                                        onClick={() => { connectWithCoinbaseWallet }}>
                                        Coinbase Wallet
                                    </Menu.Item>
                                    <Menu.Item icon={<img width={35} height={18} src={WalletConnectIcon} />}
                                        onClick={() => { connectWithWalletConnect }}>
                                        Wallet Connect
                                    </Menu.Item>
                                    <Menu.Item icon={<img width={35} height={18} src={trustIcon} />}
                                        onClick={() => { connectTrustWallet }}>
                                        TrustWallet
                                    </Menu.Item>




                                </div>
                            </Box>
                        )}
                    </Box>
                </Menu.Dropdown>
            </Menu>




                            {logged ? (
                                <p>Logged</p>
                            ) : (
                                <p>Not Logged</p>
                            )}

</>
    )
}