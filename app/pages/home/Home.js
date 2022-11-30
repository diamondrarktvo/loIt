import { View, Text, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Icon } from '@rneui/themed';

import HeaderGlobal from '_components/header/HeaderGlobal';
import { Contexte } from '_utils';
import { Colors } from '_theme/Colors';
import { useState, useContext, useEffect } from 'react';
import { useGetLocation } from '_utils/hooks/useGetLocation';

export default function Home({ navigation }) {
   //all states
   const { position, errorMsgLocation } = useContext(Contexte);

   //all logics
   const getMyPosition = () => {
      if (errorMsgLocation) {
         console.log(errorMsgLocation);
      } else {
         console.log(position);
      }
   };

   //all efects

   return (
      <KeyboardAwareScrollView style={{ backgroundColor: Colors.background }}>
         <View style={styles.view_container}>
            <View style={styles.head_content}>
               <HeaderGlobal navigation={navigation} />
            </View>

            <View style={styles.landing_screen}>
               <Text style={styles.text_landing_screen}>
                  La loi nous libère
               </Text>
               <View style={styles.content_in_landing_screen}>
                  <Image
                     style={styles.icon_in_content_landing}
                     source={require('_images/book_loi.jpg')}
                  />
                  <View style={{ display: 'flex', flexDirection: 'column' }}>
                     <Text>Adventure</Text>
                     <Text>Continue de lire</Text>
                  </View>
               </View>
            </View>
         </View>
      </KeyboardAwareScrollView>
   );
}
