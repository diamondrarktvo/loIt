import { Colors } from '_theme/Colors';
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
   view_container_search: {
      flex: 1,
      marginTop: 30,
      paddingBottom: 300,
      paddingHorizontal: 15,
      backgroundColor: Colors.baackground,
   },
   head_content: {
      marginTop: 14,
      marginBottom: 6,
   },
   view_instruction_for_vocal_search: {
      backgroundColor: Colors.whiteRose,
      padding: 20,
      marginVertical: 16,
   },
   view_for_input_search: {
      display: 'flex',
      flexDirection: 'row',
   },
   input: {
      borderWidth: 1,
      padding: 16,
      width: Dimensions.get('window').width < 700 ? 270 : 300,
      borderRightWidth: 0,
   },
   boutton_search: {
      borderWidth: 1,
      width: 60,
      padding: 16,
      borderLeftWidth: 0,
   },
   view_render: {
      marginVertical: 8,
      display: 'flex',
      flexDirection: 'row',
   },
});
