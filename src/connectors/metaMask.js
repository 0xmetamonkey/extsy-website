import { InjectedConnector } from '@web3-react/injected-connector';

export const metaMask = new InjectedConnector({
  supportedChainIds: [1, 137, 80001] // Mainnet, Polygon, Mumbai
});
