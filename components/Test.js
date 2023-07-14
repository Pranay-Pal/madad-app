// import * as React from 'react';
// import { Checkbox } from 'react-native-paper';
// import {Text,View} from 'react-native'
// function man(props)
// {
//   nan="gas";
//   if(props==true)
//   {nan="air";}
//   return(nan);

// }
// const MyComponent = () => {
//   const [checked, setChecked] = React.useState(false);

//   return (
//     <View style={{margin:100,}}>
//     <Checkbox
//       status={checked ? 'checked' : 'unchecked'}
//       onPress={() => {
//         setChecked(!checked);
//       }}
//     />
//     <Text>{man(checked)}</Text>
//     </View>
//   );
// };

// export default MyComponent;


import CheckBox from '@react-native-community/checkbox';
import React, {useState, useEffect} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
const style = StyleSheet.create({
  main: {flex: 1},
  next: {
    backgroundColor: 'yellow',
    alignSelf: 'center',
    margin: 10,
    marginBottom: 30,
    justifySelf: 'flex-end',
    width: 100,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nxttxt: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  listbox: {margin: 10, flex: 1},
  line: {height: 5, backgroundColor: 'yellow'},
  svoptions: {flex: 1},
  ckbtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cktxt: {fontSize: 20, color: 'black', flex: 7},
  cb: {flex: 1},
});
export default function Check() {
  const [cough, setCough] = React.useState(false);
  const [cold, setCold] = React.useState(false);
  const [fever, setFever] = React.useState(false);
  const [bpain, setBpain] = React.useState(false);
  const [head, setHead] = React.useState(false);
  const [nausea, setNausea] = React.useState(false);
  const [vomit, setVomit] = React.useState(false);
  const [epain, setEpain] = React.useState(false);
  const [gland, setGland] = React.useState(false);
  const [rash, setRash] = React.useState(false);
  const [rest, setRest] = React.useState(false);
  const [apain, setApain] = React.useState(false);
  const [spot, setSpot] = React.useState(false);
  const [bruise, setBruise] = React.useState(false);
  const [sblood, setSblood] = React.useState(false);
  const [eblood, setEblood] = React.useState(false);
  const [gblood, setGblood] = React.useState(false);
  const [nblood, setNblood] = React.useState(false);
  var s = '';
  var flu = false;
  if (cold == true || cough == true) {
    flu = true;
  }
  var DF = 0;
  var DHF = 0;
  var stDF = false;
  var stDHF = false;
  if (bpain == true) {
    DF = DF + 1;
  }
  if (head == true) {
    DF = DF + 1;
  }
  if (nausea == true) {
    DF = DF + 1;
  }
  if (vomit == true) {
    DF = DF + 1;
  }
  if (epain == true) {
    DF = DF + 1;
  }
  if (gland == true) {
    DF = DF + 1;
  }
  if (rash == true) {
    DF = DF + 1;
  }
  if (DF > 4 && (flu == true || fever == true)) {
    stDF = true;
  }
  if (apain == true) {
    DHF = DHF + 1;
  }
  if (spot == true) {
    DHF = DHF + 1;
  }
  if (bruise == true) {
    DHF = DHF + 1;
  }
  if (sblood == true) {
    DHF = DHF + 1;
  }
  if (eblood == true) {
    DHF = DHF + 1;
  }
  if (gblood == true) {
    DHF = DHF + 1;
  }
  if (nblood == true) {
    DHF = DHF + 1;
  }
  if (DHF > 3 && (flu == true || fever == true)) {
    stDHF = true;
  }
  if ((flu == true || fever == true) && stDF == false && stDHF == false) {
    s =
      'Patient Report :\n You are probably not affected with dengue please visit a general physician.';
  }
  if (stDF == true && stDHF == false && rest == false) {
    s =
      'Patient Report :\n You may have dengue fever (DF), please fo through more tests or visit a doctor';
  }
  if (stDF == true && stDHF == false && rest == true) {
    s =
      'Patient Report :\n You may have dengue devere dengue disease (SDD), please fo through more tests or visit a doctor';
  }
  if (stDHF == true) {
    s =
      'Patient Report :\n You may have dengue hemorrhagic fever (DHF) , please fo through more tests or visit a doctor';
  }
  return (
    <View style={style.main}>
      <View style={style.listbox}>
        <View style={style.line}></View>
        <SafeAreaView style={style.svoptions}>
          <ScrollView>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>Dry Caughs.</Text>
              <Checkbox
                status={cough ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setCough(!cough);
                }}
                style={style.cb}
              />
            </View>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>Common Cold.</Text>
              <Checkbox
                status={cold ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setCold(!cold);
                }}
                style={style.cb}
              />
            </View>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>Fever about 104 °F (40 °C).</Text>
              <Checkbox
                status={fever ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setFever(!fever);
                }}
                style={style.cb}
              />
            </View>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>Pain in muscles, bones, or joints</Text>
              <Checkbox
                status={bpain ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setBpain(!bpain);
                }}
                style={style.cb}
              />
            </View>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>Nausea</Text>
              <Checkbox
                status={nausea ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setNausea(!nausea);
                }}
                style={style.cb}
              />
            </View>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>Headache</Text>
              <Checkbox
                status={head ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setHead(!head);
                }}
                style={style.cb}
              />
            </View>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>Vomiting</Text>
              <Checkbox
                status={vomit ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setVomit(!vomit);
                }}
                style={style.cb}
              />
            </View>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>Pain behind the eyes</Text>
              <Checkbox
                status={epain ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setEpain(!epain);
                }}
                style={style.cb}
              />
            </View>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>Swollen glands</Text>
              <Checkbox
                status={gland ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setGland(!gland);
                }}
                style={style.cb}
              />
            </View>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>
                Rashes in different parts of the body.
              </Text>
              <Checkbox
                status={rash ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setRash(!rash);
                }}
                style={style.cb}
              />
            </View>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>
                Restlessness, irritability and sweatiness.
              </Text>
              <Checkbox
                status={rest ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setRest(!rest);
                }}
                style={style.cb}
              />
            </View>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>Severe abdominal pain.</Text>
              <Checkbox
                status={apain ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setApain(!apain);
                }}
                style={style.cb}
              />
            </View>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>
                Small spots of blood on the skin or large areas of blood under
                the skin.
              </Text>
              <Checkbox
                status={spot ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setSpot(!spot);
                }}
                style={style.cb}
              />
            </View>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>Easy bruising</Text>
              <Checkbox
                status={bruise ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setBruise(!bruise);
                }}
                style={style.cb}
              />
            </View>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>Spitting up blood.</Text>
              <Checkbox
                status={sblood ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setSblood(!sblood);
                }}
                style={style.cb}
              />
            </View>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>Presence of blood in the stool.</Text>
              <Checkbox
                status={eblood ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setEblood(!eblood);
                }}
                style={style.cb}
              />
            </View>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>Bleeding gums.</Text>
              <Checkbox
                status={gblood ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setGblood(!gblood);
                }}
                style={style.cb}
              />
            </View>
            <View style={style.ckbtn}>
              <Text style={style.cktxt}>Nose bleeds.</Text>
              <Checkbox
                status={nblood ? 'checked' : 'unchecked'}
                uncheckedColor={'red'}
                color={'green'}
                onPress={() => {
                  setNblood(!nblood);
                }}
                style={style.cb}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
        <Text>{s}</Text>
        <View style={style.line}></View>
      </View>
      <View style={style.next}>
        <Text style={style.nxttxt}>NEXT</Text>
      </View>
    </View>
  );
}

// 1.1	Cough
// 1.2	Common Cold
// 2.1	fever about 104 F (40 C)
// 2.2	Headache
// 2.3	Muscle, bone, or joint pain
// 2.4	Nausea
// 2.5	Vomiting
// 2.6	Pain behind the eyes
// 2.7	Swollen glands
// 2.8	Rash
// 3.	Severe Dengue Disease (SDD):
// 3.1	Restlessness, irritability and sweatiness
// [Ref: 1. https://www.hindawi.com/journals/bmri/2014/359308/ ]
// 4.	Dengue Hemorrhagic Fever (DHF):
// 4.1	Restlessness, irritability and sweatiness.
// 4.2	Severe abdominal pain.
// 4.3	Small spots of blood on the skin or large areas of blood under the skin.
// 4.4	Easy bruising.
// 4.5	Spitting up blood.
// 4.6	Presence of blood in the stool.
// 4.7	Bleeding gums.
// 4.8	Nose bleeds
