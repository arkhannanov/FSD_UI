const faviconsContext = require.context(
    '!!file-loader?name=./img/favicons/[name].[ext]!.',
    true,
    /\.(svg|png|ico|xml|json)$/
  );
  console.log('Работает ФавИкон');
  faviconsContext.keys().forEach(faviconsContext);