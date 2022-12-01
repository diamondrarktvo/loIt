import { Colors } from '_theme/Colors';
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
   view_container: {
      flex: 1,
   },
   image_bg_detail: {
      flex: 1,
      justifyContent: 'center',
   },
   info_in_landing_detail: {
      marginTop: Dimensions.get('window').height < 700 ? 210 : 280,
      marginLeft: 28,
   },
   description_section: {
      paddingHorizontal: 26,
      marginTop: 30,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      height: Dimensions.get('window').height < 700 ? '100%' : 480,
      backgroundColor: Colors.white,
   },
   boutton_add_favorite: {
      position: 'absolute',
      right: 25,
      top: -25,
      backgroundColor: Colors.whiteRose,
      width: 50,
      height: 50,
      padding: 10,
      borderRadius: 50,
   },
   all_button_in_detail_screen: {
      marginTop: Dimensions.get('window').height < 700 ? 10 : 12,
      marginBottom: Dimensions.get('window').height < 700 ? 14 : 46,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
   },
   button_in_detail: {
      textAlign: 'center',
      backgroundColor: Colors.whiteRose,
      paddingVertical: 10,
      width: 140,
      paddingHorizontal: 24,
      color: Colors.violet,
      borderRadius: 20,
      fontSize: 21,
      fontWeight: '800',
   },
});
