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
import { useAuth } from '../../hooks/auth';

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth();
  return (
    <View style={styles.container}>
      <ButtonLogin
        title="Entrar  com o GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </View>
  );
}
