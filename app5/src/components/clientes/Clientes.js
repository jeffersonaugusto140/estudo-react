import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import BarraNavegacao from './../common/BarraNavegacao';

const imgDetalheCliente = require('./../../imgs/detalhe_cliente.png');
const imgCliente1 = require('./../../imgs/cliente1.png');
const imgCliente2 = require('./../../imgs/cliente2.png');

const styles = StyleSheet.create({
    detalheCliente: {
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10
    },
    clientes: {
        marginBottom: 10,
        marginLeft: 10
    },
    nossosClientes: {
        fontSize: 26,
        color: 'orange',
        marginLeft: 5
    },
    txtClientes: {
        marginLeft: 5
    }
});

export default class Home extends Component {
    render() {
        return (
            <View>
                <BarraNavegacao backgroundColor='orange' />
                <View style={styles.detalheCliente}>
                    <Image source={imgDetalheCliente} />
                    <Text style={styles.nossosClientes}>Nossos clientes</Text>
                </View>
                <View style={styles.clientes}>
                    <Image source={imgCliente1} />
                    <Text style={styles.txtClientes}>Lorem ipsum tiap sumos</Text>
                </View>
                <View style={styles.clientes}>
                    <Image source={imgCliente2} />
                    <Text style={styles.txtClientes}>Lorem ipsum tiap sumos</Text>
                </View>
            </View>
        );
    }
}
