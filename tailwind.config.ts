import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'mainPurpleColor': '#883EDD',
        'secondaryCyanColor': '#00CCFF',
        'linePurpleColor': '#D4AFFF',
      },
      textColor: {
        'redAlert': '#EB5353',
      },
      width : {
        'mainPageText': '29.063rem',

        /*Tamanho dos blocos da MainPage(main) em ordem de aparição*/
        'mp1': '71.25rem', //1140 px
        'mp2': '26.875rem', //430 px
        'mp3': '42.813rem', //685.008 px

        /*Tamanho dos blocos da MainPage(footer) em ordem de aparição*/
        'mpf1': '24.125rem', //386 px
        'mpf-2': '45.563rem', //729.008 px
      },
    },
  },
  plugins: [],
}
export default config
