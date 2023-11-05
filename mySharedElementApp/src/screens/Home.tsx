import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {landmarksData} from '../data/landmarksData';
import LandmarkItem from '../components/LandmarkItem';

type Props = {};

const Home = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>PLACES TO VISIT</Text>
      <FlatList
        data={landmarksData}
        renderItem={({item, index}) => (
          <LandmarkItem item={item} index={index} />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 34,
    marginHorizontal: 20,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
