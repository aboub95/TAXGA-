import React, { useState } from "react";
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
  navigation: StackNavigationProp<any>; // Remplacez "any" par votre type spécifique si possible
};

const CreateAccountScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // État pour le message d'erreur

  // Fonction pour créer un nouvel utilisateur
  const createUser = async () => {
    const userData = {
      name: username,
      email: mail,
      password: password,
      role: role,
      current_team_id: null,
      profile_photo_path: null,
    };

    try {
      const response = await fetch(
        "https://cd8a-154-0-185-26.ngrok-free.app/api/login", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Utilisateur créé avec succès:", data);

      // Redirection vers la page de connexion en cas de succès
      navigation.navigate("Login");
    } catch (error: any) {
      console.error("Erreur lors de la création de l'utilisateur:", error.message);
      setErrorMessage("Erreur lors de la création du compte. Veuillez vérifier vos informations."); // Définir le message d'erreur ici
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
        placeholder="Écrire votre nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Écrire votre email"
        value={mail}
        onChangeText={setMail}
      />
      <TextInput
        style={styles.input}
        placeholder="Écrire votre rôle"
        value={role}
        onChangeText={setRole}
      />
      <TextInput
        style={styles.input}
        placeholder="Écrire votre mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {errorMessage && (
        <Text style={styles.errorText}>{errorMessage}</Text> // Affichage du message d'erreur
      )}

      <TouchableOpacity style={styles.button} onPress={createUser}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>

      <View style={styles.createAccountContainer}>
        {/* Ajoutez ici d'autres éléments si nécessaire */}
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

export default CreateAccountScreen;
