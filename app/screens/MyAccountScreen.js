import React from 'react';
import { Button as StyledButton , Input as StyledInput,Divider as StyledDivider,Card,Icon} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../config/colors'
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  Image,
  TouchableHighlight, 
  TouchableOpacity,
  TouchableNativeFeedback,
  Alert,
  Button,
  Platform ,
  StatusBar,
  ImageBackground,
  I18nManager,  
  FlatList,
} from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';

export default function MyAccountScreen({navigation} ) {

  return (
    <View style={styles.container}>
        <ImageBackground 
            source={require('../assets/backgrounds/manAvatar.jpg')}   
            resizeMode="cover"
            style={styles.imageBackground}
        >
        <View style={styles.innerContainer}>
        <Text style={styles.headline} >Carly {'\n'}Jackson</Text>
    </View>
    <View style={styles.content}>
    <Card borderRadius={13} marginTop={0} style={{position: 'absolute'}}>
          {/* <Card.Title style={{fontSize:20}}>My Profile</Card.Title> */}
          {/* <Card.Divider/> */}
          <TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
                <Icon
                  // reverse
                  name='email'
                  type='material'
                  color= {colors.iconGray}
                  size={23}
                />
                <Text style={{marginBottom: '5%', paddingTop: '1%' ,paddingLeft: '3%'}}> Email</Text>
                {/* <Icon
                  // reverse
                  name='chevron-forward-outline'
                  type='ionicon'
                  color= {colors.iconGray}
                  size={23}                                               
                  containerStyle={{flexBasis: 440,}}
                /> */}
            </View>
            </TouchableOpacity>
            <Card.Divider/>
            <TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
                <Icon
                  // reverse
                  name='security'
                  type='material'
                  color= {colors.iconGray}
                  size={23}
                />
              <Text style={{ paddingTop: '1%' ,paddingLeft: '3%'}}>Password</Text>
            </View>
            </TouchableOpacity>
          </Card>
          <Card  borderRadius={13}>
            {/* <Card.Title style={{fontSize:20}}>My Profile</Card.Title> */}
            {/* <Card.Divider/> */}
            <TouchableOpacity>
              <View style={{flexDirection: 'row',}}>
                  <Icon
                    // reverse
                    name='cart'
                    type='material-community'
                    color= {colors.iconGray}
                    size={23}
                  />
                <Text style={{ marginBottom: '5%',paddingTop: '1%' ,paddingLeft: '3%'}}>My Shopping Cart</Text>
              </View>
            </TouchableOpacity>
              <Card.Divider/>
            <TouchableOpacity>
              <View style={{flexDirection: 'row',}}>
                  <Icon
                    // reverse
                    name='add'
                    type='material'
                    color= {colors.iconGray}
                    size={23}
                  />
                <Text style={{ marginBottom: '5%',paddingTop: '1%' ,paddingLeft: '3%'}}>New Shopping Cart</Text>
              </View>
            </TouchableOpacity>
              <Card.Divider/>
            <TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                  <Icon
                    // reverse
                    name='notebook-multiple'
                    type='material-community'
                    color= {colors.iconGray}
                    size={23}
                  />
                  <Text style={{ paddingTop: '1%' ,paddingLeft: '3%'}}> Old Shopping Cart</Text>
              </View>
            </TouchableOpacity>

          </Card>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0, //StatusBar.currentHeight = dynamic android versions padding from top bar
    direction: "ltr",
    flex: 1,
    backgroundColor: '#EFEFEF',
    // alignItems: 'center', // Width
    // justifyContent: 'center', //Higth
  },
  content:{
    flex: 1,
    width: "100%",
    // height: "62%",
    marginTop: '77%',
    // borderTopStartRadius: 20,
    // borderTopEndRadius: 20,
    // borderWidth: 0,
    position: 'absolute',
    // borderColor: colors.white,
    // paddingTop: "5%",
  },
  button: {
    marginRight: '8%',
    marginLeft: '8%',
    borderColor: colors.white,
    borderWidth: 1.5,
    borderRadius: 5
 },
 headline: {
  textAlign: 'left',
  fontSize: 40,
  color: colors.white,
  fontWeight: "bold",
  position: 'absolute',
  marginLeft: "10%",
  fontFamily:  Platform.OS === 'android'? 'sans-serif-condensed': 'Arial-ItalicMT',
 },
 imageBackground: {
  flex: 1,
   width: "100%",
   height: "40%",
 },
 innerContainer: {
    justifyContent: 'center',
    width: "100%",
    height: "40%",
  backgroundColor: 'rgba(0,0,0, 0.35)',
  paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0, //StatusBar.currentHeight = dynamic android versions padding from top bar
 },
 socialMediaIcon:{
   width: 52,
   height:52,
   marginRight: '2%',
 }
});