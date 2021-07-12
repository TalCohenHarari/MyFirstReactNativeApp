import React from 'react';
import { View,StyleSheet} from 'react-native';
import { Button as Button , Input as Input,Icon} from 'react-native-elements';


export default class StyledInput extends React.Component {

    render(){
        return (
            <View style={{flexDirection: 'row'}}>
                <Input   
                    placeholder={this.props.cellName}
                    inputStyle={{paddingRight: 10, color: 'white'}}
                    inputContainerStyle={styles.input}
                    leftIcon={
                        <Icon
                        // reverse
                        name={this.props.iconName}
                        type={this.props.iconType}
                        color= 'white'
                        size={23}
                        />
                    }/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    input:{
        marginRight: '4%',
        marginLeft: '4%',
        paddingLeft: '3%',
        borderColor: 'white',
        borderWidth: 1.5,
        borderRadius: 10,
       },
});








