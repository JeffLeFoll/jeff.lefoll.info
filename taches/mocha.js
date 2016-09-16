'use strict';

module.exports = function (grunt) {

    var _ = require('lodash');
    var tests ='./s*/**/*_spec.js'

    grunt.registerTask('mocha:ci', function () {
        run('xunit', this.async());
    });

    grunt.registerTask('mocha:console', function () {
        run('dot', this.async());
    });

    function run(reporter, done) {
        grunt.util.spawn({
            cmd: './node_modules/.bin/_mocha.cmd',
            // cmd: './node_modules/mocha/bin/mocha',
            args: _.extend(['--compilers', 'js:babel-register', '--reporter', reporter, tests]),
            opts: {
              stdio : 'inherit'
            },
            grunt: false
        }, done);
    }
};
