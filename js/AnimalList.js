import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Searchbar from './SearchBar';

export default function AnimalList({navigation}) {
  const [animals, setAnimal] = useState([
    {name: 'Cheetah', id: '1'},
    {name: 'Giraffee', id: '2'},
    {name: 'Lion', id: '3'},
    {name: 'Leopard', id: '4'},
    {name: 'Elephant', id: '5'},
    {name: 'Tiger', id: '6'},
    {name: 'Lioness', id: '7'},
  ]);
  const [value, setValue] = useState();
  function updateSearch(value) {
    //do your search logic or anything
    console.log(value);
  }

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.headingStyle}>Zootopia!</Text>
      <View style={styles.lineStyle} />
      <Searchbar
        value={value}
        updateSearch={updateSearch}
        style={{marginTop: '8%'}}
      />
      <FlatList
        data={animals}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('AnimalDetail', {item});
            }}>
            <View style={styles.flatListItemView}>
              <Image
                style={{width: 35, height: 35}}
                source={require('../assets/animal_icon.png')}
              />
              <View style={styles.innerListview}>
                <Text style={styles.animalName}>{item.name}</Text>
                <Text style={styles.animalDescription}>{item.name}</Text>
              </View>
              <Image
                style={{width: 10, height: 20, marginRight: 10}}
                source={require('../assets/right_arrow.png')}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  headingStyle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 34,
    marginTop: 20,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    marginTop: 10,
  },
  flatListItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 12,
  },
  innerListview: {
    flexDirection: 'column',
    flex: 1,
    padding: 8,
    marginLeft: 16,
  },
  animalName: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  animalDescription: {
    fontSize: 12,
    color: 'grey',
  },
  rightArrow: {
    justifyContent: 'flex-end',
    marginRight: 8,
  },
});
