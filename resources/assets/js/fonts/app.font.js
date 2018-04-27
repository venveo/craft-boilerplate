// This is a definition for the icon font pack for this website
// Requiring this in a javascript entrypoint will allow webpack to compile
// the font using the parameters below.
module.exports = {
    'files': [
        '../../images/appicons/*.svg'
    ],
    'fontName': 'appicons',
    'classPrefix': 'appicon-',
    'baseSelector': '.appicon',
    'types': ['eot', 'woff', 'woff2', 'ttf', 'svg'],
    'fileName': './fonts/appicons/[fontname].[hash].[ext]'
}
