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
      },
      textColor: {
        'redAlert': '#EB5353',
      },
      width : {
        'mainPageText': '29.063rem',

        /*Tamanho dos blocos da MainPage(main) em ordem de aparição*/
        'mp1': '71.25rem',
        'mp2': '26.875rem',
        'mp3': '42.813rem',

        /*Tamanho dos blocos da MainPage(footer) em ordem de aparição*/
        'mpf1': '24.125rem',
        'mpf-2': '45.563rem',
      },
      height: {
        'mainPageFooter': '33.625rem',
      },
    },
  },
  plugins: [],
}
export default config
