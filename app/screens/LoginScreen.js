import React from 'react';
import { Button as Button , Input,Icon} from 'react-native-elements';
import colors from '../config/colors'
import StyledInput from './components/StyledInput';
// import StyledButton from './components/StyledButton';

import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  Image,
  TouchableHighlight, 
  Platform ,
  StatusBar,
  ImageBackground,
  I18nManager,
} from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
 //View = Like 'Div' in web  
 //Text = text on the screen 
 // SafeAreaView = save that the elements isn't be on head screen on clocke time etc.
 // TouchableWithoutFeedback = Touch on image and don't get any feedback to the user.
 // TouchableOpacity = Touch on image and giving a visual tuch feedback to the user.
 // TouchableHighlight = Touch on image and giving a visual tuch feedback to the user.
 // TouchableNativeFeedback = for android. and it's not for images. it's for View componant.
 // Alert = isn't offical componants, it's API.
 // Platform = to know wich platform you are, ios or android.
 function LoginScreen({navigation}) {

  const handlePress = ()=>alert('Text clicked');
  // I18nManager.allowRTL(false);
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../assets/backgrounds/loginBackground.jpg')}   
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.headline} >Login</Text>

          {/* This 'require' function returns a number that is a referance to our image.
              And with require we load local image: require('./assets/favicon.png').
              For web image we shulde use:
              {
                width: 100,
                height: 100,
                uri: "https://...."
                }.
                onPress={handlePress} dons't work on image. insted use Touchable
          */}
        {/* <TouchableHighlight onPress={()=>alert('Image clicked')}>
            <Image 
              // blurRadius={0} // Make picture be blured
              fadeDuration={1000} // make picture loading in given secconds (efeccred just on android and no on ios)
              source={{
                width: 100,
                height: 100,
                uri: "https://image.freepik.com/free-vector/cool-muscular-banana-character-sunglasses-powerful-happy-banana-fruit-white-background-cartoon-style-vector-mascot_236756-120.jpg"}}
            />
          </TouchableHighlight> */}
          <StyledInput cellName="Email" iconName="email" iconType=""material/>
          <StyledInput cellName="Password" iconName="security" iconType=""material/>
          <Text 
            style={styles.forgotPassword} 
            // numberOfLines={2} 
            onPress={handlePress}>Forgot Password?
          </Text>
          {/* <StyledButton btnTitle="Login" onPress={()=>navigation.navigate('MyAccount')}/> */}
          <Button 
              // color="orange" 
              buttonStyle={styles.button}
              type="outline" // type style btn from react-native-elements'
              title="Login" 
              titleStyle={{ color: 'white',fontSize: 15,fontWeight: 'bold' }}
              onPress={()=>navigation.navigate('MyAccount')
                // ()=>Alert.alert( "My Title","My message",
                // [{text: "Yes", onPress:()=>alert("Yes clicked")},
                // {text: "No", onPress:()=>alert("No clicked")}] )
                //For IOS only: ()=>Alert.prompt( "My Title","My message",(text)=>console.log("///"))
              }
          />
          <Text 
            style={styles.newAccount} 
            // numberOfLines={2} 
            onPress={()=>navigation.navigate('Register')}>Create new Account?
          </Text>
          <View style={{flex: 1,flexDirection: 'row',justifyContent: "center"}}>
            <Text style={styles.whiteLine} />
            <Text style={styles.orText} >OR</Text>
            <Text style={styles.whiteLine} />
          </View>
          <View style={{flex: 1,flexDirection: 'row',justifyContent: 'center',}}>
            <Image style={styles.socialMediaIcon} source={require('../assets/icons/facebook_icon.png')}/>
            <Image style={styles.socialMediaIcon}  source={require('../assets/icons/twitter_icon.png')}/>
            <Image style={styles.socialMediaIcon}  source={require('../assets/icons/instagram_icon.png')}/>
            <Image style={styles.socialMediaIcon}  source={require('../assets/icons/google_icon.png')}/>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    direction: "ltr",
    flex: 1, //make the last area be fuuled
    // backgroundColor: '#fff',// As is
    //This two to make all be in center:
    // alignItems: 'center', // Width
    // justifyContent: 'center', //Higth
    //Platform
    // paddingTop: Platform.OS === 'android'? 40 : 0,
    // paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0, //StatusBar.currentHeight = dynamic android versions padding from top bar
  },
  icon:{
    position: 'relative'
  },
  forgotPassword: {
    // margin: 50 |50| 50| 50,
    marginBottom: '5%',
    textAlign: 'right',
    paddingEnd: '10%',
    fontSize: 15,
    color: colors.white,
  },
  newAccount:{
    marginBottom: '12%',
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 15,
    color: colors.white,
  },
  button: {
    // flex:1,
    marginRight: '8%',
    marginLeft: '8%',
    borderColor: colors.white,
    borderWidth: 1.5,
    borderRadius: 10,
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
  // flex: 1,
  // tintColor: 'cyan',
 },
 innerContainer: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0, 0.60)',
  paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0, //StatusBar.currentHeight = dynamic android versions padding from top bar
 },
 input:{
  marginRight: '4%',
  marginLeft: '4%',
  paddingLeft: '3%',
  borderColor: colors.white,
  borderWidth: 1.5,
  borderRadius: 10,
 },
 orText: {
  textAlign: 'center',
  fontSize: 15,
  color: colors.white,
  fontWeight: "bold", 
  paddingBottom: '13%'
},
 whiteLine:{
   backgroundColor: "white",
   width: '40%',
   height: "1%",
   marginTop: "2.5%",
   marginLeft: "1%",
   marginRight: "1%",
 },
 socialMediaIcon:{
   width: 52,
   height:52,
   marginRight: '2%',
 }
});


export default LoginScreen;