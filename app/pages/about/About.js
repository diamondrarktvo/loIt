import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Colors } from '_theme/Colors';
import { useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Icon } from '@rneui/themed';
import { Contexte } from '_utils';

export default function About({ navigation }) {
   const dispatch = useDispatch();

   return (
      <KeyboardAwareScrollView style={{ backgroundColor: Colors.background }}>
         <View style={styles.view_container}>
            <View style={styles.head_banniere}>
               <Text
                  style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 8 }}
               >
                  A propos
               </Text>
               <Image
                  style={styles.banniere_image}
                  source={require('_images/bg_loi.jpg')}
               />
               <Text
                  style={{
                     fontSize: 38,
                     fontWeight: 'bold',
                     marginVertical: 8,
                     color: Colors.violet,
                  }}
               >
                  LoIT
               </Text>
               <Text>Version 1.0.0</Text>
            </View>

            <View style={styles.view_content_about}>
               <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => alert('Politique de confidentialité')}
               >
                  <Text style={styles.button_link_about}>
                     Politique de confidentialité
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity activeOpacity={0.6}>
                  <Text
                     style={styles.button_link_about}
                     onPress={() => alert('Condition de service')}
                  >
                     Conditions de service
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => alert('Open source licenses')}
               >
                  <Text
                     style={[
                        styles.button_link_about,
                        { borderBottomWidth: 1 },
                     ]}
                  >
                     Open Source Licences
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </KeyboardAwareScrollView>
   );
}
