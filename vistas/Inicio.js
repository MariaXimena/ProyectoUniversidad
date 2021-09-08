import React from 'react';
import { View,Text, TouchableOpacity,Dimensions,StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native'


const Inicio = () => {
    const navigation = useNavigation()

    return  (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                    animation="bounceIn"
                    duraton="2500"
                    source={require('../static/img/logoq.png')}
                    style={styles.logo}
                    resizeMode="stretch"/>
            </View>
                <Animatable.View style={{backgroundColor: '#448cfc'}} animation="fadeInDown">
                <Text style={[styles.title, {color: '#FFFFFF'}]}>¡Analiza las imagenes de tu piel junto a nosotros!</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('InicioUsuario')} style={[styles.signP, {borderColor: '#e3e4f4', borderWidth: 1,marginTop: 15}]}>
                        <LinearGradient colors={['#e3e4f4', '#e3e4f4']} style={styles.signP}>
                        <Text style={[styles.textSign, {color:'#005FEF'}]}>Ingresar</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:10, borderBottomColor: '#8ab5fb', borderBottomWidth: 8, }}/>
                <Text  style={styles.title} >Si eres Dermatologo </Text>
                <View style={styles.buttonin}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.signP, {borderColor: '#005FEF', borderWidth: 1, marginTop: 15 }]}>
                    <LinearGradient colors={['#005FEF', '#005FEF']} style={styles.signP} >
                        <Text style={[styles.textSign, { color:'#fff'}]}>Inicia Sesion</Text>
                    </LinearGradient>
                    </TouchableOpacity>          
                </View>
                </Animatable.View>
        </View>
            
        
    )





};
export default Inicio;
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#FFFFFF'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: height_logo,
        height: height_logo,
        marginTop: 100
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf:'center',
        padding: 20
        
    },
    button: {
        alignItems: 'center',
        marginBottom: 5
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
    buttonin: {
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 30
    }
})