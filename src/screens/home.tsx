import React, {useEffect} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useData from '../hooks/useData';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const {data, getPosts} = useData();
  const navigation = useNavigation();

  useEffect(() => {
    getPosts();
  }, []);

  const handlePost = (data: any) => {
    navigation.navigate('Detail', {data});
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        onRefresh={getPosts}
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.post}
              onPress={() => handlePost(item)}>
              <Text style={styles.header}>Title: {item.title}</Text>
              <Text numberOfLines={3}>Body: {item.body}</Text>
              <View style={styles.divider} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
        refreshing={data === null}
      />
      <Button title="Refresh" onPress={getPosts} />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 5,
    padding: 5,
    marginBottom: 10,
  },
  header: {
    fontWeight: '600',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
  },
});
