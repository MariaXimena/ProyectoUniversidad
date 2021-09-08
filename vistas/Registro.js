import React , {useState} from 'react';
import { View, Text, TouchableOpacity,TextInput,Platform,StyleSheet,StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import firebase from '../firebase/fire';


const Registro = ({navigation}) => {
    const [emailr, setEmailr] = useState('');
    const [contraseñar, setContraseñar] = useState('');
    const [errorreg, setError] = useState('');
    const [statedatos,setStatedatos] = useState({
        genero: "",
        edad:"",
        pais:"",
        nombre:"",
        cuidad:"",
        ocupacion:"",
        correo:"",
        cancer:"",
        hora:" ",
        piel:" ",
        done: false
  
    });

    const Registrar = async () => {

        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(emailr, contraseñar);
            const correo = response.user;
            const key = response.user.uid;
            const bdReferencia = firebase.database().ref('/Usuarios/'+key)
            bdReferencia.set({ 
                cuenta:emailr, 
                keycuenta:key,
                datospersonales:statedatos,
                estadousuario: true,
                estadodermatologo: false,
                rol: 1,
            })
            correo.sendEmailVerification().then(function(){
                console.log('Correo de vrificacion enviado')
            }).catch(function(error){
                console.log('Correo de verificacion no enviado')
                console.log(error)
            })
            console.log('Se registro correctamente')
            console.log(emailr)
            navigation.navigate('Login')
        } catch (err) {
            if (err.code === 'auth/invalid-email'){
                let mensaje= 'La direccion de correo electronico tiene un formato incorrecto'
                setError(mensaje);
            } else if (err.code === 'auth/email-already-in-use') {
                let mensaje= 'La direccion de correo electronico ya se encuentra registrada'
                setError(mensaje);
            } 
            else if (err.code === 'auth/weak-password'){
                let mensaje= 'La contraseña debe tener al menos 6 caracteres'
                setError(mensaje);
            }
        }

    }


    return  <>
    <View style={styles.container}>
        <StatusBar backgroundColor='#448cfc' barStyle="light-content"/>
    <View style={styles.header}>
        <Text style={styles.text_header}>Registrate Ahora!</Text>
    </View>
        <Animatable.View animation="fadeInUpBig"style={styles.footer}>
        <Text style={styles.text_footer} >Correo Electronico</Text>
    <View style={styles.action}>
        <TextInput placeholder="Ingresa un usuario" style={styles.text_footer} autoCapitalize="none" value={emailr} onChangeText={setEmailr} keyboardType='email-address'/>
    </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}>Contraseña</Text>
    <View style={styles.action}>
        <TextInput placeholder="Ingresa una contraseña" style={styles.textInput} autoCapitalize="none" value={contraseñar} onChangeText={setContraseñar} secureTextEntry/>
    </View>
        {
         errorreg ?
        <Text style={{ color: 'red' }}>{errorreg}</Text>
        : null
        }
        
    <View style={styles.button}>
        <TouchableOpacity style={styles.signIn} onPress={() => Registrar()} >
            <LinearGradient colors={['#448cfc', '#448cfc']} style={styles.signIn}>
                <Text style={[styles.textSign, {color:'#fff'}]}>Terminar Registro</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
        </Animatable.View>
  </View>

</>

}

export default Registro;
const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        backgroundColor: '#448cfc'
        },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },    
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 16
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
})