import {
   View,
   Text,
   StyleSheet,
   StatusBar,
   Image,
   ImageBackground,
   Modal,
   SafeAreaView,
   ScrollView,
   TouchableOpacity,
   Dimensions,
} from 'react-native';
import * as Speech from 'expo-speech';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Icon } from '@rneui/themed';
import bgImage from '_images/bg_loi.jpg';
import { useDispatch } from 'react-redux';
import { Colors } from '_theme/Colors';
import { addFavoris } from '_utils/redux/actions/action_creators';

export default function Detail({ navigation, route }) {
   const dispatch = useDispatch();
   const oneArticle = route.params.articleToViewDetail;

   /*function to speach article*/
   const speak = (txt_to_say) => {
      Speech.speak(txt_to_say);
   };
   return (
      <View style={styles.view_container}>
         <StatusBar
            backgroundColor={'transparent'}
            animated={true}
            translucent={true}
         />
         <SafeAreaView style={styles.container_safe}>
            <ImageBackground
               source={bgImage}
               style={{
                  height: Dimensions.get('window').height < 700 ? 340 : 420,
               }}
               imageStyle={{
                  resizeMode: 'cover',
               }}
            >
               <View style={styles.info_in_landing_detail}>
                  <Text
                     style={{
                        fontWeight: 'bold',
                        fontSize: 26,
                        color: Colors.white,
                     }}
                  >
                     Article n° {oneArticle.Article.numero_Article}
                  </Text>
                  <Text
                     style={{
                        fontSize: 12,
                        marginTop: 8,
                        color: Colors.white,
                     }}
                  >
                     Publié le : {oneArticle.date_created}
                  </Text>
               </View>
               <View style={styles.description_section}>
                  <TouchableOpacity
                     onPress={() => {
                        dispatch(addFavoris(oneArticle));
                     }}
                  >
                     <Text style={styles.boutton_add_favorite}>
                        <Icon
                           name={'favorite'}
                           color={Colors.violet}
                           size={32}
                        />{' '}
                     </Text>
                  </TouchableOpacity>
                  <Text
                     style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginTop: 22,
                        marginBottom: 14,
                     }}
                  >
                     Descriptions
                  </Text>
                  <ScrollView
                     style={{
                        paddingRight: 4,
                     }}
                  >
                     <Text
                        style={{
                           fontSize:
                              Dimensions.get('window').height < 700 ? 15 : 18,
                           textAlign: 'left',
                        }}
                     >
                        {oneArticle.Article.contenu_Article_fr}
                     </Text>
                  </ScrollView>
                  <View style={styles.all_button_in_detail_screen}>
                     <TouchableOpacity
                        onPress={() => {
                           alert('télechargés en PDF');
                        }}
                     >
                        <Text style={styles.button_in_detail}>
                           {' '}
                           <Icon
                              name={'picture-as-pdf'}
                              size={34}
                              color={Colors.violet}
                           />{' '}
                        </Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                        onPress={() => speak(oneArticle.txt_description)}
                     >
                        <Text style={[styles.button_in_detail]}>
                           {' '}
                           <Icon
                              name={'play-circle-outline'}
                              size={34}
                              color={Colors.violet}
                           />{' '}
                        </Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </ImageBackground>
         </SafeAreaView>
      </View>
   );
}
