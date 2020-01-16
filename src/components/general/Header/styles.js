import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {colors, metrics} from 'src/styles';

const styles = StyleSheet.create({
  container: {
    height: 54 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    paddingHorizontal: metrics.basePadding,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
    flex: 1,
  },

  button: {
    color: colors.darker,
    flex: 1,
    alignItems: 'center',
  },
});

export default styles;
