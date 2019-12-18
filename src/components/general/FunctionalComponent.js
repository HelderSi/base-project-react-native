import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, Text, StatusBar, TouchableOpacity} from 'react-native';
import Header from 'src/components/general/Header';

import Icon from 'react-native-vector-icons/FontAwesome';

const FunctionalComponent = ({title, navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header title={title} />
      <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Icon name="chevron-left" size={16} />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

FunctionalComponent.propTypes = {
  title: PropTypes.string,
};

FunctionalComponent.defaultProps = {
  title: 'Componente',
};

export default FunctionalComponent;
