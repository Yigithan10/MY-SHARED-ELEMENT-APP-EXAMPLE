import {Dimensions, Platform, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Animated, {FadeIn} from 'react-native-reanimated';

type Props = {};

const Header = (props: Props) => {
  const navigation = useNavigation<any>();
  return (
    <Animated.View style={styles.container} entering={FadeIn.delay(400)}>
      <Pressable
        style={styles.icon}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name={'arrow-back-outline'} size={45} color={'white'} />
      </Pressable>
      <Pressable
        style={styles.icon}
        onPress={() => {
          console.log('Heart button pressed!');
        }}>
        <Icon name={'heart-outline'} size={45} color={'white'} />
      </Pressable>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 10,
    zIndex: 1,
    width: Dimensions.get('screen').width * 0.95,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
