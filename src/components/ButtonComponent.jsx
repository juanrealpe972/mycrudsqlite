import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles/style';

const ButtonComponent = ({title, onPress}) => {

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
