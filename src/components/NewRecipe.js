/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import NewRecipeCarouselData from './subComponents/NewRecipeCarouselData';

const NewRecipe = () => {
  const dataFake = [
    {id: 1, name: 'Soup', photo: 'soupLogo.png'},
    {id: 2, name: 'Chicken', photo: 'tableWareLogo.png'},
    {id: 3, name: 'Seafood', photo: 'fishLogo.png'},
    {id: 4, name: 'Dessert', photo: 'tableWareLogo.png'},
  ];
  return (
    <View style={{flex: 1}}>
      <TouchableWithoutFeedback
        onPress={() => {
          // eslint-disable-next-line no-alert, no-undef
          alert('Cooming soon...');
        }}>
        <View style={{flex: 1, paddingTop: 20, marginBottom: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                paddingHorizontal: 20,
              }}>
              New Recipe
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#6D61F2',
                paddingHorizontal: 20,
              }}>
              More Info
            </Text>
          </View>

          <View style={{height: 80, marginTop: 20}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {dataFake.map((category, index) => (
                <NewRecipeCarouselData
                  key={category.id}
                  categoryName={category.name}
                  categoryId={category.id}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default NewRecipe;
