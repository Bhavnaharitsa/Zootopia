import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Card from '../js/Card';

export default function AnimalDetail({route}) {
  const {item} = route.params;
  return (
    <View>
      <Image
        source={require('../assets/animal_icon.png')}
        style={styles.animalImageStyle}
      />
      <Text style={styles.headingText}>{item.name}</Text>
      <Text style={styles.subheadingText}>Scientific Name</Text>
      <Card>
        <Text style={styles.descriptionStyle}>Species: {item.name}</Text>
        <Text style={styles.descriptionStyle}>Habitat: Savanna</Text>

        <Text style={styles.descriptionStyle}>Weight: 1200 - 4250kgs</Text>
        <Text style={styles.descriptionStyle}>Height: 15-17m</Text>
        <Text style={styles.descriptionStyle}>
          Diet: Leaves, shoots and fruits
        </Text>
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
    width: 120,
    height: 120,
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
    fontSize: 20,
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
