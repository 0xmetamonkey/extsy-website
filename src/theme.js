import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.100',
      }
    }
  },
  fonts: {
    heading: '"Space Grotesk", sans-serif',
    body: '"Space Grotesk", sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '4px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        _hover: {
          transform: 'translate(-2px, -2px)',
          boxShadow: '4px 4px 0 0 #000',
        }
      },
      variants: {
        solid: {
          bg: '#000',
          color: 'white',
          border: '2px solid #000',
          boxShadow: '4px 4px 0 0 #000',
          _hover: {
            bg: '#000',
          }
        },
        outline: {
          bg: 'white',
          border: '2px solid #000',
          boxShadow: '4px 4px 0 0 #000',
          _hover: {
            bg: 'gray.100',
          }
        }
      }
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: '4px',
          border: '2px solid #000',
          boxShadow: '8px 8px 0 0 #000',
          bg: 'white',
          _hover: {
            transform: 'translate(-4px, -4px)',
            boxShadow: '12px 12px 0 0 #000',
          }
        }
      }
    },
    Heading: {
      baseStyle: {
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }
    },
    Box: {
      variants: {
        'neo-brutal': {
          border: '2px solid #000',
          borderRadius: '4px',
          boxShadow: '4px 4px 0 0 #000',
          bg: 'white',
          p: 4,
        }
      }
    }
  },
  colors: {
    brand: {
      50: '#FFE5F0',
      100: '#FFB8D6',
      200: '#FF8ABD',
      300: '#FF5CA3',
      400: '#FF2E8A',
      500: '#FF0071',
      600: '#CC005A',
      700: '#990044',
      800: '#66002D',
      900: '#330017',
    },
    accent: {
      yellow: '#FFD600',
      blue: '#00F0FF',
      pink: '#FF00FF',
      green: '#00FF66'
    }
  }
});

export default theme;
