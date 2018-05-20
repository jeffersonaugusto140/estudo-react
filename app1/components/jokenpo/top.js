import React, { Component } from 'react';
import { Image, View } from 'react-native';

const imgJokenpo = require('./../../img/jokenpo.png');

class Top extends Component {
    render() {
        return (
            <View>
                <Image source={imgJokenpo} />
            </View>
        );
    }
}

export default Top;
