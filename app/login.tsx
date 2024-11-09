import React, { useState, useEffect } from "react";

import {
  ScrollView, View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
  navigation: StackNavigationProp<any>;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Assurez-vous qu'il peut être nul

  // Fonction pour se connecter
  const loginUser = async () => {
    const loginData = {
      email: username,
      password: password,
    };

    try {
      const response = await fetch(
        "https://cd8a-154-0-185-26.ngrok-free.app/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Connexion réussie:", data);

      // Redirection en cas de succès
      navigation.navigate("pages_a");
    } catch (error: any) {
      console.error("Erreur lors de la connexion:", error.message);
      setErrorMessage("Nom d'utilisateur ou mot de passe incorrect."); // Définir le message d'erreur ici
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      <View style={styles.div}>
        <Image
          source={require("@/assets/images/image 3.png")}
          style={styles.logo}
        />
        <Image
          source={require("@/assets/images/image13.svg")}
          style={styles.img}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Mail"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {errorMessage && (
        <Text style={styles.errorText}>{errorMessage}</Text> // Affichage du message d'erreur conditionnel
      )}

      <TouchableOpacity style={styles.button} onPress={loginUser}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>

      <View style={styles.createAccountContainer}>
        <Text>Ou</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
          <Text style={{ color: "blue" }}>Créer un compte</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
    flex: 1,
  },
  logo: { width: 100, height: 100 },
  img: { width: 150, height: 150 },
  div: { alignItems: "center" },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    borderColor: "#887E7E",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    color: "#635C5C",
  },
  button: {
    width: "80%",
    padding: 15,
    backgroundColor: "#38B763",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  createAccountContainer: {
    display: "flex",
    marginBottom: 20,
    marginTop: 20,
    alignItems: "center",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LoginScreen;
