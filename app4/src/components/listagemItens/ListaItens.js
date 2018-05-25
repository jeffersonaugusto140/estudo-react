import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import Item from './Item';

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#DDD'
    }
});

export default class ListaItens extends Component {
    
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentWillMount() {
        const uri = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';
        axios.get(uri)
            .then((response) => {
                console.log(response);
                this.setState({ data: response.data });
            })
            .catch(() => { console.log('error.'); });
    }

    render() {
        return (
            <ScrollView style={styles.scrollView}>
                { this.state.data.map(d => (<Item key={d.titulo} itemProps={d} />)) }
            </ScrollView>
        );
    }
}
