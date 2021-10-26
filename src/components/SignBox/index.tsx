import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ColorValue,
  TouchableOpacityProps,
} from 'react-native';
import { COLORS } from '../../theme';
import { ButtonLogin } from '../Button';
import { styles } from './styles';

export function SignInBox() {
  return (
    <View>
      <ButtonLogin
        title="Entrar  com o GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
      />
    </View>
  );
}
