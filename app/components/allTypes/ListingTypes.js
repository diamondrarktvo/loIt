import {
   View,
   Text,
   StyleSheet,
   FlatList,
   Image,
   Modal,
   SafeAreaView,
   Dimensions,
   TouchableOpacity,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { nameStackNavigation as nameNav } from '_utils/constante/NameStackNavigation';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Icon } from '@rneui/themed';

import HeaderGlobal from '_components/header/HeaderGlobal';
import { Colors } from '_theme/Colors';
import { Types } from '_utils';

export default function ListingTypes({ navigation, route }) {
   const allCatgByTypes = Types.filter(
      (item) => item.categorie === route.params.domaine
   );
   const dataForFlatList = allCatgByTypes;
   const _renderItem = ({ item }) => {
      return (
         <View style={styles.view_render} key={item.id}>
            <TouchableOpacity
               onPress={() => {
                  navigation.navigate(nameNav.listPage, {
                     titleScreen: `${item.txt_description}`,
                     categorie: item.categorie,
                  });
               }}
            >
               <Image style={styles.poster_catg} source={item.poster_catg} />
               <View
                  style={[StyleSheet.absoluteFillObject, styles.maskImageCatg]}
               ></View>
               <Text style={[StyleSheet.absoluteFillObject, styles.nom_catg]}>
                  {item.txt_description}
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
