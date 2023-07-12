import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import SearchBarRecipe from './SearchBarRecipe';
import PopularRecipe from './PopularRecipe';
import NewRecipe from './NewRecipe';
import PopularForYou from './PopularForYou';

// apicall
import {getDataProduct} from '../redux/apiCall';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getDataProduct(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView scrollEventThrottle={16}>
        <SearchBarRecipe />
        <PopularRecipe />
        <NewRecipe />
        <PopularForYou />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
