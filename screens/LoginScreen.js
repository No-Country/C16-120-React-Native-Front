import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
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
                    Iniciar Sesión
                </Text>
            </View>
            {/*Forms*/}
            <View style={styles.containerforms}>
                <View style={styles.containerUser}>
                    <TextInput label="Usuario"/>
                </View>
                <View style={styles.containerPassword}>
                    <TextInput label="Contraseña"/>
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.opacityButton} onPress={()=> navigation.push('Success')}>
                        <Text style={styles.TextButton}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.forgetContainer}>
                    <Text style={styles.forgetAWText}>¿Aún no tienes cuenta?</Text>
                    <TouchableOpacity onPress={()=> navigation.push('SignUp')}>
                        <Text style={styles.forgetText}>
                            Registrate
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.forgottenContainer}>
            <TouchableOpacity>
                <Text style={styles.forgottenText}>¿Olvidaste tu Contraseña?</Text>
            </TouchableOpacity>   
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 100,
    },
    img: {
      width: 255,
      height: 140,
    },
    conainerText: {
        flex :2.3,
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
        flex: 0.6,
        alignContent: 'center',
        justifyContent: 'center'
    },
    containerUser:{
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
    },
    forgetContainer:{
        marginVertical:10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    forgetAWText:{
        color: '#4C4B4B',
        fontSize: 14
    },
    forgetText:{
        textDecorationLine: 'underline',
        color: '#348888',
        fontSize: 14
    },
    forgottenContainer:{
        flex:0,
        alignContent: 'center',
        justifyContent: 'center'
    },
    forgottenText:{
        textAlign: 'center',
        color: '#4C4B4B',
        textDecorationLine: 'underline'
    }
});