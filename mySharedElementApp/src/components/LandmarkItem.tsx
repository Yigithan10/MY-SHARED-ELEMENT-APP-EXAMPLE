import {Pressable, StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

export type Props = {
  item: any;
  index: number;
};

const LandmarkItem = (props: Props) => {
  const navigation = useNavigation<any>();
  return (
    <Animated.View entering={FadeInDown.delay(200 * props.index)}>
      <Pressable
        key={props.index}
        style={styles.container}
        onPress={() => {
          navigation.navigate('Detail', {item: props.item});
        }}>
        <Animated.Image
          sharedTransitionTag={props.item.landmarksName}
          source={{uri: props.item.landmarksCoverImage}}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{props.item.landmarksName}</Text>
          <Text style={styles.textContry}>
            {props.item.landmarksCity + ', ' + props.item.landmarksCountry}
          </Text>
          <Text style={styles.textDes}>
            {props.item.landmarksExplanation.substring(0, 25) + '...'}
          </Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default LandmarkItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    marginTop: 20,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  image: {
    width: 140,
    height: 190,
    borderRadius: 8,
  },
  textContainer: {
    margin: 15,
    gap: 10,
    flexShrink: 1,
  },
  textName: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
  },
  textContry: {
    color: 'black',
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
});
