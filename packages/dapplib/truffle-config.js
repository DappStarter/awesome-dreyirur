require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note mushroom erosion just entire outer topic'; 
let testAccounts = [
"0xefbf210ede70d19778ffb6282e5d90f18b2a6e38578663d0b4b7e09555634a80",
"0x0b8bd57f433b6c3421212eeab19cfaa786def660d6c381f5e981932973f11f1e",
"0x16b0f4a1053530ef8936e8235d74d234a443597238a4ba96ee231b4a6e800859",
"0x86d8aa50e587513ef9e689feb6691fc7a9de7abedbfba0b6cbbe9acf96ab06a7",
"0x78952413e26912f2b7d9ec38e34250b2bc2fa264e44fefdee5fd3ca03802851b",
"0x7213c90c9a5bb4dbbf8bdcfcf365c36d0c463207e59f99882d189c7612a344f1",
"0xe31b81dc9df96ad0a230db8c7a74308726da6a9be5fae03ec7cd79193d89d39c",
"0x55f9f767c10e8954ef42fce0db0194e3767fea22855f1b2e8f50842ac32de7b5",
"0x693ac9a7474e6e6580e1e8de36a49424e273d4947afc1bfd62230c425ea536fa",
"0x5236fe159b7db49310c09e9229a0d1596b34da229d23169c1dd364116e54b63f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

