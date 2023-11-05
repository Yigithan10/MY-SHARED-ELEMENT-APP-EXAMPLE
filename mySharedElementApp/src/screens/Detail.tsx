import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import Animated, {FadeIn} from 'react-native-reanimated';
import Header from '../components/Header';

type Props = {
  route: RouteProp<any, 'Detail'>;
};

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Detail = (props: Props) => {
  const {item}: any = props.route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View>
          <Animated.Image
            sharedTransitionTag={item.landmarksName}
            source={{uri: item.landmarksCoverImage}}
            style={styles.image}
          />
          <Animated.View
            style={styles.textAbsContainer}
            entering={FadeIn.delay(400)}>
            <Text style={styles.textName}>{item.landmarksName}</Text>
            <Text style={styles.textContry}>
              {item.landmarksCity + ', ' + item.landmarksCountry}
            </Text>
          </Animated.View>
        </View>
        <Animated.View
          style={styles.textContainer}
          entering={FadeIn.delay(600)}>
          <Text style={styles.textDes}>{item.landmarksExplanation}</Text>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
  },
  image: {
    width: width,
    height: height * 0.65,
  },
  textContainer: {
    margin: 15,
    gap: 10,
    flexShrink: 1,
  },
  textName: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  textContry: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
  },
  textDes: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 1.4,
    lineHeight: 30,
  },
  textAbsContainer: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    left: 10,
    right: 10,
    padding: 10,
    borderRadius: 16,
  },
});
