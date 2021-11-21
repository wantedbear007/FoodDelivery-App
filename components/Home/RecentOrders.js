import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import colors from '../../assets/color/Colors';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const orderHistory = [
  {
    image:
      'https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800',
    dish: 'Biryani',
    date: 'November 2, 2021',
    Restaurant: 'Indian Taste',
  },
  {
    image:
      'https://www.seriouseats.com/thmb/OBckE8o3ypWrULAwlkb11RvKD7w=/1000x1000/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg',
    dish: 'Fried chicken',
    date: 'November 7, 2021',
    Restaurant: 'Indian Taste',
  },
  {
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/gc50vinobyu6buqrrcb5',
    dish: 'Bhajiya',
    date: 'November 1, 2021',
    Restaurant: 'Indian Taste',
  },
  {
    image:
      'https://recipesofhome.com/wp-content/uploads/2020/03/chicken-curry-recipe-720x720.jpg',
    dish: 'Chicken curry',
    date: 'September 15, 2021',
    Restaurant: 'Indian Taste',
  },
  {
    image:
      'https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800',
    dish: 'Biryani',
    date: 'November 2, 2021',
    Restaurant: 'Indian Taste',
  },
  {
    image:
      'https://www.seriouseats.com/thmb/OBckE8o3ypWrULAwlkb11RvKD7w=/1000x1000/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg',
    dish: 'Fried chicken',
    date: 'November 7, 2021',
    Restaurant: 'Indian Taste',
  },
  {
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/gc50vinobyu6buqrrcb5',
    dish: 'Bhajiya',
    date: 'November 1, 2021',
    Restaurant: 'Indian Taste',
  },
  {
    image:
      'https://recipesofhome.com/wp-content/uploads/2020/03/chicken-curry-recipe-720x720.jpg',
    dish: 'Chicken curry',
    date: 'September 15, 2021',
    Restaurant: 'Indian Taste',
  },
];

export default function RecentOrders() {
  return (
    <View style={{marginTop: 60, marginLeft: 10}}>
      <Text style={{fontSize: 20, fontWeight: '500', color: colors.grey}}>
        Recent Orders
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {orderHistory.map((order, index) => (
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              borderRadius: 20,
              marginRight: 20,
              borderWidth: 1,
              borderColor: colors.grey,
              padding: 5,
            }}
            key={index}>
            <Image
              source={{uri: order.image}}
              style={{width: 90, height: 90, borderRadius: 15}}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={{fontWeight: '500', fontSize: 18, color: colors.black}}>
                {order.dish}
              </Text>
              <Text style={{fontSize: 13, fontWeight: '500'}}>
                {order.Restaurant}
              </Text>
              <Text style={{fontSize: 13, fontWeight: '500'}}>
                {order.date}
              </Text>
            </View>
            <AntDesign
              name="pluscircle"
              size={40}
              color={colors.orange}
              style={{marginLeft: 30}}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
