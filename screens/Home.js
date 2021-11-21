import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Home/Header';
import SearchBar from '../components/Home/SearchBar';
import colors from '../assets/color/Colors';
import RecentOrders from '../components/Home/RecentOrders';
import Restaurants from '../components/Home/Restaurants';

export default function Home() {
  return (
    <View>
      <Header />
      <SearchBar />
      <RecentOrders />
      <Restaurants />
    </View>
  );
}
