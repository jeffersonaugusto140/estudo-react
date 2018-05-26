import React, { Component } from 'react';
import {
  View,
  StatusBar
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

export default class Home extends Component {
    render() {
        return (
            <View>
                <StatusBar 
                    backgroundColor='#CCC'
                />
                <BarraNavegacao />
            </View>
        );
    }
}
