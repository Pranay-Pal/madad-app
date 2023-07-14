import React, {useCallback} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
const img1 = require('./images/image-003.png');
const img2 = require('./images/image-004.png');
const img3 = require('./images/image-005.png');
const img4 = require('./images/image-008.png');
const img5 = require('./images/image-006.png');
const img6 = require('./images/image-007.png');
const HomeButtonsCard = props => {
  return (
    <TouchableOpacity
      onPress={props.in}
      style={{
        backgroundColor: '#FFF500',
        width: 130,
        height: 140,
        borderTopRightRadius: 60,
        margin: 20,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          width: 80,
          height: 90,
          borderBottomRightRadius: 70,
          padding: 0,
          opacity: 0.8,
          flexDirection: 'row',
          zIndex: -1,
        }}></View>
      <Text
        style={{
          fontSize: 20,
          marginLeft: 10,
          marginTop: -70,
          marginRight: 5,
        }}
        numberOfLines={2}>
        {props.text}
      </Text>
      <Image
        source={props.imgloc}
        style={{
          width: 70,
          height: 70,
          marginTop: -3,
          marginLeft: 55,
          borderRadius: 65,
          padding: 0,
          margin: 0,
        }}></Image>
    </TouchableOpacity>
  );
};
export default function Home({navigation}) {
  const GoAbout = () => navigation.navigate('Know About Dengue');
  const GoDig = () => navigation.navigate('Quick Diagnosis');
  const GoRep = () => navigation.navigate('Report Dengue');
  const GoServ = () => navigation.navigate('Survey Reports');
  const GoDoc = () => navigation.navigate('Doctors Nearby');
  // const docNrby = () =>Linking.openURL('https://www.google.com/maps/search/?api=1');
  const url =
    'https://www.google.com/maps/search/?api=1&query=doctor+who+treats+dengue+near+me';
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert('Dont know how to open this URL: ${url}');
    }
  }, [url]);
  const GoEmer = () => navigation.navigate('Emergency Care');

  return (

    <View style={{flex: 1}}>
      <Text style={{fontSize: 25, marginLeft: 20, marginTop: 20}}>
        Hello,
      </Text>
      <Text style={{fontSize: 25, marginLeft: 50, marginTop: -5}}>
        Welcome to <Text style={{fontSize: 32, color: '#FFF500'}}>MADAD</Text>.
      </Text>
      <Text style={{fontSize: 25, marginLeft: 20}}>
        Your tool to fight with dengue.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 30,
        }}>
        <HomeButtonsCard
          text={'Know about Dengue'}
          imgloc={img1}
          in={GoAbout}
        />
        <HomeButtonsCard text={'Quick Diagnosis'} imgloc={img2} in={GoDig} />
        <HomeButtonsCard text={'Emergency Care'} imgloc={img3} in={GoEmer} />
        <HomeButtonsCard
          text={'Doctors Nearby'}
          imgloc={img4}
          in={handlePress}
        />
        <HomeButtonsCard text={'Report Dengue'} imgloc={img5} in={GoRep} />
        <HomeButtonsCard text={'Survey Reports'} imgloc={img6} in={GoServ} />
      </View>
    </View>
  );
}
