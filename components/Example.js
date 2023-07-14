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

export default function Example() {
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
  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      <TouchableOpacity
        style={{width: 200, height: 200, backgroundColor: 'red'}}
        onPress={signIn}>
        <Text>{'this is '} </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{width: 200, height: 200, backgroundColor: 'red'}}
        onPress={signOut}>
        <Text>{'Logout'} </Text>
      </TouchableOpacity>
      <Text>{appUser.user.email}</Text>
    </View>
  );
}

// export default function Example() {
//   // Somewhere in your code
//   signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       this.setState({userInfo});
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // user cancelled the login flow
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // operation (e.g. sign in) is in progress already
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // play services not available or outdated
//       } else {
//         // some other error happened
//       }
//     }
//   };
//   async function onGoogleButtonPress() {
//     // Check if your device supports Google Play
//     await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
//     // Get the users ID token
//     const {idToken} = await GoogleSignin.signIn();

//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//     // Sign-in the user with the credential
//     return auth().signInWithCredential(googleCredential);
//   }
//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   if (!user) {
//     return (
//       <View>
//         <Text>Login</Text>
//         <Button
//           title="Google Sign-In"
//           onPress={() =>
//             onGoogleButtonPress().then(() =>
//               console.log('Signed in with Google!'),
//             )
//           }
//         />
//       </View>
//     );
//   }

//   return (
//     <View>
//       <Text>Welcome {user.email}</Text>
//     </View>
//   );
// }
