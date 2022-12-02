import {
   View,
   Text,
   StyleSheet,
   FlatList,
   Image,
   SafeAreaView,
   Dimensions,
   TouchableOpacity,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { nameStackNavigation as nameNav } from '_utils/constante/NameStackNavigation';
import { styles } from './styles';
import { Icon } from '@rneui/themed';
import { useSelector } from 'react-redux';

import { Colors } from '_theme/Colors';
import { Types } from '_utils';

export default function ListingTypes({ navigation, route }) {
   const dataForFlatList = useSelector((selector) => selector.article.types);
   const _renderItem = ({ item }) => {
      return (
         <View style={styles.view_render} key={item.id}>
            <TouchableOpacity
               onPress={() => {
                  navigation.navigate(nameNav.listPage, {
                     titleScreen: `${item.nom}`,
                     type: item.nom,
                     theme: route.params.domaine,
                  });
               }}
            >
               <Image
                  style={styles.poster_catg}
                  source={require('_images/book_loi.jpg')}
               />
               <View
                  style={[StyleSheet.absoluteFillObject, styles.maskImageCatg]}
               ></View>
               <Text style={[StyleSheet.absoluteFillObject, styles.nom_catg]}>
                  {item.nom}
               </Text>
            </TouchableOpacity>
         </View>
      );
   };

   const _idKeyExtractor = (item, index) =>
      item?.id == null ? index.toString() : item.id.toString();

   return (
      <View style={styles.view_container_ctg}>
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
               numColumns={2}
            />
         </SafeAreaView>
      </View>
   );
}
