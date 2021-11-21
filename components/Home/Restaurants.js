import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import colors from '../../assets/color/Colors';

const restaurantDetails = [
  {
    id: 1,
    name: 'Indian Thali',
    ratings: '4',
    address: 'Near ATM, Pouradhar',
    Distance: '1.2 Km',
    image_url:
      'https://i.pinimg.com/originals/e1/da/d5/e1dad5315972c8a9db86fb01d69c7ecb.jpg',
  },
  {
    id: 2,
    name: 'Biryani Center',
    ratings: '4.4',
    address: 'Near panchayat, Rajnagar',
    Distance: '3.2 Km',
    image_url:
      'https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800',
  },
  {
    id: 3,
    name: 'Sharma Fooding',
    ratings: '4.7',
    address: 'Lake View, Kotma',
    Distance: '13.2 Km',
    image_url:
      'https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg',
  },
  {
    id: 4,
    name: 'Indian Thali',
    ratings: '4',
    address: 'Near ATM, Pouradhar',
    Distance: '1.2 Km',
    image_url:
      'https://i.pinimg.com/originals/e1/da/d5/e1dad5315972c8a9db86fb01d69c7ecb.jpg',
  },
  {
    id: 5,
    name: 'Biryani Center',
    ratings: '4.4',
    address: 'Near panchayat, Rajnagar',
    Distance: '3.2 Km',
    image_url:
      'https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800',
  },
  {
    id: 6,
    name: 'Sharma Fooding',
    ratings: '4.7',
    address: 'Lake View, Kotma',
    Distance: '13.2 Km',
    image_url:
      'https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg',
  },
];

export default function Restaurants(props) {
  return (
    <View style={{marginLeft: 10}}>
      <Text style={{fontSize: 20, fontWeight: '500', color: colors.black}}>
        Nearby Restaurants
      </Text>
      <FlatList
        keyExtractor={item => item.id}
        data={restaurantDetails}
        renderItem={() => {
          return <Text>restaurants</Text>;
        //   ! CONTINUE FROM HERE
        }}
      />

      {/* <ScrollView */}
    </View>
  );
}
