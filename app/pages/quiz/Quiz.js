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

export default function Quiz({ navigation }) {
   return (
      <View style={styles.view_container}>
         <View style={styles.head_content}>
            <HeaderGlobal navigation={navigation} />
         </View>
         <View>
            <Text>Quiz screen</Text>
         </View>
      </View>
   );
}
