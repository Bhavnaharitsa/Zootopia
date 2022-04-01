import React, {useEffect} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('AnimalList');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.splashScreenView}>
      <Text style={styles.splashTextView}>ZOOTOPIA</Text>
      <Image
        style={styles.splashImageStyle}
        source={require('../../assets/icon.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  splashScreenView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkorange',
  },
  splashTextView: {
    fontSize: 60,
    fontWeight: '900',
    color: 'midnightblue',
  },
  splashImageStyle: {
    marginLeft: 25,
    height: 200,
    width: 200,
  },
});
