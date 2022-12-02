import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Colors } from '_theme/Colors';
import { useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Icon } from '@rneui/themed';
import { Contexte } from '_utils';
import { changeStatusUser } from '_utils/redux/actions/action_creators';

export default function Profil({ navigation }) {
   const dispatch = useDispatch();

   return (
      <KeyboardAwareScrollView style={{ backgroundColor: Colors.background }}>
         <View style={styles.view_container}>
            <View style={styles.head_profil}>
               <Image
                  style={styles.profil_image}
                  source={require('_images/profil.png')}
               />
               <Text style={styles.user_name}>Diamondra</Text>
            </View>
            <View style={styles.information_profil}>
               <Text style={styles.label_information_profil}>Prénom : </Text>
               <View style={styles.view_value_information}>
                  <Text style={styles.value_information_profil}>Diamondra</Text>
                  <Icon name={'verified'} color={'green'} />
               </View>

               <Text style={styles.label_information_profil}>
                  Lien vers compte facebook :{' '}
               </Text>
               <View style={styles.view_value_information}>
                  <Text style={styles.value_information_profil}>
                     /dama.rktvo
                  </Text>
                  <Icon name={'error'} color={Colors.orange} />
               </View>

               <Text style={styles.label_information_profil}>
                  Numéro télephone :{' '}
               </Text>
               <View style={styles.view_value_information}>
                  <Text style={styles.value_information_profil}>
                     034 92 956 84
                  </Text>
                  <Icon name={'verified'} color={'green'} />
               </View>

               <Text style={styles.label_information_profil}>Adresse : </Text>
               <View style={styles.view_value_information}>
                  <Text style={styles.value_information_profil}>
                     Amboditsiry
                  </Text>
                  <Icon name={'verified'} color={'green'} />
               </View>

               <Text style={styles.label_information_profil}>
                  Mot de passe :{' '}
               </Text>
               <View style={styles.view_value_information}>
                  <Text style={styles.value_information_profil}>
                     MotDePasse
                  </Text>
                  <Icon name={'verified'} color={'green'} />
               </View>
            </View>

            <View style={styles.footer_profil}>
               <View style={styles.action_bouton}>
                  <TouchableOpacity
                     activeOpacity={0.7}
                     style={[styles.bouton, { backgroundColor: Colors.orange }]}
                  >
                     <Text
                        style={[styles.action, { color: Colors.white }]}
                        onPress={() => dispatch(changeStatusUser())}
                     >
                        Déconnexion
                     </Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      </KeyboardAwareScrollView>
   );
}
