import { Image, View, StyleSheet, Text,Button, Alert,TouchableOpacity, Dimensions } from "react-native";


export default function(){
    return(
        <View style={{width: "100%", height: 50, justifyContent: "center",}}>
     <TouchableOpacity   style={styles.button}onPress={() => Alert.alert('Button with adjusted color pressed ')}>
     <Text style={{flex:1, textAlign:'center', fontSize: 28, color:"#026924" }}>Refuser </Text>
        </TouchableOpacity>
        </View>
    )
}
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
   button:{
    
     backgroundColor: "#ffffff",
     width: "100%",
     height: 50,
     borderRadius: 31,
    
     justifyContent: "center",
     alignItems: "center",
    
     
   }
  
  
  })