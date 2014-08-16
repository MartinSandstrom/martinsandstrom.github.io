module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files:['js/*.js', '!js/scripts.min.js'],
                tasks: ['uglify']   
            },
            css: {
                files: ['css/*.css', '!css/styles.min.css'],
                tasks: ['cssmin']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>',
                    port: '<%= connect.options.port %>',
                    hostname: 'localhost'
                },
                files: [
                    '*.html',
                    'css/*.css',
                    'js/**/*.js'
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
        },
        uglify: {
            my_target: {
                files: {
                    'js/scripts.min.js': ['js/vendor/*.js', 'js/plugins.js', 'js/main.js']
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'css/styles.min.css': ['css/bootstrap-theme.css', 'css/override-bootstrap.css', 'css/main.css']
                }
            }
        }
    });
    grunt.registerTask('default', ['cssmin', 'uglify', 'connect','watch']);
};