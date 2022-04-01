import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Searchbar from '../SearchBar';
import loadApiImages from '../Utils/ApiCall';

export default function AnimalList({navigation}) {
  const [value, setValue] = useState();
  const [data, setData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  function updateSearch(value) {
    console.log(value);
  }

  useEffect(() => {
    loadApiImages()
      .then(response => response.json())
      .then(json => {
        setIsRefreshing(false);
        setData(json);
      });
  }, []);

  useEffect(() => {
    if (data.length !== 0 || data !== null) {
      setIsRefreshing(false);
    }
    console.log('DATA', data);
  }, [data]);

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.headingStyle}>Zootopia!</Text>
      <View style={styles.lineStyle} />
      <Searchbar
        value={value}
        updateSearch={updateSearch}
        style={styles.searchBarStyling}
      />
      {isRefreshing ? <ActivityIndicator /> : null}
      <FlatList
        data={data}
        keyExtractor={item => item?.id}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={loadApiImages} />
        }
        renderItem={({item}) => renderListView(item, navigation)}
      />
    </View>
  );
}

function renderListView(item, navigation) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('AnimalDetail', {item});
      }}>
      <View style={styles.flatListItemView}>
        <Image
          style={{width: 35, height: 35}}
          source={
            item.image_link
              ? {uri: `${item.image_link}`}
              : require('../../assets/animal_icon.png')
          }
        />
        <View style={styles.innerListview}>
          <Text style={styles.animalName}>{item.name}</Text>
          <Text style={styles.animalDescription}>{item.latin_name}</Text>
        </View>
        <Image
          style={{width: 10, height: 20, marginRight: 10}}
          source={require('../../assets/right_arrow.png')}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  searchBarStyling: {
    marginTop: '8%',
  },
  headingStyle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 34,
    marginTop: 20,
  },
  loadingTextStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
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
