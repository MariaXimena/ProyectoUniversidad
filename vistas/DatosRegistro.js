import React , {useState} from 'react';
import {  View, Text, TouchableOpacity,  StyleSheet ,ScrollView, } from 'react-native';
import { Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import firebase from '../firebase/fire';
import { connect } from 'react-redux';

const DatosRegistro = ({bd}) => {
    const [ nombre, setNombre ] = useState(""); 
    const [ cuidad, setCuidad ] = useState("");  
    const [ ocupacion, setOcupacion ] = useState(""); 
    const [ genero, setGenero ] = useState("");
    const [ cancer, setCancer ] = useState("");
    const [ piel, setPiel ] = useState("");
    const [ hora, setHora ] = useState("");
    const [ pais, setPais ] = useState("");
    const [ edad, setEdad ] = useState("");








    function actualizar () {
        if(edad  === ''){
            alert('Por favor ingrese su edad')
        } else if (pais === '') { 
            alert('Por favor ingrese el pais')
        } else if (nombre === ''){
            alert('Por favor nombre')
        } else if (cuidad === ''){
          alert('Por favor ingrese la cuidad')
        } else if (ocupacion === ''){
          alert('Por favor ingrese su ocupacion')
        }
        else if (genero=== '' || genero === 'no'){
          alert('Por favor seleeccione su genero')
        }
        else if (cancer=== '' || cancer === 'no'){
          alert('Por favor seleeccione los antecedentes de cancer')
        }
        else if (piel=== '' || piel === 'no'){
          alert('Por favor seleeccione los antecedentes de cancer de piel')
        }
        else if (hora=== '' || hora === 'no'){
          alert('Por favor ingrese la cantidad de horas de exposicion al sol')
        } 
        bd.update({
            datospersonales: {genero:genero,
                edad: edad,
                nombre:nombre,
                pais: pais,
                cuidad: cuidad,
                ocupacion:ocupacion,
                hora: hora,
                cancer:cancer,
                piel:piel,
                done: true,
                },
            rol: 1
        })
        console.log('Se guarda correctamente en Firebase')
    }

    const onChanged = (edad) => {
        let newEdad = '';
        let numbers = '0123456789';
        
        for (var i=0; i < edad.length; i++) {
            if(numbers.indexOf(edad[i]) > -1 ) {
                newEdad = newEdad + edad[i];
                
            }
            else {
            alert("solo numeros");
            }
        }
        setEdad(newEdad);
    };

  return (
    <ScrollView>

        <View style={styles.container}>
            <Text  style={{fontSize: 20  , color: '#448cfc' , marginBottom:25 , fontStyle: 'normal'}}>Datos Personales</Text>  
                <Input
                keyboardType='default'
                placeholder='Nombre' 
                onChangeText={(nombre) => setNombre(nombre)}/>
                <Input
                keyboardType='numeric' 
                onChangeText={(edad)=>onChanged(edad)}
                placeholder='Edad'
                maxLength={2}/>
                <Input 
                placeholder='Pais'
                onChangeText={(pais) => setPais(pais)}/>
                <Input 
                placeholder='Cuidad' 
                onChangeText={(cuidad) => setCuidad(cuidad)}/>
                <Input 
                placeholder='Ocupacion'
                onChangeText={(ocupacion) => setOcupacion(ocupacion)}/>

            <Text style={{fontSize: 15  , color: '#448cfc' ,  alignSelf: 'baseline',marginBottom:10,marginTop:10}}>Genero</Text>
            <RNPickerSelect
                placeholder={{}}
                onValueChange={(genero) => setGenero(genero)}
                items={[
                    {label: "Masculino", value: "Masculino" },
                    {label: "Femenino", value: "Femenino" },
                ]}/>
            
            <Text style={{fontSize: 15  , color: '#448cfc' ,  alignSelf: 'baseline',marginBottom:10,marginTop:10}}>Antecedentes de Cancer</Text>
            <RNPickerSelect 
                     placeholder={{ }}
                    onValueChange={(cancer) => setCancer(cancer)}
                    items={[
                        {label:"Familiares", value:"Familiares"},
                        {label: "Personales", value: "Personales" },
                        {label: "No registra antecedentes" , value:"No registra"}
                    ]}/>
            <Text style={{fontSize: 15  , color: '#448cfc' ,  alignSelf: 'baseline',marginBottom:10,marginTop:10}}>Antecedentes de Cancer de Piel</Text>
            <RNPickerSelect
                    placeholder={{ }}
                    onValueChange={(piel) => setPiel(piel)}
                    items={[
                        {label:"Familiares", value:" Familiares"},
                        {label: "Personales", value: "Personales" },
                        {label: "No registra antecedentes" , value:"No registra"}
                ]}
                />  
             <Text style={{fontSize: 15  , color: '#448cfc' ,  alignSelf: 'baseline',marginBottom:10,marginTop:10}}>Cantidad de horas en qué se expone al sol por día</Text>
            <RNPickerSelect
                    placeholder={{ }}
                    onValueChange={(hora) => setHora(hora)}
                    items={[
                        {label: "Menos de 1 hora" , value:"Menos de 1 hora"},
                        {label:"1-4 horas", value:"1-4 horas"},
                        {label: "4-8 horas", value: "4-8 horas" },
                        {label: "8-12 horas" , value:"8-12 horas"},
                        {label: "No se expone al sol" , value:"No registra"}
                ]}
                />  
            <TouchableOpacity style={styles.button} onPress={actualizar}>
                <LinearGradient colors={['#6cacfc', '#448cfc']} style={styles.signIn}>
                    <Text style={[styles.textSign, {color:'#fff'}]}>Guardar</Text>
                </LinearGradient> 
            </TouchableOpacity>
    
        </View>
    </ScrollView>
    
    
);
}

const mapStateToProps = state => ({
    bd:state.basedatos
    
})

export default connect(mapStateToProps,{})(DatosRegistro);
const styles = StyleSheet.create({
    container:{ 
        flex:1,
        alignItems: 'center',
        padding: 30,
    
    },
    button: {
        marginBottom:20
    },
    textSign: {
        fontSize: 17,
    },
    signIn: {
        width: 200,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop:10
    },
})