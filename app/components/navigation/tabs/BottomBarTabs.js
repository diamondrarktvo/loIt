import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '_theme/Colors';
import { Icon } from '@rneui/themed';
import { useSelector } from 'react-redux';

//import screen bottom tab
import { Home, About, Recherche, Favoris } from '_pages';

const Tab = createBottomTabNavigator();

export default function BottomBarTabs() {
   const langueActual = useSelector(
      (selector) => selector.fonctionnality.langue
   );
   return (
      <Tab.Navigator
         initialRouteName="Home"
         screenOptions={{
            headerShown: false,
            tabBarInactiveTintColors: Colors.black,
            tabBarActiveTintColors: Colors.blue,
            tabBarLabelStyle: {
               fontSize: 13,
               textTransform: 'capitalize',
               fontWeight: 'bold',
            },
            tabBarStyle: styles.tabBarStyles,
         }}
      >
         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarLabel: langueActual === 'fr' ? 'Accueil' : 'Fandraisana',
               tabBarIcon: ({ size, color }) => (
                  <Icon name={'home'} color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name="Recherche"
            component={Recherche}
            options={{
               tabBarLabel: langueActual === 'fr' ? 'Recherche' : 'Hitady',
               tabBarIcon: ({ size, color }) => (
                  <Icon name={'search'} color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name="Favoris"
            component={Favoris}
            options={{
               tabBarLabel: langueActual === 'fr' ? 'Favoris' : 'Ankafiziko',
               tabBarIcon: ({ size, color }) => (
                  <Icon name={'favorite'} color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name="A propos"
            component={About}
            options={{
               tabBarLabel: langueActual === 'fr' ? 'A propos' : 'Mombamomba',
               tabBarIcon: ({ size, color }) => (
                  <Icon name={'info'} color={color} size={size} />
               ),
            }}
         />
      </Tab.Navigator>
   );
}

const styles = StyleSheet.create({
   tabBarStyles: {
      position: 'absolute',
      borderRadius: 20,
      marginVertical: 10,
      backgroundColors: Colors.background,
      height: 60,
      padding: 5,
      marginHorizontal: 30,
   },
});
