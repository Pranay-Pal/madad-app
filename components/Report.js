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
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';
import app from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import database, {firebase} from '@react-native-firebase/database';
export default function Report() {
  const userCol = firestore().collection('Users');
  const onSubmit = async formFields => {
    try {
      const db = firebase
        .app()
        .database('https://madad-c5ecb-default-rtdb.firebaseio.com');
      const newUser = db.ref('/User/' + formFields.uidai.value);
      await newUser.set(formFields).then(() => console.log('Data updated.'));
      var cc, dc;
      const snapshot = await db.ref('/Count/d').once('value');
      console.log(snapshot);
      dc = snapshot.val() + 1;
      const snapshot2= await db.ref('/Count/c').once('value');
      console.log('Data saved!');
      cc=snapshot2.val()+1;
      console.log(snapshot2);
      console.log(cc,dc);
      if (formFields.state.value === "a") {
        // cc=cc+1;
        db.ref('/Count/c').set(cc);
        console.log('affected count')
      } else {
        db.ref('/Count/c').set(cc);
        db.ref('/Count/d').set(dc);
        // dc=dc+1;
        // db.ref('/Count/d').set({c: cc, d: dc});
        console.log('death count')

      }
      // console.log('Auto generated key: ', newReference.key);
      console.log(formFields);
    } catch (e) {
      console.log(e);
    }
  };
  const formTemplate = {
    data: [
      {
        component: 'input-text',
        field_name: 'name',
        is_mandatory: 'true',
        meta: {
          label: 'Name',
          placeholder: 'Enter name..',
        },
      },
      {
        component: 'input-text',
        field_name: 'uidai',
        is_mandatory: 'true',
        meta: {
          label: 'Enter AADHAAR/UIDAI no.',
          placeholder: 'Enter UIDAI no...',
        },
      },
      {
        component: 'input-dropdown',
        field_name: 'gender',
        is_mandatory: 'true',
        meta: {
          text: 'Select Gender',
          items: [
            {
              label: 'Male',
              value: 'm',
            },
            {
              label: 'Female',
              value: 'f',
            },
            {
              label: 'Non-Binary',
              value: 'n',
            },
          ],
        },
      },
      {
        component: 'input-text',
        field_name: 'age',
        is_mandatory: 'true',
        meta: {
          label: 'Age of patient',
          placeholder: 'Enter age..',
        },
      },
      {
        component: 'input-text',
        field_name: 'add',
        is_mandatory: 'true',
        meta: {
          label: 'Permanent of patient',
          placeholder: 'Enter address..',
        },
      },
      {
        component: 'input-text',
        field_name: 'pin',
        is_mandatory: 'true',
        meta: {
          label: 'Six Digit Pin/Zip Code of Permanent Address',
          placeholder: 'XXXXXX',
        },
      },
      {
        component: 'input-radio',
        field_name: 'state',
        is_mandatory: 'true',
        meta: {
          text: "Patient's Present Condition",
          data: [
            {
              label: 'Afflicted with Dengue.',
              value: 'a',
            },
            {
              label: 'Died of Dengue.',
              value: 'd',
            },
          ],
        },
      },
      {
        component: 'read-only-text',
        field_name: 'symptoms',
        meta: {
          text: 'Please check the symptoms which the patient have experienced:',
        },
        style: {
          color: 'blue',
          fontSize: 15,
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'cough',
        meta: {
          text: 'Cough & Cold',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'fever',
        meta: {
          text: 'Fever about 104 °F (40 °C).',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'bpain',
        meta: {
          text: 'Pain in muscles, bones, or joints',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'Nausea',
        meta: {
          text: 'Nausea',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'Headache',
        meta: {
          text: 'Headache',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'Vomiting',
        meta: {
          text: 'Vomiting',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'epain',
        meta: {
          text: 'Pain behind the eyes',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'gland',
        meta: {
          text: 'Swollen glands',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'rash',
        meta: {
          text: 'Rashes in different parts of the body.',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'ubp',
        meta: {
          text: 'Unstable blood pressure',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'cs',
        meta: {
          text: 'Skin have become cool',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'hp',
        meta: {
          text: 'Rapid weak pulse or very fast or very faint heartbeat',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'bc',
        meta: {
          text: 'Blue discoloration of the lips or around the mouth',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'rest',
        meta: {
          text: 'Restlessness, irritability and sweatiness.',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'spot',
        meta: {
          text: 'Small spots of blood on the skin or large areas of blood under the skin.',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'bruise',
        meta: {
          text: 'Easy bruising',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'sblood',
        meta: {
          text: 'Spitting up blood.',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'eblood',
        meta: {
          text: 'Presence of blood in the stool.',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'gblood',
        meta: {
          text: 'Bleeding gums.',
        },
      },
      {
        component: 'input-checkbox',
        field_name: 'nblood',
        meta: {
          text: 'Nose bleeds.',
        },
      },
      {
        component: 'read-only-text',
        field_name: 'termsAndConditions',
        meta: {
          text: 'By submitting this application, you certify that all of the statements made in this application are made in good faith and these statements are true and correct to the best of your knowledge.',
        },
        style: {
          color: 'blue',
          fontSize: 15,
        },
      },
    ],
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <DynamicForm onSubmit={onSubmit} formTemplate={formTemplate} />
      </ScrollView>
    </SafeAreaView>
  );
}