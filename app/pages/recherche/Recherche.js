import {
   View,
   Text,
   StyleSheet,
   FlatList,
   Image,
   Modal,
   SafeAreaView,
   Dimensions,
   TextInput,
   TouchableOpacity,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { nameStackNavigation as nameNav } from '_utils/constante/NameStackNavigation';
import { Icon } from '@rneui/themed';
import { useDispatch } from 'react-redux';
import HeaderGlobal from '_components/header/HeaderGlobal';
import { Colors } from '_theme/Colors';
import { AllArticles } from '_utils';
import { addFavoris } from '_utils/redux/actions/action_creators';

export default function Recherche({ navigation }) {
   //all data
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
                           width:
                              Dimensions.get('window').height < 700 ? 90 : 108,
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
                              name={'favorite-border'}
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
      <View style={styles.view_container_search}>
         <View style={styles.head_content}>
            <View
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
               }}
            >
               <TouchableOpacity activeOpacity={0.7}>
                  <Icon name={'mic'} color={Colors.violet} size={30} />
                  <Text style={{ fontWeight: 'bold' }}>Voice search</Text>
               </TouchableOpacity>
            </View>

            <View style={styles.view_for_input_search}>
               <TextInput
                  style={styles.input}
                  keyboardType="email-address"
                  placeholder="Entrer le mot de recherche ..."
               />
               <TouchableOpacity activeOpacity={0.8}>
                  <Text style={styles.boutton_search}>
                     <Icon name={'search'} color={Colors.black} size={40} />
                  </Text>
               </TouchableOpacity>
            </View>

            <View style={styles.view_for_filtre}>
               <Text
                  style={{
                     textAlign: 'center',
                     fontWeight: 'bold',
                     fontSize: 18,
                  }}
               >
                  Filtre
               </Text>
               <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                     alert('filtrer');
                  }}
               >
                  <Icon name={'filter-list'} color={Colors.violet} size={34} />
               </TouchableOpacity>
            </View>
         </View>
         <View style={styles.view_for_result}>
            <SafeAreaView style={styles.container_safe}>
               <FlatList
                  data={AllArticles}
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
      </View>
   );
}
