require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note pumpkin coast hockey process front tattoo'; 
let testAccounts = [
"0x42dbf15ed5853573628ab15d1eed8c0fa8c1204108f778def0fa856e5ebe3a2f",
"0x9a57896157894f131be57d57bc57547cf4f726c09f8b3b9dd5b53293b5a2d665",
"0x2de739558b9ed9a6f76cf5e2c6a71f8566b6ac3a234684ea5a9e69f05baf8e26",
"0x81c1a10703f1de898919da0c4a31b90a2b8d3ba5e645c5272cbeed3596a4df31",
"0x9dd93c27f7249b597e438df891cd7f409397e7348cda7d63286fc9eca2f60875",
"0x6a886d234bdf16bfeb54e0cc0e60c64e2d38c115ae131be7b9ee1bae25113d00",
"0x7f0b74ce212a656d71f10bf30d120108882fc1c719425f217712c6e429ff4e25",
"0xcd9f303054c93c094b87ea4381fd0b0a9b6c7ab3afc1e14ee53fddd5cee5329f",
"0xcdffd5eae4bdfb42e434bc8787406f9449ae47f626953b894a346dbb9c28416c",
"0xca475bf0d8469fbe853e7c7e67f5beeb0efc9aa0ef2be061fa7148719da8cb74"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


