import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/color/Colors';

export default function Header() {
  return (
    <View style={styles.headContainer} >
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="account-circle"
          size={30}
          color={colors.white}
        />
      </TouchableOpacity>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: colors.white}}>Food Delivery</Text>
      <TouchableOpacity>
        <Text style={{fontSize: 20, color: colors.white}}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    headContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center',
        backgroundColor: colors.orange,
    }
})