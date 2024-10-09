import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

function Screen04() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let password = '';

    if (includeLowercase) password += chars;
    if (includeUppercase) password += chars.toUpperCase();
    if (includeNumber) password += '0123456789';
    if (includeSpecial) password += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let passwordArray = password.split('');

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * passwordArray.length);
      passwordArray[i] = passwordArray[randomIndex];
    }

    setGeneratedPassword(passwordArray.join(''));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>
      <Text>Password length</Text>
      <TextInput
        style={styles.input}
        value={passwordLength.toString()}
        onChangeText={(text) => setPasswordLength(parseInt(text))}
        keyboardType="numeric"
      />
      <View style={styles.switchContainer}>
        <Text>Include upcase letters</Text>
        <Switch
          value={includeUppercase}
          onValueChange={(value) => setIncludeUppercase(value)}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text>Include lower case letters</Text>
        <Switch
          value={includeLowercase}
          onValueChange={(value) => setIncludeLowercase(value)}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text>Include number</Text>
        <Switch
          value={includeNumber}
          onValueChange={(value) => setIncludeNumber(value)}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text>Include special symbol</Text>
        <Switch
          value={includeSpecial}
          onValueChange={(value) => setIncludeSpecial(value)}
        />
      </View>
      <Button title="Generate Password" onPress={generatePassword} />
      {generatedPassword && (
        <Text style={styles.generatedPassword}>{generatedPassword}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  generatedPassword: {
    fontSize: 18,
    color: 'green',
  },
});

export default Screen04;