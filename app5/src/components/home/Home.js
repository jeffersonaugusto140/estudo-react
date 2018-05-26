import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    StatusBar
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgLogo = require('./../../imgs/logo.png');
const imgMenuCliente = require('./../../imgs/menu_cliente.png');
const imgMenuContato = require('./../../imgs/menu_contato.png');
const imgMenuEmpresa = require('./../../imgs/menu_empresa.png');
const imgMenuServico = require('./../../imgs/menu_servico.png');

const styles = StyleSheet.create({
    viewBase: {
        backgroundColor: 'yellow'
    },
    viewLogo: {
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10
    },
    viewMenu: {
        // justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderColor: 'black'
    },
    viewMenuInto: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
        backgroundColor: 'red',
        height: 50,
        width: 50,
        padding: 10,
        margin: 30,
        borderWidth: 1,
        borderColor: 'black'
    },
    stImage: {
        height: 50,
        width: 50,
        margin: 10,
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default class Home extends Component {
    render() {
        return (
            <View style={styles.viewBase}>
                <StatusBar backgroundColor='#CCC' />
                <BarraNavegacao />
                <View style={styles.viewLogo}>
                    <Image source={imgLogo} />
                </View>
                <View key={'vMenu'} source={styles.viewMenu}>
                    <View key={'v1'} source={styles.viewMenuInto}>
                        <Image 
                            key={'imgMenuCliente'} style={styles.stImage} source={imgMenuCliente} 
                        />
                        <Image 
                            key={'imgMenuContato'} style={styles.stImage} source={imgMenuContato} 
                        />
                    </View>
                    <View key={'v2'} source={styles.viewMenuInto}>
                        <Image 
                            key={'imgMenuEmpresa'} style={styles.stImage} source={imgMenuEmpresa} 
                        />
                        <Image 
                            key={'imgMenuServico'} style={styles.stImage} source={imgMenuServico} 
                        />
                    </View>
                </View>
            </View>
        );
    }
}
