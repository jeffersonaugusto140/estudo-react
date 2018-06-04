import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

const styles = StyleSheet.create({
    viewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCC',
        padding: 10,
        height: 60
    },
    txtAtmConsultoria: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default class BarraNavegacao extends Component {
    
    render() {
        return (
            <View>
                <StatusBar backgroundColor={this.props.backgroundColor} />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: this.props.backgroundColor,
                        padding: 10,
                        height: 60
                    }}
                >
                    <Text style={styles.txtAtmConsultoria}>
                        ATM Consultoria
                    </Text>
                </View>
            </View>
        );
    }
}
