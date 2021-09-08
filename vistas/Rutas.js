import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Pantallas
import Inicio from './Inicio'
import InicioUsuario from './InicioUsuario'
import Registro from './Registro';
import Login from './Login';
import DatosRegistro from './DatosRegistro';
import Usuario from './Usuario';
import UsuarioResultados from './UsuarioResultados';
import UsuarioCorreo from './UsuarioCorreo';
import Dermatologo from './Dermatologo';
import UsuarioPago from './UsuarioPago';


const RutasStack = createStackNavigator();


const Rutas = () => (

    <RutasStack.Navigator headerMode='none'>
        
        <RutasStack.Screen name="Inicio" component={Inicio}/>
        <RutasStack.Screen name="InicioUsuario" component={InicioUsuario}/>
        <RutasStack.Screen name="Registro" component={Registro}/>
        <RutasStack.Screen name="Login" component={Login}/>
        <RutasStack.Screen name="DatosRegistro" component={DatosRegistro}/>
        <RutasStack.Screen name="Usuario" component={Usuario}/>
        <RutasStack.Screen name="UsuarioResultados" component={UsuarioResultados}/>
        <RutasStack.Screen name="UsuarioCorreo" component={UsuarioCorreo}/>
        <RutasStack.Screen name="Dermatologo" component={Dermatologo}/>
        <RutasStack.Screen name="UsuarioPago" component={UsuarioPago}/>

    </RutasStack.Navigator>
);

export default Rutas;