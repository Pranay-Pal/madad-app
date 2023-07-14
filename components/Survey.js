import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import database, {firebase} from '@react-native-firebase/database';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import About from './components/About.js';
import {Card} from 'react-native-paper';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useState, useEffect} from 'react';

export default function Sur({navigation}) {
  const today = new Date(Date.now()).toLocaleDateString();
  const year = new Date(Date.now()).getFullYear();
  const month = new Date(Date.now()).getMonth() + 1;
  const day = new Date(Date.now()).getDate();
  const [data1,setData1]=React.useState(0);
  const [data2,setData2]=React.useState(0);
  get = async () => {
    try {
      const db = firebase
        .app()
        .database('https://madad-c5ecb-default-rtdb.firebaseio.com');
      const dc = await db.ref('/Count/d').once('value');
      const cc = await db.ref('/Count/c').once('value');
      console.log(dc.val(),cc.val());
      setData1(dc.val());
      setData2(cc.val());

    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}>
      <TouchableOpacity
        onPress={get}
        style={{
          backgroundColor: 'yellow',
          height: 40,
          width: 120,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'flex-start',
          justifySelf: 'flex-start',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
            opacity: 1,
          }}>
          Generate Counts
        </Text>
      </TouchableOpacity>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>
        {'The total no of dengue cases reported till date in MADAD app in ' +
          year +
          ' in India is'}
      </Text>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderColor: 'yellow',
          borderWidth: 5,
          height: 100,
          width: 300,
          margin: 50,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            width: 145,
            backgroundColor: '#fff',
            borderBottomWidth: 2.5,
            borderBottomColor: 'yellow',
            borderRightWidth: 2.5,
            borderRightColor: 'yellow',
          }}><Text>Death Count</Text></View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            width: 145,
            backgroundColor: '#fff',
            borderBottomWidth: 2.5,
            borderBottomColor: 'yellow',
            borderLeftWidth: 2.5,
            borderLeftColor: 'yellow',
          }}>
          <Text>{data1}</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            width: 145,
            backgroundColor: '#fff',
            borderTopWidth: 2.5,
            borderTopColor: 'yellow',
            borderRightWidth: 2.5,
            borderRightColor: 'yellow',
          }}><Text>Dengue Cases Count</Text></View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            width: 145,
            backgroundColor: '#fff',
            borderTopWidth: 2.5,
            borderTopColor: 'yellow',
            borderLeftWidth: 2.5,
            borderLeftColor: 'yellow',
          }}>
          <Text>{data2}</Text>
        </View>
      </View>
    </View>
  );
}
