import { cssVar } from '@toeverything/theme';
import { style } from '@vanilla-extract/css';

export const numberPropertyValueInput = style({
  border: `1px solid transparent`,
  padding: `6px`,
  paddingLeft: '5px',
  width: '100%',
  height: '100%',
  borderRadius: '4px',
  fontSize: cssVar('fontSm'),
  ':focus': {
    border: `1px solid ${cssVar('blue700')}`,
    boxShadow: cssVar('activeShadow'),
  },
  selectors: {
    '&::placeholder': {
      color: cssVar('placeholderColor'),
    },
  },
});

export const numberPropertyValueContainer = style({
  padding: '0px',
});