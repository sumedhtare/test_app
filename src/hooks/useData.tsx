import {useState} from 'react';
import {postsURL} from '../config';
import axios from 'axios';
import {Alert} from 'react-native';

function useData() {
  const [data, setData] = useState<any>(null);

  const getPosts = async () => {
    try {
      setData(null);
      const res = await axios.get(postsURL);
      setData(res.data);
    } catch (e) {
      setData(null);
      Alert.alert('API fetch failed');
    }
  };

  return {data, getPosts};
}

export default useData;
