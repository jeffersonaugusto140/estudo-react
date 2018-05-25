import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    viewContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        margin: 5,
        borderWidth: 0.5,
        borderColor: '#999',
        padding: 10,
        backgroundColor: 'white'
    },
    viewImage: {
        fontSize: 16
    },
    viewItems: {
        marginLeft: 20,
        flex: 1
    },
    stImage: {
        height: 100,
        width: 100
    },
    stTitulo: {
        fontSize: 18,
        color: 'blue',
        fontWeight: 'bold',
        marginBottom: 10
    },
    stValor: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default class Item extends Component {

    render() {
        const { foto, titulo, valor, local_anuncio, data_publicacao } = this.props.itemProps;
        const { viewContainer, viewItems, viewImage, stImage, stTitulo, stValor } = styles;
        console.log('viewContainer');
        console.log(viewContainer);
        return (
            <View style={viewContainer}>
                <View style={viewImage}>
                    <Image style={stImage} source={{ uri: foto }} />
                </View>
                <View style={viewItems}>
                    <Text style={stTitulo}>{titulo}</Text>
                    <Text style={stValor}>R$ {valor}</Text>
                    <Text>Local: {local_anuncio}</Text>
                    <Text>Publicado no dia: {data_publicacao}</Text>
                </View>
            </View>
        );
    }
}
