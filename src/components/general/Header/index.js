import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import * as ActionsList from 'src/store/actions/list';
import {bindActionCreators} from 'redux';
import {navigate} from 'src/services/navigation';
import styles from './styles';

const Header = ({title, navigation, actions}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Welcome')}>
        <Text>{`<`}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => actions.fetchItem('heldersi')}>
        <Text>Atualizar</Text>
      </TouchableOpacity>
      <View />
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionsList, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
