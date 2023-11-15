module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs':'450px',
        // => @media (min-height: 800px) { ... }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px' ,
          lg: '5%'

        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
