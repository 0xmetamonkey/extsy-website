import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black',
        fontFamily: "'Clash Display', sans-serif",
      }
    }
  },
  fonts: {
    heading: "'Clash Display', sans-serif",
    body: "'Clash Display', sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: '0',
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
      },
      variants: {
        solid: {
          bg: 'accent.pink',
          color: 'white',
          border: '2px solid black',
          boxShadow: '4px 4px 0 0 #000',
          _hover: {
            bg: 'accent.pink',
            transform: 'translate(-2px, -2px)',
            boxShadow: '6px 6px 0 0 #000',
          },
          _active: {
            transform: 'translate(0px, 0px)',
            boxShadow: '2px 2px 0 0 #000',
          },
        },
        outline: {
          bg: 'white',
          border: '2px solid black',
          boxShadow: '4px 4px 0 0 #000',
          _hover: {
            bg: 'white',
            transform: 'translate(-2px, -2px)',
            boxShadow: '6px 6px 0 0 #000',
          },
          _active: {
            transform: 'translate(0px, 0px)',
            boxShadow: '2px 2px 0 0 #000',
          },
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
        fontWeight: 'black',
        letterSpacing: '-0.02em',
      }
    },
    Box: {
      variants: {
        'neo-brutal': {
          bg: 'white',
          p: 8,
          border: '2px solid black',
          boxShadow: '4px 4px 0 0 #000',
          transition: 'all 0.2s',
          _hover: {
            transform: 'translate(-4px, -4px)',
            boxShadow: '8px 8px 0 0 #000',
          },
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
      pink: '#FF69B4',
      yellow: '#FFD700',
      blue: '#4169E1',
      green: '#00FF66'
    }
  }
});

export default theme;
