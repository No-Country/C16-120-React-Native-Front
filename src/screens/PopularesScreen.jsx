
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Keyboard,TouchableWithoutFeedback } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';

const Populares = () => {
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionSelect = (option) => {
    console.log('Opción seleccionada:', option);
    // Aquí puedes manejar la lógica cuando se selecciona una opción del menú
    setIsMenuOpen(false); // Cerrar el menú después de seleccionar una opción
  };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={styles.container}>
      {/* Navbar */}
      
      <View><Text style={styles.navbarText}>Bienvenido</Text></View>
      <View style={styles.Burguernavbar}>
       
      
         <TouchableOpacity onPress={toggleMenu}>
          <Ionicons name="menu-outline" size={32} color="orange" />
        </TouchableOpacity>
      </View>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <View style={styles.dropdown}>
          <TouchableOpacity style={styles.option} onPress={() => navigation.push('Login')}>
            <Text style={styles.optionText}>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => navigation.push('Trails')}>
            <Text style={styles.optionText}>Agregar Sendero</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => handleOptionSelect('Perfil')}>
            <Text style={styles.optionText}>Perfil</Text>
          </TouchableOpacity>
        </View>
      )}
      

      {/* Título "Senderos Populares" */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Los senderos más populares</Text>
      </View>

      {/* Espacios estilo tarjeta */}
      <View style={styles.cardContainer}>
        {/* Espacio 1 */}
        <View style={[styles.card, styles.initialCard]}>
          <Text style={styles.cardText}>Aguas Chiquitas</Text>
          <Text style={styles.cardTextProvincia}>Tucumán</Text>
          {/* Aquí agregamos los botones */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.guardarButton} onPress={() => navigation.push('Success')}>
              <Text style={styles.GuardarbuttonText}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.verButton} onPress={() => navigation.push('Datos')}>
              <Text style={styles.VerbuttonText}>Ver más</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Espacio 2 */}
        <View style={styles.card}>
          <Text style={styles.cardText}>Texto del espacio 2</Text>
          <Text style={styles.cardTextProvincia}>Texto del espacio 1</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.guardarButton} onPress={() => navigation.push('Success')}>
              <Text style={styles.GuardarbuttonText}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.verButton} onPress={() => navigation.push('Success')}>
              <Text style={styles.VerbuttonText}>Ver más</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Espacio 3 */}
        <View style={styles.card}>
          <Text style={styles.cardText}>Texto del espacio 3</Text>
          <Text style={styles.cardTextProvincia}>Texto del espacio 1</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.guardarButton} onPress={() => navigation.push('Success')}>
              <Text style={styles.GuardarbuttonText}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.verButton} onPress={() => navigation.push('Success')}>
              <Text style={styles.VerbuttonText}>Ver más</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  Burguernavbar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10, // Mover el navbar hacia abajo
  },
  navbarText: {
    backgroundColor:"rgb(228 228 224)",
    paddingTop:10,
    height:64,
    width:"100%",
    textAlign:"center",
    fontSize: 30,
    marginTop:90
  },
  titleContainer: {
    marginBottom: 10,
    color:"grey"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:"grey",
    textAlign:"center"
  },
  dropdown: {
    position:"absolute",
    top: 150, // Ajusta la posición del menú desplegable según sea necesario
    left:60, // Ajusta la posición del menú desplegable según sea necesario
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    zIndex:1,
    textAlign:"left"
    
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 16,
  },
  cardContainer: {
    
    marginTop: 50,
    alignContent:"space-between"
  },
  card: {
    marginBottom:20,
    height:139,
    width:"100%",
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
   
 
  },
  cardText: {
    fontSize: 16,
    textAlign: 'left',
    marginLeft:40,
    marginTop:10,
    fontWeight:"bold"
  },
  cardTextProvincia: {
    fontSize: 14,
    textAlign: 'left',
    marginLeft:40,
    },
  buttonContainer: {
    marginTop:40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    
  },
  guardarButton: {
    backgroundColor: 'rgb(255 255 255)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 100,
    marginLeft: 10,
    borderWidth:1,
    borderColor:"grey"
  },
  verButton: {
    backgroundColor: 'rgb(52 136 136)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 100,
    marginLeft: 10,
    borderWidth:1,
    borderColor:"grey"
  },
  VerbuttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  GuardarbuttonText: {
    color: 'rgb(52 136 136)',
    fontWeight: 'bold',
  
}
});

export default Populares;
