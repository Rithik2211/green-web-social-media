import { useAddress } from '@thirdweb-dev/react';
import React from 'react';
import LandingPage from './pages/landing-page';
import { Login } from './pages';

function App(){
    const address = useAddress();
    return (
        <div >
            {
                address ? <LandingPage /> : <Login />
            }
        </div>
      ); 
}
export default App;