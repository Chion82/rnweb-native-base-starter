import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

export const Touchable = props => (
  <TouchableHighlight
    style={[styles.wrapper, props.styles]}
    {...props}>
    <View>
      {props.children}
    </View>
  </TouchableHighlight>
);

Touchable.propTypes = {
  styles : React.PropTypes.any,
  children : React.PropTypes.any
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'lightcoral',
    padding: 20,
    borderRadius: 3,
  },
  text: {
    color: '#FFF',
  },
});
