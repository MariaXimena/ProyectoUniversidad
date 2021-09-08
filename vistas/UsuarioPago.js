import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import firebase from '../firebase/fire';
import { ScrollView } from 'react-native-gesture-handler';
import { List} from 'react-native-paper';
import {Title} from 'react-native-paper';


const bdusuariop = firebase.database().ref('/Usuarios')

const UsuarioPago = () => {

    const [list, setList] = useState([])
    const [donepago, setDonepago] = useState(true)
    const [actualizarpago, setActualizarpago] = useState(false)
    const [llavepago, setLlavepago] = useState('')
    useEffect(() => {
        fetchDataUsuarioP()
      }, []) 
      
      useEffect(() => {
          if (actualizarpago) {
            bdusuariop.child(llavepago).update({ estadodermatologo: donepago })
              setActualizarpago(false)
              fetchDataUsuarioP()
              
              
          }
         
         
      }, [donepago]);
  
      function UpdatePago(key) {
          setActualizarpago(true)
          setLlavepago(key)
          
      }
  
  
      function fetchDataUsuarioP(){
          let item = [];
          bdusuariop.on('value', function(snap){
              let a_ = snap.val();
              for (let x in a_){
                  item.push({estado:a_[x].estadodermatologo,cuenta:a_[x].cuenta,key:x})
              }
              setList(item)
            
              
          } )
      
  
      }
      const lista = [...list]

      return (
        <ScrollView>
            <Title style={{alignSelf:'center', color:'#448cfc'}}>Usuarios de Pago</Title>
            <View
            style={{
                marginTop:10,
                borderBottomColor: '#8ab5fb',
                borderBottomWidth: 8,
            }}
            />
        <List.Section>
            <List.Accordion title=' Usuarios' theme={{colors:{primary:'#448cfc'}}}>
            {lista.map((usuaripago,i) => {
            let d = 0
                return (
                   usuaripago.estado && (   
                       
                    <List.Section key={usuaripago.key}>
                    <List.Accordion
                       title={usuaripago.cuenta}
                      theme={{colors:{primary:'#003244'}}}
                      >
                         
                      <List.Item title="Ver los Resultados" left={props => <List.Icon {...props} icon="clipboard-text-outline" />} onPress={()=>props.navigation.navigate("ResultadosD",{userid:{key:usuaripago.key, cuenta:usuaripago.cuenta}})} >
                        </List.Item>
                        <List.Item title="Revisado" left={props => <List.Icon {...props} icon="clipboard-text-outline" />} onPress={()=>{UpdatePago(usuaripago.key);setDonepago(!donepago); setList(lista)}} > 
                        </List.Item>
                    </List.Accordion>
                   </List.Section>
                    
                   )
                                            
                        )
        })}
            </List.Accordion>
        </List.Section>
        
        
    
    </ScrollView>
    
      
    );

}



export default UsuarioPago;
