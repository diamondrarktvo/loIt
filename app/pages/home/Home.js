import React from 'react';
import {
   View,
   Text,
   Image,
   SafeAreaView,
   TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Icon } from '@rneui/themed';
import Carousel from 'react-native-snap-carousel';

import HeaderGlobal from '_components/header/HeaderGlobal';
import { nameStackNavigation as nameNav } from '_utils/constante/NameStackNavigation';
import { LastPublish, Categorie } from '_utils';
import { Contexte } from '_utils';
import { Colors } from '_theme/Colors';
import { useState, useContext, useEffect } from 'react';

export default function Home({ navigation }) {
   //all states
   const isCarousel = React.useRef(null);

   //all efects

   //all components
   const _renderItem = ({ item }) => {
      return (
         <View key={item.id} style={styles.view_container_renderItem}>
            <Image
               style={styles.image_poster_style}
               source={item.poster_loi} //require(film.urlImage) si path absolue et {{ uri : urlImage}} si lien
            />
            <Text
               style={{ marginVertical: 8, fontWeight: 'bold', fontSize: 17 }}
               numberOfLines={1}
            >
               {item.txt_description}
            </Text>
            <Text style={{ fontSize: 12 }}>
               Publié le :{item.date_publish}{' '}
            </Text>
         </View>
      );
   };

   return (
      <KeyboardAwareScrollView style={{ backgroundColor: Colors.background }}>
         <View style={styles.view_container}>
            <View style={styles.head_content}>
               <HeaderGlobal navigation={navigation} />
            </View>

            <View style={styles.landing_screen}>
               <Text style={styles.text_landing_screen}>
                  La loi nous libère
               </Text>
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
                        Adventure
                     </Text>
                     <Text>Continue de lire</Text>
                  </View>
                  <Icon name={'autorenew'} color={Colors.white} size={38} />
               </View>
            </View>

            <View style={styles.categories}>
               <View
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     marginVertical: 25,
                  }}
               >
                  <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                     Catégories
                  </Text>
                  <Icon
                     name={'arrow-forward'}
                     color={Colors.black}
                     size={30}
                     onPress={() => {
                        navigation.navigate(nameNav.listPage, {
                           titleScreen: 'Tous les catégories',
                           dataToList: Categorie,
                        });
                     }}
                  />
               </View>
               <View
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                  }}
               >
                  <View style={styles.one_item_categorie}>
                     <Image
                        style={styles.image_for_categorie}
                        source={require('_images/book_loi.jpg')}
                     />
                     <Text style={{ color: Colors.secondary }}>Finance</Text>
                  </View>
                  <View style={styles.one_item_categorie}>
                     <Image
                        style={styles.image_for_categorie}
                        source={require('_images/book_loi.jpg')}
                     />
                     <Text style={{ color: Colors.secondary }}>Finance</Text>
                  </View>
                  <View style={styles.one_item_categorie}>
                     <Image
                        style={styles.image_for_categorie}
                        source={require('_images/book_loi.jpg')}
                     />
                     <Text style={{ color: Colors.secondary }}>Finance</Text>
                  </View>
                  <View style={styles.one_item_categorie}>
                     <Image
                        style={styles.image_for_categorie}
                        source={require('_images/book_loi.jpg')}
                     />
                     <Text style={{ color: Colors.secondary }}>Finance</Text>
                  </View>
               </View>
            </View>

            <View>
               <View
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     marginVertical: 25,
                  }}
               >
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                     Publié récemment
                  </Text>
                  <Icon
                     name={'arrow-forward'}
                     color={Colors.black}
                     size={30}
                     onPress={() => {
                        navigation.navigate(nameNav.listPage, {
                           titleScreen: 'Les derniers publiés',
                           dataToList: LastPublish,
                        });
                     }}
                  />
               </View>
               <View>
                  <SafeAreaView>
                     <View style={styles.view_carousel}>
                        <Carousel
                           layout="default"
                           ref={isCarousel}
                           data={LastPublish}
                           loop={true}
                           loopClonesPerSide={5} //Nombre de clones à ajouter de chaque côté des éléments d'origine. Lors d'un balayage très rapide
                           //fin des props spéficifique au section annonce
                           renderItem={_renderItem}
                           sliderWidth={150}
                           itemWidth={240}
                           inactiveSlideOpacity={0.9} //on uniformise tous les opacity
                           inactiveSlideScale={1} //on uniformise tous les hauteur
                           useScrollView={true}
                        />
                     </View>
                  </SafeAreaView>
               </View>
            </View>
         </View>
      </KeyboardAwareScrollView>
   );
}
