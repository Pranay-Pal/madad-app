import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import About from './components/About.js';
import {Card} from 'react-native-paper';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useState, useEffect} from 'react';
const mimg=require('./images/ming.png');
export default function Emergency() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 8,
          marginLeft: 30,
          marginRight: 30,
          borderColor: 'yellow',
          borderWidth: 5,
          borderBottomLeftRadius: 50,
          borderTopRightRadius: 50,
          marginBottom:20,
          marginTop:30,
        }}>
        <Image
          source={mimg}
          style={{
            width: 150,
            height: 150,
            alignSelf: 'auto',
            borderRadius: 75,
            borderWidth: 5,
            borderTopWidth: 0,
            borderBottomWidth: 5,
            borderLeftWidth: 5,
            borderRightWidth: 5,
            borderColor: 'yellow',
            marginTop: -25,
            marginLeft: -25,
          }}
        />
        <Text
          style={{
            color: 'red',
            marginLeft: 135,
            marginRight: 15,
            marginTop: -120,
            marginBottom: 10,
          }}>
          {
            'Note : This instructions given below are meant to be used in case of medical emergency only. It is adviced to consult a doctor as early as possible.'
          }
        </Text>
        <View
          style={{
            height: 5,
            backgroundColor: 'yellow',
            width: 100,
            alignSelf: 'center',
          }}></View>
        <Text style={{alignContent:'center',justifyContent:'center',alignSelf:'center',color:'black',padding:10}}>
          {
            'Dengue is self-limited illness, with almost no specific antiviral to cure it specifically. \n\n\n  1. In case of high vomiting and dehydration ORS should be given. \n\n  2. Acetaminophen shall be used to cure fever. \n\n  3. Aspirin, nonsteroidal anti-inflammatory drugs (NSAIDs) and corticosteroids are advised not to be use. \n\n  4. If low platelets are diagnosed use of drugs like prednisone and rituximab is suggested, food rich vitamin A and K and folates are supposed to be given to patient. \n\n  5. The patient may also take methylprednisolone tablets. \n\n  6. Seek immediate medical help.'
          }
        </Text>
      </View>
    </View>
  );
}
