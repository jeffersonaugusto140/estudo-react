import React, { Component } from 'react';
import { AppRegistry, Text, Button, View, StyleSheet } from 'react-native';
import Top from './components/jokenpo/top';
import Icone from './components/jokenpo/icone';

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

    styles = StyleSheet.create({
        middle: {
            justifyContent: 'center',
            flexDirection: 'row'
        },
        resultado: {
            fontSize: 18,
            color: 'red',
            fontWeight: 'bold'
        },
        btn: {
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            flexDirection: 'row',
            marginBottom: 20,
            marginTop: 10
        }
    })

    jokenpo(value) {
        const cpu = this.state.values[Math.floor(Math.random() * 3)];
        let res = '';

        const userWin = (user, computer, values) => {
            const pedra = values[0];
            const papel = values[1];
            const tesoura = values[2];

            const ret = (user === pedra && computer === tesoura) ||
                (user === papel && computer === pedra) ||
                (user === tesoura && computer === papel);

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
                <Top />
                <View style={this.styles.btn}>
                    <Button
                        title={this.state.values[0]} 
                        onPress={() => { this.jokenpo(this.state.values[0]); }}
                    />
                    <Button 
                        title={this.state.values[1]} 
                        onPress={() => { this.jokenpo(this.state.values[1]); }}
                    />
                    <Button 
                        title={this.state.values[2]} 
                        onPress={() => { this.jokenpo(this.state.values[2]); }}
                    />
                </View>
                <View>
                    <View style={this.styles.middle}>
                        <Text style={this.styles.resultado}> {this.state.resultado} </Text>
                    </View>
                    <View style={this.styles.middle}>
                        <Icone 
                            escolha={this.state.userValue} player="Usuário" 
                            values={this.state.values} 
                        />
                    </View>
                    <View style={this.styles.middle}>
                        <Icone 
                            escolha={this.state.cpuValue} player="CPU" 
                            values={this.state.values} 
                        />
                    </View>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('app1', () => App1);
