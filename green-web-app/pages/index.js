// import { ConnectWallet } from "@thirdweb-dev/react";
import { Explore, DashBoard, Messages, Notification } from './pages/index';
import NavBar from './components/navigation-bar';
export default function Home() {
  return (
    <div>
      <NavBar />
      <DashBoard />
      <Explore />
      <Notification />
      <Messages />
    </div>
  );
}
