import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard,Image,
  TouchableWithoutFeedback,} from 'react-native';

const Trails = () => {
  const [provincia, setProvincia] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [nombreRuta, setNombreRuta] = useState('');
  const [distanciaRecorrido, setDistanciaRecorrido] = useState('');
  const [msnm, setMsnm] = useState('');
  const [dificultad, setDificultad] = useState('');
  const [ascensoTotal, setAscensoTotal] = useState('');
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    console.log('Formulario enviado:', {
      provincia,
      localidad,
      nombreRuta,
      distanciaRecorrido,
      msnm,
      dificultad,
      ascensoTotal
    });
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={styles.container}>
    <View style={styles.containerImage}>
          <Image style={styles.img} source={require('../../assets/Logo.png')}/>
        </View>
        <View style={styles.titleText}>
          <Text style={styles.titleFonts}>Agregar Sendero</Text>
        </View>
      <Text>Provincia:</Text>
      <TextInput
        style={styles.input}
        value={provincia}
        onChangeText={text => setProvincia(text)}
      />
      <Text>Localidad:</Text>
      <TextInput
        style={styles.input}
        value={localidad}
        onChangeText={text => setLocalidad(text)}
      />
      <Text>Nombre del sendero:</Text>
      <TextInput
        style={styles.input}
        value={nombreRuta}
        onChangeText={text => setNombreRuta(text)}
      />
      <Text>Distancia del recorrido:</Text>
      <TextInput
        style={styles.input}
        value={distanciaRecorrido}
        onChangeText={text => setDistanciaRecorrido(text)}
      />
   
      <Text>Dificultad:</Text>
      <TextInput
        style={styles.input}
        value={dificultad}
        onChangeText={text => setDificultad(text)}
      />

   <View style ={styles.containerButton}>
            <TouchableOpacity  onPress={()=> navigation.push('Success')}>
                        <Text style={styles.TextButton}>Enviar</Text>
                    </TouchableOpacity>
    </View>
  </View>
  </TouchableWithoutFeedback>
)};



const styles = StyleSheet.create({
  container: {
    flex: 1,
   justifyContent: "center",
    paddingHorizontal:20,
    backgroundColor: "rgb(255 255 255 )",
    
  },
  containerImage:{
    alignItems:"center",
    paddingLeft:50
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  titleText: {
    marginBottom:20,
  alignItems:"center"
  },


  titleFonts: {
    color: "grey",
    fontWeight: "700",
    fontSize: 28,
  },

  containerButton: {
 
    margin:20,
    borderRadius:20,
    borderColor:"black",
    backgroundColor:"rgb(52 136 136)",
    alignItems: "center",
    justifyContent: "center",
    
    
  },
  opacityButton: {
    padding: 10,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "#348888",
  },
  TextButton: {
    fontSize: 18,
    alignItems: "center",
    color: "white",
    padding:25,
    fontWeight:400,
    
  }
});

export default Trails;
