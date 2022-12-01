import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '_theme/Colors';

export default function HeaderGlobal({ navigation }) {
   return (
      <View style={styles.container}>
         <Text style={styles.titre_salutation}>Salut, Dama!</Text>
         <TouchableOpacity activeOpacity={0.7}>
            <Text
               style={styles.icon_user}
               onPress={() => {
                  navigation.navigate('Profil');
               }}
            >
               D
            </Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      marginVertical: 5,
      marginHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
   },
   titre_salutation: {
      color: Colors.black,
      fontSize: 26,
      fontWeight: 'bold',
   },
   icon_user: {
      backgroundColor: Colors.violet,
      fontSize: 28,
      paddingVertical: 2,
      fontWeight: 'bold',
      width: 40,
      height: 40,
      textAlign: 'center',
      borderRadius: 40,
      color: Colors.white,
   },
});
