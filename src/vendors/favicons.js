const faviconsContext = require.context(
    '!!file-loader?name=./image/favicons/[name].[ext]!.',
    true,
    /\.(svg|png|ico|xml|json)$/
);

faviconsContext.keys().forEach(faviconsContext);