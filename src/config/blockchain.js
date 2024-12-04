// EXTSY Token Contract Addresses
export const TOKEN_ADDRESSES = {
  1: '0x...', // Ethereum Mainnet (To be deployed)
  137: '0x...', // Polygon Mainnet (To be deployed)
  80001: '0x...', // Mumbai Testnet (To be deployed)
};

// Contract ABIs
export const TOKEN_ABI = [
  // ERC20 Standard Interface
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint256)',
  'function transfer(address to, uint amount) returns (bool)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint amount) returns (bool)',
  'function transferFrom(address from, address to, uint amount) returns (bool)',
  // Custom EXTSY Functions
  'function stakeTime(uint256 duration) returns (bool)',
  'function unstake() returns (bool)',
  'function getTimeStaked(address account) view returns (uint256)',
  'function getRewards(address account) view returns (uint256)',
  // Events
  'event Transfer(address indexed from, address indexed to, uint amount)',
  'event Approval(address indexed owner, address indexed spender, uint amount)',
  'event TimeStaked(address indexed user, uint256 duration)',
  'event TimeUnstaked(address indexed user, uint256 reward)'
];

// RPC URLs
export const RPC_URLS = {
  1: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  137: 'https://polygon-rpc.com',
  80001: 'https://rpc-mumbai.maticvigil.com',
};

// Network Configurations
export const NETWORKS = {
  1: {
    name: 'Ethereum Mainnet',
    symbol: 'ETH',
    explorer: 'https://etherscan.io',
  },
  137: {
    name: 'Polygon',
    symbol: 'MATIC',
    explorer: 'https://polygonscan.com',
  },
  80001: {
    name: 'Mumbai Testnet',
    symbol: 'MATIC',
    explorer: 'https://mumbai.polygonscan.com',
  },
};

// Default Network
export const DEFAULT_CHAIN_ID = 80001; // Mumbai Testnet

// Time Staking Configurations
export const STAKING_PERIODS = [
  { label: '1 Week', value: 7 * 24 * 60 * 60 },
  { label: '1 Month', value: 30 * 24 * 60 * 60 },
  { label: '3 Months', value: 90 * 24 * 60 * 60 },
  { label: '6 Months', value: 180 * 24 * 60 * 60 },
  { label: '1 Year', value: 365 * 24 * 60 * 60 },
];
