import React from 'react';
import {Button, SafeAreaView, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Button
          title="view posts"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Login screen"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});
