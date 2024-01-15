# web3-cross-platform-lens

This repository showcases how to build a modern cross-platform (web / iOS / Android) dApp on [Lens Protocol](https://www.lens.xyz/) with [Expo](https://expo.dev), [React Native for Web](https://necolas.github.io/react-native-web/), [wagmi](https://wagmi.sh) and [WalletConnect's Web3Modal](https://docs.walletconnect.com/web3modal/about)

Read the article for a more detailed explanation: [How to Build Universal Lens Protocol Social Apps With React Native](https://www.callstack.com/blog/how-to-build-universal-lens-protocol-social-apps-with-react-native)

![demo.gif](demo.gif)

## Requirements

- [Expo environment setup](https://docs.expo.dev/get-started/installation/#requirements) (Node.js, Git, Watchman)
- A [Wallet Connect Cloud](https://cloud.walletconnect.com/sign-in) project ID
- Expo Go app installed in your smartphone
- One or more web3 wallets installed in your smartphone (e.g. MetaMask, Rainbow Wallet, Trust Wallet, etc)
- One or more web3 wallets installed in your browser (e.g. MetaMask, Rainbow Wallet, Trust Wallet, etc)

## How to run

- Rename `.env.example` to `.env` and fill in your Wallet Connect Cloud project ID
- `yarn install`

### Mobile
- `yarn start`
- Open Expo Go app in your smartphone
- If your smartphone is in the same network as your computer, the local dev server should appear as the first option. If it doesn't, use the app to scan the QR Code presented in the terminal

### Web
- `yarn web`
- Open `http://localhost:19006/`
