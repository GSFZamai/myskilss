import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({title, ...rest} : ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            {...rest}
        >
            <Text
                style={styles.buttonText}
            >
                {title.toUpperCase()}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#A370F7',
      padding: 15,
      alignItems: 'center',
      borderRadius: 7,
      marginTop: 15
    },
    buttonText: {
      fontWeight: 'bold',
      color: '#FFF'
    },
  });