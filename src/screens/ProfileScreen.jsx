import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
    const navigation = useNavigation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dismissKeyboard = () => {
      Keyboard.dismiss();
    };
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.container}>
                {/* Logo */}
                <View style={styles.containerImage}>
                    <Image style={styles.img} source={require('../../assets/Logo.png')} />
                </View>

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
          <TouchableOpacity style={styles.option} onPress={() =>navigation.push('Datos')}>
            <Text style={styles.optionText}>Mis rutas</Text>
          </TouchableOpacity>
        </View>
      )}

                {/* Title and Forms */}
                <View style={styles.content}>
                    {/* Title */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>
                            Mis datos
                        </Text>
                    </View>

                    {/* Forms */}
                    <View style={styles.formContainer}>
                        <TextInput style={styles.input} label="Nombre y Apellido" />
                        <TextInput style={styles.input} label="Email" />
                        <TextInput style={styles.input} label="Usuario" />
                        <TextInput style={styles.input} label="Contraseña" />
                        

                        {/* Button */}
                        <TouchableOpacity style={styles.button} onPress={() => navigation.push('Success')}>
                            <Text style={styles.buttonText}>Editar mis datos</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    containerImage: {
        alignItems: 'center',
        marginTop: 80,
        marginLeft:30
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    titleText: {
        color: '#4C4B4B',
        fontWeight: '700',
        fontSize: 28,
    },
    formContainer: {
        marginTop: 20,
    },
    input: {
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#348888',
        paddingVertical: 12,
        borderRadius: 40,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    
});