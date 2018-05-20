import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

const imgPedra = require('./../../img/pedra.png');
const imgPapel = require('./../../img/papel.png');
const imgTesoura = require('./../../img/tesoura.png');

class Icone extends Component {
    styles = {
        image: {
            justifyContent: 'center',
            marginTop: 20,
            alignItems: 'center',
            
        }
    }

    render() {
        switch (this.props.escolha) {
            case this.props.values[0]:
                return (
                    <View style={this.styles.image}>
                        <Text>{this.props.player}</Text>
                        <Image source={imgPedra} />
                    </View>
                );
            case this.props.values[1]:
                return (
                    <View style={this.styles.image}>
                        <Text>{this.props.player}</Text>
                        <Image source={imgPapel} />
                    </View>
                );
            case this.props.values[2]:
                return (
                    <View style={this.styles.image}>
                        <Text>{this.props.player}</Text>
                        <Image source={imgTesoura} />
                    </View>
                );
            default:
                return false;
        }

    }
}

export default Icone;