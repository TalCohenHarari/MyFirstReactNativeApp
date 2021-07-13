import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Platform, ScrollView, StatusBar, Image, Dimensions } from 'react-native';
// import Category from '../screens/components/Category';
import ListRow from '../screens/components/ListRow';
import colors from '../config/colors'
import { Icon,Card,Button} from 'react-native-elements';

const { height, width } = Dimensions.get('window');
export default function MyListScreen({navigation} ) {
  return (
    <SafeAreaView style={{flex: 1,paddingTop: Platform.OS === 'android' ? 30: 0,}}>
      <View style={{ flex: 1 }}>
        <View style={{flexDirection: 'row-reverse',backgroundColor:'black',height:55}}>
            <Icon
                  // reverse
                  name='share'
                  type='material'
                  color= {colors.white}
                  size={23}
                  marginTop={19}
                  marginRight={16}
                />
            <Icon
                  // reverse
                  name='control-point'
                  type='material'
                  color= {colors.white}
                  size={26}
                  marginTop={18}
                  marginRight={10}
                />
        </View>
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