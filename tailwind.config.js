/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        'magenta': {
          '50': '#fef1fb',
          '100': '#fee5f9',
          '200': '#ffcbf5',
          '300': '#ffa1ea',
          '400': '#ff6fdb',
          '500': '#fa3ac5',
          '600': '#ea18a5',
          '700': '#cc0a87',
          '800': '#a80c6e',
          '900': '#8c0f5d',
          '950': '#560136',
        },
        'blueish': {
          '50': '#ebf0ff',
          '100': '#dae3ff',
          '200': '#bccbff',
          '300': '#94a7ff',
          '400': '#6a76ff',
          '500': '#4848ff',
          '600': '#3927ff',
          '700': '#402ee8',
          '800': '#271ab9',
          '900': '#241e91',
          '950': '#171254',
        },
        'vulcan': {
          '50': '#f5f5fa',
          '100': '#eaeaf4',
          '200': '#d1d2e6',
          '300': '#a8abd1',
          '400': '#797fb7',
          '500': '#585e9f',
          '600': '#444885',
          '700': '#383a6c',
          '800': '#32345a',
          '900': '#2d2e4d',
          '950': '#11111d',
        },
      },
      fontFamily: {
        display: ['scale-variable',
          {
            fontVariationSettings: `"wdth" 110, "wght" 700`,
          },
          'Inter',
          'sans-serif',
        ],
        mono: ['input-mono',
          'Georgia',
          'serif',
        ],
      },
      typography: ({ theme }) => ({
        dabble: {
          css: {
            '--tw-prose-body': theme('colors.vulcan[700]'),
            '--tw-prose-headings': theme('colors.blueish[400]'),
            '--tw-prose-lead': theme('colors.vulcan[700]'),
            '--tw-prose-links': theme('colors.magenta[600]'),
            '--tw-prose-bold': theme('colors.vulcan[900]'),
            '--tw-prose-counters': theme('colors.vulcan[700]'),
            '--tw-prose-bullets': theme('colors.vulcan[400]'),
            '--tw-prose-hr': theme('colors.vulcan[300]'),
            '--tw-prose-quotes': theme('colors.vulcan[900]'),
            '--tw-prose-quote-borders': theme('colors.vulcan[300]'),
            '--tw-prose-captions': theme('colors.vulcan[700]'),
            '--tw-prose-code': theme('colors.vulcan[900]'),
            '--tw-prose-pre-code': theme('colors.vulcan[100]'),
            '--tw-prose-pre-bg': theme('colors.vulcan[900]'),
            '--tw-prose-th-borders': theme('colors.vulcan[300]'),
            '--tw-prose-td-borders': theme('colors.vulcan[200]'),
            '--tw-prose-invert-body': theme('colors.vulcan[200]'),
            '--tw-prose-invert-headings': theme('colors.blueish[200]'),
            '--tw-prose-invert-lead': theme('colors.vulcan[300]'),
            '--tw-prose-invert-links': theme('colors.magenta[400]'),
            '--tw-prose-invert-bold': theme('colors.vulcan[200]'),
            '--tw-prose-invert-counters': theme('colors.vulcan[400]'),
            '--tw-prose-invert-bullets': theme('colors.vulcan[600]'),
            '--tw-prose-invert-hr': theme('colors.vulcan[700]'),
            '--tw-prose-invert-quotes': theme('colors.vulcan[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.vulcan[700]'),
            '--tw-prose-invert-captions': theme('colors.vulcan[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.vulcan[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.vulcan[600]'),
            '--tw-prose-invert-td-borders': theme('colors.vulcan[700]'),
          },
        },
      }),
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

