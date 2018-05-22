
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import Item from './Item';

export default class ListaItens extends Component {
    componentWillMount() {
        const uri = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';
        axios.get(uri)
            .then((response) => {
                console.log('Aeeewwwwwwwwwwww....');
                console.log(response);
            })
            .catch(() => { console.log('error.'); });
    }

    render() {
        return (
            <View>
                <Item />
                <Item />
                <Item />
            </View>
        );
    }
}
