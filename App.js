import './ignoreWarning';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ContexteProvider } from '_utils';
import { Colors } from '_theme/Colors';

import Navigation from '_components/navigation/navigation';

export default function App() {
   return (
      <ContexteProvider>
         <SafeAreaProvider>
            <StatusBar backgroundColor={'white'} />
            <Navigation />
         </SafeAreaProvider>
      </ContexteProvider>
   );
}
