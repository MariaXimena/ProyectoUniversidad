import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native'


const InicioUsuario = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>

          <Animatable.View style={{backgroundColor: '#FFFFFF', marginTop:250}} animation="fadeInDown">
          <Text style={[styles.text, {color: '#448cfc'}]}>¡Si aun no tienes una cuenta, Registrate!</Text>
              <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('Registro')} style={[styles.signP, { borderColor: '#e3e4f4', borderWidth: 1, }]}>
                        <LinearGradient colors={['#5494fc', '#5494fc']} style={styles.signP}>
                            <Text style={[styles.textSign, {color:'#ffffff'}]}>Registro</Text>
                        </LinearGradient>
                </TouchableOpacity>
              </View>
              <View style={{marginTop:10, borderBottomColor: '#8ab5fb', borderBottomWidth: 8,}}/>
              <Text  style={styles.text} >¡Tienes una cuenta, Ingresa!</Text>
            <View style={styles.buttonin}>
                  <TouchableOpacity onPress={() => navigation.navigate('Login')}style={[styles.signP, {borderColor: '#005FEF',borderWidth: 1,}]}>
                    <LinearGradient colors={['#005FEF', '#005FEF']} style={styles.signP}>
                        <Text style={[styles.textSign, { color:'#fff'}]}>Inicia Sesion</Text>
                    </LinearGradient>
                  </TouchableOpacity>                       
              </View>
          </Animatable.View>

        </View>
      );



};

export default  InicioUsuario;
const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        backgroundColor: '#448cfc'
    },
    text: {
        color: '#448cfc',
        marginTop:0,
        padding:20,
        flexDirection: 'column',
        fontSize: 17,
        alignSelf:'center',
    },
    button: {
        alignItems: 'center',
        marginBottom: 5
    },
    buttonin: {
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 30
    },
    signP: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        color: '#448cfc',
        fontWeight: 'bold',
        fontSize: 20
    },
})