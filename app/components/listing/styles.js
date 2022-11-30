import { Colors } from '_theme/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      marginTop: 30,
      paddingBottom: 70,
      paddingHorizontal: 15,
      backgroundColor: Colors.background,
   },
   head_content: {
      height: 45,
      marginVertical: 10,
   },
   view_renderItem: {
      height: 150,
      color: Colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
      marginHorizontal: 12,
      borderRadius: 32,
      paddingHorizontal: 18,
   },
   contact_information: {
      flexDirection: 'column',
      marginLeft: 10,
   },
   image: {
      height: 100,
      width: 100,
   },
   view_nom: {
      flexDirection: 'row',
   },
   nom: {
      flex: 1,
      flexWrap: 'wrap',
      fontSize: 24,
      color: Colors.black,
      fontWeight: '600',
   },
   numero: {
      fontSize: 18,
   },
   adresse: {
      fontSize: 18,
   },
   container_safe: {
      flex: 1,
   },
   icon: {
      top: -210,
      right: -80,
   },
   bouton_ajout: {
      position: 'absolute',
      bottom: 80,
      right: 26,
      backgroundColor: 'rgba(31, 84, 211, 0.8)',
      borderRadius: 60,
   },
});
