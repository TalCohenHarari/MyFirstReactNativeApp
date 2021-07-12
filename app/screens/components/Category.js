import React from 'react';
import { View,Text,TextInput,StyleSheet,SafeAreaView,Platform,ScrollView,StatusBar,Image } from 'react-native';
import { Icon } from 'react-native-vector-icons/Ionicons';

export default class Category extends React.Component {

    render(){
        return (
            <View style={{height:130,width:130, marginLeft:10,marginRight:10,borderWidth:0.5,
                borderColor:'#dddddd', borderRadius:20}}>
                    <View style={{flex: 2}}>
                        <Image source={this.props.imageUri}
                        style={{flex: 1,width:null,height:null,resizeMode:'cover', borderTopLeftRadius:20,borderTopRightRadius:20}}/>
                    </View>
                    <View style={{flex: 1,paddingTop:10,paddingLeft: 10}}>
                        <Text>{this.props.name}</Text>
                    </View>
            </View>
        );
    }
}


  

