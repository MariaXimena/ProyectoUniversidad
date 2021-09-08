import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { closeSession } from '../utils/actions';
import firebase from '../firebase/fire';
import { ScrollView } from 'react-native-gesture-handler';
import { FAB } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { connect } from 'react-redux';


const Dermatologo = ({navigation}) => {
    return (
        <ScrollView>
            <Appbar.Header  theme={{colors:{primary:'#448cfc'}}}> 
                <Appbar.Content title='nombre' titleStyle={{color:'#FFFFFF'}} />
                <Appbar.Action icon="account-outline" color='#FFFFFF' onPress={() => console.log('d')}/>
                <Appbar.Action icon="exit-to-app" color='#FFFFFF' onPress={() => {closeSession() 
                    navigation.navigate("SplashScreen")}}/>
           </Appbar.Header>
        
            <FAB style={styles.fab} big label='Usuarios de Pago' icon="account-cash-outline" color='#FFFFFF'  onPress={() => navigation.navigate('UsuarioPago')}/>
            <FAB style={styles.fab} big label='Usuarios Generales' icon="account-group" color='#FFFFFF' />

     
    </ScrollView>

      
    );
}
export default Dermatologo;
const styles = StyleSheet.create ({
    fab: {
        position: 'relative',
        margin: 40,
        right: 0,
        bottom: 0,
      },
})