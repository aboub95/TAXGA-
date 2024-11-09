import { Image, View, StyleSheet, Text,Button, Alert,TouchableOpacity, Dimensions } from "react-native";


export default function(){
    return(
        <View style={{width: "100%", height: 50, justifyContent: "center",}}>
     <TouchableOpacity style={styles.button}onPress={() => Alert.alert('Button with adjusted color pressed ')}>
     <Text style={{textAlign: "center", fontSize: 28, color:"white"}}>Autoriser </Text>
        </TouchableOpacity>
        </View>
    )
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
   button:{
     backgroundColor: "#026924",
     width: "100%",
     height: 50,
     borderRadius: 31,
    marginBottom: 20,
     justifyContent: 'center',
     alignContent: 'center',

   }
  
  
  })