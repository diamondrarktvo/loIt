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
const dataMock = [
   {
      id: 1,
      nom: 'Dama',
      numero: '0345648482',
      adresse: 'Amboditsiry',
      photo: require('_images/profil.png'),
      couleur: 'rgba(153, 157, 236, 0.6)',
   },
   {
      id: 2,
      nom: 'Vetso',
      numero: '0345648482',
      adresse: 'Antsirabe',
      photo: require('_images/profil.png'),
      couleur: 'rgba(14, 149, 173, 0.6)',
   },
   {
      id: 4,
      nom: 'Toavina',
      numero: '0345648482',
      adresse: 'Antsirabe',
      photo: require('_images/profil.png'),
      couleur: 'rgba(161, 27, 18, 0.6)',
   },
   {
      id: 5,
      nom: 'Feno',
      numero: '0345648482',
      adresse: 'Antsirabe',
      photo: require('_images/profil.png'),
      couleur: 'rgba(61, 173, 61, 0.6)',
   },
   {
      id: 6,
      nom: 'Avotra',
      numero: '0345648482',
      adresse: 'Antsirabe',
      photo: require('_images/profil.png'),
      couleur: 'rgba(84, 194, 214, 0.6)',
   },
   {
      id: 7,
      nom: 'Tay',
      numero: '0345648482',
      adresse: 'Antsirabe',
      photo: require('_images/profil.png'),
      couleur: 'rgba(161, 27, 18, 0.6)',
   },
   {
      id: 8,
      nom: 'Gisa',
      numero: '0345648482',
      adresse: 'Antsirabe',
      photo: require('_images/profil.png'),
      couleur: 'rgba(153, 157, 236, 0.6)',
   },
];

export default function Listing({ navigation }) {
   //all logics
   const _renderItem = useCallback(({ item }) => {
      return (
         <View
            style={[styles.view_renderItem, { backgroundColor: item.couleur }]}
         >
            <Image style={styles.image} source={item.photo} />
            <View style={styles.contact_information}>
               <View style={styles.view_nom}>
                  <Text style={styles.nom}>{item.nom}</Text>
               </View>
               <Text style={styles.numero}>{item.numero}</Text>
               <Text style={styles.adresse}>{item.adresse}</Text>
            </View>
            <Text style={styles.icon}>
               <Icon name={'settings'} color={Colors.white} size={18} />
            </Text>
         </View>
      );
   }, []);

   const _idKeyExtractor = (item, index) =>
      item?.id == null ? index.toString() : item.id.toString();

   return (
      <View style={styles.view_container}>
         <View style={styles.head_content}>
            <HeaderGlobal navigation={navigation} />
         </View>
         <SafeAreaView style={styles.container_safe}>
            <FlatList
               data={dataMock}
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
         <View style={styles.bouton_ajout}>
            <TouchableOpacity activeOpacity={0.8}>
               <Icon name={'add'} color={Colors.white} size={62} />
            </TouchableOpacity>
         </View>
      </View>
   );
}
