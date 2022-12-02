import { Icon } from '@rneui/base';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '_theme/Colors';
import {
   Menu,
   MenuOptions,
   MenuOption,
   MenuTrigger,
} from 'react-native-popup-menu';

const MenuOptionCustom = ({ text, icone }) => {
   return (
      <View
         style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
         }}
      >
         <Text style={{ fontSize: 22 }}>{text}</Text>
         <Icon name={icone} color={Colors.violet} size={20} />
      </View>
   );
};

export default function HeaderGlobal({ navigation }) {
   return (
      <View style={styles.container}>
         <Text style={styles.titre_salutation}>Bienvenue sur loIT !</Text>
         <TouchableOpacity activeOpacity={0.7}>
            <Menu>
               {/* <MenuTrigger text="Select" /> */}
               <MenuTrigger customStyles={{}}>
                  <Icon name={'widgets'} color={Colors.violet} size={34} />
               </MenuTrigger>
               <MenuOptions
                  customStyles={{
                     optionsContainer: {
                        padding: 8,
                     },
                     optionText: {
                        fontSize: 22,
                     },
                  }}
               >
                  <MenuOption onSelect={() => alert(`Save`)} text="Save" />
                  <MenuOption onSelect={() => alert(`Delete`)}>
                     <MenuOptionCustom text="Français" icone="flag" />
                  </MenuOption>
                  <MenuOption
                     onSelect={() => alert(`Not called`)}
                     disabled={true}
                     text="Disabled"
                  />
               </MenuOptions>
            </Menu>
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
});
