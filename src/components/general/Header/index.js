import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

import styles from './styles';

const Header = ({title, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Welcome')}>
        <Text>{`<`}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View />
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withNavigation(Header);
