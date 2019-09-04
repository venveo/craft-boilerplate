// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    // prefix: '',
    // important: false,
    // separator: ':',
    theme: {
      /*
      |-----------------------------------------------------------------------------
      | Fonts                                    https://tailwindcss.com/docs/fonts
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your project's font stack, or font families.
      | Keep in mind that Tailwind doesn't actually load any fonts for you.
      | If you're using custom fonts you'll need to import them prior to
      | defining them here.
      |
      | By default we provide a native font stack that works remarkably well on
      | any device or OS you're using, since it just uses the default fonts
      | provided by the platform.
      |
      | Class name: .font-{name}
      |
      */

      fontFamily: {
          'lato': [
            'Lato',
            'Arial',
            'sans-serif'
          ],
          'roboto': [
            'Roboto',
            'sans-serif'
          ],
          'sans': [
            'system-ui',
            'BlinkMacSystemFont',
            '-apple-system',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            'sans-serif',
            ],
          'serif': [
            'Constantia',
            'Lucida Bright',
            'Lucidabright',
            'Lucida Serif',
            'Lucida',
            'DejaVu Serif',
            'Bitstream Vera Serif',
            'Liberation Serif',
            'Georgia',
            'serif',
          ],
          'mono': [
            'Menlo',
            'Monaco',
            'Consolas',
            'Liberation Mono',
            'Courier New',
            'monospace',
          ]
      },
      /*
      |-------------------------------------------------------------------------------
      | Colors                        https://tailwindcss.com/docs/customizing-colors
      |-------------------------------------------------------------------------------
      |
      | Inline your colors variable into theme.colors.
      | In v1.0, it's possible to specify that parts of your theme depend on other parts of your theme, and because of that it's no longer necessary to hold your colors in a separate variable.
      | Start by inlining your colors variable directly into theme.colors:
      |
      */

      colors: {
          'primary': 'var(--primary)',
          'secondary': 'var(--secondary)',
          'transparent': 'transparent',
          'black': '#000000',
          'white': '#ffffff',
          'gray': '#636363',
          'error': '#CC0000',
      },
      /*
      |-----------------------------------------------------------------------------
      | Screens                      https://tailwindcss.com/docs/responsive-design
      |-----------------------------------------------------------------------------
      |
      | Screens in Tailwind are translated to CSS media queries. They define the
      | responsive breakpoints for your project. By default Tailwind takes a
      | "mobile first" approach, where each screen size represents a minimum
      | viewport width. Feel free to have as few or as many screens as you
      | want, naming them in whatever way you'd prefer for your project.
      |
      | Tailwind also allows for more complex screen definitions, which can be
      | useful in certain situations. Be sure to see the full responsive
      | documentation for a complete list of options.
      |
      | Class name: .{screen}:{utility}
      |
      */

      screens: {
          'sm': '640px',
          /* 'md-down': {'max': '767px'}, */
          'md': '768px',
          'lg': '1024px',
          /* 'xl-down': {'max': '1133px'}, */
          'xl': '1180px',
      },
      /*
      |-----------------------------------------------------------------------------
      | Text sizes                         https://tailwindcss.com/docs/text-sizing
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your text sizes. Name these in whatever way
      | makes the most sense to you. We use size names by default, but
      | you're welcome to use a numeric scale or even something else
      | entirely.
      |
      | By default Tailwind uses the "rem" unit type for most measurements.
      | This allows you to set a root font size which all other sizes are
      | then based on. That said, you are free to use whatever units you
      | prefer, be it rems, ems, pixels or other.
      |
      | Class name: .text-{size}
      |
      */

      fontSize: {
          'xs': '12px',
          'sm': '14px',
          'base': '16px',
          'lg': '18px',
          'xl': '20px',
          '1xl': '22px',
          '2xl': '24px',
          '3xl': '30px',
          /* '4xl': '36px', */
          /* '5xl': '45px', */
      },


      /*
      |-----------------------------------------------------------------------------
      | Font weights                       https://tailwindcss.com/docs/font-weight
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your font weights. We've provided a list of
      | common font weight names with their respective numeric scale values
      | to get you started. It's unlikely that your project will require
      | all of these, so we recommend removing those you don't need.
      |
      | Class name: .font-{weight}
      |
      */

      fontWeight: {
          'hairline': 100,
          'thin': 200,
          'light': 300,
          'normal': 400,
          'medium': 500,
          'semibold': 600,
          'bold': 700,
          'extrabold': 800,
          'black': 900,
      },


      /*
      |-----------------------------------------------------------------------------
      | Leading (line height)              https://tailwindcss.com/docs/line-height
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your line height values, or as we call
      | them in Tailwind, leadings.
      |
      | Class name: .leading-{size}
      |
      */

      lineHeight: {
          'none': 1,
          'tight': 1.25,
          'snug': 1.375,
          'normal': 1.5,
          'relaxed': 1.625,
          'loose': 2,
      },


      /*
      |-----------------------------------------------------------------------------
      | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your letter spacing values, or as we call
      | them in Tailwind, tracking.
      |
      | Class name: .tracking-{size}
      |
      */

      letterSpacing: {
          'tight': '-0.05em',
          'normal': '0',
          'wide': '0.03em',
      },


      /*
      |-----------------------------------------------------------------------------
      | Text colors                         https://tailwindcss.com/docs/text-color
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your text colors. By default these use the
      | color palette we defined above, however you're welcome to set these
      | independently if that makes sense for your project.
      |
      | Class name: .text-{color}
      |
      */

      textColor: theme => theme('colors'),

      /*
      |-----------------------------------------------------------------------------
      | Spacing
      |-----------------------------------------------------------------------------
      | This is the default values of `Margin`, `Padding` and `Width`
      |
      */

      spacing: {
          px: '1px',
          '0': '0',
          '1': '4px',
          '2': '8px',
          '3': '12px',
          '4': '16px',
          '5': '20px',
          '6': '24px',
          '8': '32px',
          '10': '40px',
          '12': '48px',
          '16': '64px',
          '20': '80px',
          '24': '96px',
          '32': '128px',
          '40': '160px',
          '48': '192px',
          '56': '224px',
          '64': '256px',
          // Negative
          '-px': '-1px',
          '-1': '-4px',
          '-2': '-8px',
          '-3': '-12px',
          '-4': '-16px',
          '-5': '-20px',
          '-6': '-24px',
          '-8': '-32px',
          '-10': '-40px',
          '-12': '-48px',
          '-16': '-64px',
          '-20': '-80px',
          '-24': '-96px',
          '-32': '-128px',
          '-40': '-160px',
          '-48': '-192px',
          '-56': '-224px',
          '-64': '-256px',
      },

      /*
      |-----------------------------------------------------------------------------
      | Background colors             https://tailwindcss.com/docs/background-color
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your background colors. By default these use
      | the color palette we defined above, however you're welcome to set
      | these independently if that makes sense for your project.
      |
      | Class name: .bg-{color}
      |
      */

      backgroundColor: theme => theme('colors'),


      /*
      |-----------------------------------------------------------------------------
      | Background sizes               https://tailwindcss.com/docs/background-size
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your background sizes. We provide some common
      | values that are useful in most projects, but feel free to add other sizes
      | that are specific to your project here as well.
      |
      | Class name: .bg-{size}
      |
      */

      backgroundSize: {
          'auto': 'auto',
          'cover': 'cover',
          'contain': 'contain',
      },


      /*
      |-----------------------------------------------------------------------------
      | Border widths                     https://tailwindcss.com/docs/border-width
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your border widths. Take note that border
      | widths require a special "default" value set as well. This is the
      | width that will be used when you do not specify a border width.
      |
      | Class name: .border{-side?}{-width?}
      |
      */

      borderWidth: {
          default: '1px',
          '10': '10px',
          '5': '5px',
          '2': '2px',
      },


      /*
      |-----------------------------------------------------------------------------
      | Border colors                     https://tailwindcss.com/docs/border-color
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your border colors. By default these use the
      | color palette we defined above, however you're welcome to set these
      | independently if that makes sense for your project.
      |
      | Take note that border colors require a special "default" value set
      | as well. This is the color that will be used when you do not
      | specify a border color.
      |
      | Class name: .border-{color}
      |
      */

      borderColor: theme => ({
          ...theme('colors'),
          default: theme('colors.gray', 'currentColor'),
      }),

      /*
      |-----------------------------------------------------------------------------
      | Border radius                    https://tailwindcss.com/docs/border-radius
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your border radius values. If a `default` radius
      | is provided, it will be made available as the non-suffixed `.rounded`
      | utility.
      |
      | If your scale includes a `0` value to reset already rounded corners, it's
      | a good idea to put it first so other values are able to override it.
      |
      | Class name: .rounded{-side?}{-size?}
      |
      */

      borderRadius: {
          'none': '0',
          'sm': '.125rem',
          default: '.25rem',
          'lg': '.5rem',
          'full': '9999px',
      },

      /*
      |-----------------------------------------------------------------------------
      | Width                                    https://tailwindcss.com/docs/width
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your width utility sizes. These can be
      | percentage based, pixels, rems, or any other units. By default
      | we provide a sensible rem based numeric scale, a percentage
      | based fraction scale, plus some other common use-cases. You
      | can, of course, modify these values as needed.
      |
      |
      | It's also worth mentioning that Tailwind automatically escapes
      | invalid CSS class name characters, which allows you to have
      | awesome classes like .w-2/3.
      |
      | Class name: .w-{size}
      |
      */

      width: theme => ({
          auto: 'auto',
          ...theme('spacing'),
          '1/2': '50%',
          '1/3': '33.333333%',
          '2/3': '66.666667%',
          '1/4': '25%',
          '2/4': '50%',
          '3/4': '75%',
          '1/5': '20%',
          '2/5': '40%',
          '3/5': '60%',
          '4/5': '80%',
          '1/6': '16.666667%',
          '2/6': '33.333333%',
          '3/6': '50%',
          '4/6': '66.666667%',
          '5/6': '83.333333%',
          '1/12': '8.333333%',
          '2/12': '16.666667%',
          '3/12': '25%',
          '4/12': '33.333333%',
          '5/12': '41.666667%',
          '6/12': '50%',
          '7/12': '58.333333%',
          '8/12': '66.666667%',
          '9/12': '75%',
          '10/12': '83.333333%',
          '11/12': '91.666667%',
          full: '100%',
          screen: '100vw',
      }),


      /*
      |-----------------------------------------------------------------------------
      | Height                                  https://tailwindcss.com/docs/height
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your height utility sizes. These can be
      | percentage based, pixels, rems, or any other units. By default
      | we provide a sensible rem based numeric scale plus some other
      | common use-cases. You can, of course, modify these values as
      | needed.
      |
      | Class name: .h-{size}
      |
      */

      height: theme => ({
          auto: 'auto',
          ...theme('spacing'),
          full: '100%',
          screen: '100vh',
      }),


      /*
      |-----------------------------------------------------------------------------
      | Minimum width                        https://tailwindcss.com/docs/min-width
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your minimum width utility sizes. These can
      | be percentage based, pixels, rems, or any other units. We provide a
      | couple common use-cases by default. You can, of course, modify
      | these values as needed.
      |
      | Class name: .min-w-{size}
      |
      */

      minWidth: {
          '0': '0',
          'full': '100%',
      },


      /*
      |-----------------------------------------------------------------------------
      | Minimum height                      https://tailwindcss.com/docs/min-height
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your minimum height utility sizes. These can
      | be percentage based, pixels, rems, or any other units. We provide a
      | few common use-cases by default. You can, of course, modify these
      | values as needed.
      |
      | Class name: .min-h-{size}
      |
      */

      minHeight: {
          '0': '0',
          'full': '100%',
          'screen': '100vh'
      },


      /*
      |-----------------------------------------------------------------------------
      | Maximum width                        https://tailwindcss.com/docs/max-width
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your maximum width utility sizes. These can
      | be percentage based, pixels, rems, or any other units. By default
      | we provide a sensible rem based scale and a "full width" size,
      | which is basically a reset utility. You can, of course,
      | modify these values as needed.
      |
      | Class name: .max-w-{size}
      |
      */

      maxWidth: {
          xs: '20rem',
          sm: '24rem',
          md: '28rem',
          lg: '32rem',
          xl: '36rem',
          '2xl': '42rem',
          '3xl': '48rem',
          '4xl': '56rem',
          '5xl': '64rem',
          '6xl': '72rem',
          full: '100%',
      },


      /*
      |-----------------------------------------------------------------------------
      | Maximum height                      https://tailwindcss.com/docs/max-height
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your maximum height utility sizes. These can
      | be percentage based, pixels, rems, or any other units. We provide a
      | couple common use-cases by default. You can, of course, modify
      | these values as needed.
      |
      | Class name: .max-h-{size}
      |
      */

      maxHeight: {
          'full': '100%',
          'screen': '100vh',
      },


      /*
      |-----------------------------------------------------------------------------
      | Padding                                https://tailwindcss.com/docs/padding
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your padding utility sizes. These can be
      | percentage based, pixels, rems, or any other units. By default we
      | provide a sensible rem based numeric scale plus a couple other
      | common use-cases like "1px". You can, of course, modify these
      | values as needed.
      |
      | Class name: .p{side?}-{size}
      |
      */

      padding: theme => theme('spacing'),

      /*
      |-----------------------------------------------------------------------------
      | Placeholder
      |-----------------------------------------------------------------------------
      */
      placeholderColor: theme => theme('colors'),

      /*
      |-----------------------------------------------------------------------------
      | Margin                                  https://tailwindcss.com/docs/margin
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your margin utility sizes. These can be
      | percentage based, pixels, rems, or any other units. By default we
      | provide a sensible rem based numeric scale plus a couple other
      | common use-cases like "1px". You can, of course, modify these
      | values as needed.
      |
      | Class name: .m{side?}-{size}
      | For Negative:
      | Class name: .-m{side?}-{size}
      |
      */

      margin: (theme, { negative }) => ({
          auto: 'auto',
          ...theme('spacing'),
          ...negative(theme('spacing')),
      }),

      /*
      |-----------------------------------------------------------------------------
      | Shadows                                https://tailwindcss.com/docs/shadows
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your shadow utilities. As you can see from
      | the defaults we provide, it's possible to apply multiple shadows
      | per utility using comma separation.
      |
      | If a `default` shadow is provided, it will be made available as the non-
      | suffixed `.shadow` utility.
      |
      | Class name: .shadow-{size?}
      |
      */

      boxShadow: {
          default: '0 0px 11px 0 rgba(0,0,0,0.24)',
          'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
          'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
          'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
          'outline': '0 0 0 3px rgba(52,144,220,0.5)',
          'form': '0 0 11px 0 rgba(0,0,0,0.31)',
          'none': 'none',
          'button': '2px 2px 4px 0 #014966',
      },

      /*
      |-----------------------------------------------------------------------------
      | Opacity                                https://tailwindcss.com/docs/opacity
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your opacity utility values. By default we
      | provide a sensible numeric scale. You can, of course, modify these
      | values as needed.
      |
      | Class name: .opacity-{name}
      | If no modification we can just comment out the opacity below
      */
      opacity: {
          '0': '0',
          '25': '.25',
          '50': '.5',
          '75': '.75',
          '100': '1',
      },

      /*
      |-----------------------------------------------------------------------------
      | SVG fill                                   https://tailwindcss.com/docs/svg
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your SVG fill colors. By default we just provide
      | `fill-current` which sets the fill to the current text color. This lets you
      | specify a fill color using existing text color utilities and helps keep the
      | generated CSS file size down.
      |
      | Class name: .fill-{name}
      |
      */

      fill: {
          current: 'currentColor',
          'white': '#fff'
      },


      /*
      |-----------------------------------------------------------------------------
      | SVG stroke                                 https://tailwindcss.com/docs/svg
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your SVG stroke colors. By default we just provide
      | `stroke-current` which sets the stroke to the current text color. This lets
      | you specify a stroke color using existing text color utilities and helps
      | keep the generated CSS file size down.
      |
      | Class name: .stroke-{name}
      |
      */

      stroke: {
          'current': 'currentColor',
      },

      /*
      |-----------------------------------------------------------------------------
      | z-index
      |-----------------------------------------------------------------------------
      */
      zIndex: {
          auto: 'auto',
          '0': '0',
          '10': '10',
          '20': '20',
          '30': '30',
          '40': '40',
          '50': '50',
      },
      inset: {
          '0': '0',
          auto: 'auto',
      },
      extend: {}
    },
    /*
    |-----------------------------------------------------------------------------
    | Varaints                  https://tailwindcss.com/docs/configuration#modules
    |-----------------------------------------------------------------------------
    |
    | Here is where you control which modules are generated and what variants are
    | generated for each of those modules.
    |
    | Currently supported variants:
    |   - responsive
    |   - hover
    |   - focus
    |   - active
    |   - group-hover
    |
    */
    variants: {
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColors: ['responsive', 'group-hover', 'hover', 'focus'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        borderCollapse: [],
        borderColor: ['responsive', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidth: ['responsive'],
        cursor: ['responsive'],
        display: ['responsive'],
        flex: ['responsive'],
        flexDirection: ['responsive'],
        flexWrap: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        justifyContent: ['responsive'],
        alignContent: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        float: [],
        fontFamily: ['responsive'],
        fontWeight: ['responsive'],
        height: ['responsive'],
        lineHeight: ['responsive'],
        listStylePosition: ['responsive'],
        listStyleType: ['responsive'],
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        order: ['responsive'],
        opacity: ['responsive', 'group-hover', 'hover', 'focus'],
        outline: ['focus'],
        overflow: ['responsive'],
        padding: ['responsive'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        inset: ['responsive'],
        resize: ['responsive'],
        boxShadow: ['responsive'],
        fill: ['hover', 'group-hover'],
        stroke: [],
        tableLayout: ['responsive'],
        textAlign: ['responsive'],
        textColor: ['responsive', 'hover', 'hover', 'focus'],
        fontSize: ['responsive'],
        fontStyle: ['responsive'],
        fontSmoothing: [],
        textDecoration: ['hover'],
        textTransform: [],
        letterSpacing: ['responsive'],
        userSelect: ['responsive'],
        verticalAlign: ['responsive'],
        visibility: ['responsive', 'group-hover', 'hover', 'focus'],
        whitespace: [],
        wordBreak: [],
        width: ['responsive'],
        zIndex: ['responsive'],
    },
    plugins: [
        require('tailwindcss-transforms')({
            '3d': false, // defaults to false
        }),
    ]
}
