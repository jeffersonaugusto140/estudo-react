import React from 'react';
import { Text, View, Alert, AppRegistry, Image, TouchableOpacity } from 'react-native';

const frases = [
    'Frase -001',
    'Frase -002',
    'Frase -003',
    'Frase -004',
    'Frase -005',
]

const novaFrase = () => {
    const n = Math.floor(Math.random() * 4);
    Alert.alert(frases[n]);
};

const Estilos = {
    main:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        backgroundColor: 'green',
        marginTop: 20
    },
    txt: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    }
}

const App = () => {
    const { main, btn, txt } = Estilos;
    return (
        <View style={ main }>
           <Image source={ require('./img/logo.png') }/>
           <TouchableOpacity onPress={novaFrase} style={ btn }>
               <Text style={txt}>
                   Nova frase
               </Text>
           </TouchableOpacity>
        </View>
    );
};

AppRegistry.registerComponent('app1', () => App);
