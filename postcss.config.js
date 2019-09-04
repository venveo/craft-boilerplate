module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-flexbugs-fixes'),
        require('tailwindcss')({config: './tailwind.config.js'}),
        require('postcss-pxtorem')({
            // propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
            propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'width', 'height', 'max-width', 'min-width', 'max-height', 'min-height', 'margin-top', 'margin-left', 'margin-bottom', 'margin-right', 'padding-top', 'padding-left', 'padding-bottom', 'padding-right'],
        }),
        require('postcss-preset-env')({
            autoprefixer: { grid: true },
            features: {
                'nesting-rules': true
            }
        }),
        require('postcss-font-magician')({
            display: 'swap',
            formats: 'local woff2 woff eot ttf',
            // Google fonts
            variants: {
                'Lato': {
                    '100': ['woff, eot, woff2, truetype'],
                    '300': ['woff, eot, woff2, truetype'],
                    '400': ['woff, eot, woff2, truetype'],
                    '700': ['woff, eot, woff2, truetype'],
                    '900': ['woff, eot, woff2, truetype']
                },
                'Roboto': {
                    '100': ['woff, eot, woff2, truetype'],
                    '300': ['woff, eot, woff2, truetype'],
                    '400': ['woff, eot, woff2, truetype'],
                    '500': ['woff, eot, woff2, truetype'],
                    '700': ['woff, eot, woff2, truetype'],
                    '900': ['woff, eot, woff2, truetype']
                }
            },
            // Font-face
            custom: {
                // 'Geogrotesque': {
                //     variants: {
                //         normal: {
                //             400: {
                //                 url: {
                //                     woff: './src/fonts/Geogrotesque-Regular.woff',
                //                     woff2: './src/fonts/Geogrotesque-Regular.woff2',
                //                     eot: './src/fonts/Geogrotesque-Regular.eot',
                //                     ttf: './src/fonts/Geogrotesque-Regular.ttf',
                //                 }
                //             },
                //             500: {
                //                 url: {
                //                     woff: './src/fonts/Geogrotesque-Medium.woff',
                //                     woff2: './src/fonts/Geogrotesque-Medium.woff2',
                //                     eot: './src/fonts/Geogrotesque-Medium.eot',
                //                     ttf: './src/fonts/Geogrotesque-Medium.ttf',
                //                 }
                //             },
                //             600: {
                //                 url: {
                //                     woff: './src/fonts/Geogrotesque-SemiBold.woff',
                //                     woff2: './src/fonts/Geogrotesque-SemiBold.woff2',
                //                     eot: './src/fonts/Geogrotesque-SemiBold.eot',
                //                     ttf: './src/fonts/Geogrotesque-SemiBold.ttf',
                //                 }
                //             }
                //         }
                //     }
                // },
                //...
            }
        })
    ]
};
