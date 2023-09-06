import React, {useCallback, useState} from 'react';
import {
  Button,
  TextInput,
  SafeAreaView,
  Alert,
  View,
  StyleSheet,
} from 'react-native';
import {credentials} from '../config';

function LoginScreen() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [, setLoggedIn] = useState<boolean>(false);

  const handleLogin = useCallback(() => {
    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      Alert.alert('Login successful.');
      setLoggedIn(true);
    } else {
      Alert.alert('Login failed.');
      setLoggedIn(false);
    }
  }, [username, password]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          id="test-username"
          style={styles.input}
          value={username}
          placeholder="Username"
          onChangeText={setUsername}
        />
        <TextInput
          id="test-password"
          style={styles.input}
          value={password}
          placeholder="Username"
          secureTextEntry
          onChangeText={setPassword}
        />
        <Button
          disabled={username === '' || password === ''}
          onPress={handleLogin}
          title="Login"
          testID="test-login"
        />
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
    width: '80%',
  },
  button: {
    height: 40,
    borderRadius: 10,
    width: '60%',
  },
});
