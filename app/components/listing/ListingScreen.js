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

export default function Listing({ navigation, route }) {
   const dataForFlatList = route.params.dataToList;
   console.log(dataForFlatList)
   //all logics
   const _renderItem = useCallback(({ item }) => {
      return (
         <View
            style={styles.view_render}
            onPress={() => {
                     navigation.navigate(nameNav.detailPage, {
                        titleScreen: "Détails sur cette loi",
                        idToViewDetail: item.id
                     });
                  }} 
         >  
            <Text>{item.txt_description} </Text>
         </View>
      );
   }, []);

   const _idKeyExtractor = (item, index) =>
      item?.id == null ? index.toString() : item.id.toString();

   return (
      <View style={styles.view_container}>
         <SafeAreaView style={styles.container_safe}>
            <FlatList
               data={dataForFlatList}
               key={'_'}
               keyExtractor={_idKeyExtractor}
               renderItem={_renderItem}
               removeClippedSubviews={true}
               getItemLayout={(data, index) => ({
                  length: data.length,
                  offset: data.length * index,
                  index,
               })}
               initialNumToRender={5}
               maxToRenderPerBatch={3}
            />
         </SafeAreaView>
      </View>
   );
}
