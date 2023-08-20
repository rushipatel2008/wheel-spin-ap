import React from "react";
import {Text,View,TextInput,TouchableOpacity,ImageBackground,StyleSheet} from 'react-native'

import WheelOfFortune from 'react-native-wheel-of-fortune'


export default class App extends React.Component{
    constructor()
    {
      super()
      this.state={wordstore:'',wordArray:[]}
    }
   
    splitWord=()=>{
     
      console.log(this.state.wordstore)
      let splitArray = this.state.wordstore.split(',')
     

      console.log(splitArray)
    }

    render()
    {
      const participants = [
        '%10',
        '%20',
        '%30',
        '%40',
        '%50',
        '%60',
        '%70',
        '%90',
        'FREE',
      ];
      const wheelOptions = {
            rewards: participants,
            knobSize: 50,
            borderWidth: 5,
            borderColor: '#000',
            innerRadius: 50,
            duration: 4000,
            backgroundColor: 'transparent',
            textAngle: 'horizontal',
            knobSource: require('./assets/images/knoob.png'),
            getWinner: (value, index) => {
              this.setState({winnerValue: value, winnerIndex: index});
            },
            onRef: ref => (this.child = ref),
          };
      return(
        <View style={styles.container}>
          <View style={styles.tittleBar}>
          <Text style={styles.text}>
            Wheel Spin App
          </Text>
          </View>
          <Text>{this.state.wordstore}</Text>
          
          <WheelOfFortune
        wheelOptions={wheelOptions}

        />


          <TextInput style={styles.textbox}
          onChangeText={text=>this.setState({wordstore:text})}
        

          
          />
          
          <TouchableOpacity style={styles.submitButton}
          onPress={this.splitWord}
          >
            <Text style={styles.buttonText}> submit </Text>
          </TouchableOpacity>

        </View>


      )
    }
}

const styles=StyleSheet.create({
container:{
  flex:1,
 // backgroundColor:"black"


},
text:{
  color:'red',
  fontSize:30,
  


},
tittleBar:{
  flex:0.15,
  justifyContent:'center',
  alignItems:'center'

},
textbox :{
  justifyContent:'center',
  borderWidth:1,
  width:'55%',
  height:50,
  borderColor:'black',
  alignItems:'center',
  marginTop:250,
  fontSize:30,
  marginLeft:80
  

},
submitButton:{
  width:'55%',
  height:75,
  justifyContent:'center',
backgroundColor:'blue',
borderRadius:30,
marginTop:40,
marginLeft:80
},
buttonText:{
fontSize:35,
color:'white',
textAlign:'center',

}
})