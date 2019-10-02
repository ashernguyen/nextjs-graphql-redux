import { array } from '@storybook/addon-knobs';

export const boxProps = () => ({
  // space
  mx: array('margin-left & margin-right', [0]),
  my: array('margin-top & margin-bottom', [0]),
  m: array('margin', [0]),
  px: array('padding-left & padding-right', [0]),
  py: array('padding-top & padding-bottom', [0]),
  p: array('padding', [3]),
  // color
  color: array('color', ['white']),
  // layout
  width: array('width', [1]),
  maxWidth: array('max-width', ['auto']),
  minWidth: array('min-width', ['auto']),
  height: array('height', ['inherit']),
  maxHeight: array('max-height', ['auto']),
  minHeight: array('min-height', ['auto']),
  display: array('display', ['block']),
  // Typography
  fontSize: array('font-size', [4]),
  fontStyle: array('font-style', ['normal']),
  // Borders
  borderWidth: array('border-width', [1]),
  borderColor: array('border-color', ['transparent']),
  borderRadius: array('border-radius', [0]),
  borderStyle: array('border-style', ['solid']),
  // Background
  bg: array('background-color', ['blue.3']),
  backgroundImage: array('background-image', ['none']),
  backgroundSize: array('background-size', ['auto']),
  backgroundPosition: array('background-position', ['auto']),
  backgroundRepeat: array('background-repeat', ['none'])
});
