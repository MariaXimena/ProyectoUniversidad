import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import firebase from '../firebase/fire';
import { ScrollView } from 'react-native-gesture-handler';
import { List, Button } from 'react-native-paper';
import { Avatar, Overlay} from 'react-native-elements';
import { Appbar } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { connect } from 'react-redux';


const Usuario = ({datos,bd}) => {
    function usuariodermatologo(){
      bd.update ({
           estadodermatologo:true
        })
        setVisible(!visible);
    
    
    
    }
    
   

    const navigation = useNavigation()
    const [visible, setVisible] = useState(true);
    const toggleOverlay = () => {
      setVisible(!visible);
    };
  
const list2 = [{zona:'dd',clase:'dd',image:'ss',key:'x'}]
    return (
        <ScrollView>
      
          <Appbar.Header  theme={{colors:{primary:'#448cfc'}}} >  
            <Appbar.Content title={datos.nombre} titleStyle={{color:'#FFFFFF'}} />
            <Appbar.Action icon="refresh" color='#FFFFFF' />
            <Appbar.Action icon="image-plus" color='#FFFFFF' onPress={() => navigation.navigate('UsuarioResultados')}/>
            <Appbar.Action icon="email" color='#FFFFFF'  onPress={() => navigation.navigate('UsuarioCorreo')}/>
            <Appbar.Action icon="account-outline" color='#FFFFFF'/>
          </Appbar.Header>       
         <Button icon="exit-to-app" color='#448cfc' style={styles.editar} mode="text">Cerrar Sesion</Button>
     
        {list2.map((item) => {
        
                return (
                
                    <List.Section  title={item.zona} key={item.key}>
                        <List.Accordion title={item.clase} left={props => <Avatar source={{uri:item.imagen}}/>} theme={{colors:{primary:'#448cfc'}}}>
                            <List.Item title="Visualizar Informacion" left={props => <List.Icon {...props} icon="account-details" />}/>
                            <List.Item title="Eliminar" left={props => <List.Icon {...props} icon="trash-can-outline" />}  />
                        </List.Accordion>
                   </List.Section>
                    
                   
                                            
                        )
        })}

        <FAB style={styles.fab} big label='Contactar con un dermatologo' icon="send"color='#FFFFFF' onPress={usuariodermatologo}/>
        {!visible ?  
        <Overlay isVisible={!visible} onBackdropPress={toggleOverlay} overlayStyle={styles.over} >
            <Text style={styles.over1}>Tus resultados han sido enviados a nuestro Dermatologo, el se comunicara contigo mediante correo electronico!</Text>
        </Overlay>:  null}


    </ScrollView>

      
    );
}

const mapStateToProps = state => ({
    datos:state.datospersonales,
    bd:state.basedatos
    
})
export default connect(mapStateToProps,{})(Usuario);
const styles = StyleSheet.create({
    container:{ 
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fab: {
        position: 'relative',
        margin: 50,
        right: 0,
        bottom: 0,
      },
    editar: {
    width: 200,
    height: 45,
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft:200,
    marginBottom:10,
    
    },
    over:{ 
        height:150,
        width:250
     
       },
    over1:{ 
    marginBottom:20,
    marginTop:20
    
    }
})