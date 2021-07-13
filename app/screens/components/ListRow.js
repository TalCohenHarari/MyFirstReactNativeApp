import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { View,Text,StyleSheet,SafeAreaView,ScrollView,Image } from 'react-native';
// import ReactRoundedImage from 'react-rounded-image';


export default class ListRow extends React.Component {

    render(){
        return (
            <SafeAreaView>
                <View style={{flex: 1, height: 1, backgroundColor: '#dddddd',marginLeft:10,marginRight:10}} />
                <TouchableNativeFeedback>
                <View style={{height:100,width:'100%',borderColor:'#dddddd',flexDirection: 'row'}}>     
                    <Text style={{textAlign:'center',fontWeight:'bold',flexBasis: 250,fontSize: 20,paddingTop:30}}>
                        {this.props.name}
                    </Text>
                    <Image source={this.props.imageUri} 
                        style={{marginTop:10, width:200,height:80,resizeMode:'cover',flexBasis: 100,
                            borderRadius:10}}/>

                    {/* <Card>
                        <Card.Image source={this.props.imageUri} style={{height:100,width:100}}/>
                        <Card.Divider/>
                    </Card> */}
                </View>
                </TouchableNativeFeedback>
            </SafeAreaView>
        );
    }
}



  

