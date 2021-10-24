import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Message } from '../Message';
import { styles } from './styles';

export function MessageList() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Message />
    </ScrollView>
  );
}
