import { RouteAxios } from '_utils/services/urlAxios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function getArticles() {
   return RouteAxios.get('/article')
      .then((response) => {
         return response.data;
      })
      .catch((error) => {
         return error.message;
      });
}


export const ArticleService = {
   getArticles,
};
