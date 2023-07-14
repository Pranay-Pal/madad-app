import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import { GoogleAuthProvider } from 'firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React, {useState, useEffect} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';


const [appUser, setAppUser] = useState({user: {email: 'test@example.com'}});
GoogleSignin.configure({
  webClientId: '862172108140-uk6cmt5b4ujct9tll5c86sdufi06lmaq',
});
const signIn = async () => {
  console.log('tap to sign in');
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);
    setAppUser(userInfo);
    console.log(appUser);
    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.idToken,
    );
    console.log(googleCredential);
    const userCredential = auth().signInWithCredential(googleCredential);
    console.log(userCredential);
  } catch (error) {
    console.warn(error);
  }
};
const signOut = async () => {
  await GoogleSignin.signOut();
};