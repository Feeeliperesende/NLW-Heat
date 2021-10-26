import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ColorValue,
  TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
};

export function ButtonLogin({ title, color, backgroundColor }: Props) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]}>
      <Text style={[styles.title, { color }]}> {title}</Text>
    </TouchableOpacity>
  );
}
