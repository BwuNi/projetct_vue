const 
    ExtractTextPlugin = function(){},//require('extract-text-webpack-plugin'),
    extractTextPlugin = new ExtractTextPlugin({
        filename: "[name].[contenthash].css",
        disable: false
    });

const generateLoaders = (
    loader, 
    { loaderOption = {}, cssOption = {}, procssOption , extract = false } = {}
) => {

    let loaders = [{
        loader:'css-loader',
        options: Object.assign(
            {},  
            //{ minimize: true, sourceMap: true },
            cssOption
        )
    }]

    
    if(procssOption){
        loaders.push({
            loader: 'postcss-loader',
            options: Object.assign(
                {},
               // { sourceMap:true }, 
                procssOption
            )
        })
    }

    if (loader && loader!='css') {
        loaders.push({
            loader: loader + '-loader',
            options: Object.assign(
                {}, 
              //  { sourceMap: true}, 
                loaderOption
            )
        })
    }


    if (extract) {
        return extractTextPlugin.extract({
          use: loaders,
          fallback: 'style-loader'
        })
      } else {
        return ['style-loader'].concat(loaders)
      }
}

exports.cssLoaders = {
    css: {},
    less:{},
    // sass: { indentedSyntax: true },
    // scss: {}
}

module.exports = (
    {
        css = {}, // css 设置
        postcss,// postcss 设置
        extract = false,// 是否使用 ExtractTextPlugin
    } = {}
) => {

    let output = [],
        loaders = exports.cssLoaders

    for (let extension in loaders) {
      
        let loader = generateLoaders(extension,{
            loaderOption:loaders[extension],
            cssOption:css,
            procssOption:postcss,
            extract
        })
      
      output.push({
        test: new RegExp('\\.' + extension + '$'),
        use: loader
      })
    }
    return output
  }