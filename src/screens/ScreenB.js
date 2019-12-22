import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import Header from 'src/components/general/Header';

export default class ScrennB extends React.Component {
  state = {
    name: 'Screen B',
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
        <Header title={this.state.name} />
      </>
    );
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillMount() {}
}
