import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('AnimalList');
    }, 100000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.splashScreenView}>
      <Image
        style={styles.splashImageStyle}
        source={require('../assets/animal_icon.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  splashScreenView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImageStyle: {
    height: 200,
    width: 200,
  },
});
