import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({skill, ...rest}: SkillCardProps) {
    return (
        <TouchableOpacity 
          style={styles.skillButton}
          {...rest}
        >
          <Text
            style={styles.skillButtontext}
          >
            {skill}
          </Text>
        </TouchableOpacity>
      )
}

const styles = StyleSheet.create({
    skillButton: {
      backgroundColor: '#1F1E25',
      padding: 15,
      borderRadius: 50,
      alignItems: 'center',
      marginBottom: 15
    },
    skillButtontext: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 20
    }
  });