import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Web3ReactProvider, initializeConnector } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Web3ContextProvider } from './contexts/Web3Context';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import Roadmap from './components/Roadmap';
import Rewards from './components/Rewards';

const [metaMask, hooks] = initializeConnector((actions) => new MetaMask({ actions }));

function App() {
  return (
    <Web3ReactProvider connectors={[[metaMask, hooks]]}>
      <Web3ContextProvider>
        <ChakraProvider theme={theme}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tokenomics" element={<Tokenomics />} />
              <Route path="/how-to-buy" element={<HowToBuy />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/rewards" element={<Rewards />} />
            </Routes>
            <Footer />
          </Router>
        </ChakraProvider>
      </Web3ContextProvider>
    </Web3ReactProvider>
  );
}

export default App;
