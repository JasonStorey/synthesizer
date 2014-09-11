module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            dev: {
                options: {
                    baseUrl: 'src/',
                    name: '../node_modules/almond/almond',
                    include: ['main'],
                    out: 'dist/synth.js',
                    optimize: 'none',
                    cjsTranslate: true,
                    wrapShim: true,
                    wrap: {
                        startFile: 'src/start.frag',
                        endFile: 'src/end.frag'
                    }
                }
            }
        }
    });

    grunt.registerTask('default', ['requirejs:dev']);
};