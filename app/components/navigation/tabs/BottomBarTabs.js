import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '_theme/Colors';
import { Icon } from '@rneui/themed';

//import screen bottom tab
import { Home, About, Recherche, Favoris } from '_pages';

const Tab = createBottomTabNavigator();

export default function BottomBarTabs() {
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
               tabBarLabel: 'Home',
               tabBarIcon: ({ size, color }) => (
                  <Icon name={'home'} color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name="Recherche"
            component={Recherche}
            options={{
               tabBarLabel: 'Recherche',
               tabBarIcon: ({ size, color }) => (
                  <Icon name={'search'} color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name="Favoris"
            component={Favoris}
            options={{
               tabBarLabel: 'Favoris',
               tabBarIcon: ({ size, color }) => (
                  <Icon name={'favorite'} color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name="A propos"
            component={About}
            options={{
               tabBarLabel: 'A propos',
               tabBarIcon: ({ size, color }) => (
                  <Icon name={'person'} color={color} size={size} />
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
