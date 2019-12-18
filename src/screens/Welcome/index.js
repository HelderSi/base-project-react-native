import React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';

import styles from './styles';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text>Welcome</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('FunctionalComponent')}>
        <Text>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
