const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    orange: '#ff7d1a',
    paleOrange: '#ffede0',
    veryDarkBlue: '#1d2025',
    darkGrayishBlue: '#68707d',
    grayishBlue: '#b6bcc8',
    veryLightGray:    '#E8E8E8',
    lightGrayishBlue: '#f7f8fd',
    wine: '#471D1E',
  },
  fontFamily: {
    kumbh: 'Kumbh Sans, sans-serif',
  },
  fontSize: {
    textBase: '1rem',
  },
  fontWeight: {
    medium: '400',
    bold: '700',
  },
  responsive: {
    desktop: '1440px',
    mobile: '375px',
  }
}

export default theme;


/*
  Exemplo de uso nos componentes que vão dentro do `ThemeProvider` no app:
  `font-family: ${({ theme }) => theme.fontFamily.kumbh};`
  Propriedade de estilização, seguida da interpolação e desestruturação do `theme` acessando o objeto
`fontFamily` e pegando a variável `kumbh`.

*/