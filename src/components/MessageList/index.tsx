import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Message } from '../Message';
import { styles } from './styles';

export function MessageList() {
  const message = {
    id: '1',
    text: 'Messagem de teste',
    user: {
      name: 'Felipe Resende',
      avatar_url: 'https://github.com/Feeeliperesende.png',
    },
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
      showsVerticalScrollIndicator={false}
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}
