import { Colors } from '_theme/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      marginTop: 30,
      paddingHorizontal: 15,
      backgroundColor: Colors.background,
   },
   head_content: {
      height: 45,
      marginVertical: 10,
   },
   landing_screen: {
      marginTop: 20,
      height: 200,
      borderRadius: 25,
      backgroundColor: Colors.violet,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
   },
   content_in_landing_screen: {
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
   },
   icon_in_content_landing: {
      width: 62,
      height: 62,
      borderRadius: 62,
   },
});
