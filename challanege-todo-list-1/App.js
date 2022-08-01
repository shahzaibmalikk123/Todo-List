import * as React from 'react';
import { Text, View, StyleSheet,TextInput,Button,TouchableOpacity,Alert,Pressable,Modal} from 'react-native';
import {useState,useEffect} from 'react';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  //  const[state,setState]=useState({
  //   textValue:""
  // })
  const[cat,setCat]=useState(
    {
     textValue:""
   }
  );
  const[cat1,setCat1]=useState([]);
 
  const setAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  function reset(){
    setCat({textValue:""});
    
  }
  function cancel(item){
    setCat1(cat1.filter(element=>{return element!=item}));
    //setModalVisible(false);

  }
  function add(){
    if(cat!==''){
      setCat1([ ...cat1,cat]);
      reset();
    }
    else {
    no_val();
     
      
    }
    
  }
 


  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        TODO
        LIST
      </Text>
      <TextInput style={styles.input}
      placeholder="Enter Category"
      onChangeText={(val)=>{
        setCat(val);
        //setState(val);
      }}
      value={cat.textValue}

      />
      <TouchableOpacity style={styles.button} onPress={add} >
      Add Category
      </TouchableOpacity>
      
      {cat1.map((item,index)=>{
        return(
          
          
          <View style={{alignItems:"center",marginTop:15,backgroundColor:'#4a148c',width:160,marginLeft:82,height:30,padding:4,
          borderTopRightRadius:13,borderBottomLeftRadius:13}} >
          
          <Text style={{fontWeight:'bold'}}>{item}</Text>
          
          <Pressable style={{marginLeft:130,marginTop:-15}} onPress={()=>cancel(item)}>
          X
          </Pressable>
          
          
          </View>
          
        );

      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#cd853f",
    padding: 8,
  },
  paragraph: {
    marginTop: 55 ,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"white"
  },
  input:{
  
    backgroundColor:'white',
    alignItems:"center",
    padding:10,
    width:160,
    height:34,
    marginLeft:82,
    marginTop:20,
    borderColor:'gold',
    borderRadius:18,
    borderWidth:3,
    

  },
  button:{
    alignItems:'center',
    marginTop:20,
    
    color:'white',
    backgroundColor:'black',
    height:50,
    width:100,
    paddingTop:13,
    borderRadius:15,
    marginLeft:110,
    borderColor:'white',
    borderWidth:3,

  }
  
});
