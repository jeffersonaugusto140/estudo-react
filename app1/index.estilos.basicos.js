import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const Estilos = {
    estiloView:{
        backgroundColor: 'skyblue',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        flexDirection: 'column',
        height: 500
    },
    es1:{
        backgroundColor: '#08509B',
        fontSize: 22
    },
    es2:{
        backgroundColor: '#08509B',
        fontSize: 22
    },
    es3:{
        backgroundColor: '#08509B',
        fontSize: 22
    }
}

const App = () => {
    const { es1,es2,es3, estiloView } = Estilos;
    return (
        <View style={ estiloView }>
            <Text style={ es1 }>
                Box A
            </Text>       
            <Text style={ es2 }>
                Box B
            </Text>       
            <Text style={ es3 }>
                Box C
            </Text>        
        </View>
    );
};

AppRegistry.registerComponent('app1', () => App);
