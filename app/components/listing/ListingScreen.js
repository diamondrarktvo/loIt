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
import { nameStackNavigation as nameNav } from '_utils/constante/NameStackNavigation';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Icon } from '@rneui/themed';
import { MockData } from '_utils';

import HeaderGlobal from '_components/header/HeaderGlobal';
import { Colors } from '_theme/Colors';

export default function Listing({ navigation, route }) {
   const dataPerDomaine = MockData.filter(
      (item) => item.catg === route.params.categorie
   );
   const dataForFlatList = route.params.dataToList ?? dataPerDomaine;
   console.log(route.params.categorie);
   //all logics
   const _renderItem = useCallback(({ item }) => {
      return (
         <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
               navigation.navigate(nameNav.detailPage, {
                  titleScreen: `Article n° ${item.id}`,
                  articleToViewDetail: item,
               });
            }}
         >
            <View style={styles.view_render}>
               <Image
                  source={item.poster_loi}
                  style={{ width: 130, height: 150, borderRadius: 16 }}
               />
               <View
                  style={{
                     marginLeft: 12,
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'space-between',
                  }}
               >
                  <View>
                     <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                        Article n° {item.id}
                     </Text>
                     <Text style={{ fontSize: 12, marginBottom: 8 }}>
                        Publié le : {item.date_publish}
                     </Text>
                  </View>
                  <Text
                     style={{ fontSize: 16, flex: 2, width: 210 }}
                     numberOfLines={4}
                  >
                     {item.txt_description}{' '}
                  </Text>
                  <View
                     style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: 140,
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                     }}
                  >
                     <View
                        style={{
                           display: 'flex',
                           flexDirection: 'row',
                           alignItems: 'center',
                        }}
                     >
                        <Icon
                           name={'sentiment-very-dissatisfied'}
                           color={Colors.orange}
                           size={18}
                        />
                        <Text
                           style={{
                              fontSize: 14,
                              marginLeft: 2,
                           }}
                        >
                           Pas encore lu
                        </Text>
                     </View>
                     <View
                        style={{
                           display: 'flex',
                           flexDirection: 'row',
                           width: 108,
                           justifyContent: 'space-evenly',
                        }}
                     >
                        <TouchableOpacity
                           activeOpacity={0.8}
                           onPress={() => {
                              alert('PDF');
                           }}
                        >
                           <Icon
                              name={'picture-as-pdf'}
                              color={Colors.violet}
                              size={28}
                           />
                        </TouchableOpacity>
                        <TouchableOpacity
                           activeOpacity={0.8}
                           onPress={() => {
                              alert("J'adore");
                           }}
                        >
                           <Icon
                              name={'favorite'}
                              color={Colors.orange}
                              size={28}
                           />
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>
            </View>
         </TouchableOpacity>
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
