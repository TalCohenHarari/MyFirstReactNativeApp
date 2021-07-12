import React,{Component} from 'react';
import { View,Text,TextInput,StyleSheet,SafeAreaView,Platform,ScrollView,StatusBar,Image,Dimensions } from 'react-native';
import { Icon } from 'react-native-vector-icons/Ionicons';
import Category from '../screens/components/Category';
import FoodItem from '../screens/components/FoodItem';

const {height,width}=Dimensions.get('window');
export default function ItemsListScreen({navigation}) {

    
    return (
        <SafeAreaView style={{flex:1, 
            paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0, //StatusBar.currentHeight = dynamic android versions padding from top bar
        }}>
        <View style={{flex: 1}}>
            <View style={{height: 80,backgroundColor:'white',
                borderBottomWidth:1,borderBottomColor:'#dddddd'}}>

                <View style={{flexDirection: 'row',padding: 10,
                    backgroundColor:'whie',marginHorizontal:20,
                    shadowOffset:{width:0,height:0},
                    shadowColor:'black',
                    shadowOpacity:0.2,
                    elevation:1,
                    marginTop: Platform.OS === 'android'? 30 :null
                }}>
                    {/* <Icon name="ios-search" size={20} style={{marginRight: 10}}/> */}
                    <TextInput 
                        underlineColorAndroid="transparent"
                        placeholder="Search"
                        placeholderTextColor="grey"
                        style={{flex: 1,fontWeight: '700',backgroundColor: 'white'}}
                    />
                </View>
            </View>
            <ScrollView
                scrollEventThrottle={16}
            >
                <View style={{flex: 1,backgroundColor: 'white',paddingTop:20}}>
                    <Text style={{fontSize:20,fontWeight:'700',paddingHorizontal:20}}>
                        Categories
                    </Text>
                    <View style={{height:140,marginTop:20,}}>
                        <ScrollView 
                            horizontal={true}
                        >
                            <Category 
                            imageUri={require('../assets/backgrounds/fridgeAndFreezerBackground.png')}
                             name="Freezer"/>
                            <Category 
                            imageUri={require('../assets/backgrounds/cabinetBackground.jpg')}
                             name="Cabinet"/>
                            <Category 
                            imageUri={require('../assets/backgrounds/cleanBackground.jpg')}
                             name="Clean"/>
                            <Category 
                            imageUri={require('../assets/backgrounds/fruitBackground2.jpg')}
                             name="Fruits & Vegtables"/>
                        </ScrollView>
                    </View>
                    <Text style={{fontSize:20,fontWeight:'700',paddingHorizontal:20}}>
                        Select your food you love
                    </Text>
                    <View style={{height:240,marginTop:20,}}>
                        <ScrollView 
                            horizontal={true}
                        >
                            <FoodItem 
                            imageUri={require('../assets/backgrounds/fridgeAndFreezerBackground.png')}
                             name="Banana"/>
                            <FoodItem 
                            imageUri={require('../assets/backgrounds/cabinetBackground.jpg')}
                             name="Apple"/>
                            <FoodItem 
                            imageUri={require('../assets/backgrounds/cleanBackground.jpg')}
                             name="Avukado"/>
                            <FoodItem 
                            imageUri={require('../assets/backgrounds/fruitBackground2.jpg')}
                             name="Tommato"/>
                        </ScrollView>
                    </View>
                    
                </View>

            </ScrollView>
        </View>
        </SafeAreaView>
    );
  }

  

