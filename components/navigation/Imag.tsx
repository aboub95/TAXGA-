import { Image, View, StyleSheet, Dimensions } from "react-native";


export default function(){
    return(
        <View style={{flex:1, justifyContent:'center', alignSelf: 'center'}}>
             <Image style={styles.tinyLogo}
        source={require('../../assets/images/image 5.svg')}
      />
        </View>
    )
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    tinyLogo: {
      width: 300,
      height: 90,
    },
  
  
  })