import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
    const navigation = useNavigation();
    return (
      <View className = "bg-white h-full w-full">
          {/*Logo*/}
          <View style={styles.container}>
              <Image style={styles.img} source={require('../assets/Logo.png')}/>
          </View>
          {/*Title and Forms*/}
          <View style={styles.conainerText}>
              {/*Title*/}
              <View style={styles.titleText}>
                  <Text style={styles.titleFonts}>
                      Registro
                  </Text>
              </View>
              {/*Forms*/}
              <View style={styles.containerforms}>
                  <View style={styles.containerNombre}>
                      <TextInput label="Nombre y Apellido"/>
                  </View>
                  <View style={styles.containerEmail}>
                      <TextInput label="Email"/>
                  </View>
                  <View style={styles.containerUsuario}>
                      <TextInput label="Usuario"/>
                  </View>
                  <View style={styles.containerPassword}>
                      <TextInput label="Contraseña"/>
                  </View>
                  <View style={styles.containerButton}>
                      <TouchableOpacity style={styles.opacityButton} onPress={()=> navigation.push('Success')}>
                          <Text style={styles.TextButton}>Crear Cuenta</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 0.8,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 80,
    },
    img: {
      width: 255,
      height: 140,
    },
    conainerText: {
        flex :2,
        justifyContent: 'center'
    },
    titleText: {
        alignItems: 'center'
    },
    titleFonts:{
        color: '#4C4B4B',
        fontWeight: '700',
        fontSize: 28
    },
    containerforms:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    containerNombre:{
        fontWeight: '400',
        fontSize: 16,
        padding: 20
    },
    containerEmail:{
        fontWeight: '400',
        fontSize: 16,
        padding: 20
    },
    containerUsuario:{
        fontWeight: '400',
        fontSize: 16,
        padding: 20
    },
    containerPassword:{
        fontWeight: '400',
        fontSize: 16,
        padding: 20
    },
    containerButton: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    opacityButton:{
        padding: 10,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'green',
        backgroundColor: '#348888',
    },
    TextButton:{
        fontSize: 18,
        alignItems: 'center',
        color: 'white'
    }
});