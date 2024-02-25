import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";

export default function SuccessScreen() {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/hike.png')} resizeMode='cover' style={styles.image}>
            <View style={styles.overlayView}/>
            {/*Logo*/}
            <View style={styles.containerImage}>
                <Image style={styles.img} source={require('../assets/LogoWhite.png')}/>
            </View>
            <LottieView
                source={require("../assets/animations/Success.json")}
                style={styles.successImage}
                autoPlay
            />
            <View style={styles.containerSuccess}>
                <Text style={styles.SuccessText}>
                    Te has registrado{"\n"}
                        exitosamente
                </Text>
            </View>
            <View style={styles.containerAdventure}>
                <Text style={styles.AdventureText}>
                    !Comienza tu aventura¡
                </Text>
            </View>
            <View style={styles.containerButton}>
                      <TouchableOpacity style={styles.opacityButton} onPress={()=> navigation.push('Success')}>
                          <Text style={styles.TextButton}>Listo</Text>
                      </TouchableOpacity>
                  </View>
        </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    overlayView: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    containerImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 80
      },
      img: {
        width: 255,
        height: 140,
      },
      containerSuccess: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
      SuccessText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '700',
        color: 'white'
      },
      successImage:{
        flex: 1,
        width: '5',
        height: '5',
        resizeMode: 'contain',
        alignItems : 'center'
      },
      containerAdventure:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      AdventureText:{
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '700',
        color: 'white'
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