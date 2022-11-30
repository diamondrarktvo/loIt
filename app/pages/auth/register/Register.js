import {
   StyleSheet,
   Text,
   View,
   Image,
   TextInput,
   TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//import { Icon } from '@rneui/themed';
import { useState, useContext } from 'react';
import { Colors } from '_theme/Colors';
import { Contexte } from '_utils';
import styles from './styles';
import { AuthService } from '_utils/services/authService';

export default function Register({ navigation }) {
   const { isSigned, setIsSigned } = useContext(Contexte);
   const [loading, setLoading] = useState(false);
   const [erreur, setErreur] = useState(false);
   const [errormessage, setErrorMessage] = useState('');
   const [valueInput, setValueInput] = useState({
      nom: null,
      prenom: null,
      adresse: null,
      numero_telephone: null,
      facebook: null,
      mot_de_passe: null,
   });

   const onSubmit = () => {
      setLoading(true);
      try {
         AuthService.register(
            valueInput.nom,
            valueInput.prenom,
            valueInput.facebook,
            valueInput.adresse,
            valueInput.numero_telephone,
            valueInput.mot_de_passe
         ).then((response) => {
            if (response.status !== 200) {
               setLoading(false);
               setErreur(true);
               setErrorMessage('Email ou mot de passe incorrecte!');
            }
            console.log(response);
            setLoading(false);
         });
      } catch (error) {
         setErrorMessage('Erreur survenu au serveur');
         setLoading(false);
      }
   };

   return (
      <KeyboardAwareScrollView>
         <View style={styles.view_container}>
            <Image
               source={require('_images/signup.gif')}
               style={styles.register_image}
            />
            <View style={styles.view_formulaire}>
               <View style={styles.view_head_form}>
                  <Text style={styles.title_form}>Inscription</Text>

                  <Text style={styles.text_formulaire}>
                     Veuillez completer les informations
                  </Text>
               </View>
               <View
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  style={styles.view_input}
               >
                  <TextInput
                     style={styles.input}
                     keyboardType="default"
                     placeholder="Entrer votre nom ..."
                     onChangeText={(text) =>
                        setValueInput({ ...valueInput, nom: text })
                     }
                  />
                  {erreur && errormessage !== 'Erreur survenu au serveur' && (
                     <Text style={{ color: Colors.orange, marginLeft: 15 }}>
                        {errormessage}
                     </Text>
                  )}

                  <TextInput
                     style={styles.input}
                     keyboardType="default"
                     placeholder="Entrer votre prénom ..."
                     onChangeText={(text) =>
                        setValueInput({ ...valueInput, prenom: text })
                     }
                  />
                  {erreur && errormessage !== 'Erreur survenu au serveur' && (
                     <Text style={{ color: Colors.orange, marginLeft: 15 }}>
                        {errormessage}
                     </Text>
                  )}

                  <TextInput
                     style={styles.input}
                     keyboardType="default"
                     placeholder="Entrer votre adresse ..."
                     onChangeText={(text) =>
                        setValueInput({ ...valueInput, adresse: text })
                     }
                  />
                  {erreur && errormessage !== 'Erreur survenu au serveur' && (
                     <Text style={{ color: Colors.orange, marginLeft: 15 }}>
                        {errormessage}
                     </Text>
                  )}

                  <TextInput
                     style={styles.input}
                     keyboardType="phone-pad"
                     placeholder="Entrer votre numéro mobile ..."
                     onChangeText={(text) =>
                        setValueInput({ ...valueInput, numero_telephone: text })
                     }
                  />
                  {erreur && errormessage !== 'Erreur survenu au serveur' && (
                     <Text style={{ color: Colors.orange, marginLeft: 15 }}>
                        {errormessage}
                     </Text>
                  )}

                  <TextInput
                     style={styles.input}
                     keyboardType="url"
                     placeholder="Url vers votre profil facebook ..."
                     onChangeText={(text) =>
                        setValueInput({ ...valueInput, facebook: text })
                     }
                  />
                  {erreur && errormessage !== 'Erreur survenu au serveur' && (
                     <Text style={{ color: Colors.orange, marginLeft: 15 }}>
                        {errormessage}
                     </Text>
                  )}

                  <TextInput
                     style={styles.input}
                     keyboardType="default"
                     placeholder="Entrer votre mot de passe ..."
                     secureTextEntry={true}
                     onChangeText={(text) =>
                        setValueInput({ ...valueInput, mot_de_passe: text })
                     }
                  />
                  {erreur && errormessage !== 'Erreur survenu au serveur' && (
                     <Text style={{ color: Colors.orange, marginLeft: 15 }}>
                        {errormessage}
                     </Text>
                  )}

                  <TouchableOpacity style={styles.bouton_connexion}>
                     <Text
                        style={{
                           textAlign: 'center',
                           fontSize: 16,
                           fontWeight: 'bold',
                           color: Colors.white,
                        }}
                        onPress={() => onSubmit()}
                     >
                        {/* {loading ? 'Loading...' : "S'inscrire"} */}
                        S'inscrire
                     </Text>
                  </TouchableOpacity>

                  {erreur && (
                     <Text
                        style={{
                           color: Colors.orange,
                           textAlign: 'center',
                           marginBottom: 18,
                           fontWeight: 'bold',
                        }}
                     >
                        {errormessage}
                     </Text>
                  )}

                  <Text style={{ textAlign: 'center', marginBottom: 38 }}>
                     Vous avez déjà un compte?{' '}
                     <Text
                        style={{ color: Colors.blue, fontWeight: 'bold' }}
                        onPress={() => navigation.navigate('Login')}
                     >
                        Se connecter
                     </Text>
                  </Text>
               </View>
            </View>
         </View>
      </KeyboardAwareScrollView>
   );
}
