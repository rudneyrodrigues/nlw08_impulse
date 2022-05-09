import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand,
    
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16 + getBottomSpace(),
    right: 16 + getBottomSpace(),
  },
  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16,
  },
  indicator: {
    backgroundColor: theme.colors.stroke,
    width: 56,
  },
});