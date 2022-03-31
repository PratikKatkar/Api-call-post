
import React,{useState} from 'react';

import {
   Text,
   View,
   TextInput,
   StyleSheet,
   Button,
   TouchableOpacity
} from 'react-native';


const App= () => {
  const [name, setName]= useState("");
  const [Passward, setPassword]= useState("");
  
  
  return (
    <View>
     
      <TextInput style={Styles.input} placeholder='Enter your Email' onChangeText={(input) => setName(input)} />
      <TextInput style={Styles.input} placeholder='Enter your Passward' onChangeText={(input) => setPassword(input)}
         secureTextEntry={true} ></TextInput>
         {/* <Button title='Login'
          onPress={() => {
           if(name == "Raghav" & Passward=="abcd"){
             alert("Login Successfully")
           }
            else{
             alert("name or Password is not correct")
           }
          
          }}>
        </Button> */}
        <TouchableOpacity onPress={() => {
           if(name == "Raghav" & Passward=="abcd"){
             alert("Login Successfully")
           }
            else{
             alert("name or Password is not correct")
           }
          
          }} >
          <Text style={{fontSize:30, marginTop:30 , justifyContent:"center", textAlign:"center"}}>Click Here</Text>
        </TouchableOpacity>
    </View>

  );
};



export default App;

const Styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 50,
    marginHorizontal: 30,
  },

  text: {
    fontSize: 20,
    marginTop: 20,
    color: "black"
  }
})