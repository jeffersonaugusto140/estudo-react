import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

class CustomCmp extends Component {
    render() {
        return (
            <View>
                <Text>
                    {this.props.p1}
            </Text>
                <Text>
                    {this.props.p2}
            </Text>
            </View>
        );
    }
}

class App1 extends Component {
    render() {
        return (
            <CustomCmp p1='AAAA' p2='BBBB'></CustomCmp>
        )
    }
}

AppRegistry.registerComponent('app1', () => App1);
