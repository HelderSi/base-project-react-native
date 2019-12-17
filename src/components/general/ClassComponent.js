import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

export default class ClassComponent extends React.Component {
  state = {
    name: 'Statefull component',
  };

  componentDidMount() {}

  static getDerivedStateFromProps(nextProps, prevState) {
    // metodo static nao tem acesso ao this
    // executado antes do componentDidMount()
    // executado antes de cada atualizacao
    // ideal para atualizar o state com o valor da props recebida
    // return { name: nextProps.myprops}
  }

  shouldComponentUpdate(nextProps, nextState) {
    // executado a cada atualizacao
    // decide se o componente será atualizado
    return true;
  }

  render() {
    return (
      <>
        <Text>{this.state.name}</Text>
      </>
    );
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillMount() {}
}
