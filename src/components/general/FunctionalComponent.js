import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, Text, StatusBar} from 'react-native';

const FunctionalComponent = ({title}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>{title}</Text>
      </SafeAreaView>
    </>
  );
};

FunctionalComponent.propTypes = {
  title: PropTypes.string,
};

FunctionalComponent.defaultProps = {
  title: 'Iniciar o Cardápio Digital',
};

export default FunctionalComponent;
