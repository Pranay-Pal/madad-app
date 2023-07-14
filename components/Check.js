import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Checkbox} from 'react-native-paper';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {set} from 'lodash';
const style = StyleSheet.create({
  main: {flex: 1},
  next: {
    backgroundColor: 'yellow',
    alignSelf: 'center',
    margin: 10,
    marginBottom: 30,
    justifySelf: 'flex-end',
    width: 150,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nxttxt: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listbox: {margin: 10, flex: 1},
  line: {height: 5, backgroundColor: 'yellow'},
  svoptions: {flex: 1},
  optxt: {color: 'black', marginBottom: 15, fontSize: 20},
  ckbtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cktxt: {fontSize: 20, color: 'black'},
  resetbx: {
    backgroundColor: 'yellow',
    alignSelf: 'flex-end',
    margin: 10,
    justifySelf: 'flex-end',
    width: 80,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetx: {color: 'black', fontSize: 18, fontWeight: 'bold'},
});
export default function Check({navigation}) {
  const [page, setPage] = React.useState(1);
  const [cough, setCough] = React.useState(false);
  const [ubp, setUbp] = React.useState(false);
  const [cs, setCs] = React.useState(false);
  const [hp, setHp] = React.useState(false);
  const [bc, setBc] = React.useState(false);
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
  const [NS1, setNS1] = React.useState(false);
  const [IgG, setIgG] = React.useState(false);
  const [IgM, setIgM] = React.useState(false);
  const [RTPCRT, setRTPCRT] = React.useState(false);
  const [BPC, setBPC] = React.useState(150000);
  const nextPage = () => setPage(page + 1);
  const resetF = () => {
    setPage(1);
    setCough(false);
    setCold(false);
    setFever(false);
    setBpain(false);
    setHead(false);
    setNausea(false);
    setVomit(false);
    setEpain(false);
    setGland(false);
    setRash(false);
    setSblood(false);
    setEblood(false);
    setGblood(false);
    setNblood(false);
    setRest(false);
    setApain(false);
    setSpot(false);
    setBruise(false);
    setUbp(false);
    setCs(false);
    setBc(false);
    setHp(false);
    setNS1(false);
    setIgG(false);
    setIgM(false);
    setRTPCRT(false);
    setBPC(150000);
  };
  var cden = 0;
  if (NS1 == true) {
    cden = cden + 1;
  }
  if (IgG == true) {
    cden = cden + 1;
  }
  if (IgM == true) {
    cden = cden + 1;
  }
  if (RTPCRT == true) {
    cden = cden + 1;
  }
  var t = '';
  if (cden != 0 && BPC < 150000) {
    t =
      'Patient is supposably infected with Dengue and have low platelets, Please consider consulting a doctor as early as possible. You may also checkout the emergency care section in case of emergency';
  }
  if (cden == 0 && BPC < 150000) {
    t =
      'Patient is supposably not infected with Dengue but have low platelets, Please consider consulting a doctor as early as possible.';
  }
  if (cden != 0 && BPC >= 150000) {
    t =
      'Patient is supposably infected with Dengue, Please consider consulting a doctor as early as possible. You may also checkout the emergency care section in case of emergency';
  }
  if (cden == 0 && BPC >= 150000) {
    t =
      'Patient is supposably not infected with Dengue, Please consider consulting a doctor in case of any problem.';
  }
  var s = '';
  var Scold = 0;
  var Sdf = 0;
  var Sdhf = 0;
  var Ssdd = 0;
  var Sdss = 0;
  if (cough == true) {
    Scold = Scold + 1;
  }
  if (cold == true) {
    Scold = Scold + 1;
  }
  if (fever == true) {
    Scold = Scold + 1;
  }
  if (bpain == true) {
    Sdf = Sdf + 1;
  }
  if (head == true) {
    Sdf = Sdf + 1;
  }
  if (nausea == true) {
    Sdf = Sdf + 1;
  }
  if (vomit == true) {
    Sdf = Sdf + 1;
  }
  if (epain == true) {
    Sdf = Sdf + 1;
  }
  if (gland == true) {
    Sdf = Sdf + 1;
  }
  if (rash == true) {
    Sdf = Sdf + 1;
  }
  if (rest == true) {
    Ssdd = Ssdd + 1;
  }
  if (apain == true) {
    Sdhf = Sdhf + 1;
  }
  if (spot == true) {
    Sdhf = Sdhf + 1;
  }
  if (bruise == true) {
    Sdhf = Sdhf + 1;
  }
  if (sblood == true) {
    Sdhf = Sdhf + 1;
  }
  if (eblood == true) {
    Sdhf = Sdhf + 1;
  }
  if (gblood == true) {
    Sdhf = Sdhf + 1;
  }
  if (nblood == true) {
    Sdhf = Sdhf + 1;
  }
  if (ubp == true) {
    Sdss = Sdss + 1;
  }
  if (cs == true) {
    Sdss = Sdss + 1;
  }
  if (bc == true) {
    Sdss = Sdss + 1;
  }
  if (hp == true) {
    Sdss = Sdss + 1;
  }
  if (Scold != 0 && Sdf == 0 && Ssdd == 0 && Sdhf == 0 && Sdss == 0) {
    s =
      'You are probably not affected with dengue please visit a general physician first if he suggests you shall visit a specialist doctor \nYou should also check clinical tests to be more sure';
  }
  if (Sdf != 0 && Ssdd == 0 && Sdhf == 0 && Sdss == 0) {
    s =
      'You may have Dengue Fever (DF), please fo through clinical tests or visit a doctor';
  }
  if (Ssdd != 0 && Sdhf == 0 && Sdss == 0) {
    s =
      'You may have dengue Severe Dengue Disease (SDD), please fo through clinical tests or visit a doctor';
  }
  if (Sdhf != 0 && Sdss == 0) {
    s =
      'You may have Dengue Hemorrhagic Fever (DHF) , please fo through mclinical tests or visit a doctor';
  }
  if (Sdss != 0) {
    s =
      'You may have Dengue Shock Syndrome (DSS) , please fo through clinical tests or visit a doctor';
  }

  if (page == 2) {
    return (
      <View style={style.main}>
        <View style={style.listbox}>
          <TouchableOpacity style={style.resetbx} onPress={resetF}>
            <Text style={style.resetx}>reset</Text>
          </TouchableOpacity>
          <Text style={style.optxt}>
            {
              'Please check the appropriate check boxes corrosponding to symptoms you exhibit :\n'
            }
            <Text style={{color: 'red'}}>Note:</Text>
            {' Inaccurate information may result in an incorrect diagnosis.'}
          </Text>
          <View style={style.line}></View>
          <SafeAreaView style={style.svoptions}>
            <ScrollView>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>
                  Pain in muscles, bones, or joints
                </Text>
                <CheckBox
                  value={bpain}
                  onValueChange={newValue => setBpain(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Nausea</Text>
                <CheckBox
                  value={nausea}
                  onValueChange={newValue => setNausea(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Headache</Text>
                <CheckBox
                  value={head}
                  onValueChange={newValue => setHead(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Vomiting</Text>
                <CheckBox
                  value={vomit}
                  onValueChange={newValue => setVomit(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Pain behind the eyes</Text>
                <CheckBox
                  value={epain}
                  onValueChange={newValue => setEpain(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Swollen glands</Text>
                <CheckBox
                  value={gland}
                  onValueChange={newValue => setGland(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>
                  Rashes in different parts of the body.
                </Text>
                <CheckBox
                  value={rash}
                  onValueChange={newValue => setRash(newValue)}
                  disabled={false}
                />
              </View>
            </ScrollView>
          </SafeAreaView>
          <View style={style.line}></View>
        </View>
        <TouchableOpacity style={style.next} onPress={nextPage}>
          <Text style={style.nxttxt}> NEXT {'>'} </Text>
        </TouchableOpacity>
      </View>
    );
  } else if (page == 1) {
    return (
      <View style={style.main}>
        <View style={style.listbox}>
          <TouchableOpacity style={style.resetbx} onPress={resetF}>
            <Text style={style.resetx}>reset</Text>
          </TouchableOpacity>
          <Text style={style.optxt}>
            {
              'Please check the appropriate check boxes corrosponding to symptoms you exhibit :\n'
            }
            <Text style={{color: 'red'}}>Note:</Text>
            {' Inaccurate information may result in an incorrect diagnosis.'}
          </Text>
          <View style={style.line}></View>
          <SafeAreaView style={style.svoptions}>
            <ScrollView>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Cough</Text>
                <CheckBox
                  value={cough}
                  onValueChange={newValue => setCough(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Common Cold</Text>
                <CheckBox
                  value={cold}
                  onValueChange={newValue => setCold(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Fever about 104 °F (40 °C).</Text>
                <CheckBox
                  value={fever}
                  onValueChange={newValue => setFever(newValue)}
                  disabled={false}
                />
              </View>
            </ScrollView>
          </SafeAreaView>
          <View style={style.line}></View>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            marginLeft: 10,
            marginRight: 10,
          }}>
          To skip to clinical diagnostic section click
          <TouchableOpacity onPress={() => setPage(7)}>
            <Text
              style={{
                fontSize: 20,
                color: 'blue',
              }}>
              here
            </Text>
          </TouchableOpacity>
        </Text>
        <TouchableOpacity style={style.next} onPress={nextPage}>
          <Text style={style.nxttxt}> NEXT {'>'} </Text>
        </TouchableOpacity>
      </View>
    );
  } else if (page == 5) {
    return (
      <View style={style.main}>
        <View style={style.listbox}>
          <TouchableOpacity style={style.resetbx} onPress={resetF}>
            <Text style={style.resetx}>reset</Text>
          </TouchableOpacity>
          <Text style={style.optxt}>
            {
              'Please check the appropriate check boxes corrosponding to symptoms you exhibit :\n'
            }
            <Text style={{color: 'red'}}>Note:</Text>
            {' Inaccurate information may result in an incorrect diagnosis.'}
          </Text>
          <View style={style.line}></View>
          <SafeAreaView style={style.svoptions}>
            <ScrollView>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Unstable blood pressure</Text>
                <CheckBox
                  value={ubp}
                  onValueChange={newValue => setUbp(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Skin have become cool</Text>
                <CheckBox
                  value={cs}
                  onValueChange={newValue => setCs(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>
                  {'Rapid weak pulse or very fast \nor very faint heartbeat'}
                </Text>
                <CheckBox
                  value={hp}
                  onValueChange={newValue => setHp(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>
                  {'Blue discoloration of the lips \nor around the mouth'}
                </Text>
                <CheckBox
                  value={bc}
                  onValueChange={newValue => setBc(newValue)}
                  disabled={false}
                />
              </View>
            </ScrollView>
          </SafeAreaView>
          <View style={style.line}></View>
        </View>
        <TouchableOpacity style={style.next} onPress={nextPage}>
          <Text style={style.nxttxt}> NEXT {'>'} </Text>
        </TouchableOpacity>
      </View>
    );
  } else if (page == 3) {
    return (
      <View style={style.main}>
        <View style={style.listbox}>
          <TouchableOpacity style={style.resetbx} onPress={resetF}>
            <Text style={style.resetx}>reset</Text>
          </TouchableOpacity>
          <Text style={style.optxt}>
            {
              'Please check the appropriate check boxes corrosponding to symptoms you exhibit :\n'
            }
            <Text style={{color: 'red'}}>Note:</Text>
            {' Inaccurate information may result in an incorrect diagnosis.'}
          </Text>
          <View style={style.line}></View>
          <SafeAreaView style={style.svoptions}>
            <ScrollView>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>
                  {'Restlessness, irritability and \nsweatiness.'}
                </Text>
                <CheckBox
                  value={rest}
                  onValueChange={newValue => setRest(newValue)}
                  disabled={false}
                />
              </View>
            </ScrollView>
          </SafeAreaView>
          <View style={style.line}></View>
        </View>
        <TouchableOpacity style={style.next} onPress={nextPage}>
          <Text style={style.nxttxt}> NEXT {'>'} </Text>
        </TouchableOpacity>
      </View>
    );
  } else if (page == 4) {
    return (
      <View style={style.main}>
        <View style={style.listbox}>
          <TouchableOpacity style={style.resetbx} onPress={resetF}>
            <Text style={style.resetx}>reset</Text>
          </TouchableOpacity>
          <Text style={style.optxt}>
            {
              'Please check the appropriate check boxes corrosponding to symptoms you exhibit :\n'
            }
            <Text style={{color: 'red'}}>Note:</Text>
            {' Inaccurate information may result in an incorrect diagnosis.'}
          </Text>
          <View style={style.line}></View>
          <SafeAreaView style={style.svoptions}>
            <ScrollView>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Severe abdominal pain.</Text>
                <CheckBox
                  value={apain}
                  onValueChange={newValue => setApain(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>
                  {
                    'Small spots of blood on the skin or \nlarge areas of blood under the skin.'
                  }
                </Text>
                <CheckBox
                  value={spot}
                  onValueChange={newValue => setSpot(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Easy bruising</Text>
                <CheckBox
                  value={bruise}
                  onValueChange={newValue => setBruise(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Spitting up blood.</Text>
                <CheckBox
                  value={sblood}
                  onValueChange={newValue => setSblood(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Presence of blood in the stool.</Text>
                <CheckBox
                  value={eblood}
                  onValueChange={newValue => setEblood(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Bleeding gums.</Text>
                <CheckBox
                  value={gblood}
                  onValueChange={newValue => setGblood(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Nose bleeds.</Text>
                <CheckBox
                  value={nblood}
                  onValueChange={newValue => setNblood(newValue)}
                  disabled={false}
                />
              </View>
            </ScrollView>
          </SafeAreaView>
          <View style={style.line}></View>
        </View>
        <TouchableOpacity style={style.next} onPress={nextPage}>
          <Text style={style.nxttxt}> NEXT {'>'} </Text>
        </TouchableOpacity>
      </View>
    );
  } else if (page == 6) {
    return (
      <View style={style.main}>
        <View style={style.listbox}>
          <TouchableOpacity style={style.resetbx} onPress={resetF}>
            <Text style={style.resetx}>reset</Text>
          </TouchableOpacity>
          <Text style={style.optxt}>Patient's Report :</Text>
          <View style={style.line}></View>
          <SafeAreaView style={style.svoptions}>
            <ScrollView>
              <Text style={style.cktxt}>{s}</Text>
            </ScrollView>
          </SafeAreaView>
          <View style={style.line}></View>
        </View>
        <TouchableOpacity style={style.next} onPress={nextPage}>
          <Text style={style.nxttxt}>Clinical Tests</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (page == 7) {
    return (
      <View style={style.main}>
        <View style={style.listbox}>
          <TouchableOpacity style={style.resetbx} onPress={resetF}>
            <Text style={style.resetx}>reset</Text>
          </TouchableOpacity>
          <Text style={style.optxt}>Welcome to clinical tests section</Text>
          <View style={style.line}></View>
          <SafeAreaView style={style.svoptions}>
            <ScrollView>
              <Text style={style.cktxt}>
                {
                  'You are supposed to perform the following tests prehand from nearest diagnostic centre :\n\n\n   1.	Dengue NS1 Antigen test\n\n    2.	Dengue IgM Antibody test\n\n     3.	Dengue IgG Antibody test\n\n      5.	Dengue RT-PCR Test\n\n       4.	Blood Platelets Count'
                }
              </Text>
            </ScrollView>
          </SafeAreaView>
          <View style={style.line}></View>
        </View>
        <TouchableOpacity style={style.next} onPress={nextPage}>
          <Text style={style.nxttxt}>Done Tests</Text>
        </TouchableOpacity>
      </View>
    );
  }
  if (page == 8) {
    return (
      <View style={style.main}>
        <View style={style.listbox}>
          <TouchableOpacity style={style.resetbx} onPress={resetF}>
            <Text style={style.resetx}>reset</Text>
          </TouchableOpacity>
          <Text style={style.optxt}>
            {
              'Please select the check boxes for the tests that have resulted in a positive result, and please provide the requested information also :\n'
            }
            <Text style={{color: 'red'}}>Note:</Text>
            {' Inaccurate information may result in an incorrect diagnosis.'}
          </Text>
          <View style={style.line}></View>
          <SafeAreaView style={style.svoptions}>
            <ScrollView>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Dengue NS1 Antigen test</Text>
                <CheckBox
                  value={NS1}
                  onValueChange={newValue => setNS1(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Dengue IgM Antibody test</Text>
                <CheckBox
                  value={IgM}
                  onValueChange={newValue => setIgM(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Dengue IgG Antibody test</Text>
                <CheckBox
                  value={IgG}
                  onValueChange={newValue => setIgG(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Dengue RT-PCR Test</Text>
                <CheckBox
                  value={RTPCRT}
                  onValueChange={newValue => setRTPCRT(newValue)}
                  disabled={false}
                />
              </View>
              <View style={style.ckbtn}>
                <Text style={style.cktxt}>Blood Platelets Count (per mcL)</Text>
                <TextInput
                  onChangeText={text => setBPC(text)}
                  multiline={false}
                  value={BPC}
                  style={{
                    width: 75,
                    height: 30,
                    borderColor: 'grey',
                    borderWidth: 1,
                    backgroundColor: 'white',
                    padding: 0,
                    paddingLeft: 10,
                    marginRight: 6,
                  }}
                  placeholder={'Entre Count'}></TextInput>
              </View>
            </ScrollView>
          </SafeAreaView>
          <View style={style.line}></View>
        </View>
        <TouchableOpacity style={style.next} onPress={nextPage}>
          <Text style={style.nxttxt}> NEXT {'>'} </Text>
        </TouchableOpacity>
      </View>
    );
  } else if (page == 9) {
    return (
      <View style={style.main}>
        <View style={style.listbox}>
          <TouchableOpacity style={style.resetbx} onPress={resetF}>
            <Text style={style.resetx}>reset</Text>
          </TouchableOpacity>
          <Text style={style.optxt}>Patient's Report :</Text>
          <View style={style.line}></View>
          <SafeAreaView style={style.svoptions}>
            <ScrollView>
              <Text style={style.cktxt}>{t}</Text>
            </ScrollView>
          </SafeAreaView>
          <View style={style.line}></View>
        </View>
      </View>
    );
  }
}
