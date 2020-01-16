import React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {navigate} from 'src/services/navigation';
import styles from './styles';

const Welcome = props => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text>Welcome</Text>
      <TouchableOpacity onPress={() => navigate('User')}>
        <Text>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
