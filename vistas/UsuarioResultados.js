import React , {useState ,useEffect} from 'react';
import { View, Text, TouchableOpacity,StyleSheet ,ScrollView, Image, } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import LinearGradient from 'react-native-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import firebase from '../firebase/fire';
import {useNavigation} from '@react-navigation/native'
import { connect } from 'react-redux';


const UsuarioResultados = () => {
    const [Imagen, setImagen] = useState('');
    const [ zona, setZona] = useState("");

    const SeleccionarImagen = async () => {
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.images],
          });
          setImagen(res);
          if (res != null) {
            console.log('Contenido de la imagen')
            console.log(res)
            const fileToUpload = res;
            const data = new FormData();
            data.append('file', fileToUpload);
            
            // Please change file upload URL
            let rest = await fetch(
              'http://34.132.148.15:9000/model/predict/',
              {
                method: 'post',
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
                
                body: data,
              }
            ); 
            let result = await rest.json();
            //setClasificacion(result);
            setResult(result);
            console.log('Resultado de la clasificacion')
            console.log(result);
        }
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            alert('Canceled from single doc picker');
          } else {
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
        
      };


      const GuardarResultado = async () => {
    
        if(zona  === ''){ alert('Por favor ingrese su edad') } 
       
        else {
          const storageref = await firebase.storage().ref('/'+ email)
          const fileRef = storageref.child(singleFile.name)
          console.log(fileRef)
          const response = await fetch(singleFile.uri)
          const blob = await response.blob();
          console.log(blob); 
          let url;
          fileRef.put(blob).then(async () => {
             url = await storageref.child(singleFile.name).getDownloadURL()
            setUploaded(url)
            console.log('Guardo imagen en Firebase');
            console.log(url);
          })
          
          console.log('Se guarda correctamente en Firebase')
          
        }
      
       
      };

      
    
    return (
        <ScrollView>
            <View style={styles.container}>
                    <Text style={{fontSize: 20  , color: '#1C5BB7' , marginBottom:30 , marginTop:10 ,fontStyle: 'normal'}}>Información de la lesión</Text>
                    <Text style={{fontSize: 18  , color: '#448cfc' ,  alignSelf: 'baseline', marginTop:5}} >Imagen
                    </Text>
                    {Imagen ?   <Image style={styles.image} source={{uri:Imagen.uri}} />:  null}
        
                <View style={styles.button}>
                        <TouchableOpacity style={styles.signIn} onPress={SeleccionarImagen}>
                            <LinearGradient colors={['#6cacfc', '#448cfc']} style={styles.signIn}>
                                <Text style={[styles.textSign, {color:'#fff' }]}>Seleccionar Imagen</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                </View>
                    <Text style={{fontSize: 18  , color: '#448cfc' ,  alignSelf: 'baseline', marginTop: 40}}>Ubicacion de la lesion</Text>
                    <Text style={{fontSize: 13 , color: 'black' ,  alignSelf: 'baseline', marginTop: 10, marginBottom:10}}>Por favor seleccione en que zona del cuerpo fue tomada la imagen ingresada.</Text>
                    <RNPickerSelect
                        placeholder={{ }}
                        onValueChange={(zona) => setZona(zona)}
                        items={[
                        { label: "Rostro (cara,cuello y zonas cercanas)", value: "Rostro" },
                        { label: "Central (pecho y abdomen)", value: "Central" },
                        { label: "Espalda (excepto gluteos)" , value:"Espalda"},
                        { label: "Brazo (excepto la mano)" , value:"Brazo"},
                        { label: "Mano (muñeca , dorso , palma y dedos)" , value:"Mano"},
                        { label: "Genitales (Toda la zona de genitales)" , value:"Genitales"},
                        { label: "Gluteos (Toda la zona de gluteos)" , value:"Gluteos"},
                        { label: "Pierna (parte frontal y posterior)" , value:"Gluteos"},
                        { label: "Pie (Toda las zonas del pie)" , value:"Pie"},
                    ]}/> 
                        <TouchableOpacity style={styles.button}onPress={GuardarResultado}>
                            <LinearGradient colors={['#6cacfc', '#448cfc']} style={styles.signIn}>
                                <Text style={[styles.textSign, { color:'#fff'}]}>Enviar Informacion</Text>
                            </LinearGradient> 
                        </TouchableOpacity>
        
            </View>
        </ScrollView>
        
        
    );
}

export default UsuarioResultados;
const styles = StyleSheet.create ({
    container:{ 
        flex:1,
        alignItems: 'center',
        padding: 30,
    
    },
    image:{
        width:400,
        height:350,
        resizeMode:'contain'
      },
    button: {
    marginBottom:20
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