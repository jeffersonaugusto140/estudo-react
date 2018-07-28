import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';

import Home from './src/components/home/Home';
import Clientes from './src/components/clientes/Clientes';

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'home' }}
        renderScene={(route, navigator) => {
          if (route.id === 'clientes') {
            return (<Clientes navigator={navigator} />);
          }

          return (<Home navigator={navigator} />);
        }}
      />
    );
  }
}
