// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./login"; // Mettez à jour le chemin
import CreateAccount from "./CreateAccountScreen"; // Assurez-vous d'importer correctement ce composant
import PagesA from "./(tabs)/pages";

const Stack = createStackNavigator();

const App = () => {
  return (
   
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Connexion" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="pages_a" component={PagesA} />
      </Stack.Navigator>
    
  );
};

export default App;
