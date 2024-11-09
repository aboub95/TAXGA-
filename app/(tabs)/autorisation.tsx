import Imag from "@/components/navigation/Imag"
import { NavigationContainer } from "@react-navigation/native"
import { View, StyleSheet, Image,Text, Alert } from "react-native"
import Button from "@/components/navigation/Button"
import Button2 from "@/components/navigation/Button2"


export default function(){
    return(
      <NavigationContainer  independent={true}>
   <View style={styles.barre}>

   </View>
    <Imag/>
  <View style={{backgroundColor:' #159237',}}>
    <View style={{flex: 1, justifyContent:'center'}}>
    <Text style={{fontSize: 25, textAlign:'center', marginBottom: 30,}}>Autorisation de localistion</Text>
    </View>
    <View style={{flex: 1, justifyContent:"center"}}>
    <Text  style={{textAlign: 'center', marginBottom: 40}}>cette application receuille  des données  de localisation pour definir les emplacements  de votre course. Elle receuille egalement les emplacements lorsauz l’application est fermée et non utliisée pendant votre course pour des    mesures de sécurité.</Text>
    </View>
    <Button/>
    <Button2/>

  </View>
     </NavigationContainer>
        
    )
}

const styles = StyleSheet.create({
    barre:{
     
      backgroundColor: "#000",
     
      
    }
   
   
   })