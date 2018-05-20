import React, { Component } from 'react';
import { AppRegistry, Text, Alert, Button, View, StyleSheet } from 'react-native';

class CustomCmp extends Component {
    render() {
        return (
            <View>
                <Text>
                    {this.props.p1}
                </Text>
            </View>
        );
    }
}

class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userValue: '',
            cpuValue: '',
            resultado: '',
            values: ['Pedra', 'Papel', 'Tesoura']
        };
    }

    styleBtn = {
        btn: {
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            flexDirection: 'row',
            marginBottom: 20
        }
    }

    jokenpo(value) {
        let cpu = this.state.values[Math.floor(Math.random() * 3)];
        let res = '';

        userWin = (user, cpu, values) => {
            let pedra = values[0];
            let papel = values[1];
            let tesoura = values[2];

            ret = (user === pedra && cpu === tesoura) ||
                (user === papel && cpu === pedra) ||
                (user === tesoura && cpu === papel);

            return ret;

        };

        if (cpu === value) {
            res = 'Empate';
        } else if (userWin(value, cpu, this.state.values)) {
            res = 'Você ganhou';
        } else {
            res = 'Você perdeu... kkkkkk...';
        }

        this.setState({
            userValue: value,
            cpuValue: cpu,
            resultado: res,
            values: this.state.values
        });
    }

    render() {
        return (
            <View>
                <View style={this.styleBtn.btn}>
                    <Button title={this.state.values[0]} onPress={() => { this.jokenpo(this.state.values[0]); }} />
                    <Button title={this.state.values[1]} onPress={() => { this.jokenpo(this.state.values[1]); }} />
                    <Button title={this.state.values[2]} onPress={() => { this.jokenpo(this.state.values[2]); }} />
                </View>
                <Text> User value: {this.state.userValue} </Text>
                <Text> CPU value: {this.state.cpuValue} </Text>
                <Text> Resultado: {this.state.resultado} </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('app1', () => App1);
