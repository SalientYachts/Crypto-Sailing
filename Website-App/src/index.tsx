import React, { useState } from "react";
import ReactDOM, { createRoot } from 'react-dom/client';
import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import { Chain, coinbaseWallet, metamaskWallet, paperWallet, smartWallet, ThirdwebProvider, trustWallet, walletConnect, localWallet } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { BrowserRouter } from "react-router-dom";





// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={activeChain}
      clientId="bf20f3e2e5d78187198b1dd6d8f041e1"
      
      supportedWallets={[
        smartWallet({
          factoryAddress: "0x455E3aDf624E4D0cA08d3E0cBAe98f65732E566E",
          gasless: true,
          personalWallets: [
            localWallet(),
       

          ],
        }),
        metamaskWallet(),
        trustWallet(),
        coinbaseWallet(),
        walletConnect(),
        
        
        //localWallet(),
        // paperWallet({
        //   paperClientId: "0de80401-e129-42f4-9de3-36f500a857c4",
        // }),
        
      ]}

    >
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
