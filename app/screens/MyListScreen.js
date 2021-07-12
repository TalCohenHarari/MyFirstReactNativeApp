import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Platform, ScrollView, StatusBar, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-vector-icons/Ionicons';
// import Category from '../screens/components/Category';
import ListRow from '../screens/components/ListRow';

const { height, width } = Dimensions.get('window');
export default function MyListScreen({navigation} ) {
  return (
    <SafeAreaView style={{flex: 1,paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight +50: 0,}}>
      <View style={{ flex: 1 }}>
          <ScrollView scrollEventThrottle={16}>
                  <View style={{ height: '100%',width:'100%' }}>
                      <ScrollView horizontal={false}>
                          <ListRow
                              imageUri={require('../assets/backgrounds/fridgeAndFreezerBackground.png')}
                              name="Banana" />
                          <ListRow
                              imageUri={require('../assets/backgrounds/cabinetBackground.jpg')}
                              name="Apple" />
                          <ListRow
                              imageUri={require('../assets/backgrounds/cleanBackground.jpg')}
                              name="Avukado" />
                          <ListRow
                              imageUri={require('../assets/backgrounds/fruitBackground2.jpg')}
                              name="Tommato" />
                                <ListRow
                              imageUri={require('../assets/backgrounds/fruitBackground2.jpg')}
                              name="Tommato" />
                                <ListRow
                              imageUri={require('../assets/backgrounds/fruitBackground2.jpg')}
                              name="Tommato" />
                                <ListRow
                              imageUri={require('../assets/backgrounds/fruitBackground2.jpg')}
                              name="Tommato" />
                      </ScrollView>
                  </View>
          </ScrollView>
      </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   
});