import React from 'react';
import { View,Text,TextInput,StyleSheet,SafeAreaView,Platform,ScrollView,StatusBar,Image } from 'react-native';
import { Divider,Button as StyledButton , Input as StyledInput,Card,Icon} from 'react-native-elements';

export default class ListRow extends React.Component {

    render(){
        return (
            <View style={{height:160,width:'100%',borderColor:'#dddddd',flexDirection: 'row'}}>     
                <Text style={{textAlign:'center',fontWeight:'bold'}}>{this.props.name}</Text>
                <Image source={this.props.imageUri}style={{width:100,height:100,resizeMode:'contain',flexBasis: 450,}}/>
                {/* <Divider  width={5} />; */}
            </View>
        );
    }
}


  

