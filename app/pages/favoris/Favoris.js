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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Icon } from '@rneui/themed';
import { useSelector, useDispatch } from 'react-redux';
import HeaderGlobal from '_components/header/HeaderGlobal';
import { Colors } from '_theme/Colors';
import { addFavoris } from '_utils/redux/actions/action_creators';

export default function Favoris({ navigation, route }) {
   const dataForFlatList = useSelector((selector) => selector.article.favoris);
   const dispatch = useDispatch();
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
                           name={'sentiment-satisfied-alt'}
                           color="green"
                           size={18}
                        />
                        <Text
                           style={{
                              fontSize: 14,
                              marginLeft: 2,
                           }}
                        >
                           Déjà lu
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
                              dispatch(addFavoris(item));
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
      <KeyboardAwareScrollView style={{ backgroundColor: Colors.background }}>
         <View style={styles.view_container}>
            <SafeAreaView>
               <View style={styles.head_content}>
                  <HeaderGlobal navigation={navigation} />
               </View>

               <View style={styles.landing_screen}>
                  <Text style={styles.text_landing_screen}>Vos Favoris</Text>
                  <View style={styles.content_in_landing_screen}>
                     <Image
                        style={styles.icon_in_content_landing}
                        source={require('_images/book_loi.jpg')}
                     />
                     <View
                        style={{
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'flex-start',
                        }}
                     >
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                           Favoris
                        </Text>
                        <Text>Regardez-les encore</Text>
                     </View>
                     <Icon name={'autorenew'} color={Colors.white} size={38} />
                  </View>
               </View>

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
      </KeyboardAwareScrollView>
   );
}
