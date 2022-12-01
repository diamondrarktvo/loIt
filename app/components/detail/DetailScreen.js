import {
   View,
   Text,
   StyleSheet,
   FlatList,
   Image,
   Modal,
   SafeAreaView,
   TouchableOpacity,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Icon } from '@rneui/themed';

import HeaderGlobal from '_components/header/HeaderGlobal';
import { Colors } from '_theme/Colors';

export default function Detail({ navigation, route }) {
   return (
      <View style={styles.view_container}>
         <SafeAreaView style={styles.container_safe}>
            <Text>Détail de ce loi</Text>
         </SafeAreaView>
      </View>
   );
}
