/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import * from 'react';
const madadimg = require('./components/images/MADAD.png');
const imgg = require('./components/images/G.png');
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {GoogleAuthProvider} from 'firebase/auth';
import React, {useState, useEffect} from 'react';
// import type {Node} from 'react';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
// import {auth} from './components/firebase.config.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home.js';
import About from './components/About.js';
import User from './components/User.js';
import Check from './components/Check.js';
import Doc from './components/Doctor.js';
import Rep from './components/Report.js';
import Sur from './components/Survey.js';
import Emer from './components/Emergency.js';
import {Card} from 'react-native-paper';
import Example from './components/Example.js';
const Stack = createNativeStackNavigator();
export const UserContext = React.createContext();
export default function App() {
  const [appUser, setAppUser] = useState({
    idToken: null,
    scopes: null,
    serverAuthCode: null,
    user: {
      email: null,
      familyName: null,
      givenName: null,
      id: null,
      name: null,
      photo: null,
    },
  });
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
      // console.log(appUser);
      // const googleCredential = auth.GoogleAuthProvider.credential(
      //   userInfo.idToken,
      // );
      // console.log(googleCredential);
      // const userCredential = auth().signInWithCredential(googleCredential);
      // console.log(userCredential);
    } catch (error) {
      console.warn(error);
    }
  };
  const signOut = async () => {
    setAppUser({
      idToken: null,
      scopes: null,
      serverAuthCode: null,
      user: {
        email: null,
        familyName: null,
        givenName: null,
        id: null,
        name: null,
        photo: null,
      },
    });
    await GoogleSignin.signOut();
    // await auth()
    //   .signOut()
    //   .then(() => console.log('User signed out!'));
  };

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
    sbtn: {
      backgroundColor: 'white',
      borderColor: 'white',
      width: 200,
      height: 50,
      borderWidth: 0,
      borderRadius: 50,
      marginTop: 200,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    gimg: {height: 50, width: 50, marginRight: 25},
  });
  

  if (appUser.user.id == null) {
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
              textShadowOpacity: 0.9,
              textShadowColor: 'grey',
              textShadowOffset: {width: 2, height: -4},
              textShadowRadius: 5,
              textElevation: 9,
              fontWeight: '500',
              color: 'black',
              opacity: 1,
            }}>
            {' '}
            MADAD{' '}
          </Text>
          <View style={style.btdn}></View>
        </View>
        <TouchableOpacity style={style.sbtn} onPress={signIn}>
          <Image source={imgg} style={style.gimg}></Image>
          <Text style={{color: 'silver', fontSize: 36, paddingRight: 20}}>
            {'Sign in'}
          </Text>
        </TouchableOpacity>
        <View style={{marginTop: 60,backgroundColor: 'white', width: 340, height:30, padding:3,borderRadius:30,justifyContent:'center',alignItems:'center',opacity:0.6}}>
          <Text style={{color: 'black', fontSize: 18,opacity:1}}>
            Made in India with ❤️ by Pranay & Sumit
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <UserContext.Provider value={appUser}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen
              name="Quick Diagnosis"
              component={Check}
              options={{headerStyle: {backgroundColor: 'yellow'}}}
            />
            <Stack.Screen
              name="Know About Dengue"
              component={About}
              options={{headerStyle: {backgroundColor: 'yellow'}}}
            />
            {/* <Stack.Screen
            name="Login"
            component={User}
            options={{headerStyle: {backgroundColor: 'yellow'}}}
          /> */}
            <Stack.Screen
              name="Doctors Nearby"
              component={Doc}
              options={{headerStyle: {backgroundColor: 'yellow'}}}
            />
            <Stack.Screen
              name="Report Dengue"
              component={Rep}
              options={{headerStyle: {backgroundColor: 'yellow'}}}
            />
            <Stack.Screen
              name="Survey Reports"
              component={Sur}
              options={{headerStyle: {backgroundColor: 'yellow'}}}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerStyle: {backgroundColor: 'yellow'}}}
              {...appUser}
            />
            <Stack.Screen
              name="Emergency Care"
              component={Emer}
              options={{headerStyle: {backgroundColor: 'yellow'}}}
            />
            {/* <Stack.Screen name="Ex" component={Example} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    );
  }
}

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
// import * as Notifications from 'expo-notifications';
// import MapView from 'react-native-maps';

// const imgmadad=
// const MainPageStyle = StyleSheet.create({
//   PageMain: {
//     flex: 1,
//   },
//   PageHead: {
//     paddingTop: 45,
//     justifyContent: 'space-between',
//     backgroundColor: 'yellow',
//     flexDirection: 'row',
//     paddingBottom: 5,
//     paddingLeft: 15,
//     paddingRight: 15,
//   },
//   PageBody: { flex: 1, justifyContent: 'center', alignItemsL: 'center' },
//   OPB: { flex: 0.9 },
//   OPBA: { flex: 0.25, flexDirection: 'row' },
//   OPBS: { flex: 0.06 },
//   OPBB: { flex: 0.4, backgroundColor: 'yellow', borderTopRightRadius: 50 },
//   OPBSS: { flex: 0.08 },
//   OPBSA: { flex: 0.06 },
//   OPBAB: {
//     zIndex: -1,
//     opacity: 0.6,
//     width: 80,
//     borderBottomRightRadius: 70,
//     aspectRatio: 1,
//     backgroundColor: 'white',
//   },
// });
//  function MainMadadApp() {
//   return (
//     <View style={MainPageStyle.PageMain}>
//       <View style={MainPageStyle.PageHead}>
//       <View style={{}}></View>

//       </View>
//       <View style={MainPageStyle.PageBody}>
//         <View style={MainPageStyle.OPB}>
//           <View style={MainPageStyle.OPBS}></View>
//           <View style={MainPageStyle.OPBA}>
//             <View style={MainPageStyle.OPBSA}></View>
//             <View style={MainPageStyle.OPBB}>
//               <View style={MainPageStyle.OPBAB}></View>
//             </View>
//             <View style={MainPageStyle.OPBSS}></View>
//             <View style={MainPageStyle.OPBB}>
//               <View style={MainPageStyle.OPBAB}></View>
//             </View>
//           </View>
//           <View style={MainPageStyle.OPBS}></View>
//           <View style={MainPageStyle.OPBA}>
//             <View style={MainPageStyle.OPBSA}></View>
//             <View style={MainPageStyle.OPBB}>
//               <View style={MainPageStyle.OPBAB}></View>
//             </View>
//             <View style={MainPageStyle.OPBSS}></View>
//             <View style={MainPageStyle.OPBB}>
//               <View style={MainPageStyle.OPBAB}></View>
//             </View>
//           </View>
//           <View style={MainPageStyle.OPBS}></View>
//           <View style={MainPageStyle.OPBA}>
//             <View style={MainPageStyle.OPBSA}></View>
//             <View style={MainPageStyle.OPBB}>
//               <View style={MainPageStyle.OPBAB}></View>
//             </View>
//             <View style={MainPageStyle.OPBSS}></View>
//             <View style={MainPageStyle.OPBB}>
//               <View style={MainPageStyle.OPBAB}></View>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }
// function EmailLogin()
// {
//   return(
//     <View style={{
//       flex:1,
//       justifyContent: 'space-between',
//       backgroundColor:"yellow"
//       }
//     }></View>
//   );
// }
// export default MainMadadApp;
// export default App;
