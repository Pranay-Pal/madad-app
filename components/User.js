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
const madadimg = require('./images/MADAD.png');
// import {
//   Text,
//   View,
//   StyleSheet,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   Image,
// } from 'react-native';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// import Constants from 'expo-constants';
const style = StyleSheet.create({
  root: {flex: 1, backgroundColor: 'yellow', alignItems: 'center'},
  imgbox: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    marginBottom: 50,
    marginTop: 50,
  },
  btup: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderBottomRightRadius: 50,
    opacity: 0.7,
    alignSelf: 'flex-start',
    zIndex: -1,
    shadowOpacity: 0.2,
    shadowColor: 'black',
    shadowOffset: {width: -3, height: -4},
    shadowRadius: 3,
    margin: 0.5,
  },
  btdn: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    opacity: 0.7,
    alignSelf: 'flex-end',
    zIndex: -1,
    shadowOpacity: 0.2,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 4},
    shadowRadius: 3,
  },
  box: {
    borderWidth: 1,
    width: 200,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    alignItems: 'center',
    borderColor: 'white',
    shadowOpacity: 0.2,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 4},
    shadowRadius: 3,
    elevation: 1,
    marginTop: 20,
  },
});
export default function User({navigation}) {
  // GoogleSignin.configure();
  // signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     this.setState({ userInfo });
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //     } else {
  //     }
  //   }
  // };
  // getCurrentUser = async () => {
  //   const currentUser = await GoogleSignin.getCurrentUser();
  //   this.setState({ currentUser });
  //   signOut = async () => {
  //     try {
  //       await GoogleSignin.signOut();
  //       this.setState({ user: null }); // Remember to remove the user from your app's state as well
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  // };
  return (
    <View style={style.root}>
      <Image style={style.imgbox} source={madadimg}></Image>
      <View style={style.box}>
        <View style={style.btup}></View>
        <Text
          style={{
            fontSize: 45,
            padding: 0,
            margin: -50,
            marginTop: -55,
            marginBottom: -50,
            textShadowOpacity: 0.1,
            textShadowColor: 'grey',
            textShadowOffset: {width: 2, height: -4},
            textShadowRadius: 5,
            textElevation: 9,
            fontWeight: '500',
          }}>
          {' '}
          MADAD{' '}
        </Text>
        <View style={style.btdn}></View>
      </View>
    </View>
  );
}
