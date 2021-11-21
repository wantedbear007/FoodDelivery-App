import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import colors from '../../assets/color/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export default function SearchBar() {
  return (
    <View style={{marginVertical: 10}}>
      <GooglePlacesAutocomplete
        query={{key: 'AIzaSyDo44L53qbAOo9E1133Uuyr6AxU9H8NqWg'}}
        placeholder="Search restaurants"
        styles={{
          textInput: {
            backgroundColor: colors.lightGray,
            margin: 10,
            borderRadius: 20,
            elevation: 30,
            fontWeight: 'bold',
            alignItems: 'center',
            borderColor: colors.grey,
            borderWidth: 1,
          },

          textInputContainer: {
            backgroundColor: colors.lightGray,
            flexDirection: 'row',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => {
          return (
            <View style={{marginLeft: 0}}>
              <FontAwesome name="search" size={24} color={colors.black} />
            </View>
          );
        }}
        renderRightButton={() => {
          return (
            <View style={{marginRight: 0}}>
              <Entypo name="cross" size={10} color={colors.black} />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
