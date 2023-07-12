/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import PopularRecipeCarouselData from './subComponents/PopularRecipeCarouselData';

const PopularRecipe = () => {
  const [slicedDatas, setSlicedDatas] = useState([]); // want to get only three data
  const products = useSelector(state => state.products);

  useEffect(() => {
    if (products.dataProducts.length > 0) {
      const slice = products.dataProducts.slice(12, 16);
      setSlicedDatas(slice);
    }
  }, [products]);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, paddingTop: 20}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            paddingHorizontal: 20,
          }}>
          Popular Recipe
        </Text>

        <View style={{height: 180, marginTop: 20}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.dataProducts.length > 0 ? (
              slicedDatas.map((product, index) => (
                <PopularRecipeCarouselData
                  key={product.id}
                  productName={product.food_name}
                  productPhoto={product.photo_path}
                  productDescription={product.ingredients}
                  videoId={product.video_recipe}
                />
              ))
            ) : (
              <Text style={{margin: 20}}>Loading...</Text>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default PopularRecipe;
