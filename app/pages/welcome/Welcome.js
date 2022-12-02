import { useRef } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { Colors } from '_theme/Colors';
import LottieView from 'lottie-react-native';

export default function Login({ navigation }) {
   const animation = useRef(null);
   return (
      <View style={styles.view_container_welcome}>
         <LottieView
            autoPlay
            ref={animation}
            style={{
               width: 200,
               height: 200,
               backgroundColor: '#eee',
            }}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require('_images/read.json')}
         />
      </View>
   );
}
