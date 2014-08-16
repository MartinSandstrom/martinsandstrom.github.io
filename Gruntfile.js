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
                tasks: ['cssmin', 'uncss']
            },
            html: {
                files: ['index.html'],
                tasks: ['uncss']
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
                    'css/styles.min.css': ['bower_components/font-awesome/css/font-awesome.min.css','css/bootstrap-theme.css', 'css/override-bootstrap.css', 'css/main.css']
                }
            }
        },
        uncss: {
           dist: {
               files: {
                  'css/styles.min.css': ['index.html']
               }
           }
        }
    });
    grunt.registerTask('default', ['cssmin', 'uglify','uncss', 'connect','watch']);
};