module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            main: {
                options: {
                    process: function (content, srcpath) {
                        return content.replace("script/production.js","script/production.min.js");

                    },
                    noProcess: ['*/*/*.{png,gif,jpg,ico}', '*/*.{png,gif,jpg,ico}']
                },
                files: [
                    {src: ['index.html'], dest: 'build/'},
                    {src: ['styles/main.css'], dest: 'build/'},
                    {src: ['components/*/*.html'], dest: 'build/'},
                    {src: ['script/production.min.js'], dest: 'build/'},
                    {src: ['img/*'], dest: 'build/'},
                    {src: ['mocks/*'], dest: 'build/'}
                ]
            }
        },

        clean: {
            build: {
                src: [ 'build' ]
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'styles/main.css': 'styles/main.scss'
                }
            }
        },

        watch: {
            css: {
                files: ['styles/*.scss', 'styles/*/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },


            scripts: {
                files: ['app.js', 'components/*/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false,
                }
            }
        },


        concat: {
            dist: {
                src: [
                    "vendor/angular/angular.min.js",
                    "vendor/angular-route/angular-route.min.js",
                    "app.js",
                    "components/nav/navCtrl.js",
                    "components/skills/skillsCtrl.js"
                ],
                dest: 'script/production.js'
            }

        },

        uglify: {
            build: {
                src: 'script/production.js',
                dest: 'script/production.min.js'
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', [
        'watch'
    ]);

    grunt.registerTask('build',[ 'clean', 'uglify', 'copy']);

};