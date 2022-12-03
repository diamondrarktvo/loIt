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
import { ArticleLastPublish, Thematique } from '_utils';
import { Colors } from '_theme/Colors';
import { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home({ navigation }) {
   //all states
   const isCarousel = React.useRef(null);
   const allArticles = useSelector((selector) => selector.article.articles);
   const allThematiques = useSelector(
      (selector) => selector.article.thematiques
   );
   //all efects

   //all components
   const _renderItem = ({ item }) => {
      return (
         <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
               navigation.navigate(nameNav.detailPage, {
                  titleScreen: `Article n°${item.Article.numero_Article}`,
                  articleToViewDetail: item,
               });
            }}
         >
            <View key={item.id} style={styles.view_container_renderItem}>
               <Image
                  style={styles.image_poster_style}
                  source={item.photo ?? require('_images/book_loi.jpg')}
               />
               <Text
                  style={{
                     marginVertical: 8,
                     paddingRight: 8,
                     fontWeight: 'bold',
                     fontSize: 17,
                  }}
                  numberOfLines={1}
               >
                  {item.Article?.contenu_Article_fr}
               </Text>
               <Text style={{ fontSize: 12 }}>
                  Publié le :{item.date_created?.substring(0, 10)}{' '}
               </Text>
            </View>
         </TouchableOpacity>
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
                     Thématiques
                  </Text>
                  <Icon
                     name={'arrow-forward'}
                     color={Colors.black}
                     size={30}
                     onPress={() => {
                        navigation.navigate(nameNav.listCategorie, {
                           titleScreen: 'Tous les thèmes',
                           dataToList: allThematiques,
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
                  <TouchableOpacity
                     onPress={() => {
                        navigation.navigate(nameNav.listType, {
                           titleScreen: 'Faune',
                           domaine: 'Faune',
                        });
                     }}
                  >
                     <View style={styles.one_item_categorie}>
                        <Image
                           style={styles.image_for_categorie}
                           source={require('_images/book_loi.jpg')}
                        />
                        <Text style={{ color: Colors.secondary }}>Faune</Text>
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                     onPress={() => {
                        navigation.navigate(nameNav.listType, {
                           titleScreen: 'Répression ',
                           domaine: 'Répression et principes',
                        });
                     }}
                  >
                     <View style={styles.one_item_categorie}>
                        <Image
                           style={styles.image_for_categorie}
                           source={require('_images/book_loi.jpg')}
                        />
                        <Text style={{ color: Colors.secondary }}>
                           Répress.
                        </Text>
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                     onPress={() => {
                        navigation.navigate(nameNav.listType, {
                           titleScreen: 'Flore',
                           domaine: 'Flore',
                        });
                     }}
                  >
                     <View style={styles.one_item_categorie}>
                        <Image
                           style={styles.image_for_categorie}
                           source={require('_images/book_loi.jpg')}
                        />
                        <Text style={{ color: Colors.secondary }}>Flore</Text>
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                     onPress={() => {
                        navigation.navigate(nameNav.listType, {
                           titleScreen: 'Corruption ',
                           domaine:
                              "Corruption et Engagement d'un représentant du gouvernement",
                        });
                     }}
                  >
                     <View style={styles.one_item_categorie}>
                        <Image
                           style={styles.image_for_categorie}
                           source={require('_images/book_loi.jpg')}
                        />
                        <Text style={{ color: Colors.secondary }}>
                           Corrupt.
                        </Text>
                     </View>
                  </TouchableOpacity>
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
                     Les articles
                  </Text>
                  <Icon
                     name={'arrow-forward'}
                     color={Colors.black}
                     size={30}
                     onPress={() => {
                        navigation.navigate(nameNav.listPage, {
                           titleScreen: 'Tous les articles',
                           dataToList: allArticles,
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
                           data={allArticles}
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
                           dataToList: allArticles,
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
                           data={allArticles}
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
