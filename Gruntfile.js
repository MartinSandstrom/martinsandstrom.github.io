module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js:{
                files: ['**/*.js'],
                tasks: [],    
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            css: {
                files: ['**/*.css'],
                tasks: [],
                options: {
                  livereload: '<%= connect.options.livereload %>'
                }   
            },
            html: {
                files: ['**/*.html'],
                tasks: [],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>',
                    port: 9000,
                    livereload: 35729,
                    hostname: 'localhost'
                },
                files: [
                    '**/*.html',
                    '**/*.css',
                    '**/*.js'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');


    grunt.registerTask('default', ['connect','watch']);
};