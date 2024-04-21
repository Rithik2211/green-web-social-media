import React from "react";
import { createRoot } from "react-dom/client";
import { ThirdwebProvider, coinbaseWallet, embeddedWallet, metamaskWallet, phantomWallet, rainbowWallet, trustWallet, zerionWallet } from "@thirdweb-dev/react";
import "./styles/globals.css";
import LandingPage from './pages/landing-page';

const activeChain = "polygon";

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
      <LandingPage />
    </ThirdwebProvider>
  </React.StrictMode>
);