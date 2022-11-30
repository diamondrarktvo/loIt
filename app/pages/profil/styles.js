import { Colors } from '_theme/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      marginTop: 30,
      paddingTop: 20,
      paddingHorizontal: 15,
      backgroundColor: Colors.background,
   },
   head_profil: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
   },
   profil_image: {
      width: 150,
      height: 150,
   },
   user_name: {
      fontSize: 28,
      fontWeight: 'bold',
   },
   information_profil: {
      flex: 2,
   },
   label_information_profil: {
      color: Colors.grey,
      fontSize: 16,
      marginTop: 30,
   },
   value_information_profil: {
      color: Colors.black,
      fontWeight: 'bold',
      fontSize: 18,
   },
   view_value_information: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      borderBottomWidth: 1,
      borderBottomColor: Colors.grey,
   },
   validation_value: {
      color: 'green',
   },
   footer_profil: {
      flex: 1,
   },
   action: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
   },
   action_bouton: {
      marginVertical: 28,
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'space-around',
   },
   bouton: {
      padding: 15,
      borderRadius: 25,
      width: 250,
      marginTop: 25,
   },
});
