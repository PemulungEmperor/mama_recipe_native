import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TextInput, View} from 'react-native';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';

import styleSearchBar from '../styles/styleSearchBar';

const SearchBarRecipe = () => {
  const navigation = useNavigation();

  const onfocus = () => {
    navigation.navigate('SearchResult');
  };
  return (
    <View style={styleSearchBar.searchInput}>
      <AntdesignIcon
        name="search1"
        size={25}
        style={{margin: 10, opacity: 0.5}}
      />
      <TextInput
        onFocus={onfocus}
        style={{flex: 1}}
        placeholder="Search Pasta, Bread, etc..."
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default SearchBarRecipe;
