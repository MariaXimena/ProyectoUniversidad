import React , {useState} from 'react';
import { View, Text, TouchableOpacity, Dimensions,TextInput,Platform,StyleSheet,StatusBar,} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';
import firebase from '../firebase/fire';
import {useNavigation} from '@react-navigation/native'
import { connect } from 'react-redux';



const LoginUsuario = ({agregarbdreferencia,agregardatos}) =>{
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('');
    const navigation = useNavigation()



    const Ingresar = async () => {

        function Rol (id){
            const bd = firebase.database().ref('/Usuarios/'+id)
            agregarbdreferencia(bd,id)
            bd.on('value', function(snap){
                let informacion = snap.val();
                const rolusuario = informacion.rol
                const datos = informacion.datospersonales
                switch (rolusuario) {
                    case 1:
                            agregardatos(datos)
                            navigation.navigate('Usuario')
                      break;
                    case 2:
                        console.log('Rol Dermatologo')
                        navigation.navigate('Dermatologo')
                      break;
                    case 3:
                        console.log('Rol Administrador')
                      break;
                    default:
                        navigation.navigate('DatosRegistro')
                      break;
                  }
            })
        }
    
        try {
            const responsel = await firebase.auth().signInWithEmailAndPassword(email, contraseña);
            const emailverificado = responsel.user.emailVerified
            if (emailverificado === false) {
                console.log('No tiene acceso')
                let mensaje= 'El Usuario no se encuentra verificado por favor consulte su correo'
                setError(mensaje);
                const id = responsel.user.uid
                Rol(id) 
            }
            else {
               console.log('Tiene Acceso')
               
                
            }
        } catch (error) {
            if (error.code === 'auth/user-not-found'){
                let mensaje= 'El Usuario no se encuentra registrado'
                setError(mensaje);
            } else if (error.code === 'auth/wrong-password'){
                let mensaje= 'La contraseña es incorrecta para el usuario ingresado'
                setError(mensaje);
            } else if (error.code === 'auth/invalid-email'){
                let mensaje= 'Por favor ingrese el email'
                setError(mensaje);
            }
            
            
        }
    }



   












    return <>
    <View style={styles.container}>
            <StatusBar backgroundColor='#448cfc' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Bienvenido!</Text>
        </View>
            <Animatable.View animation="fadeInUpBig"style={[styles.footer, {}]}>
            <Text style={[styles.text_footer, { }]}>Correo Electronico</Text>
        <View style={styles.action}>    
            <TextInput placeholder="Usuario"placeholderTextColor="#666666"style={[styles.textInput, {}]}
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
            />
        </View>
            <Text style={[styles.text_footer, {marginTop: 35}]}>Contraseña</Text>
        <View style={styles.action}>
            <TextInput placeholder="Contraseña"placeholderTextColor="#666666" style={[styles.textInput, {}]}
                autoCapitalize="none"
                value={contraseña}
                onChangeText={setContraseña}
                secureTextEntry
            />
        </View>
            {
                error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
            }
            <Button icon="key"  mode="text" color='#448cfc' style={styles.contraseña} onPress={() => contraseña()}>
                Olvidaste tu contraseña
            </Button>
        <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={() => Ingresar()}>
                <LinearGradient colors={['#448cfc', '#448cfc']} style={styles.signIn}>
                <Text style={[styles.textSign, {color:'#fff'}]}>Ingresa</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
            </Animatable.View>
   </View>
 </>
};

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    agregarbdreferencia(bd,id){
        dispatch({
            type:'Agregar referencia',
            bd,id
        })
    },
    agregardatos(datos){
        dispatch({
            type:'Agregar datos',
            datos
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginUsuario);
const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        backgroundColor: '#448cfc'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    }, 
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    contraseña: {
        width: 250,
        height: 45,
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft:10,
        
        
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
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
})