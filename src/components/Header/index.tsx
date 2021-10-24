import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { UserPhoto } from '../UserPhoto';
import LogoSvg from '../../assets/logo.svg';

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />
      <UserPhoto imageUri="https://github.com/Feeeliperesende.png" />
      <TouchableOpacity onPress={() => alert('sair')}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
