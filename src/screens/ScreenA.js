import React from 'react';
import PropTypes from 'prop-types';
import {View, SafeAreaView, Text, StatusBar, Button} from 'react-native';
import {connect} from 'react-redux';
import Header from 'src/components/general/Header';

import {add, remove} from 'src/store/ducks/list';
import {bindActionCreators} from 'redux';

// import Icon from 'react-native-vector-icons/FontAwesome';

const ScreenA = ({title, list, actions}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header title={title} />
      <SafeAreaView>
        {list.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{item.name}</Text>
            <Button title={'X'} onPress={() => actions.remove(index)} />
          </View>
        ))}
        <Button title={'Add'} onPress={() => actions.add({name: 'Teste'})} />
      </SafeAreaView>
    </>
  );
};

ScreenA.propTypes = {
  title: PropTypes.string,
};

ScreenA.defaultProps = {
  title: 'Screen A',
};

const mapStateToProps = state => ({
  list: state.list.list,
});

// const mapDispatchToProps = dispatch => ({
//   add: () => dispatch(ActionsList.add()),
//   remove: id => dispatch(ActionsList.remove(id)),
// });
// use this instead:
// https://redux.js.org/api/bindactioncreators
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({add, remove}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScreenA);
