import React , {useState} from 'react';
import { View, Text, StyleSheet ,ScrollView,TouchableOpacity} from 'react-native';
import { Input, Button} from 'react-native-elements';
import firebase from '../firebase/fire';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';


const UsuarioCorreo = () => {
    return (
        <ScrollView>

        <View style={styles.container}>
            <Text style={{fontSize: 18  , color: '#448cfc' ,  alignSelf: 'baseline', marginTop: 40,marginBottom:15}}>Envio de Resultados</Text>
            <Text style={{fontSize: 13 , color: 'black' ,  alignSelf: 'baseline', marginTop: 10, marginBottom:10}}>Por favor ingreso un correo valido donde desea que sean enviado los resultados.</Text>
            <Input
            keyboardType='default' 
            onChangeText={(correo) => setCorreo(correo)}
            placeholder='Correo Electronico'
            /> 
            <Text style={styles.over1}>Tus resultados han sido enviados al correo electronico que ingresaste!</Text>
            <TouchableOpacity style={styles.button}>
                <LinearGradient colors={['#6cacfc', '#448cfc']} style={styles.signIn}>
                    <Text style={[styles.textSign, { color:'#fff'}]}>Enviar Resultados</Text>
                </LinearGradient> 
            </TouchableOpacity>
        </View>
      
        </ScrollView>
        
        
    );
}
export default UsuarioCorreo;
const styles = StyleSheet.create({
    container:{ 
        flex:1,
        alignItems: 'center',
        padding: 30,
    
    },
    over1:{ 
        marginBottom:20,
        marginTop:20
      
    },
    signIn: {
        width: 200,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop:10
    },
    textSign: {
        fontSize: 17,
    }
})