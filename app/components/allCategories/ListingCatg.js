import {
   View,
   Text,
   StyleSheet,
   FlatList,
   Image,
   SafeAreaView,
   TouchableOpacity,
} from 'react-native';
import React from 'react';
import { nameStackNavigation as nameNav } from '_utils/constante/NameStackNavigation';
import { styles } from './styles';
import { Icon } from '@rneui/themed';

import { Colors } from '_theme/Colors';

export default function ListingCatg({ navigation, route }) {
   const dataForFlatList = route.params.dataToList;
   const _renderItem = ({ item }) => {
      return (
         <View style={styles.view_render} key={item.id}>
            <TouchableOpacity
               onPress={() => {
                  navigation.navigate(nameNav.listType, {
                     titleScreen: `${item.nom.substring(0, 12)}`,
                     domaine: item.nom,
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
