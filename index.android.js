import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import Topo from './src/components/topo';

import Icone from './src/components/icone';

export default class app3Udemy extends Component {

  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    };
  }

  jokenpo(escolhaUsuario) {

    //gera numero aleatorio( 0, 1, 2)
    let numAleatorio = Math.floor(Math.random() * 3);

    let escolhaComputador = '';

    switch (numAleatorio) {
      case 0: escolhaComputador = 'pedra';
        break;

      case 1: escolhaComputador = 'papel';
        break;

      case 2: escolhaComputador = 'tesoura';
        break;
    }

    var resultado = '';

    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'EMPATE';
      }

      if (escolhaUsuario === 'papel') {
        resultado = 'Você Ganhou!!';
      }

      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você Perdeu!!';
      }
    }

    if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Você Perdeu!!';
      }

      if (escolhaUsuario === 'papel') {
        resultado = 'EMPATE!';
      }

      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você Ganhou!!';
      }
    }

    if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Você Ganhou!!';
      }

      if (escolhaUsuario === 'papel') {
        resultado = 'Você Perdeu!!';
      }

      if (escolhaUsuario === 'tesoura') {
        resultado = 'EMPATE!';
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador,
      resultado: resultado
    });
  }


  render() {
    return (
      <View>

        <Topo />

        <View style={styles.painelAcoes}>

          <View style={styles.btnEscolha}>
            <Button title='pedra' onPress={() => { this.jokenpo('pedra') }} />
          </View>

          <View>
            <Button title='papel' onPress={() => { this.jokenpo('papel') }} />
          </View>

          <View>
            <Button title='tesoura' onPress={() => { this.jokenpo('tesoura') }} />
          </View>

        </View>


        <View style={styles.campo}>

          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>

          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  campo: {
    alignItems: 'center',
    marginTop: 10,
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 50
  }
});

AppRegistry.registerComponent('app3Udemy', () => app3Udemy);
