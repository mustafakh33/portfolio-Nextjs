import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#34D399', // emerald-400
          500: '#10B981', // emerald-500
          600: '#059669', // emerald-600
        },
        secondary: {
          300: '#5EEAD4', // teal-300
          400: '#2DD4BF', // teal-400
          500: '#14B8A6', // teal-500
        },
        dark: {
          800: '#1F2937', // gray-800
          900: '#111827', // gray-900
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'primary-gradient': 'linear-gradient(to right, #10B981, #2DD4BF)',
      },
    },
  },
  plugins: [],
}
export default config