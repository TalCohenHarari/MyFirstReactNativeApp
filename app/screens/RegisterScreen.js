import React from 'react';
import { Button} from 'react-native-elements';
import StyledInput from './components/StyledInput';
import colors from '../config/colors'
import { StyleSheet, Text, View, SafeAreaView,Platform ,StatusBar,ImageBackground} from 'react-native';

export default function RegisterScreen({navigation} ) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../assets/backgrounds/loginBackground.jpg')}   
        resizeMode="cover"
        style={styles.imageBackground}>

        <View style={styles.innerContainer}>
          <Text style={styles.headline} >Register</Text>
          <StyledInput   cellName='Email'iconName='email'iconType='material' />
          <StyledInput   cellName='Password'iconName='security'iconType='material' />
          <StyledInput   cellName='Confirm Password'iconName='security'iconType='material' />
          <Button 
              buttonStyle={styles.button}
              type="outline"
              title="Register" 
              titleStyle={{ color: 'white',fontSize: 15,fontWeight: 'bold' }}
              onPress={()=>navigation.navigate('ItemsList')}
          />
          <Text style={styles.haveAccount} 
            onPress={()=>navigation.goBack()}>Already have an Account?
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      direction: "ltr",
      flex: 1,
    },
  
    haveAccount:{
      marginBottom: '12%',
      marginTop: '5%',
      textAlign: 'center',
      fontSize: 15,
      color: colors.white,
    },
    button: {
      marginRight: '8%',
      marginLeft: '8%',
      borderColor: colors.white,
      borderWidth: 1.5,
      borderRadius: 10
  },

  headline: {
    textAlign: 'center',
    fontSize: 40,
    color: colors.white,
    fontWeight: "bold",
    marginTop: '27%',
    marginBottom: '12.5%',
    fontFamily:  Platform.OS === 'android'? 'sans-serif-condensed': 'Arial-ItalicMT',
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.60)',
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0, //StatusBar.currentHeight = dynamic android versions padding from top bar
  },
  orText: {
    textAlign: 'center',
    fontSize: 15,
    color: colors.white,
    fontWeight: "bold", 
    paddingBottom: '13%'
  },
});