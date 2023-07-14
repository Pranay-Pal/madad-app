import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
const mosimg = require('./images/mosk.png');
const col = 'FFF500';
const AbtInfCrd = props => {
  return (
    <>
      <View
        style={{
          height: 40,
          backgroundColor: '#fff500',
          alignItems: 'center',
          justifyContent: 'center',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          marginTop: 5,
        }}>
        <Text style={{fontSize: 25}}>{props.title}</Text>
      </View>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#f5f5f5',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <Text style={{fontSize: 16}}>{props.info}</Text>
      </ScrollView>
    </>
  );
};
const AbtInfCrdImg = props => {
  return (
    <>
      <View
        style={{
          height: 40,
          backgroundColor: '#fff500',
          alignItems: 'center',
          justifyContent: 'center',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          marginTop: 5,
        }}>
        <Text style={{fontSize: 25}}>{props.title}</Text>
      </View>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#f5f5f5',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <Image
          source={props.imgloc}
          style={{height: 150, width: 200, margin: 10, alignSelf:'center'}}></Image>
        <Text style={{fontSize: 16}}>{props.info}</Text>
      </ScrollView>
    </>
  );
};
export default function About() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        margin: 20,
      }}>
      <AbtInfCrd
        title={'Causes & Spreading:'}
        info={
          'Causes of dengue : \n Dengue is caused by dengue viruses (DENVs) which can be broadly classified to 4 antigenically distinct stereotypes DENV-1, DENV-2, DENV-3, and DENV-4, Though we talk about only 4 stereotype a fifth one reported in some medical journals DENV-5. The spread of this virus is caused by a specific mosquito species Aedes Aegypti (also called Dengue Vector). \n \nSpreading : \n1.	Mosquito Bites: \n Dengue is spread by two species of mosquito Aedes Aegypti and Aedes Albopictus. It is a vector born disease and major part of its life cycle consisting of the reproductive stages and other vital metabolic processes completes inside the human body, it is transmitted in sylvatic cycles from humans to aedes mosquitos. \n During mosquito bites the virus travels from an infected human body to an uninfected mosquito thus infecting it, the virus stays in stomach of infected mosquito and infects healthy human when the infected mosquito bites a healthy human. \n2. From mother to child: \n Dengue can spread if mother to child during the period of pregnancy. Dengue also spread from breast feeding. \n 3. Infected organ and blood transplant: \nDuring blood or organ transfer from infected to healthy person or use of infected needles spreads the disease.'
        }
      />
      <AbtInfCrdImg
        title={'Dengue Agents:'}
        info={
          '             ⦾Fig: Typical Aedes Mosquito. \n Two specific species of Aedes mosquito the Aegypti and Albopictus are the agents that are responsible transmission of dengue.\nThis Aedes species can be easily be identified distinctly from other mosquitos due to its black and white stripes and spots in its body.\n The male mosquitos live on diet consisting of sap and extract from plants but female mosquito feeds on blood due to its nutritional needs to reproduce and lay eggs.\nUnlike most mosquitos, dengue mosquito bites both during the day and night and owing to its evolution can survive at drastic situations, its larvae and eggs can even survive in storage of water. They prefer living in dark and moist places, and lay egg in stagnant water and mostly during day time.\nLife cycle of Aedes Mosquito:\nAegypti lives about 26-29 days (about 4 weeks) and Albopictus lives about 23-24 days (about 3 and a half weeks), both goes through stages - \nEggs -> Larva -> Pupa -> Adult Aedes Mosquito, these cycles are completed by feeding, mating and egg laying thus producing new off springs.'
        }
        imgloc={mosimg}
      />
      <AbtInfCrd
        title={'Symptoms'}
        info={
          'Cough and Common Cold, Fever about 104 F (40 C), Headache, Pain in muscle, bone or joint, Nausea, Vomiting, Pain behind the eyes, Swollen glands, Rash, Restlessness, irritability and sweatiness, Restlessness, irritability and sweatiness, Severe abdominal pain, Small spots of blood on the skin or large areas of blood under the skin, Easy bruising, Spitting up blood, Presence of blood in the stool, Bleeding gums, Nose bleeds'
        }
      />
    </SafeAreaView>
  );
}
