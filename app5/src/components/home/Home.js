import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

import BarraNavegacao from './../common/BarraNavegacao';

const imgLogo = require('./../../imgs/logo.png');
const imgMenuCliente = require('./../../imgs/menu_cliente.png');
const imgMenuContato = require('./../../imgs/menu_contato.png');
const imgMenuEmpresa = require('./../../imgs/menu_empresa.png');
const imgMenuServico = require('./../../imgs/menu_servico.png');

const styles = StyleSheet.create({
    viewLogo: {
        alignItems: 'center'
    },
    viewMenu: {
        alignItems: 'center'
    },
    viewMenuInto: {
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    stImg: {
        margin: 15
    }
});

export default class Home extends Component {
    render() {
        return (
            <View>
                <BarraNavegacao backgroundColor='#CCC' />
                <View style={styles.viewLogo}>
                    <Image source={imgLogo} />
                </View>
                <View style={styles.viewMenu}>
                    <View style={styles.viewMenuInto}>
                        <Image style={styles.stImg} source={imgMenuCliente} />
                        <Image style={styles.stImg} source={imgMenuContato} />
                    </View>
                    <View style={styles.viewMenuInto}>
                        <Image style={styles.stImg} source={imgMenuEmpresa} />
                        <Image style={styles.stImg} source={imgMenuServico} />
                    </View>
                </View>
            </View>
        );
    }
}
