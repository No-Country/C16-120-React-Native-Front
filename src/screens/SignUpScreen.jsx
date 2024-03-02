import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.container}>
                {/* Logo */}
                <View style={styles.containerImage}>
                    <Image style={styles.img} source={require('../../assets/Logo.png')} />
                </View>

                {/* Title and Forms */}
                <View style={styles.content}>
                    {/* Title */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>
                            Registro
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
                            <Text style={styles.buttonText}>Crear Cuenta</Text>
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
