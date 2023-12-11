import { LensConfig, development } from '@lens-protocol/react-native';
import { bindings as wagmiBindings } from '@lens-protocol/wagmi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  environment: development,
  storage: AsyncStorage,
};

export { lensConfig };