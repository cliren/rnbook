import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {fontSize: 20},
  row: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 20,
  },
});

const Button = ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.row}>
    <Text style={styles.text}>
      Test Button
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Button;
