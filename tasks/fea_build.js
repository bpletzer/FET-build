/*
 * grunt-fea-build
 * https://github.com/bpletzer/FET-build-dep
 *
 * Copyright (c) 2013 Benedikt Pletzer
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  //grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('build', "Build is listening for args", function (target) {

    grunt.config(
      'connect', {
      server: {
        base: '.',
        keepalive: true,
        port: 9000,
        host: 'fed.cxo.name'
      }
    }
  );

    grunt.config('htmlcompressor',
       {
      dist: {
        files: {
          'src/_index.html': 'src/index.html'
        },
        options: {
          type: 'html',
          'compress-js': true
        }
      }
    })
    

    console.log(grunt.config())
    grunt.task.run('htmlcompressor')
  });
/*
  grunt.registerMultiTask('fea_build', 'Your task description goes here.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });
*/

};
