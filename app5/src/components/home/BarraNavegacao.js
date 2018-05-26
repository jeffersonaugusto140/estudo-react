import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
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
            <View style={styles.viewContainer}>
                <Text style={styles.txtAtmConsultoria}>
                    ATM Consultoria
                </Text>
            </View>
        );
    }
}
