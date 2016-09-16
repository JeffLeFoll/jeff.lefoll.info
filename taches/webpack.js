'use strict';

module.exports = function(grunt) {

  let _ = require('lodash');
  let webpack = require('webpack');

  grunt.registerTask('webpack', function() {
    const compiler = webpack(makeConfig(grunt.config('prod')));
    let done = this.async();
    if (grunt.option('watch')) {
      compiler.watch({}, logResult(_.noop));
    }
    else {
      compiler.run(logResult(done));
    }
  });

  function logResult(callback) {
    return (err, stats) => {
      if (stats.hasError) {
        grunt.log.writeln(stats.toString({
          colors: true
        }));
      }
      else {
        grunt.log.ok(stats.toString({
          colors: true
        }));
      }
      callback();
    }
  }

  function makeConfig(prod) {
    let path = require('path'),
      ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      autoprefixer = require('autoprefixer');

    const APP = path.join(grunt.config('srcDir'));
    const BUILD = path.join(grunt.config('buildDir'));
    var configuration = {
      context: APP,
      entry: {
        app: './js/app.js',
        extlibs: [
            "!!script!jquery/dist/jquery.min.js",
            "angular",
            "lodash",
            "!!script!foundation-sites/dist/foundation.min.js"
        ]
      },
      output: {
        path: BUILD,
        filename: makeName('[name]'),
        publicPath: '/app/',
        chunkFilename: makeName('[id].[name]')
      },
      module: {
        loaders: [{
          test: /\.jsx?$/,
          loader: 'babel',
          exclude: /node_modules/
        }, 
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css!sass')
        },
        {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=./css/[hash].[ext]'},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=./css/[hash].[ext]'},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=./css/[hash].[ext]'},
        {test: /\.(jpg)$/, loader: 'file?name=../static/img/[hash].[ext]'}
        ]
      },
      postcss: [autoprefixer],
      plugins: [
        new webpack.optimize.CommonsChunkPlugin('extlibs', makeName('extlibs'), Infinity),
        new ngAnnotatePlugin({
          add: true
        }),
        new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery'
        }),
        new ExtractTextPlugin('css/[name].css')
      ]
    };
    if (prod) {
      configuration.plugins.push(new webpack.optimize.UglifyJsPlugin());
    }

    return configuration;

    function makeName(name, extension) {
      extension = extension || 'js';
      return prod ? `${name}.[chunkhash].${extension}` : `${name}.${extension}`;
    }
  }

};
