import { useRef, useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { Colors } from '_theme/Colors';
import Lottie from 'lottie-react-native';
import { Icon } from '@rneui/base';
import { useDispatch } from 'react-redux';
import {
   getStarted,
   getAllArticles,
   getAllThematiques,
   getAllTypes,
} from '_utils/redux/actions/action_creators';
import { ArticleService } from '_utils';

export default function Login({ navigation }) {
   //all datas
   const animation = useRef(null);
   const dispatch = useDispatch();

   //all fetch || functions
   const getArticles = async () => {
      let results = await ArticleService.getArticlesFromServ();
      dispatch(getAllArticles(results));
   };

   const getThematiques = async () => {
      let results = await ArticleService.getThematiqueFromServ();
      dispatch(getAllThematiques(results));
   };

   const getTypes = async () => {
      let results = await ArticleService.getTypeFromServ();
      dispatch(getAllTypes(results));
   };

   //all effects
   useEffect(() => {
      getArticles();
      getThematiques();
      getTypes();
   }, []);

   return (
      <View style={styles.view_container_welcome}>
         <Lottie
            autoPlay
            ref={animation}
            style={styles.images_welcome}
            source={require('_images/read.json')}
         />
         <View>
            <Text
               style={{ fontSize: 34, fontWeight: 'bold', textAlign: 'center' }}
            >
               Welcome ici LoIT
            </Text>
            <Text style={{ textAlign: 'center', marginVertical: 10 }}>
               Esse tempor consectetur ut excepteur sunt mollit. Veniam pariatur
               aliquip Lorem aliquip ullamco irure nostrud commodo consectetur
               in. Adipisicing Lorem et irure laboris laborum anim sunt
               incididunt minim consectetur cillum ea. Commodo sunt amet sint ea
               ea velit dolor qui proident amet adipisicing aliqua dolor.
               Officia est duis aute cillum elit laboris eu. Adipisicing
               consectetur magna veniam exercitation.
            </Text>
         </View>
         <View style={styles.view_button_start}>
            <TouchableOpacity
               style={styles.boutton_start}
               activeOpacity={0.8}
               onPress={() => {
                  dispatch(getStarted());
               }}
            >
               <Icon name={'arrow-forward'} color={Colors.white} size={34} />
            </TouchableOpacity>
         </View>
      </View>
   );
}
