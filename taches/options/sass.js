module.exports = {
    dist: {
      options: {
          loadPath: ['node_modules/foundation-sites/scss']
      },
      files: [{
        expand: true,
        cwd: 'src/sass',
        src: ['*.scss'],
        dest: '<%= buildDir %>/css',
        ext: '.css'
      }]
    }
  }