import React from 'react';
import { View, Text } from 'react-native';
import { UserPhoto } from '../UserPhoto';
import { styles } from './styles';
export function Message() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Texto da mensagem</Text>
      <View style={styles.footer}>
        <UserPhoto imageUri="" sizes="SMALL" />
        <Text style={styles.username}>Nome do user</Text>
      </View>
    </View>
  );
}
