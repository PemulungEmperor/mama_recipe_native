import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import PopularForYouCarouselData from './subComponents/PopularForYouCarouselData';

const PopularForYou = () => {
  const [slicedDatas, setSlicedDatas] = useState([]); // want to get only three data
  const products = useSelector(state => state.products);

  useEffect(() => {
    if (products.dataProducts.length > 0) {
      const slice = products.dataProducts.slice(3, 6);
      setSlicedDatas(slice);
    }
  }, [products]);
  return (
    <View style={{flex: 1, marginBottom: 40}}>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            paddingHorizontal: 20,
          }}>
          Popular For You
        </Text>

        <View style={{height: 180, marginTop: 20}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.dataProducts.length > 0 ? (
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              slicedDatas.map((product, index) => (
                <PopularForYouCarouselData
                  key={product.id}
                  productName={product.food_name}
                  productId={product.id}
                  productDescription={product.description}
                  productPhoto={product.photo_path}
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

export default PopularForYou;
