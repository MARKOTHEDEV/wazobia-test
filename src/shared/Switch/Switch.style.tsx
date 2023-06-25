
import * as Switch from '@radix-ui/react-switch';
import { styled } from '../../../stitches.config';





export const SwitchRoot = styled(Switch.Root, {
  all: 'unset',
  width: 35,
  height: 20,
  backgroundColor: '#00000029',
  borderRadius: '9999px',
  position: 'relative',
  // boxShadow: `0 2px 10px black`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  // '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { 
    backgroundColor: '#0A7227'
 },
});

export const SwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  'cursor':'pointer',
  width: 15,
  height: 15,
  backgroundColor: 'white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px black`,
  transition: 'transform 100ms',
  transform: 'translateX(2px) translateY(-1px)',
  willChange: 'transform',
  '&[data-state="checked"]': { 
    transform: 'translateX(20px) translateY(-1px)'

},
});

export const Flex = styled('div', {
   display: 'flex',
   'gap':'30'
  });
export const Label = styled('label', {
  color: '#002B2B',
  fontSize: 15,
  lineHeight: 1,
  'margin':'0 10px'
});
