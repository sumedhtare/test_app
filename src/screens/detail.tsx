import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

function DetailScreen() {
  const route = useRoute();

  const {data}: any = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.post}>
        <Text style={styles.content}>{JSON.stringify(data, null, 2)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    padding: 15,
    marginBottom: 10,
  },
  content: {
    fontWeight: '600',
    fontSize: 16,
  },
});
