import React from "react";
import { createRoot } from "react-dom/client";
import { ThirdwebProvider, coinbaseWallet, embeddedWallet, metamaskWallet, phantomWallet, rainbowWallet, trustWallet, useAddress, zerionWallet } from "@thirdweb-dev/react";
import "./styles/globals.css";
import App from "./App";

const activeChain = "polygon"

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
      supportedWallets={[
        embeddedWallet(),
        metamaskWallet(),
        phantomWallet(),
        coinbaseWallet(),
        rainbowWallet(),
        trustWallet(),
        zerionWallet()
      ]}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);