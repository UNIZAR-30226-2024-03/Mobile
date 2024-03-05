import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
  Button,
} from 'react-native';

import LogInButton from '../components/Buttons/LogInButton';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

function LogInScreen(this: any) {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.logoView}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Image
          source={require('../assets/logo_name_blue.png')}
          style={styles.logoName}
        />
      </View>
      <View style={styles.formView}>
        <TextInput style={styles.input} placeholder="Correo electrónico" />
        <TextInput style={styles.input} placeholder="Contraseña" />
        <LogInButton onPress={undefined} />
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          style={{width: 308, height: 50}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#242423',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    alignItems: 'center',
    marginBottom: 40,
    gap: 20,
  },
  logo: {
    width: 143,
    height: 157,
  },
  logoName: {
    height: 75,
    aspectRatio: 3.819727891,
  },
  input: {
    width: 300,
    height: 40,
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  formView: {
    alignItems: 'center',
    gap: 10,
  },
});

export default LogInScreen;
