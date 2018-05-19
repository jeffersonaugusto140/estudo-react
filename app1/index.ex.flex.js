import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const Estilos = {
    main:{
        flex: 1,
        backgroundColor: 'aqua'
    },
    top:{       
        flex: 2, 
        backgroundColor: 'darkcyan'
    },
    content:{
        flex: 16,
        backgroundColor: 'darkgrey'
    },
    footer:{
        flex: 1,
        backgroundColor: 'darkseagreen'
    }
}

const App = () => {
    const { main, top, content, footer } = Estilos;
    return (
        <View style={ main }>
            <Text style={ top }>
                Box A
            </Text>  
            <Button title="Teste"/>     
            <Text style={ content }>
                Box B
            </Text>       
            <Text style={ footer }>
                Box C
            </Text>        
        </View>
    );
};

AppRegistry.registerComponent('app1', () => App);
