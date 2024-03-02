import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import axios from "axios";

export default function LoginScreen() {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const login = await axios
      .post(
        "https://c16-120-m-reactnative-back-dev.up.railway.app/api/auth/login",
        {
          email,
          pass: password,
        }
      )
      .then((response) => response)
      .then(
        (data) => data

        // navigation.push("Success")
      )
      .catch((error) => console.error(error));
    if (login.status === 200) {
      navigation.push("Success");
    }
  }
  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await {
      email: email,
      password: password,
    };

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
       <View style={styles.containerImage}>
          <Image style={styles.img} source={require('../../assets/Logo.png')}/>
        </View>
        <View style={styles.titleText}>
          <Text style={styles.titleFonts}>Iniciar Sesión</Text>
        </View>
      <View style={styles.formContainer}>
         <TextInput
              label="Usuario"
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="email@address.com"
              autoCapitalize={"none"}
            />
          <TextInput
              label="Contraseña"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
              autoCapitalize={"none"}
            />
         
                </View>
                <View style ={styles.containerButton}>
            <TouchableOpacity  onPress={()=> navigation.push('Success')}>
                        <Text style={styles.TextButton}>Enviar</Text>
                    </TouchableOpacity>
          </View>
          <View style={styles.forgetContainer}>
            <Text style={styles.forgetAWText}>¿Aún no tienes cuenta?   </Text>
            <TouchableOpacity onPress={() => navigation.push("SignUp")}>
              <Text style={styles.forgetText}>Registrate</Text>
            </TouchableOpacity>
          </View>

      
      <View style={styles.forgottenContainer}>
        <TouchableOpacity>
          <Text style={styles.forgottenText}>¿Olvidaste tu Contraseña?</Text>
        </TouchableOpacity>
      </View>
      
                        </View>
                        </TouchableWithoutFeedback>
      
                                            
  )}
    


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:20,
    backgroundColor: "rgb(255 255 255 )",
    
  },

  titleText: {
    marginBottom:20
  },


  titleFonts: {
    color: "grey",
    fontWeight: "700",
    fontSize: 28,
  },
  formContainer: {
    width:"100%",
  },
  containerUser: {
    fontWeight: "400",
    fontSize: 16,
    padding: 30,
    gap:8
  },
  containerPassword: {
    gap:10,
    fontWeight: "400",
    fontSize: 16,
    padding: 30,
  },
  containerButton: {
    height:40,
    width:134,
    margin:10,
    borderRadius:100,
    borderColor:"black",
    backgroundColor:"rgb(52 136 136)",
    alignItems: "center",
    justifyContent: "center",
    
    
  },
  opacityButton: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "#348888",
  },
  TextButton: {
    fontSize: 18,
    alignItems: "center",
    color: "white",
    padding:5,
    fontWeight:400,
    
  },
  forgetContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  forgetAWText: {
    color: "black",
    fontSize: 14,
  },
  forgetText: {
    textDecorationLine: "underline",
    color: "rgb(52 136 136)",
    fontSize: 14,
  },
  forgottenContainer: {
    flex: 0,
    alignContent: "center",
    justifyContent: "center",
  },
  forgottenText: {
    textAlign: "center",
    color: "grey",
    textDecorationLine: "underline",
  },



});


