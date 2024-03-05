import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
  Button,
} from 'react-native';

function LogInScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.logoView}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Image
          source={require('../assets/logo_name_blue.png')}
          style={styles.logoName}
        />
      </View>

      <TextInput style={styles.input} placeholder="Correo electrónico" />
      <TextInput style={styles.input} placeholder="Contraseña" />
      <Button title="Iniciar sesión" onPress={() => {}} />
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
    marginBottom: 50,
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
    marginTop: 20,
    borderColor: 'white',
    borderWidth: 1,
  },
});

export default LogInScreen;
