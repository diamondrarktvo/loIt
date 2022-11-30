import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useState, useContext, useEffect } from 'react';
import { Icon } from '@rneui/themed';

import { styles } from './styles';
import { Contexte } from '_utils';
import { Colors } from '_theme/Colors';
import { positionOfAllPolice } from '_utils';

export default function Map() {
   const { position, errorMsgLocation } = useContext(Contexte);

   return (
      <View style={styles.view_container}>
         <MapView
            provider={PROVIDER_GOOGLE}
            style={[styles.map, StyleSheet.absoluteFillObject]}
            initialRegion={{
               latitude: position.latitude,
               longitude: position.longitude,
               latitudeDelta: 0.0222,
               longitudeDelta: 0.0021,
            }}
            showsUserLocation={true}
            userLocationAnnotationTitle="Vous êtes ici"
            followsUserLocation={true}
         >
            {positionOfAllPolice.markers.map((marker) => (
               <Marker
                  key={marker.titre}
                  coordinate={marker.coordinate}
                  title={marker.titre}
               />
            ))}
         </MapView>
      </View>
   );
}
