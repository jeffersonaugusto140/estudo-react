import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

var res;

const gerarNumero = () => {
    var numero = Math.floor(Math.random() * 10);
    alert(numero);
};

const App = () => {
    return (
        <View>
            <Text>
                App gerador de lero lero
            </Text>
            <Button
                title="Gerar o numeruzin"
                onPress={gerarNumero}
            />            
        </View>
    );
};

AppRegistry.registerComponent('app1', () => App);
