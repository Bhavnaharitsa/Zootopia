import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Card from '../js/Card';

export default function AnimalDetail({route}) {
  const {item} = route.params;
  return (
    <View>
      <Image
        source={{uri: `${item.image_link}`}}
        style={styles.animalImageStyle}
      />
      <Text style={styles.headingText}>{item.name}</Text>
      <Text style={styles.subheadingText}>{item.latin_name}</Text>
      <Card>
        <Text style={styles.descriptionStyle}>Species: {item.name}</Text>
        <Text style={styles.descriptionStyle}>Habitat: {item.habitat}</Text>

        <Text style={styles.descriptionStyle}>
          Maximum Weight: {item.weight_max}
        </Text>
        <Text style={styles.descriptionStyle}>
          Minimum Weight: {item.weight_min}
        </Text>
        <Text style={styles.descriptionStyle}>
          Maximum Height: {item.length_max}
        </Text>
        <Text style={styles.descriptionStyle}>
          Minimum Height: {item.length_min}
        </Text>
        <Text style={styles.descriptionStyle}>Diet: {item.diet}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  animalImageStyle: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
    padding: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  descriptionStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15,
    color: 'black',
    marginBottom: 18,
  },
  headingText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 20,
    color: 'black',
  },
  subheadingText: {
    fontSize: 14,
    color: 'grey',
    marginTop: 2,
    textAlign: 'center',
  },
});
