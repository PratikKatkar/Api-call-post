
import React,{useState} from 'react';
import axios from 'axios';

import {
   Text,
   View,
   TextInput,
   StyleSheet,
   Button,
   TouchableOpacity
} from 'react-native';


const App= () => {

 

  const data = ()=>{

    axios.post("https://primeflix-api-server-efn5w.ondigitalocean.app/plan/",{
      country_ref_id: 101
    }).then((response) => alert(JSON.stringify(response.data))
    ).catch((error) => alert(error.message))

  } 
  
  
  return (
    <View>
               
        <TouchableOpacity onPress={() => {
                       data()
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