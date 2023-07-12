import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import {
  View,
  Image,
  TextInput,
  FlatList,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {useSelector} from 'react-redux';

import filter from 'lodash.filter';

import Pagination from './subComponents/Pagination';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import styleSearchBar from '../styles/styleSearchBar';
import MY_LOCAL from '../../processlocal';

const SearchResultScreen = () => {
  const navigation = useNavigation();
  // from redux store
  const products = useSelector(state => state.products);
  const [data, setData] = useState(products.dataProducts);
  const [fullData, setFullData] = useState(products.dataProducts);
  const [searchQuery, setSearchQuery] = useState('');

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 4;

  //pagination support variables
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = fullData.slice(firstPostIndex, lastPostIndex);

  // sorting by
  const [isSelected, setSelection] = useState(false);

  const handleSearch = query => {
    // navigation.navigate('SearchResult');
    setSearchQuery(query);
    // const formattedQuery = query.toLowerCase();
    const filteredData = filter(data, product => {
      return contains(product, query);
    });
    setFullData(filteredData);
  };

  const contains = ({food_name}, query) => {
    if (food_name.includes(query)) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    if (isSelected) {
      const reversed = [...fullData].reverse();
      setFullData(reversed);
    } else {
      const reversed = [...fullData].reverse();
      setFullData(reversed);
    }
  }, [isSelected]);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styleSearchBar.searchInput}>
        <AntdesignIcon
          name="search1"
          size={25}
          style={{margin: 10, opacity: 0.5}}
        />
        <TextInput
          clearButtonMode="always"
          style={{flex: 1}}
          placeholder="Search Pasta, Bread, etc..."
          underlineColorAndroid="transparent"
          value={searchQuery}
          onChangeText={query => handleSearch(query)}
        />
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
            margin: 20,
          }}>
          <Text>Sort ASC</Text>
          <CheckBox value={isSelected} onValueChange={setSelection} />
        </View>
      </View>
      <FlatList
        data={currentPost}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableWithoutFeedback
            style={{flex: 1}}
            onPress={() =>
              navigation.navigate('DetailRecipe', {
                productName: item.food_name,
                productDescription: item.ingredients,
                productPhoto: item.photo_path,
                videoId: item.video_recipe,
              })
            }>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{
                  uri: MY_LOCAL + '/src/asset/' + item.photo_path,
                }}
                style={{
                  width: 125,
                  height: 125,
                  borderRadius: 20,
                  margin: 20,
                  marginLeft: 30,
                }}
              />
              <View style={{width: 100, justifyContent: 'center'}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: '500',
                    margin: 20,
                    marginLeft: 5,
                  }}>
                  {item.food_name}
                </Text>
              </View>

              <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../asset/saved.png')}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 20,
                  }}
                />
                <Image
                  source={require('../asset/liked.png')}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 20,
                    marginLeft: 10,
                  }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
      <Pagination
        totalPosts={data.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </View>
  );
};

export default SearchResultScreen;
