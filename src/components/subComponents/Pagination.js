import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Pagination = ({totalPosts, postPerPage, setCurrentPage, currentPage}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      {pages.map((page, index) => {
        return (
          <View
            key={index}
            style={{
              width: '5%',
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderWidth: 0.5,
              borderColor: '#000',
              borderRadius: 5,
              // backgroundColor: '#EFC81A',
            }}>
            <TouchableOpacity onPress={() => setCurrentPage(page)}>
              <Text>{page}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default Pagination;
